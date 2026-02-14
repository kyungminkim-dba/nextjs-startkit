# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 + FastAPI 모노레포 스타터킷. 두 개의 독립 애플리케이션으로 구성:
- **`frontend/`** — Next.js 16 (App Router, React 19, TypeScript strict, Tailwind CSS v4, shadcn/ui)
- **`backend/`** — FastAPI (Pydantic v2, pydantic-settings, Uvicorn)

통신: 프론트엔드가 axios + TanStack Query v5로 백엔드 REST API 호출. Next.js API Routes 사용하지 않음.

## 명령어

### Frontend (`frontend/` 디렉토리에서 실행)
```bash
npm run dev        # Turbopack 개발 서버 (포트 3000)
npm run build      # 프로덕션 빌드 (TypeScript 검사 포함)
npm run start      # 프로덕션 서버
npm run lint       # ESLint (v9 flat config, next/core-web-vitals + typescript)
npm run format     # Prettier (semi: false, singleQuote: true, tabWidth: 2, trailingComma: "es5", tailwindcss 플러그인)
```

### Backend (`backend/` 디렉토리에서 실행)
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload   # 개발 서버 (포트 8000, Swagger UI: /docs)
```

### 환경변수
- `frontend/.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1`
- `backend/.env`: `APP_NAME`, `CORS_ORIGINS`, `DEBUG`
- `.env.example` 파일이 frontend/backend 각각에 존재

## 아키텍처

### 4계층 컴포넌트 시스템 (frontend)

| 계층 | 디렉토리 | 배치 기준 |
|------|---------|----------|
| Tier 1 - Primitives | `components/ui/` | shadcn/ui 컴포넌트 (`npx shadcn@latest add <이름>`으로 설치). 직접 수정 주의 |
| Tier 2 - Composites | `components/composites/` | Tier 1을 2~3개 조합 (예: PasswordInput = Input + Eye 토글) |
| Tier 3 - Patterns | `components/patterns/` | 페이지 섹션 단위 (예: SiteHeader, AppSidebar, AuthCard) |
| Tier 4 - Layouts | `app/(group)/layout.tsx` | 라우트 그룹 레이아웃 |

Tier 1-2에 비즈니스 로직 넣지 않기. `theme-toggle.tsx`는 예외적으로 `components/` 루트에 위치.

### 3종 라우트 그룹 레이아웃

| 그룹 | URL 패턴 | 레이아웃 구조 |
|------|---------|-------------|
| `(marketing)/` | `/`, `/docs/**`, `/examples/**` | SiteHeader + main + SiteFooter |
| `(dashboard)/` | `/dashboard`, `/dashboard/settings` | SidebarProvider + AppSidebar + SidebarInset |
| `(auth)/` | `/login`, `/register` | 중앙 정렬 flex 컨테이너 |

### Providers 체인 (Root Layout)

```
ThemeProvider (attribute="class", defaultTheme="system")
  → QueryProvider (staleTime: 60s, refetchOnWindowFocus: false)
    → AuthProvider (useSyncExternalStore + localStorage)
      → TooltipProvider
        → {children} + Toaster
```

### 인증 구조

- **AuthProvider**: `useSyncExternalStore`로 localStorage 외부 스토어 동기화. 키: `auth_user`, `auth_token`
- **useAuth 훅**: AuthContext 소비 (user, login, logout). Provider 밖에서 사용 시 에러 throw
- **인증 페이지는 UI만**: 실제 인증 백엔드 연동 없음. 폼 제출 시 localStorage 저장 + 토스트 + 리다이렉트만 수행
- **axios 인터셉터**: 요청 시 `auth_token` 자동 주입, 401 응답 시 `/login` 리다이렉트

### API 연동 패턴

1. `lib/api/endpoints.ts`에 엔드포인트 상수 정의
2. `lib/api/types.ts`에 응답 타입 추가
3. `hooks/api/index.ts`에 React Query 훅 작성 (`lib/api/client.ts`의 `apiGet<T>()` / `apiPost<T>()` / `apiPut<T>()` / `apiDelete<T>()` 사용)
4. `'use client'` 페이지 컴포넌트에서 훅 사용

### 폼 패턴

react-hook-form + zod v4 + shadcn Form 컴포넌트 조합:
```tsx
const schema = z.object({ ... })
const form = useForm({ resolver: zodResolver(schema) })
// <Form>, <FormField>, <FormControl>, <FormLabel>, <FormMessage> 사용
```
주의: zod v4에서 스키마 필드에 `.default()` 사용 시 @hookform/resolvers와 타입 불일치 발생. `defaultValues`에서 기본값 설정할 것.

### 백엔드 패턴

- 설정: `app/core/config.py` (pydantic-settings, `.env` 읽기)
- 라우트: `app/routers/<이름>.py` (APIRouter, `app/main.py`에서 `/api/v1` 접두사로 등록)
- 스키마: `app/schemas/` (Pydantic v2 모델)
- 서비스: `app/services/` (비즈니스 로직)
- 포매터 설정: `pyproject.toml`에 Black (line-length: 100) + isort (profile: black) 설정 있음

## 핵심 컨벤션

- **경로 별칭:** `@/`는 `frontend/src/`에 매핑
- **shadcn 스타일:** new-york, 기본 색상 neutral, CSS 변수 사용
- **설정 중앙화:** 사이트명, 네비게이션, 소셜 링크 모두 `lib/constants.ts`에서 관리
- **CSS:** Tailwind v4 — `tailwind.config` 파일 없음. `@tailwindcss/postcss` 플러그인 + `globals.css`의 `@import "tailwindcss"` / `@theme inline` 블록으로 구성. `@tailwind` 디렉티브 사용하지 않음
- **globals.css imports:** `tailwindcss` → `tw-animate-css` → `shadcn/tailwind.css` 순서. `@custom-variant dark` 정의. oklch 색상 변수
- **cn() 유틸리티:** `lib/utils.ts` — 조건부/병합 Tailwind 클래스에 항상 `cn()` 사용
- **폰트:** Geist Sans (`--font-geist-sans`) + Geist Mono (`--font-geist-mono`), `next/font/google`
- **Metadata:** 루트 레이아웃에서 `SITE_CONFIG` 기반 OpenGraph/Twitter Card 설정. 페이지별 제목은 `%s | SiteName` 템플릿

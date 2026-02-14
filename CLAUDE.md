# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 구조

두 개의 독립 애플리케이션으로 구성된 모노레포:
- **`frontend/`** — Next.js 16 (App Router, TypeScript strict, Tailwind CSS v4, shadcn/ui)
- **`backend/`** — FastAPI (Pydantic v2, pydantic-settings, Uvicorn)

통신: 프론트엔드가 axios + TanStack Query v5로 백엔드 API 호출. Next.js API Routes 사용하지 않음.

## 명령어

### Frontend (`frontend/` 디렉토리에서 실행)
```bash
npm run dev        # Turbopack 개발 서버 (포트 3000)
npm run build      # 프로덕션 빌드 (TypeScript 검사 포함)
npm run start      # 프로덕션 서버
npm run lint       # ESLint
npm run format     # Prettier (semi: false, singleQuote: true, tailwind 플러그인)
```

### Backend (`backend/` 디렉토리에서 실행)
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload   # 개발 서버 (포트 8000)
```

### 환경변수
- `frontend/.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1`
- `backend/.env`: `APP_NAME`, `CORS_ORIGINS`, `DEBUG`

## 아키텍처

### 4계층 컴포넌트 시스템 (frontend)

| 계층 | 디렉토리 | 배치 기준 |
|------|---------|----------|
| Tier 1 - Primitives | `components/ui/` | shadcn/ui 컴포넌트 (`npx shadcn@latest add <이름>`으로 설치) |
| Tier 2 - Composites | `components/composites/` | Tier 1을 2~3개 조합 (예: PasswordInput = Input + Eye 토글) |
| Tier 3 - Patterns | `components/patterns/` | 페이지 섹션 단위 (예: SiteHeader, AppSidebar, AuthCard) |
| Tier 4 - Layouts | `app/(group)/layout.tsx` | 라우트 그룹 레이아웃 |

새 컴포넌트 추가 시 올바른 계층에 배치할 것. Tier 1-2에 비즈니스 로직 넣지 않기.

### 3종 라우트 그룹 레이아웃

| 그룹 | URL 패턴 | 레이아웃 구조 |
|------|---------|-------------|
| `(marketing)/` | `/`, `/about`, `/features` | SiteHeader + main + SiteFooter |
| `(dashboard)/` | `/dashboard`, `/dashboard/settings` | SidebarProvider + AppSidebar + SidebarInset |
| `(auth)/` | `/login`, `/register` | 중앙 정렬 flex 컨테이너 |

### API 연동 패턴

1. `lib/api/endpoints.ts`에 엔드포인트 상수 정의
2. `lib/api/types.ts`에 응답 타입 추가
3. `hooks/api/index.ts`에 React Query 훅 작성 (`lib/api/client.ts`의 `apiGet<T>()`/`apiPost<T>()` 사용)
4. `'use client'` 페이지 컴포넌트에서 훅 사용

axios 클라이언트(`lib/api/client.ts`)에 인증 토큰 자동 주입 + 401 리다이렉트 인터셉터 내장.

### 폼 패턴

react-hook-form + zod + shadcn Form 컴포넌트 조합:
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

## 핵심 컨벤션

- **경로 별칭:** `@/`는 `frontend/src/`에 매핑
- **shadcn 스타일:** new-york, 기본 색상 neutral, CSS 변수 사용
- **설정 중앙화:** 사이트명, 네비게이션, 소셜 링크 모두 `lib/constants.ts`에서 관리
- **인증 페이지는 UI만:** 실제 인증 로직 없음. 폼 제출 시 토스트 + 리다이렉트만 수행
- **CSS:** Tailwind v4의 `@import "tailwindcss"` 문법 사용 (`@tailwind` 디렉티브 아님). 테마는 `globals.css`의 oklch 색상 변수 사용
- **Providers 체인:** Root Layout에서 ThemeProvider → QueryProvider → TooltipProvider → Toaster 순서로 래핑
- **cn() 유틸리티:** `lib/utils.ts` — 조건부/병합 Tailwind 클래스에 항상 `cn()` 사용

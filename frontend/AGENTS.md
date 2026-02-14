<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# frontend

## 목적
Next.js 16 기반 프론트엔드 앱. App Router, TypeScript strict 모드, Tailwind CSS v4, shadcn/ui를 사용한다. 4계층 컴포넌트 시스템과 3종 라우트 그룹 레이아웃으로 구성된다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `package.json` | 의존성 및 스크립트 (dev, build, lint, format) |
| `next.config.ts` | Next.js 설정 |
| `tsconfig.json` | TypeScript 설정 (`@/` 경로 별칭 포함) |
| `components.json` | shadcn/ui 설정 (new-york 스타일, neutral 색상) |
| `eslint.config.mjs` | ESLint 설정 |
| `.prettierrc.json` | Prettier 설정 (semi: false, singleQuote: true) |
| `postcss.config.mjs` | PostCSS 설정 (Tailwind v4) |
| `.env.local` | 환경변수 (`NEXT_PUBLIC_API_URL`) |
| `.env.example` | 환경변수 템플릿 |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `src/` | 소스 코드 루트 (`src/AGENTS.md` 참조) |
| `public/` | 정적 에셋 (SVG 아이콘) |

## AI 에이전트 안내

### 작업 시 주의사항
- 이 디렉토리에서 명령어 실행: `cd frontend`
- `@/`는 `src/`에 매핑됨
- shadcn 컴포넌트 추가: `npx shadcn@latest add <이름>`
- CSS는 Tailwind v4 문법 (`@import "tailwindcss"`)

### 테스트 요구사항
- `npm run build` - 프로덕션 빌드 (TypeScript 검사 포함)
- `npm run lint` - ESLint 검사
- `npm run dev` - 개발 서버 (포트 3000, Turbopack)

### 공통 패턴
- Providers 체인: ThemeProvider → QueryProvider → AuthProvider → TooltipProvider → Toaster
- 조건부 Tailwind 클래스: 항상 `cn()` 유틸리티 사용
- 폼: react-hook-form + zod + shadcn Form 컴포넌트 조합

## 의존성

### 외부
- `next@16.1.6` - React 풀스택 프레임워크
- `react@19.2.3` / `react-dom@19.2.3` - UI 라이브러리
- `@tanstack/react-query@5` - 서버 상태 관리
- `axios` - HTTP 클라이언트
- `react-hook-form` + `zod` + `@hookform/resolvers` - 폼 관리
- `tailwindcss@4` + `tailwind-merge` + `clsx` - 스타일링
- `radix-ui` - 헤드리스 UI 프리미티브
- `lucide-react` - 아이콘
- `next-themes` - 다크모드
- `sonner` - 토스트 알림
- `date-fns` - 날짜 유틸리티

<!-- MANUAL: -->

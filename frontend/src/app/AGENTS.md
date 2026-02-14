<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# app

## 목적
Next.js App Router 기반 라우트 디렉토리. 3종 라우트 그룹 레이아웃으로 페이지를 분류하며, 루트 레이아웃에서 전역 프로바이더를 설정한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `layout.tsx` | 루트 레이아웃 - 폰트, 메타데이터, 프로바이더 체인 (ThemeProvider → QueryProvider → AuthProvider → TooltipProvider) |
| `globals.css` | 전역 CSS - Tailwind v4 import, oklch 색상 변수, 다크모드 테마 |
| `not-found.tsx` | 404 페이지 |
| `favicon.ico` | 파비콘 |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `(marketing)/` | 마케팅 페이지 - SiteHeader + main + SiteFooter 레이아웃 (`(marketing)/AGENTS.md` 참조) |
| `(dashboard)/` | 대시보드 페이지 - Sidebar + SidebarInset 레이아웃 (`(dashboard)/AGENTS.md` 참조) |
| `(auth)/` | 인증 페이지 - 중앙 정렬 컨테이너 레이아웃 (`(auth)/AGENTS.md` 참조) |

## AI 에이전트 안내

### 작업 시 주의사항
- 새 페이지 추가 시 적절한 라우트 그룹에 배치
- 루트 레이아웃의 프로바이더 순서 변경 금지
- `globals.css`의 테마 변수는 oklch 색상 체계 사용

### 공통 패턴
- 라우트 그룹 `(group)`은 URL 경로에 영향 없음
- 각 그룹의 `layout.tsx`가 해당 그룹 전용 레이아웃 정의
- 서버 컴포넌트가 기본, 클라이언트 로직 필요 시 `'use client'` 추가

## 의존성

### 내부
- `@/components/providers/` - ThemeProvider, QueryProvider, AuthProvider
- `@/components/ui/tooltip` - TooltipProvider
- `@/components/ui/sonner` - Toaster
- `@/lib/constants` - SITE_CONFIG (메타데이터용)

<!-- MANUAL: -->

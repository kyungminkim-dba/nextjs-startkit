<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# (dashboard)

## 목적
대시보드 라우트 그룹. SidebarProvider + AppSidebar + SidebarInset 레이아웃을 공유한다. 인증된 사용자 전용 페이지를 포함한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `layout.tsx` | SidebarProvider + AppSidebar + SidebarInset 래핑 레이아웃 |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `dashboard/` | 대시보드 메인 (`/dashboard`) - API 헬스체크, 통계 오버뷰, 빠른 시작 가이드 |
| `dashboard/settings/` | 설정 페이지 (`/dashboard/settings`) - 프로필 폼 (react-hook-form + zod) |

## AI 에이전트 안내

### 작업 시 주의사항
- 대시보드 페이지는 `'use client'` 필수 (API 호출, 상태 관리)
- 각 페이지 상단에 DashboardHeader + Breadcrumb 패턴 사용
- 새 대시보드 페이지 추가 시 `AppSidebar`의 SIDEBAR_ITEMS에도 추가

### 공통 패턴
- DashboardHeader → 콘텐츠 카드 그리드 구조
- react-hook-form + zod 스키마로 폼 검증
- `useHealthCheck()` 훅으로 API 상태 확인

## 의존성

### 내부
- `@/components/patterns/app-sidebar` - 사이드바 네비게이션
- `@/components/patterns/dashboard-header` - 대시보드 헤더 + 브레드크럼
- `@/components/patterns/stats-overview` - 통계 카드 그리드
- `@/components/ui/sidebar` - SidebarProvider, SidebarInset
- `@/hooks/api` - useHealthCheck

<!-- MANUAL: -->

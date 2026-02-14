<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# providers

## 목적
React Context 기반 전역 프로바이더. 루트 레이아웃에서 체인으로 래핑되어 앱 전체에 테마, 서버 상태, 인증 상태를 제공한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `theme-provider.tsx` | next-themes 래퍼 - 다크/라이트/시스템 테마 전환 |
| `query-provider.tsx` | TanStack Query 클라이언트 설정 (staleTime: 60초, refetchOnWindowFocus: false) |
| `auth-provider.tsx` | localStorage 기반 인증 상태 관리 (useSyncExternalStore 사용, login/logout 함수 제공) |

## AI 에이전트 안내

### 작업 시 주의사항
- 모든 프로바이더는 `'use client'` 필수
- 래핑 순서: ThemeProvider → QueryProvider → AuthProvider (루트 레이아웃 참조)
- 새 프로바이더 추가 시 `app/layout.tsx` 체인에 추가

### 공통 패턴
- AuthProvider: `useSyncExternalStore` + localStorage 외부 스토어 패턴
- QueryProvider: `useState(() => new QueryClient(...))`로 클라이언트 인스턴스 생성
- ThemeProvider: next-themes의 NextThemesProvider 래핑

## 의존성

### 내부
- `@/types` - User 타입 (AuthProvider)

### 외부
- `next-themes` - 테마 관리
- `@tanstack/react-query` - 서버 상태 관리

<!-- MANUAL: -->

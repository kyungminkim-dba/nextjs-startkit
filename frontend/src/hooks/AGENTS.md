<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# hooks

## 목적
커스텀 React 훅 모음. 범용 유틸리티 훅과 API 데이터 페칭 훅을 포함한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `use-auth.ts` | AuthContext 소비 훅 (user, login, logout 반환) |
| `use-mobile.ts` | 모바일 뷰포트 감지 (768px 기준, shadcn/ui 표준) |
| `use-media-query.ts` | 미디어 쿼리 매칭 (useSyncExternalStore 기반, SSR 안전) |
| `use-mounted.ts` | 클라이언트 마운트 여부 감지 (하이드레이션 안전) |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `api/` | TanStack Query 기반 API 데이터 페칭 훅 (`api/AGENTS.md` 참조) |

## AI 에이전트 안내

### 작업 시 주의사항
- 범용 훅은 이 디렉토리에, API 훅은 `api/`에 배치
- SSR 호환: `useSyncExternalStore`로 서버/클라이언트 스냅샷 분리
- `use-mobile.ts`는 shadcn/ui에서 제공하는 표준 훅 (수정 주의)

### 공통 패턴
- `'use client'` 디렉티브 (클라이언트 전용 훅)
- `useSyncExternalStore` (SSR 안전한 외부 스토어 동기화)
- 훅 이름은 `use-` 접두사

## 의존성

### 내부
- `@/components/providers/auth-provider` - AuthContext

<!-- MANUAL: -->

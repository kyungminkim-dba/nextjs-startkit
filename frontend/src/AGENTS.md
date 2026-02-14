<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# src

## 목적
프론트엔드 소스 코드 루트. Next.js App Router 기반 페이지, 4계층 컴포넌트, 커스텀 훅, 유틸리티, 타입 정의를 포함한다.

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `app/` | Next.js App Router 라우트 및 레이아웃 (`app/AGENTS.md` 참조) |
| `components/` | 4계층 컴포넌트 시스템 (`components/AGENTS.md` 참조) |
| `hooks/` | 커스텀 React 훅 (`hooks/AGENTS.md` 참조) |
| `lib/` | 유틸리티 함수 및 API 클라이언트 (`lib/AGENTS.md` 참조) |
| `types/` | TypeScript 타입 정의 (`types/AGENTS.md` 참조) |

## AI 에이전트 안내

### 작업 시 주의사항
- import 시 `@/` 별칭 사용 (예: `@/components/ui/button`)
- 파일 추가 시 올바른 디렉토리 계층에 배치
- `'use client'` 디렉티브는 클라이언트 상태/이벤트 사용 시에만 추가

<!-- MANUAL: -->

<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# lib

## 목적
유틸리티 함수, API 클라이언트, 앱 전역 상수를 포함하는 라이브러리 디렉토리.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `utils.ts` | `cn()` 함수 - clsx + tailwind-merge 조합 (조건부 Tailwind 클래스 병합) |
| `constants.ts` | 사이트 설정 (SITE_CONFIG), 네비게이션 (NAV_ITEMS, DASHBOARD_NAV_ITEMS), 소셜 링크 (SOCIAL_LINKS) |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `api/` | axios API 클라이언트 및 엔드포인트/타입 정의 (`api/AGENTS.md` 참조) |

## AI 에이전트 안내

### 작업 시 주의사항
- `cn()` 함수는 모든 컴포넌트에서 조건부 클래스에 사용할 것
- `constants.ts`에서 사이트명, 네비게이션, 소셜 링크를 중앙 관리
- 새 유틸리티 추가 시 이 디렉토리에 배치

## 의존성

### 외부
- `clsx` - 조건부 클래스 결합
- `tailwind-merge` - Tailwind 클래스 충돌 해결

<!-- MANUAL: -->

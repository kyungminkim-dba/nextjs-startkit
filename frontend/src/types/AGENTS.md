<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# types

## 목적
프론트엔드 전역 TypeScript 타입 정의. 도메인 모델과 공통 인터페이스를 포함한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `index.ts` | `User` (id, name, email, avatar?), `NavItem` (title, href, icon?) 인터페이스 |

## AI 에이전트 안내

### 작업 시 주의사항
- API 응답 타입은 `lib/api/types.ts`에, 도메인 모델은 여기에 정의
- 컴포넌트 전용 타입은 해당 컴포넌트 파일에 인라인 정의
- 여러 모듈에서 공유하는 타입만 이 디렉토리에 배치

<!-- MANUAL: -->

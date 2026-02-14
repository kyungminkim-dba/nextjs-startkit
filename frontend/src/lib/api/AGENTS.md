<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# api

## 목적
백엔드 API 통신 계층. axios 클라이언트, 엔드포인트 상수, 응답 타입을 정의한다. 인증 토큰 자동 주입과 401 리다이렉트 인터셉터를 내장한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `client.ts` | axios 인스턴스 (baseURL, 인증 토큰 인터셉터, 401 리다이렉트), `apiGet<T>()`, `apiPost<T>()`, `apiPut<T>()`, `apiDelete<T>()` 제네릭 함수 |
| `endpoints.ts` | API 엔드포인트 상수 (`API_ENDPOINTS.HEALTH` 등) |
| `types.ts` | API 응답 타입 (`ApiResponse<T>`, `HealthCheckResponse`) |

## AI 에이전트 안내

### 작업 시 주의사항
- baseURL: `NEXT_PUBLIC_API_URL` 환경변수 (기본값: `http://localhost:8000/api/v1`)
- 요청 인터셉터: localStorage의 `auth_token`을 Bearer 헤더에 자동 주입
- 응답 인터셉터: 401 상태 시 `/login`으로 리다이렉트
- 새 API 연동 추가 순서: endpoints → types → hooks/api

### 공통 패턴
```typescript
// 1. endpoints.ts에 상수 추가
export const API_ENDPOINTS = { HEALTH: '/health', USERS: '/users' }

// 2. types.ts에 타입 추가
export interface UserResponse { id: string; name: string }

// 3. hooks/api/index.ts에서 사용
apiGet<UserResponse>(API_ENDPOINTS.USERS)
```

## 의존성

### 외부
- `axios` - HTTP 클라이언트

<!-- MANUAL: -->

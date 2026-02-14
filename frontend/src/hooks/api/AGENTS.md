<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# api

## 목적
TanStack Query (React Query) v5 기반 API 데이터 페칭 훅. `lib/api/`의 클라이언트와 엔드포인트를 사용하여 백엔드 API를 호출한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `index.ts` | `useHealthCheck()` - `GET /api/v1/health` 상태 확인 훅 |

## AI 에이전트 안내

### 작업 시 주의사항
- 새 API 훅 추가 패턴:
  1. `lib/api/endpoints.ts`에 엔드포인트 상수 추가
  2. `lib/api/types.ts`에 응답 타입 추가
  3. 이 파일에 React Query 훅 작성
- `queryKey`는 의미 있는 문자열 배열 사용
- `apiGet<T>()`, `apiPost<T>()` 제네릭 함수 사용

### 공통 패턴
```typescript
export function useXxx() {
  return useQuery({
    queryKey: ['xxx'],
    queryFn: () => apiGet<XxxResponse>(API_ENDPOINTS.XXX),
  })
}
```

## 의존성

### 내부
- `@/lib/api/client` - apiGet, apiPost 함수
- `@/lib/api/endpoints` - API_ENDPOINTS 상수
- `@/lib/api/types` - 응답 타입 인터페이스

### 외부
- `@tanstack/react-query` - useQuery, useMutation

<!-- MANUAL: -->

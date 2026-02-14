<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# schemas

## 목적
Pydantic v2 모델을 사용한 API 요청/응답 스키마 정의. 데이터 검증과 직렬화를 담당한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `__init__.py` | 패키지 초기화 (빈 파일, 현재 스키마 미정의) |

## AI 에이전트 안내

### 작업 시 주의사항
- Pydantic v2 문법 사용 (BaseModel, Field, model_validator 등)
- 요청용/응답용 스키마를 분리하여 정의 (예: `UserCreate`, `UserResponse`)
- 프론트엔드의 `lib/api/types.ts`와 타입 일관성 유지

### 공통 패턴
```python
from pydantic import BaseModel

class ItemResponse(BaseModel):
    id: int
    name: str
```

## 의존성

### 외부
- `pydantic>=2.9.0` - BaseModel

<!-- MANUAL: -->

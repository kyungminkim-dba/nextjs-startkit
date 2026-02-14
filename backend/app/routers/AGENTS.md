<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# routers

## 목적
FastAPI API 라우트 핸들러 모음. 각 파일은 독립적인 APIRouter를 정의하고, `main.py`에서 `/api/v1` 접두사로 등록된다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `health.py` | `GET /api/v1/health` - 서버 상태 확인 엔드포인트 |
| `__init__.py` | 패키지 초기화 (빈 파일) |

## AI 에이전트 안내

### 작업 시 주의사항
- 새 라우터 파일 생성 후 반드시 `app/main.py`에서 import 및 `include_router()` 등록
- 응답 스키마는 `app/schemas/`에 정의
- 비즈니스 로직은 `app/services/`에 분리

### 공통 패턴
```python
from fastapi import APIRouter
router = APIRouter()

@router.get("/endpoint")
async def handler():
    return {"key": "value"}
```

## 의존성

### 내부
- `app.schemas` - 요청/응답 Pydantic 모델
- `app.services` - 비즈니스 로직

### 외부
- `fastapi` - APIRouter

<!-- MANUAL: -->

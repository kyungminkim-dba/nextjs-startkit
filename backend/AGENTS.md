<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# backend

## 목적
FastAPI 기반 REST API 백엔드. Pydantic v2를 사용한 데이터 검증과 pydantic-settings를 통한 환경 설정 관리를 제공한다. 프론트엔드의 API 요청을 처리하며, `/api/v1` 접두사로 라우트를 노출한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `requirements.txt` | Python 패키지 의존성 (FastAPI, Uvicorn, Pydantic 등) |
| `pyproject.toml` | Python 프로젝트 메타데이터 |
| `.env` | 환경변수 (APP_NAME, CORS_ORIGINS, DEBUG) |
| `.env.example` | 환경변수 템플릿 |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `app/` | 애플리케이션 소스 코드 (`app/AGENTS.md` 참조) |

## AI 에이전트 안내

### 작업 시 주의사항
- 이 디렉토리에서 명령어 실행: `cd backend`
- 가상환경 활성화 필수: `source .venv/bin/activate`
- 새 패키지 추가 시 `requirements.txt` 업데이트

### 테스트 요구사항
- 개발 서버: `uvicorn app.main:app --reload` (포트 8000)
- API 문서: `http://localhost:8000/docs` (Swagger UI)

### 공통 패턴
- 라우터: `app/routers/`에 APIRouter로 작성 후 `app/main.py`에서 등록
- 스키마: Pydantic v2 모델을 `app/schemas/`에 정의
- 설정: `app/core/config.py`의 Settings 클래스로 중앙 관리

## 의존성

### 외부
- `fastapi>=0.115.0` - 웹 프레임워크
- `uvicorn[standard]>=0.32.0` - ASGI 서버
- `pydantic>=2.9.0` - 데이터 검증
- `pydantic-settings>=2.6.0` - 환경 설정
- `python-dotenv>=1.0.1` - .env 파일 읽기

<!-- MANUAL: -->

<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# app

## 목적
FastAPI 애플리케이션의 메인 패키지. FastAPI 인스턴스 생성, CORS 미들웨어 설정, 라우터 등록을 담당한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `main.py` | FastAPI 앱 인스턴스, CORS 미들웨어, 라우터 등록 진입점 |
| `__init__.py` | 패키지 초기화 (빈 파일) |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `core/` | 앱 설정 및 핵심 유틸리티 (`core/AGENTS.md` 참조) |
| `routers/` | API 라우트 핸들러 (`routers/AGENTS.md` 참조) |
| `schemas/` | Pydantic 요청/응답 스키마 (`schemas/AGENTS.md` 참조) |
| `services/` | 비즈니스 로직 서비스 (`services/AGENTS.md` 참조) |

## AI 에이전트 안내

### 작업 시 주의사항
- 새 라우터 추가 시 `main.py`에서 `app.include_router()` 호출 필수
- 모든 라우터는 `/api/v1` 접두사로 등록
- CORS 설정은 `core/config.py`의 `CORS_ORIGINS`에서 관리

### 공통 패턴
- 설정 → 라우터 → 스키마 → 서비스 순서의 4계층 구조
- `main.py`에서 settings를 import하여 앱 이름, 디버그 모드 설정

## 의존성

### 내부
- `app.core.config` - 앱 설정 (Settings 인스턴스)
- `app.routers` - API 라우트 모듈

<!-- MANUAL: -->

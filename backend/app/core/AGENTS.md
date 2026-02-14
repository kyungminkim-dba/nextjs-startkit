<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# core

## 목적
애플리케이션 핵심 설정 모듈. pydantic-settings를 사용하여 `.env` 파일에서 환경변수를 읽고 타입 안전한 설정 객체를 제공한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `config.py` | `Settings` 클래스 정의 (APP_NAME, DEBUG, CORS_ORIGINS) 및 싱글턴 `settings` 인스턴스 |
| `__init__.py` | 패키지 초기화 (빈 파일) |

## AI 에이전트 안내

### 작업 시 주의사항
- 새 설정 추가 시 `Settings` 클래스에 필드 추가 후 `.env.example`도 업데이트
- `model_config`의 `extra="ignore"`로 알 수 없는 환경변수는 무시됨
- `settings` 인스턴스를 import하여 사용: `from app.core.config import settings`

### 공통 패턴
- BaseSettings 상속, 기본값 설정, `.env` 파일 자동 로드

## 의존성

### 외부
- `pydantic-settings` - BaseSettings, SettingsConfigDict

<!-- MANUAL: -->

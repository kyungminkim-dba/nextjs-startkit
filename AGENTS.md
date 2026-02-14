<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# claude-nextjs-starters

## 목적
Next.js 16 프론트엔드와 FastAPI 백엔드로 구성된 풀스택 모노레포 스타터 킷. 프로덕션 레디 아키텍처와 40+ shadcn/ui 컴포넌트, 4계층 컴포넌트 시스템, 3종 레이아웃 템플릿을 제공한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `CLAUDE.md` | AI 에이전트를 위한 프로젝트 가이드라인 |
| `README.md` | 프로젝트 개요 및 빠른 시작 가이드 |
| `.gitignore` | Git 추적 제외 파일 설정 |
| `.mcp.json` | MCP 서버 설정 |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `frontend/` | Next.js 16 프론트엔드 앱 (`frontend/AGENTS.md` 참조) |
| `backend/` | FastAPI 백엔드 앱 (`backend/AGENTS.md` 참조) |

## AI 에이전트 안내

### 작업 시 주의사항
- 프론트엔드와 백엔드는 독립적인 프로젝트로, 각 디렉토리에서 명령어를 실행할 것
- 환경변수: `frontend/.env.local`, `backend/.env`
- 통신 방식: 프론트엔드가 axios + TanStack Query로 백엔드 REST API 호출

### 테스트 요구사항
- 프론트엔드: `cd frontend && npm run build` (TypeScript 검사 포함)
- 백엔드: `cd backend && uvicorn app.main:app --reload`

### 공통 패턴
- 경로 별칭: `@/`는 `frontend/src/`에 매핑
- 기본 언어: 한국어 (코드 주석, 커밋 메시지, 문서화)
- 변수명/함수명: 영어

## 의존성

### 외부
- Next.js 16 - React 풀스택 프레임워크
- FastAPI - Python 웹 프레임워크
- Tailwind CSS v4 - 유틸리티 CSS
- shadcn/ui - UI 컴포넌트 라이브러리

<!-- MANUAL: -->

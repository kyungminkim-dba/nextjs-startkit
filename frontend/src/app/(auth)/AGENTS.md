<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# (auth)

## 목적
인증 라우트 그룹. 중앙 정렬 flex 컨테이너 레이아웃을 공유한다. 로그인과 회원가입 페이지를 포함한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `layout.tsx` | 중앙 정렬 flex 컨테이너 (`min-h-screen items-center justify-center`) |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `login/` | 로그인 페이지 (`/login`) - 이메일/비밀번호 폼, mock 인증 |
| `register/` | 회원가입 페이지 (`/register`) - 이름/이메일/비밀번호 폼, mock 가입 |

## AI 에이전트 안내

### 작업 시 주의사항
- **인증은 UI만 구현됨** - 실제 백엔드 인증 로직 없음
- 폼 제출 시 toast 알림 + 리다이렉트만 수행
- mock 인증: localStorage에 사용자 정보 저장 (AuthProvider)
- AuthCard 패턴 컴포넌트로 일관된 UI

### 공통 패턴
- zod 스키마 → useForm + zodResolver → Form 컴포넌트
- AuthCard 래핑 (제목, 설명, 하단 링크)
- PasswordInput 컴포지트 컴포넌트 사용

## 의존성

### 내부
- `@/components/patterns/auth-card` - 인증 카드 래퍼
- `@/components/composites/password-input` - 비밀번호 입력 (보기 토글)
- `@/hooks/use-auth` - 인증 컨텍스트 훅

### 외부
- `react-hook-form` + `zod` + `@hookform/resolvers` - 폼 검증
- `sonner` - 토스트 알림

<!-- MANUAL: -->

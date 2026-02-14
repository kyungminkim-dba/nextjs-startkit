<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# components

## 목적
4계층 컴포넌트 아키텍처. shadcn/ui 프리미티브부터 페이지 섹션 패턴까지 체계적으로 분류된 재사용 가능한 UI 컴포넌트를 포함한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `theme-toggle.tsx` | 테마 전환 드롭다운 (Light/Dark/System) - ThemeProvider 의존 |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `ui/` | **Tier 1 - 프리미티브**: shadcn/ui 원자 컴포넌트 40개 (`ui/AGENTS.md` 참조) |
| `composites/` | **Tier 2 - 컴포지트**: Tier 1을 2~3개 조합한 컴포넌트 12개 (`composites/AGENTS.md` 참조) |
| `patterns/` | **Tier 3 - 패턴**: 페이지 섹션 단위 컴포넌트 10개 (`patterns/AGENTS.md` 참조) |
| `providers/` | React Context 프로바이더 3개 (`providers/AGENTS.md` 참조) |

## AI 에이전트 안내

### 작업 시 주의사항
- 새 컴포넌트 추가 시 올바른 계층(Tier)에 배치할 것
- **Tier 1-2에 비즈니스 로직 넣지 않기**
- shadcn/ui 컴포넌트 추가: `npx shadcn@latest add <이름>` (Tier 1에 자동 생성)

### 계층 배치 기준
| 계층 | 기준 |
|------|------|
| Tier 1 (ui/) | shadcn/ui에서 설치한 원자 컴포넌트 |
| Tier 2 (composites/) | Tier 1을 2~3개 조합, 비즈니스 로직 없음 |
| Tier 3 (patterns/) | 페이지 섹션 단위, 비즈니스 로직 포함 가능 |
| Tier 4 (app/layout) | 라우트 그룹 레이아웃 (app/ 디렉토리에 위치) |

## 의존성

### 외부
- `radix-ui` - 헤드리스 UI 프리미티브
- `lucide-react` - 아이콘
- `class-variance-authority` - 변형(variant) 관리
- `clsx` + `tailwind-merge` - 클래스 유틸리티

<!-- MANUAL: -->

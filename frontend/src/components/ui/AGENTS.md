<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# ui (Tier 1 - 프리미티브)

## 목적
shadcn/ui에서 설치한 원자 수준 UI 컴포넌트 40개. `npx shadcn@latest add`로 생성되며, 프로젝트 전체에서 기본 빌딩 블록으로 사용된다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `accordion.tsx` | 아코디언 (접기/펼치기) |
| `alert-dialog.tsx` | 확인 다이얼로그 |
| `avatar.tsx` | 사용자 아바타 |
| `badge.tsx` | 배지/태그 |
| `breadcrumb.tsx` | 브레드크럼 네비게이션 |
| `button.tsx` | 버튼 (variant: default/destructive/outline/secondary/ghost/link) |
| `card.tsx` | 카드 컨테이너 (Header/Content/Footer) |
| `checkbox.tsx` | 체크박스 |
| `collapsible.tsx` | 접기/펼치기 컨테이너 |
| `command.tsx` | 명령 팔레트 (cmdk 기반) |
| `context-menu.tsx` | 우클릭 컨텍스트 메뉴 |
| `dialog.tsx` | 모달 다이얼로그 |
| `drawer.tsx` | 하단 드로어 (vaul 기반) |
| `dropdown-menu.tsx` | 드롭다운 메뉴 |
| `form.tsx` | react-hook-form 통합 폼 컴포넌트 |
| `hover-card.tsx` | 호버 카드 |
| `input.tsx` | 텍스트 입력 |
| `label.tsx` | 폼 라벨 |
| `menubar.tsx` | 메뉴바 |
| `navigation-menu.tsx` | 네비게이션 메뉴 |
| `pagination.tsx` | 페이지네이션 |
| `popover.tsx` | 팝오버 |
| `progress.tsx` | 진행률 바 |
| `radio-group.tsx` | 라디오 버튼 그룹 |
| `resizable.tsx` | 리사이즈 가능 패널 |
| `scroll-area.tsx` | 커스텀 스크롤 영역 |
| `select.tsx` | 셀렉트 드롭다운 |
| `separator.tsx` | 구분선 |
| `sheet.tsx` | 사이드 시트 |
| `sidebar.tsx` | 사이드바 (SidebarProvider, SidebarInset 포함) |
| `skeleton.tsx` | 로딩 스켈레톤 |
| `slider.tsx` | 슬라이더 |
| `sonner.tsx` | 토스트 알림 (Toaster) |
| `switch.tsx` | 토글 스위치 |
| `table.tsx` | 테이블 |
| `tabs.tsx` | 탭 |
| `textarea.tsx` | 멀티라인 텍스트 입력 |
| `toggle.tsx` | 토글 버튼 |
| `tooltip.tsx` | 툴팁 |

## AI 에이전트 안내

### 작업 시 주의사항
- **직접 수정하지 않는 것을 권장** - shadcn/ui CLI로 관리
- 커스터마이즈 필요 시 해당 파일을 직접 수정 가능 (복사 기반이므로)
- 새 컴포넌트 추가: `npx shadcn@latest add <이름>`
- 스타일: new-york 스타일, neutral 기본 색상, CSS 변수 사용

### 공통 패턴
- `cn()` 유틸리티로 클래스 병합
- `forwardRef`로 DOM ref 전달
- Radix UI 프리미티브 래핑
- `cva` (class-variance-authority)로 변형(variant) 정의

## 의존성

### 내부
- `@/lib/utils` - `cn()` 함수

### 외부
- `radix-ui` - 헤드리스 UI 프리미티브
- `class-variance-authority` - 변형 관리
- `cmdk` - 명령 팔레트
- `vaul` - 드로어
- `react-resizable-panels` - 리사이즈 패널
- `sonner` - 토스트

<!-- MANUAL: -->

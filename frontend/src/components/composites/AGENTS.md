<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# composites (Tier 2 - 컴포지트)

## 목적
Tier 1 프리미티브를 2~3개 조합한 재사용 가능한 복합 컴포넌트. 비즈니스 로직을 포함하지 않으며, 순수한 UI 조합에 집중한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `password-input.tsx` | Input + Eye 토글 버튼 조합 (비밀번호 표시/숨김) |
| `search-input.tsx` | Input + 검색 아이콘 조합 |
| `nav-link.tsx` | Link + 활성 상태 스타일링 |
| `mobile-nav.tsx` | Sheet + 네비게이션 메뉴 (모바일용 햄버거 메뉴) |
| `user-avatar.tsx` | Avatar + 이니셜 폴백 |
| `user-menu.tsx` | DropdownMenu + UserAvatar + SidebarMenuButton 조합 (사이드바 사용자 메뉴) |
| `feature-card.tsx` | Card + Badge + 아이콘 조합 (기능 소개 카드) |
| `doc-card.tsx` | Card + Link 조합 (문서 카드) |
| `example-card.tsx` | Card + Badge + Link 조합 (예제 카드) |
| `stat-card.tsx` | Card + 트렌드 표시 조합 (통계 카드) |
| `loading-state.tsx` | Skeleton 반복 조합 (로딩 상태 표시) |
| `empty-state.tsx` | 아이콘 + 텍스트 조합 (빈 상태 표시) |

## AI 에이전트 안내

### 작업 시 주의사항
- Tier 1(ui/) 컴포넌트만 조합하여 구성
- **비즈니스 로직, API 호출, 전역 상태 접근 금지**
- props로 데이터를 전달받아 순수 렌더링만 수행
- 새 컴포지트 추가 시 이 디렉토리에 배치

### 공통 패턴
- `forwardRef`로 ref 전달 (PasswordInput 등)
- props 인터페이스를 컴포넌트 위에 정의
- `cn()` 유틸리티로 조건부 스타일링

## 의존성

### 내부
- `@/components/ui/*` - Tier 1 프리미티브
- `@/lib/utils` - `cn()` 함수
- `@/lib/constants` - NAV_ITEMS, SITE_CONFIG

### 외부
- `lucide-react` - 아이콘
- `next/link` - 내부 링크

<!-- MANUAL: -->

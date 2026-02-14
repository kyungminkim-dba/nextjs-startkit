<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# patterns (Tier 3 - 패턴)

## 목적
페이지 섹션 단위의 복합 컴포넌트. Tier 1-2 컴포넌트를 조합하며, 비즈니스 로직과 데이터 바인딩을 포함할 수 있다. 특정 레이아웃 영역이나 페이지 섹션에 대응한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `site-header.tsx` | 마케팅 상단 네비게이션 (NavigationMenu + MobileNav + 로그인/가입 버튼 + ThemeToggle) |
| `site-footer.tsx` | 마케팅 하단 푸터 (저작권 + 소셜 링크) |
| `app-sidebar.tsx` | 대시보드 사이드바 (Sidebar + 네비게이션 + UserMenu + 로그아웃) |
| `dashboard-header.tsx` | 대시보드 헤더 (SidebarTrigger + Breadcrumb + 액션 영역) |
| `hero-section.tsx` | 랜딩 히어로 섹션 (제목 + 설명 + CTA 버튼) |
| `features-grid.tsx` | 기능 소개 그리드 (6개 FeatureCard) |
| `cta-section.tsx` | CTA(Call-to-Action) 섹션 |
| `stats-overview.tsx` | 대시보드 통계 오버뷰 (4개 StatCard 그리드) |
| `page-header.tsx` | 범용 페이지 헤더 (제목 + 설명, 중앙 정렬 옵션) |
| `auth-card.tsx` | 인증 카드 래퍼 (Card + 제목/설명/하단 링크) |

## AI 에이전트 안내

### 작업 시 주의사항
- 비즈니스 로직 포함 가능 (API 호출, 상태 관리)
- 클라이언트 컴포넌트인 경우 `'use client'` 디렉티브 추가
- `lib/constants.ts`의 설정값 참조 (SITE_CONFIG, NAV_ITEMS, SOCIAL_LINKS)

### 공통 패턴
- 마케팅 패턴: 서버 컴포넌트, `container mx-auto` 레이아웃
- 대시보드 패턴: 클라이언트 컴포넌트, Sidebar UI 컴포넌트 활용
- 인증 패턴: AuthCard 래핑

## 의존성

### 내부
- `@/components/ui/*` - Tier 1 프리미티브
- `@/components/composites/*` - Tier 2 컴포지트
- `@/hooks/use-auth` - 인증 상태
- `@/lib/constants` - 사이트 설정, 네비게이션 항목

### 외부
- `lucide-react` - 아이콘
- `next/link`, `next/navigation` - 라우팅

<!-- MANUAL: -->

<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-15 | Updated: 2026-02-15 -->

# (marketing)

## 목적
마케팅/공개 페이지 라우트 그룹. SiteHeader + main + SiteFooter 레이아웃을 공유한다. 랜딩 페이지, 문서, 예제 페이지를 포함한다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `layout.tsx` | SiteHeader + `<main>` + SiteFooter 래핑 레이아웃 |
| `page.tsx` | `/` 랜딩 페이지 (HeroSection + FeaturesGrid + CTASection) |

## 하위 디렉토리

| 디렉토리 | 목적 |
|-----------|------|
| `docs/` | 문서 페이지 (`/docs`, `/docs/getting-started`, `/docs/ui-components`, `/docs/hooks`, `/docs/configuration`) |
| `examples/` | 예제 페이지 (`/examples`, `/examples/components`, `/examples/forms`, `/examples/hooks`, `/examples/data-fetching`, `/examples/layouts`, `/examples/optimization`) |

## AI 에이전트 안내

### 작업 시 주의사항
- 마케팅 페이지는 대부분 서버 컴포넌트 (SEO 최적화)
- 새 마케팅 페이지는 이 그룹 하위에 디렉토리 생성
- 레이아웃은 SiteHeader/SiteFooter를 사용 (`@/components/patterns/`)

### 공통 패턴
- 페이지 상단에 PageHeader 컴포넌트 사용
- 컨텐츠 카드 그리드 레이아웃

## 의존성

### 내부
- `@/components/patterns/site-header` - 상단 네비게이션
- `@/components/patterns/site-footer` - 하단 푸터
- `@/components/patterns/hero-section` - 히어로 섹션
- `@/components/patterns/features-grid` - 기능 소개 그리드
- `@/components/patterns/cta-section` - CTA 섹션

<!-- MANUAL: -->

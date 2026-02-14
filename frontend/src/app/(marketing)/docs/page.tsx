import { PageHeader } from '@/components/patterns/page-header'
import { DocCard } from '@/components/composites/doc-card'
import { Rocket, Component, Anchor, Settings } from 'lucide-react'

const DOCS = [
  {
    icon: Rocket,
    title: '시작하기',
    description: '프로젝트 설치부터 개발 서버 실행까지의 가이드입니다.',
    items: [
      '프로젝트 클론 및 의존성 설치',
      '프론트엔드/백엔드 개발 서버 실행',
      '프로젝트 구조 이해하기',
      '첫 번째 페이지 만들기',
    ],
    href: '/docs/getting-started',
  },
  {
    icon: Component,
    title: 'UI 컴포넌트',
    description: '4계층 컴포넌트 시스템과 shadcn/ui 활용법을 설명합니다.',
    items: [
      '4계층 컴포넌트 아키텍처',
      'shadcn/ui 컴포넌트 추가 방법',
      'cn() 유틸리티 사용법',
      '테마 커스터마이징',
    ],
    href: '/docs/ui-components',
  },
  {
    icon: Anchor,
    title: '훅 라이브러리',
    description: '프로젝트에 포함된 커스텀 훅과 API 훅을 설명합니다.',
    items: [
      'useMounted - SSR 안전 마운트 감지',
      'useMediaQuery - 미디어 쿼리 감지',
      'useIsMobile - 모바일 디바이스 감지',
      'useHealthCheck - API 헬스체크',
    ],
    href: '/docs/hooks',
  },
  {
    icon: Settings,
    title: '구성 및 설정',
    description: '환경변수, 네비게이션, 라우트 그룹 등 설정 방법을 안내합니다.',
    items: [
      '환경변수 관리',
      '네비게이션/사이트 설정',
      '3종 라우트 그룹 레이아웃',
      'API 연동 패턴',
    ],
    href: '/docs/configuration',
  },
]

export default function DocsPage() {
  return (
    <>
      <PageHeader
        title="문서"
        description="이 스타터 킷의 구조, 컴포넌트, 훅, 설정에 대한 가이드입니다."
        centered
      />
      <div className="container mx-auto pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {DOCS.map((doc) => (
            <DocCard key={doc.title} {...doc} />
          ))}
        </div>
      </div>
    </>
  )
}

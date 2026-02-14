import { PageHeader } from '@/components/patterns/page-header'
import { ExampleCard } from '@/components/composites/example-card'
import {
  Component,
  FormInput,
  LayoutGrid,
  Anchor,
  Database,
  Settings,
} from 'lucide-react'

const EXAMPLES = [
  {
    icon: Component,
    title: '컴포넌트 쇼케이스',
    description:
      'shadcn/ui 기반의 다양한 UI 컴포넌트를 카테고리별로 확인하고 인터랙션해 볼 수 있습니다.',
    tags: ['shadcn/ui', 'Radix UI', 'Tailwind CSS'],
    href: '/examples/components',
  },
  {
    icon: FormInput,
    title: '폼 예제',
    description:
      'react-hook-form과 zod를 활용한 유효성 검증 폼 패턴을 제공합니다.',
    tags: ['react-hook-form', 'zod', 'Form'],
    href: '/examples/forms',
  },
  {
    icon: LayoutGrid,
    title: '레이아웃 예제',
    description:
      '반응형 그리드, Resizable 패널, ScrollArea 등 레이아웃 패턴을 시연합니다.',
    tags: ['Grid', 'Resizable', 'ScrollArea'],
    href: '/examples/layouts',
  },
  {
    icon: Anchor,
    title: '커스텀 훅 예제',
    description:
      '프로젝트에 포함된 커스텀 훅들의 동작을 인터랙티브하게 확인합니다.',
    tags: ['useMounted', 'useMediaQuery', 'useIsMobile'],
    href: '/examples/hooks',
  },
  {
    icon: Database,
    title: '데이터 페칭',
    description:
      'TanStack Query와 axios를 활용한 API 데이터 페칭 패턴을 시연합니다.',
    tags: ['TanStack Query', 'axios', 'API'],
    href: '/examples/data-fetching',
  },
  {
    icon: Settings,
    title: '설정 및 최적화',
    description:
      '메타데이터, 환경변수, SEO, Tailwind v4 등 프로젝트 설정 가이드입니다.',
    tags: ['Next.js', 'SEO', 'Tailwind v4'],
    href: '/examples/optimization',
  },
]

export default function ExamplesPage() {
  return (
    <>
      <PageHeader
        title="예제 모음"
        description="이 스타터 킷에 포함된 다양한 패턴과 컴포넌트의 실제 동작 예제를 확인하세요."
        centered
      />
      <div className="container mx-auto pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLES.map((example) => (
            <ExampleCard key={example.title} {...example} />
          ))}
        </div>
      </div>
    </>
  )
}

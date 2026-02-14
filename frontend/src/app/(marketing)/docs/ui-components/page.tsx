import { PageHeader } from '@/components/patterns/page-header'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const TIERS = [
  {
    tier: 'Tier 1',
    name: 'Primitives',
    directory: 'components/ui/',
    description:
      'shadcn/ui 컴포넌트입니다. npx shadcn@latest add <이름>으로 설치합니다.',
    examples: [
      'Button',
      'Input',
      'Card',
      'Badge',
      'Tabs',
      'Dialog',
      'Select',
      'Checkbox',
      'Switch',
      'Slider',
    ],
    rules: [
      '비즈니스 로직을 포함하지 않습니다.',
      'shadcn CLI로만 추가/업데이트합니다.',
      '범용적으로 재사용 가능해야 합니다.',
    ],
  },
  {
    tier: 'Tier 2',
    name: 'Composites',
    directory: 'components/composites/',
    description:
      'Tier 1 컴포넌트를 2~3개 조합한 복합 컴포넌트입니다.',
    examples: [
      'PasswordInput (Input + Eye 토글)',
      'SearchInput (Input + Search 아이콘)',
      'NavLink (Link + 활성 상태)',
      'FeatureCard (Card + Icon + Badge)',
      'ExampleCard (Card + Badge + Button)',
      'StatCard (Card + 숫자 포맷)',
    ],
    rules: [
      '비즈니스 로직을 포함하지 않습니다.',
      'Tier 1 컴포넌트만 사용합니다.',
      '2~3개 컴포넌트 조합으로 제한합니다.',
    ],
  },
  {
    tier: 'Tier 3',
    name: 'Patterns',
    directory: 'components/patterns/',
    description:
      '페이지 섹션 단위의 컴포넌트입니다. 비즈니스 로직을 포함할 수 있습니다.',
    examples: [
      'SiteHeader',
      'SiteFooter',
      'HeroSection',
      'FeaturesGrid',
      'PageHeader',
      'AuthCard',
      'AppSidebar',
    ],
    rules: [
      '특정 페이지 섹션에 해당합니다.',
      'Tier 1, 2 컴포넌트를 조합합니다.',
      '비즈니스 로직을 포함할 수 있습니다.',
    ],
  },
  {
    tier: 'Tier 4',
    name: 'Layouts',
    directory: 'app/(group)/layout.tsx',
    description:
      '라우트 그룹별 레이아웃 컴포넌트입니다.',
    examples: [
      '(marketing) - Header + Main + Footer',
      '(dashboard) - Sidebar + SidebarInset',
      '(auth) - 중앙 정렬 컨테이너',
    ],
    rules: [
      'Tier 3 패턴 컴포넌트를 배치합니다.',
      '라우트 그룹당 하나의 레이아웃을 정의합니다.',
      'children을 감싸는 구조만 담당합니다.',
    ],
  },
]

export default function UIComponentsPage() {
  return (
    <>
      <PageHeader
        title="UI 컴포넌트"
        description="4계층 컴포넌트 시스템과 shadcn/ui 활용법을 설명합니다."
      />
      <div className="container mx-auto pb-20 space-y-6">
        {TIERS.map((tier) => (
          <Card key={tier.tier}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge variant="outline">{tier.tier}</Badge>
                <CardTitle>{tier.name}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                {tier.description}
              </p>
              <code className="text-xs text-muted-foreground">
                {tier.directory}
              </code>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium">포함 컴포넌트</p>
                <div className="flex flex-wrap gap-2">
                  {tier.examples.map((ex) => (
                    <Badge key={ex} variant="secondary">
                      {ex}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <p className="mb-2 text-sm font-medium">규칙</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {tier.rules.map((rule) => (
                    <li key={rule} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle>shadcn/ui 컴포넌트 추가</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              새 shadcn/ui 컴포넌트를 추가하려면 CLI를 사용합니다:
            </p>
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
              <code>npx shadcn@latest add &lt;컴포넌트 이름&gt;</code>
            </pre>
            <p className="text-sm text-muted-foreground">
              컴포넌트는 자동으로 <code>components/ui/</code> 디렉토리에
              설치됩니다. 설정은 <code>components.json</code>에서 관리됩니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

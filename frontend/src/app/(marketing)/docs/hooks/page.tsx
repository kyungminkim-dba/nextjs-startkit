import { PageHeader } from '@/components/patterns/page-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const HOOKS = [
  {
    name: 'useMounted',
    file: 'hooks/use-mounted.ts',
    category: '유틸리티',
    description:
      '컴포넌트가 클라이언트에서 마운트되었는지 여부를 반환합니다. SSR에서 hydration mismatch를 방지하는 데 사용합니다.',
    signature: 'useMounted(): boolean',
    usage: `const mounted = useMounted()

if (!mounted) return <Skeleton />
return <ClientOnlyComponent />`,
    details: [
      'useSyncExternalStore 기반으로 구현',
      'SSR에서는 false, 클라이언트에서는 true 반환',
      'hydration이 완료된 후에만 클라이언트 전용 UI 렌더링',
    ],
  },
  {
    name: 'useMediaQuery',
    file: 'hooks/use-media-query.ts',
    category: '반응형',
    description:
      '임의의 CSS 미디어 쿼리의 일치 여부를 실시간으로 감지합니다.',
    signature: 'useMediaQuery(query: string): boolean',
    usage: `const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')`,
    details: [
      'useSyncExternalStore로 구현하여 tearing 방지',
      'window.matchMedia API 활용',
      'SSR에서는 항상 false 반환',
    ],
  },
  {
    name: 'useIsMobile',
    file: 'hooks/use-mobile.ts',
    category: '반응형',
    description:
      '현재 뷰포트가 모바일 크기(768px 미만)인지 감지합니다.',
    signature: 'useIsMobile(): boolean',
    usage: `const isMobile = useIsMobile()

return isMobile ? <MobileLayout /> : <DesktopLayout />`,
    details: [
      'MOBILE_BREAKPOINT = 768px',
      'window.matchMedia + resize 이벤트 리스너',
      '사이드바, 네비게이션 등 반응형 UI에 활용',
    ],
  },
  {
    name: 'useAuth',
    file: 'hooks/use-auth.ts',
    category: '인증',
    description:
      'AuthProvider의 인증 상태에 접근하는 훅입니다. AuthProvider 내부에서만 사용 가능합니다.',
    signature: 'useAuth(): AuthContextType',
    usage: `const { user, login, logout } = useAuth()`,
    details: [
      'AuthContext의 consumer 역할',
      'AuthProvider 외부에서 호출 시 에러 throw',
      '인증 상태, 로그인/로그아웃 함수 제공',
    ],
  },
  {
    name: 'useHealthCheck',
    file: 'hooks/api/index.ts',
    category: 'API',
    description:
      '백엔드 API 헬스체크 엔드포인트를 호출하는 TanStack Query 훅입니다.',
    signature: 'useHealthCheck(): UseQueryResult<HealthCheckResponse>',
    usage: `const { data, isLoading, isError, refetch } = useHealthCheck()`,
    details: [
      "queryKey: ['health']",
      'apiGet<HealthCheckResponse> 사용',
      'TanStack Query v5 기반 캐싱/리패칭',
    ],
  },
]

export default function HooksDocPage() {
  return (
    <>
      <PageHeader
        title="훅 라이브러리"
        description="프로젝트에 포함된 커스텀 훅과 API 훅의 사용법을 안내합니다."
      />
      <div className="container mx-auto pb-20 space-y-6">
        {HOOKS.map((hook) => (
          <Card key={hook.name}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="font-mono">{hook.name}</CardTitle>
                <Badge variant="outline">{hook.category}</Badge>
              </div>
              <CardDescription>{hook.description}</CardDescription>
              <code className="text-xs text-muted-foreground">
                {hook.file}
              </code>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium">시그니처</p>
                <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-sm">
                  <code>{hook.signature}</code>
                </pre>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">사용 예시</p>
                <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-sm">
                  <code>{hook.usage}</code>
                </pre>
              </div>
              <Separator />
              <div>
                <p className="mb-2 text-sm font-medium">세부 사항</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {hook.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

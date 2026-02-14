import { PageHeader } from '@/components/patterns/page-header'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function ConfigurationPage() {
  return (
    <>
      <PageHeader
        title="구성 및 설정"
        description="환경변수, 네비게이션, 라우트 그룹 등 프로젝트 설정 방법을 안내합니다."
      />
      <div className="container mx-auto pb-20 space-y-6">
        {/* 환경변수 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <CardTitle>환경변수 관리</CardTitle>
              <Badge variant="outline">필수</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium">
                프론트엔드 (frontend/.env.local)
              </p>
              <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-sm">
                <code>NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1</code>
              </pre>
              <p className="mt-2 text-xs text-muted-foreground">
                NEXT_PUBLIC_ 접두사가 있는 변수만 브라우저에서 접근 가능합니다.
              </p>
            </div>
            <Separator />
            <div>
              <p className="mb-2 text-sm font-medium">
                백엔드 (backend/.env)
              </p>
              <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-sm">
                <code>{`APP_NAME=NextJS Starter Backend
CORS_ORIGINS=["http://localhost:3000"]
DEBUG=true`}</code>
              </pre>
              <p className="mt-2 text-xs text-muted-foreground">
                pydantic-settings를 통해 app/core/config.py에서 타입 안전하게
                관리됩니다.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 사이트 설정 */}
        <Card>
          <CardHeader>
            <CardTitle>사이트 설정 중앙화</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              모든 사이트 설정은{' '}
              <code className="rounded bg-muted px-1">lib/constants.ts</code>
              에서 중앙 관리됩니다.
            </p>
            <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-sm">
              <code>{`// 사이트 기본 정보
export const SITE_CONFIG = {
  name: 'NextJS Starter',
  description: '...',
  url: 'http://localhost:3000',
}

// 네비게이션 항목
export const NAV_ITEMS = [
  { title: '홈', href: '/' },
  { title: '예제', href: '/examples' },
  { title: '문서', href: '/docs' },
]

// 대시보드 네비게이션
export const DASHBOARD_NAV_ITEMS = [...]

// 소셜 링크
export const SOCIAL_LINKS = [...]`}</code>
            </pre>
            <p className="text-sm text-muted-foreground">
              이 파일을 수정하면 SiteHeader, MobileNav, SiteFooter, RootLayout
              등 모든 관련 컴포넌트에 자동으로 반영됩니다.
            </p>
          </CardContent>
        </Card>

        {/* 라우트 그룹 */}
        <Card>
          <CardHeader>
            <CardTitle>3종 라우트 그룹 레이아웃</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                group: '(marketing)',
                urls: '/, /examples, /docs',
                layout: 'SiteHeader + main + SiteFooter',
                description:
                  '공개 페이지용. 헤더/푸터로 감싸진 표준 레이아웃입니다.',
              },
              {
                group: '(dashboard)',
                urls: '/dashboard, /dashboard/settings',
                layout: 'SidebarProvider + AppSidebar + SidebarInset',
                description:
                  '인증된 사용자용. 사이드바 기반 레이아웃입니다.',
              },
              {
                group: '(auth)',
                urls: '/login, /register',
                layout: '중앙 정렬 flex 컨테이너',
                description:
                  '인증 폼용. 화면 중앙에 AuthCard를 배치합니다.',
              },
            ].map((route) => (
              <div key={route.group}>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{route.group}</Badge>
                  <span className="text-sm font-medium">{route.layout}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {route.description}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  URL: {route.urls}
                </p>
                <Separator className="mt-3" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* API 연동 패턴 */}
        <Card>
          <CardHeader>
            <CardTitle>API 연동 패턴</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              새 API 엔드포인트를 연동할 때는 다음 4단계를 따릅니다:
            </p>
            {[
              {
                step: '1',
                title: '엔드포인트 상수 정의',
                file: 'lib/api/endpoints.ts',
              },
              {
                step: '2',
                title: '응답 타입 추가',
                file: 'lib/api/types.ts',
              },
              {
                step: '3',
                title: 'React Query 훅 작성',
                file: 'hooks/api/index.ts',
              },
              {
                step: '4',
                title: '컴포넌트에서 훅 사용',
                file: "'use client' 페이지/컴포넌트",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3">
                <Badge>{item.step}</Badge>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <code className="text-xs text-muted-foreground">
                    {item.file}
                  </code>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Providers 체인 */}
        <Card>
          <CardHeader>
            <CardTitle>Providers 체인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Root Layout에서 Provider를 다음 순서로 래핑합니다:
            </p>
            <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-sm">
              <code>{`<ThemeProvider>
  <QueryProvider>
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  </QueryProvider>
</ThemeProvider>`}</code>
            </pre>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                ThemeProvider: next-themes 기반 라이트/다크 모드
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                QueryProvider: TanStack Query 클라이언트
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                TooltipProvider: 전역 툴팁 설정
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Toaster: sonner 토스트 알림
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

'use client'

import { PageHeader } from '@/components/patterns/page-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { useHealthCheck } from '@/hooks/api'
import { RefreshCw, CheckCircle, XCircle, Loader2 } from 'lucide-react'

function HealthCheckDemo() {
  const { data, isLoading, isError, error, refetch, isFetching } =
    useHealthCheck()

  return (
    <Card>
      <CardHeader>
        <CardTitle>useHealthCheck 실시간 데모</CardTitle>
        <CardDescription>
          백엔드 API 헬스체크 응답을 실시간으로 확인합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">API 상태</span>
            {isLoading ? (
              <Badge variant="secondary">
                <Loader2 className="size-3 animate-spin" />
                로딩 중
              </Badge>
            ) : isError ? (
              <Badge variant="destructive">
                <XCircle className="size-3" />
                에러
              </Badge>
            ) : (
              <Badge>
                <CheckCircle className="size-3" />
                {data?.status ?? '정상'}
              </Badge>
            )}
          </div>
          <Separator className="my-3" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">엔드포인트</span>
              <code className="text-xs">/api/v1/health</code>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">응답 데이터</span>
              <code className="text-xs">
                {isLoading ? (
                  <Skeleton className="h-4 w-20" />
                ) : isError ? (
                  String(
                    error instanceof Error
                      ? error.message
                      : '연결 실패',
                  )
                ) : (
                  JSON.stringify(data)
                )}
              </code>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={() => refetch()}
          disabled={isFetching}
          className="w-full"
        >
          {isFetching ? (
            <Loader2 className="animate-spin" />
          ) : (
            <RefreshCw />
          )}
          다시 요청
        </Button>
      </CardContent>
    </Card>
  )
}

function PatternExplanation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>TanStack Query 패턴</CardTitle>
        <CardDescription>
          이 프로젝트의 데이터 페칭 아키텍처를 설명합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {[
            {
              step: '1',
              title: '엔드포인트 정의',
              file: 'lib/api/endpoints.ts',
              code: `export const API_ENDPOINTS = {\n  HEALTH: '/health',\n} as const`,
            },
            {
              step: '2',
              title: '응답 타입 정의',
              file: 'lib/api/types.ts',
              code: `export interface HealthCheckResponse {\n  status: string\n}`,
            },
            {
              step: '3',
              title: 'React Query 훅 작성',
              file: 'hooks/api/index.ts',
              code: `export function useHealthCheck() {\n  return useQuery({\n    queryKey: ['health'],\n    queryFn: () => apiGet<HealthCheckResponse>(\n      API_ENDPOINTS.HEALTH\n    ),\n  })\n}`,
            },
            {
              step: '4',
              title: '컴포넌트에서 사용',
              file: '컴포넌트.tsx',
              code: `const { data, isLoading } = useHealthCheck()`,
            },
          ].map((item) => (
            <div key={item.step} className="rounded-lg border p-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="shrink-0">
                  Step {item.step}
                </Badge>
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {item.file}
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-muted p-2 text-xs">
                <code>{item.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function AxiosClientInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Axios 클라이언트 설정</CardTitle>
        <CardDescription>
          인증 토큰 자동 주입 및 에러 핸들링 인터셉터
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Base URL</span>
            <code className="text-xs text-muted-foreground">
              NEXT_PUBLIC_API_URL
            </code>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm">타임아웃</span>
            <code className="text-xs text-muted-foreground">10,000ms</code>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm">인증 헤더</span>
            <code className="text-xs text-muted-foreground">
              Bearer token (자동)
            </code>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm">401 처리</span>
            <code className="text-xs text-muted-foreground">
              /login 리다이렉트
            </code>
          </div>
        </div>
        <div className="rounded-md bg-muted p-3">
          <p className="text-xs text-muted-foreground">
            <strong>lib/api/client.ts</strong>에서 axios 인스턴스를 생성하고
            request/response 인터셉터를 설정합니다. 모든 API 호출에서
            자동으로 인증 토큰이 주입되며, 401 응답 시 로그인 페이지로
            리다이렉트됩니다.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DataFetchingPage() {
  return (
    <>
      <PageHeader
        title="데이터 페칭"
        description="TanStack Query와 axios를 활용한 API 데이터 페칭 패턴을 확인하세요."
      />
      <div className="container mx-auto pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <HealthCheckDemo />
          <AxiosClientInfo />
          <div className="lg:col-span-2">
            <PatternExplanation />
          </div>
        </div>
      </div>
    </>
  )
}

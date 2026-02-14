'use client'

import { DashboardHeader } from '@/components/patterns/dashboard-header'
import { StatsOverview } from '@/components/patterns/stats-overview'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useHealthCheck } from '@/hooks/api'
import { LoadingState } from '@/components/composites/loading-state'
import { Badge } from '@/components/ui/badge'

export default function DashboardPage() {
  const { data: health, isLoading, isError } = useHealthCheck()

  return (
    <>
      <DashboardHeader
        title="Dashboard"
        breadcrumbs={[{ label: 'Dashboard' }]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <StatsOverview />
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>API Health Status</CardTitle>
              <CardDescription>
                Connection to FastAPI backend
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <LoadingState count={1} />
              ) : isError ? (
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Offline</Badge>
                  <span className="text-sm text-muted-foreground">
                    Backend server is not running
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {health?.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Connected to FastAPI
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>
                Get started with the starter kit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>1. Customize components in <code className="rounded bg-muted px-1">components/</code></li>
                <li>2. Add API endpoints in <code className="rounded bg-muted px-1">backend/app/routers/</code></li>
                <li>3. Create query hooks in <code className="rounded bg-muted px-1">hooks/api/</code></li>
                <li>4. Build your pages in <code className="rounded bg-muted px-1">app/</code></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

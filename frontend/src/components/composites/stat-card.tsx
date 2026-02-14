import { Card, CardContent } from '@/components/ui/card'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: string | number
  trend?: number
}

export function StatCard({ label, value, trend }: StatCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          {trend !== undefined && (
            <div
              className={cn(
                'flex items-center text-xs font-medium',
                trend >= 0 ? 'text-green-600' : 'text-red-600'
              )}
            >
              {trend >= 0 ? (
                <ArrowUp className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDown className="mr-1 h-3 w-3" />
              )}
              {Math.abs(trend)}%
            </div>
          )}
        </div>
        <p className="mt-2 text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}

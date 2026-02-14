import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface DocCardProps {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
  href: string
}

export function DocCard({
  icon: Icon,
  title,
  description,
  items,
  href,
}: DocCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="h-full transition-colors hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Icon className="h-8 w-8 text-primary" />
            <CardTitle>{title}</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-sm font-medium">주요 내용</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Link>
  )
}

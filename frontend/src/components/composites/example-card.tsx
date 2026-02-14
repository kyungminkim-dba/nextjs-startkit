import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ExampleCardProps {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  href: string
}

export function ExampleCard({
  icon: Icon,
  title,
  description,
  tags,
  href,
}: ExampleCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Icon className="h-10 w-10 text-primary" />
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={href}>예제 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

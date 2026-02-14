import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  description: string
  centered?: boolean
}

export function PageHeader({
  title,
  description,
  centered = false,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        'container mx-auto py-10',
        centered && 'text-center',
      )}
    >
      <h1
        className={cn(
          'text-4xl font-bold tracking-tighter',
          centered && 'mx-auto max-w-[700px]',
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          'mt-2 text-lg text-muted-foreground',
          centered && 'mx-auto max-w-[700px]',
        )}
      >
        {description}
      </p>
    </div>
  )
}

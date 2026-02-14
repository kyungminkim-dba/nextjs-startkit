import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

interface AuthCardProps {
  title: string
  description: string
  children: React.ReactNode
  footer?: {
    text: string
    linkText: string
    linkHref: string
  }
}

export function AuthCard({
  title,
  description,
  children,
  footer,
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && (
        <CardFooter className="flex justify-center">
          <p className="text-center text-sm text-muted-foreground">
            {footer.text}{' '}
            <Link
              href={footer.linkHref}
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              {footer.linkText}
            </Link>
          </p>
        </CardFooter>
      )}
    </Card>
  )
}

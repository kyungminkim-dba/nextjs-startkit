import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'
import { SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Twitter,
}

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with Next.js & FastAPI. &copy;{' '}
          {new Date().getFullYear()} {SITE_CONFIG.name}
        </p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = iconMap[link.icon]
            if (!Icon) return null
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

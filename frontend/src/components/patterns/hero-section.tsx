import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="container mx-auto grid place-items-center gap-10 py-20 md:py-32">
      <div className="space-y-6 text-center">
        <Badge variant="secondary" className="text-sm">
          NextJS Starter
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Build Modern Web Apps{' '}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Faster
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          Full-stack starter with Next.js 16, FastAPI, Tailwind CSS, and
          shadcn/ui. Production-ready architecture out of the box.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/examples">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

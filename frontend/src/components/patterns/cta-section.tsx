import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="container mx-auto py-20">
      <div className="rounded-lg border bg-card p-8 text-center md:p-12">
        <h2 className="text-3xl font-bold tracking-tighter">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Start building your next project with our production-ready starter
          kit.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <Link href="/register">Start Building Now</Link>
        </Button>
      </div>
    </section>
  )
}

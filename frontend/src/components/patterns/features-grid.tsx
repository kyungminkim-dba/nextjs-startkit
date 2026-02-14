import { FeatureCard } from '@/components/composites/feature-card'
import { Zap, Shield, Layers, Sparkles, Palette, Server } from 'lucide-react'

const FEATURES = [
  {
    icon: Zap,
    title: 'Fast Development',
    description:
      'Start building immediately with pre-configured project setup and hot reload.',
    badge: 'Performance',
  },
  {
    icon: Shield,
    title: 'Type Safe',
    description:
      'Full TypeScript strict mode across frontend and backend for reliable code.',
    badge: 'Reliability',
  },
  {
    icon: Layers,
    title: 'Component Library',
    description:
      '40+ shadcn/ui components organized in a 4-tier architecture.',
    badge: 'UI/UX',
  },
  {
    icon: Sparkles,
    title: 'Modern Stack',
    description:
      'Next.js 16, FastAPI, TanStack Query v5, and Tailwind CSS v4.',
    badge: 'Technology',
  },
  {
    icon: Palette,
    title: 'Dark Mode',
    description:
      'Built-in theme system with light, dark, and system preference support.',
    badge: 'Theming',
  },
  {
    icon: Server,
    title: 'API Ready',
    description:
      'FastAPI backend with health checks, CORS, and axios client pre-configured.',
    badge: 'Backend',
  },
]

export function FeaturesGrid() {
  return (
    <section className="container mx-auto py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Everything You Need
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Built with the latest technologies and best practices
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}

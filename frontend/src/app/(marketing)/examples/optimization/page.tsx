import { PageHeader } from '@/components/patterns/page-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card'

const TOPICS = [
  {
    id: 'metadata',
    title: '메타데이터 설정',
    content: [
      {
        subtitle: 'app/layout.tsx',
        description:
          'Next.js App Router에서 메타데이터는 layout.tsx 또는 page.tsx에서 metadata 객체를 export하여 설정합니다.',
        code: `export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: 'A modern fullstack starter kit',
}`,
      },
      {
        subtitle: '동적 메타데이터',
        description:
          'generateMetadata 함수를 사용하면 동적으로 메타데이터를 생성할 수 있습니다.',
        code: `export async function generateMetadata({ params }) {
  return { title: \`Page - \${params.id}\` }
}`,
      },
    ],
  },
  {
    id: 'env',
    title: '환경변수',
    content: [
      {
        subtitle: '프론트엔드 (.env.local)',
        description:
          'NEXT_PUBLIC_ 접두사가 붙은 변수만 클라이언트에서 접근 가능합니다.',
        code: `NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1`,
      },
      {
        subtitle: '백엔드 (.env)',
        description:
          'pydantic-settings를 통해 타입 안전하게 환경변수를 관리합니다.',
        code: `APP_NAME=NextJS Starter Backend
CORS_ORIGINS=["http://localhost:3000"]
DEBUG=true`,
      },
    ],
  },
  {
    id: 'seo',
    title: 'SEO 최적화',
    content: [
      {
        subtitle: 'sitemap.xml',
        description:
          'app/sitemap.ts 파일을 생성하여 사이트맵을 자동으로 생성할 수 있습니다.',
        code: `export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://example.com', lastModified: new Date() },
    { url: 'https://example.com/about', lastModified: new Date() },
  ]
}`,
      },
      {
        subtitle: 'robots.txt',
        description:
          'app/robots.ts 파일로 크롤러 접근을 제어합니다.',
        code: `export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://example.com/sitemap.xml',
  }
}`,
      },
    ],
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS v4',
    content: [
      {
        subtitle: '새로운 import 문법',
        description:
          'Tailwind v4에서는 @tailwind 디렉티브 대신 @import를 사용합니다.',
        code: `/* globals.css */
@import "tailwindcss";`,
      },
      {
        subtitle: 'oklch 색상 시스템',
        description:
          'globals.css에서 oklch 색상 변수를 사용하여 테마를 정의합니다. 라이트/다크 모드 색상이 CSS 변수로 관리됩니다.',
        code: `:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
}
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
}`,
      },
      {
        subtitle: 'cn() 유틸리티',
        description:
          'clsx + tailwind-merge 조합으로 조건부 클래스를 병합합니다.',
        code: `import { cn } from '@/lib/utils'

<div className={cn(
  'base-class',
  isActive && 'active-class',
  className
)} />`,
      },
    ],
  },
]

export default function OptimizationPage() {
  return (
    <>
      <PageHeader
        title="설정 및 최적화"
        description="프로젝트 설정, 환경변수, SEO, Tailwind v4 등 최적화 가이드입니다."
      />
      <div className="container mx-auto pb-20">
        <Accordion type="multiple" className="space-y-4">
          {TOPICS.map((topic) => (
            <AccordionItem key={topic.id} value={topic.id} className="border-none">
              <Card>
                <AccordionTrigger className="px-6 hover:no-underline">
                  <CardTitle>{topic.title}</CardTitle>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="space-y-6 pt-0">
                    {topic.content.map((item) => (
                      <div key={item.subtitle} className="space-y-2">
                        <h4 className="text-sm font-medium">
                          {item.subtitle}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-xs">
                          <code>{item.code}</code>
                        </pre>
                      </div>
                    ))}
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  )
}

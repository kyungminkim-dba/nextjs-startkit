import { PageHeader } from '@/components/patterns/page-header'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const STEPS = [
  {
    step: '1',
    title: '프로젝트 클론',
    description: '저장소를 클론하고 디렉토리로 이동합니다.',
    code: `git clone <repository-url>
cd claude-nextjs-starters`,
  },
  {
    step: '2',
    title: '프론트엔드 설정',
    description: '의존성을 설치하고 환경변수를 설정합니다.',
    code: `cd frontend
npm install

# .env.local 파일 생성
echo "NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1" > .env.local`,
  },
  {
    step: '3',
    title: '백엔드 설정',
    description: 'Python 가상환경을 생성하고 의존성을 설치합니다.',
    code: `cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt

# .env 파일 생성
echo 'APP_NAME=NextJS Starter Backend
CORS_ORIGINS=["http://localhost:3000"]
DEBUG=true' > .env`,
  },
  {
    step: '4',
    title: '개발 서버 실행',
    description: '프론트엔드와 백엔드 개발 서버를 각각 실행합니다.',
    code: `# 터미널 1: 프론트엔드 (포트 3000)
cd frontend && npm run dev

# 터미널 2: 백엔드 (포트 8000)
cd backend && uvicorn app.main:app --reload`,
  },
]

const STRUCTURE = `frontend/
├── src/
│   ├── app/                    # App Router 라우트
│   │   ├── (marketing)/        # 마케팅 페이지 그룹
│   │   ├── (dashboard)/        # 대시보드 그룹
│   │   └── (auth)/             # 인증 그룹
│   ├── components/
│   │   ├── ui/                 # Tier 1: shadcn/ui 프리미티브
│   │   ├── composites/         # Tier 2: 조합 컴포넌트
│   │   ├── patterns/           # Tier 3: 페이지 섹션
│   │   └── providers/          # Context Provider
│   ├── hooks/                  # 커스텀 훅
│   │   └── api/                # API 관련 훅
│   └── lib/                    # 유틸리티, API 클라이언트
│       ├── api/                # axios 클라이언트, 엔드포인트
│       ├── constants.ts        # 사이트 설정, 네비게이션
│       └── utils.ts            # cn() 등 유틸리티
backend/
├── app/
│   ├── core/config.py          # pydantic-settings 설정
│   ├── routers/                # API 라우터
│   ├── schemas/                # Pydantic v2 스키마
│   └── services/               # 비즈니스 로직
└── requirements.txt`

export default function GettingStartedPage() {
  return (
    <>
      <PageHeader
        title="시작하기"
        description="프로젝트 설치부터 개발 서버 실행까지의 단계별 가이드입니다."
      />
      <div className="container mx-auto pb-20 space-y-8">
        <div className="space-y-4">
          {STEPS.map((step) => (
            <Card key={step.step}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge>{step.step}</Badge>
                  <CardTitle>{step.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                  <code>{step.code}</code>
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>프로젝트 구조</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
              <code>{STRUCTURE}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

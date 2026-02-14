'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/patterns/page-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import {
  AlertCircle,
  Check,
  Copy,
  Download,
  Heart,
  Loader2,
  Mail,
  Plus,
  Trash2,
} from 'lucide-react'

export default function ComponentsPage() {
  const [progress, setProgress] = useState(45)
  const [sliderValue, setSliderValue] = useState([50])
  const [loading, setLoading] = useState(false)

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <>
      <PageHeader
        title="컴포넌트 쇼케이스"
        description="shadcn/ui 기반 컴포넌트들을 카테고리별로 확인하세요."
      />
      <div className="container mx-auto pb-20">
        <Tabs defaultValue="buttons">
          <TabsList>
            <TabsTrigger value="buttons">버튼</TabsTrigger>
            <TabsTrigger value="inputs">입력</TabsTrigger>
            <TabsTrigger value="feedback">피드백</TabsTrigger>
            <TabsTrigger value="display">데이터 표시</TabsTrigger>
          </TabsList>

          {/* 버튼 탭 */}
          <TabsContent value="buttons" className="space-y-8 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  다양한 스타일의 버튼 컴포넌트
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <Separator />
                <div className="flex flex-wrap gap-3">
                  <Button size="xs">XS</Button>
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                </div>
                <Separator />
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <Mail /> 이메일 전송
                  </Button>
                  <Button variant="outline">
                    <Download /> 다운로드
                  </Button>
                  <Button variant="secondary">
                    <Heart /> 좋아요
                  </Button>
                  <Button variant="destructive">
                    <Trash2 /> 삭제
                  </Button>
                </div>
                <Separator />
                <div className="flex flex-wrap gap-3">
                  <Button disabled>비활성화</Button>
                  <Button onClick={handleLoadingClick} disabled={loading}>
                    {loading && <Loader2 className="animate-spin" />}
                    {loading ? '로딩 중...' : '로딩 시연'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badge</CardTitle>
                <CardDescription>
                  상태나 카테고리를 표시하는 뱃지
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 입력 탭 */}
          <TabsContent value="inputs" className="space-y-8 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>텍스트 입력</CardTitle>
                <CardDescription>Input, Textarea 컴포넌트</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>이메일</Label>
                    <Input type="email" placeholder="user@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>비밀번호</Label>
                    <Input type="password" placeholder="비밀번호 입력" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>메시지</Label>
                  <Textarea placeholder="메시지를 입력하세요..." />
                </div>
                <div className="space-y-2">
                  <Label>비활성화</Label>
                  <Input disabled placeholder="비활성화된 입력" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>선택 컴포넌트</CardTitle>
                <CardDescription>
                  Select, Checkbox, Switch 컴포넌트
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>프레임워크 선택</Label>
                  <Select>
                    <SelectTrigger className="w-full sm:w-[200px]">
                      <SelectValue placeholder="선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                      <SelectItem value="svelte">Svelte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label>관심 분야</Label>
                  <div className="space-y-3">
                    {['프론트엔드', '백엔드', '데브옵스', 'AI/ML'].map(
                      (item) => (
                        <div key={item} className="flex items-center gap-2">
                          <Checkbox id={item} />
                          <Label htmlFor={item} className="font-normal">
                            {item}
                          </Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">알림 받기</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Slider</CardTitle>
                <CardDescription>범위 선택 슬라이더</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>볼륨: {sliderValue[0]}%</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 피드백 탭 */}
          <TabsContent value="feedback" className="space-y-8 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Toast 알림</CardTitle>
                <CardDescription>sonner 기반 토스트 메시지</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => toast.success('성공적으로 저장되었습니다.')}
                  >
                    <Check /> 성공
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => toast.error('오류가 발생했습니다.')}
                  >
                    <AlertCircle /> 에러
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toast.info('참고 정보입니다.')}
                  >
                    정보
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      toast('이벤트가 생성되었습니다.', {
                        description: '2026년 2월 15일 오전 9:00',
                        action: {
                          label: '취소',
                          onClick: () => toast.info('취소되었습니다.'),
                        },
                      })
                    }
                  >
                    액션 포함
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progress</CardTitle>
                <CardDescription>진행 상태 표시</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>진행률</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setProgress(Math.max(0, progress - 10))}
                  >
                    -10
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                  >
                    <Plus className="size-3" /> 10
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 데이터 표시 탭 */}
          <TabsContent value="display" className="space-y-8 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
                <CardDescription>로딩 플레이스홀더</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[200px]" />
                      <Skeleton className="h-4 w-[150px]" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-32 w-full" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card 레이아웃</CardTitle>
                <CardDescription>카드 컴포넌트 구성 예시</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: '총 매출',
                      value: '₩45,231,890',
                      change: '+20.1%',
                    },
                    {
                      title: '구독자',
                      value: '+2,350',
                      change: '+180.1%',
                    },
                    { title: '판매', value: '+12,234', change: '+19%' },
                    {
                      title: '활성 사용자',
                      value: '+573',
                      change: '+201',
                    },
                  ].map((stat) => (
                    <Card key={stat.title}>
                      <CardHeader className="pb-2">
                        <CardDescription>{stat.title}</CardDescription>
                        <CardTitle className="text-2xl">
                          {stat.value}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">
                          전월 대비{' '}
                          <span className="text-emerald-600">
                            {stat.change}
                          </span>
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Copy to Clipboard</CardTitle>
                <CardDescription>
                  클릭하여 텍스트를 클립보드에 복사
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <code className="rounded bg-muted px-3 py-2 text-sm">
                    npm create next-app@latest
                  </code>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        'npm create next-app@latest',
                      )
                      toast.success('클립보드에 복사되었습니다.')
                    }}
                  >
                    <Copy />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

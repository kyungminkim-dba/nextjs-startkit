'use client'

import { useState, useEffect } from 'react'
import { PageHeader } from '@/components/patterns/page-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useMounted } from '@/hooks/use-mounted'
import { useIsMobile } from '@/hooks/use-mobile'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Minus, Plus, Play, Square, RotateCcw } from 'lucide-react'

function MountedDemo() {
  const mounted = useMounted()

  return (
    <Card>
      <CardHeader>
        <CardTitle>useMounted</CardTitle>
        <CardDescription>
          컴포넌트의 마운트 상태를 추적합니다. SSR에서 hydration mismatch를
          방지하는 데 유용합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">마운트 상태:</span>
          <Badge variant={mounted ? 'default' : 'secondary'}>
            {mounted ? '마운트됨' : '마운트 대기'}
          </Badge>
        </div>
        <div className="rounded-md bg-muted p-3">
          <code className="text-sm">
            {`const mounted = useMounted()`}
            <br />
            {`// SSR: false → 클라이언트: true`}
          </code>
        </div>
      </CardContent>
    </Card>
  )
}

function MobileDemo() {
  const isMobile = useIsMobile()

  return (
    <Card>
      <CardHeader>
        <CardTitle>useIsMobile</CardTitle>
        <CardDescription>
          현재 뷰포트가 모바일 크기(768px 미만)인지 감지합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">현재 디바이스:</span>
          <Badge variant={isMobile ? 'destructive' : 'default'}>
            {isMobile ? '모바일' : '데스크톱'}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          브라우저 창 크기를 조절하여 변화를 확인하세요.
        </p>
        <div className="rounded-md bg-muted p-3">
          <code className="text-sm">
            {`const isMobile = useIsMobile()`}
            <br />
            {`// < 768px: true, >= 768px: false`}
          </code>
        </div>
      </CardContent>
    </Card>
  )
}

function MediaQueryDemo() {
  const isLarge = useMediaQuery('(min-width: 1024px)')
  const isDark = useMediaQuery('(prefers-color-scheme: dark)')
  const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  return (
    <Card>
      <CardHeader>
        <CardTitle>useMediaQuery</CardTitle>
        <CardDescription>
          임의의 CSS 미디어 쿼리를 실시간 감지합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">큰 화면 (≥1024px)</span>
            <Badge variant={isLarge ? 'default' : 'secondary'}>
              {isLarge ? 'Yes' : 'No'}
            </Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm">다크 모드 선호</span>
            <Badge variant={isDark ? 'default' : 'secondary'}>
              {isDark ? 'Yes' : 'No'}
            </Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm">모션 감소 선호</span>
            <Badge variant={isReducedMotion ? 'default' : 'secondary'}>
              {isReducedMotion ? 'Yes' : 'No'}
            </Badge>
          </div>
        </div>
        <div className="rounded-md bg-muted p-3">
          <code className="text-sm">
            {`const matches = useMediaQuery('(min-width: 1024px)')`}
          </code>
        </div>
      </CardContent>
    </Card>
  )
}

function CounterDemo() {
  const [count, setCount] = useState(0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>카운터</CardTitle>
        <CardDescription>
          useState를 활용한 간단한 카운터 예제
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setCount((c) => c - 1)}
          >
            <Minus />
          </Button>
          <span className="w-16 text-center text-3xl font-bold tabular-nums">
            {count}
          </span>
          <Button
            size="icon"
            variant="outline"
            onClick={() => setCount((c) => c + 1)}
          >
            <Plus />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCount(0)}
          >
            <RotateCcw className="size-3" />
            초기화
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function TimerDemo() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const interval = setInterval(() => setTime((t) => t + 10), 10)
    return () => clearInterval(interval)
  }, [running])

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    const centiseconds = Math.floor((ms % 1000) / 10)
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>스톱워치</CardTitle>
        <CardDescription>
          useEffect + setInterval을 활용한 타이머
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center font-mono text-4xl font-bold tabular-nums">
          {formatTime(time)}
        </div>
        <div className="flex justify-center gap-2">
          <Button
            variant={running ? 'destructive' : 'default'}
            onClick={() => setRunning(!running)}
          >
            {running ? <Square className="size-3" /> : <Play className="size-3" />}
            {running ? '정지' : '시작'}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setRunning(false)
              setTime(0)
            }}
          >
            <RotateCcw className="size-3" />
            초기화
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function HooksPage() {
  return (
    <>
      <PageHeader
        title="커스텀 훅 예제"
        description="프로젝트에 포함된 커스텀 훅과 React 훅 활용 패턴을 확인하세요."
      />
      <div className="container mx-auto pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <MountedDemo />
          <MobileDemo />
          <MediaQueryDemo />
          <CounterDemo />
          <TimerDemo />
        </div>
      </div>
    </>
  )
}

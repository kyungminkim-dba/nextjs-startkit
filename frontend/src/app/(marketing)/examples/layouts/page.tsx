'use client'

import { PageHeader } from '@/components/patterns/page-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export default function LayoutsPage() {
  return (
    <>
      <PageHeader
        title="레이아웃 예제"
        description="반응형 그리드, Resizable 패널, ScrollArea 등 레이아웃 패턴을 확인하세요."
      />
      <div className="container mx-auto pb-20">
        <Tabs defaultValue="grid">
          <TabsList>
            <TabsTrigger value="grid">반응형 그리드</TabsTrigger>
            <TabsTrigger value="resizable">Resizable 패널</TabsTrigger>
            <TabsTrigger value="scroll">ScrollArea</TabsTrigger>
          </TabsList>

          {/* 반응형 그리드 */}
          <TabsContent value="grid" className="space-y-8 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>1열 → 2열 → 3열 그리드</CardTitle>
                <CardDescription>
                  화면 크기에 따라 자동으로 열 수가 변경됩니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div
                      key={i}
                      className="flex h-24 items-center justify-center rounded-lg border bg-muted text-sm font-medium"
                    >
                      항목 {i + 1}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>사이드바 + 콘텐츠 레이아웃</CardTitle>
                <CardDescription>
                  고정 사이드바와 유동적 콘텐츠 영역
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="hidden w-48 shrink-0 rounded-lg border bg-muted p-4 sm:block">
                    <p className="mb-3 text-sm font-medium">사이드바</p>
                    {['메뉴 1', '메뉴 2', '메뉴 3', '메뉴 4'].map((item) => (
                      <p
                        key={item}
                        className="py-1 text-sm text-muted-foreground"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="flex-1 rounded-lg border p-4">
                    <p className="text-sm font-medium">콘텐츠 영역</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      이 영역은 남은 공간을 모두 차지합니다. 사이드바는 sm
                      브레이크포인트 이상에서만 표시됩니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Masonry 스타일 그리드</CardTitle>
                <CardDescription>
                  다양한 높이의 카드를 배치하는 패턴
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                  {[120, 180, 100, 200, 140, 160, 110, 190, 130].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="mb-4 break-inside-avoid rounded-lg border bg-muted p-4"
                        style={{ height }}
                      >
                        <p className="text-sm font-medium">카드 {i + 1}</p>
                        <p className="text-xs text-muted-foreground">
                          높이: {height}px
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resizable 패널 */}
          <TabsContent value="resizable" className="space-y-8 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>가로 분할</CardTitle>
                <CardDescription>
                  핸들을 드래그하여 패널 크기를 조절하세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResizablePanelGroup
                  orientation="horizontal"
                  className="min-h-[200px] rounded-lg border"
                >
                  <ResizablePanel defaultSize={30} minSize={20}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm font-medium">사이드바</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={70} minSize={30}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm font-medium">콘텐츠</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>중첩 분할</CardTitle>
                <CardDescription>
                  가로/세로 방향을 중첩하여 복잡한 레이아웃 구성
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResizablePanelGroup
                  orientation="horizontal"
                  className="min-h-[300px] rounded-lg border"
                >
                  <ResizablePanel defaultSize={25} minSize={15}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm font-medium">왼쪽</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={75}>
                    <ResizablePanelGroup orientation="vertical">
                      <ResizablePanel defaultSize={60}>
                        <div className="flex h-full items-center justify-center p-4">
                          <span className="text-sm font-medium">상단</span>
                        </div>
                      </ResizablePanel>
                      <ResizableHandle withHandle />
                      <ResizablePanel defaultSize={40}>
                        <div className="flex h-full items-center justify-center p-4">
                          <span className="text-sm font-medium">하단</span>
                        </div>
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ScrollArea */}
          <TabsContent value="scroll" className="space-y-8 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>세로 스크롤</CardTitle>
                <CardDescription>
                  고정 높이 영역에 스크롤 가능한 콘텐츠
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] rounded-md border p-4">
                  {Array.from({ length: 30 }, (_, i) => (
                    <div key={i}>
                      <div className="py-2 text-sm">
                        <span className="font-medium">항목 {i + 1}</span>
                        <span className="ml-2 text-muted-foreground">
                          스크롤하여 더 많은 항목을 확인하세요.
                        </span>
                      </div>
                      {i < 29 && <Separator />}
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>가로 스크롤</CardTitle>
                <CardDescription>
                  가로로 스크롤 가능한 콘텐츠 영역
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full rounded-md border">
                  <div className="flex gap-4 p-4">
                    {Array.from({ length: 15 }, (_, i) => (
                      <div
                        key={i}
                        className="flex h-32 w-40 shrink-0 items-center justify-center rounded-lg border bg-muted"
                      >
                        <span className="text-sm font-medium">
                          카드 {i + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

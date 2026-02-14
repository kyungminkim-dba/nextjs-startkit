'use client'

import { PageHeader } from '@/components/patterns/page-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

// 회원가입 폼 스키마
const signupSchema = z
  .object({
    name: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
    email: z.string().email('올바른 이메일 주소를 입력하세요.'),
    password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
    confirmPassword: z.string(),
    terms: z.boolean().refine((v) => v, '약관에 동의해야 합니다.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

type SignupFormData = z.infer<typeof signupSchema>

// 설문조사 폼 스키마
const surveySchema = z.object({
  experience: z.string().min(1, '경험을 선택해주세요.'),
  framework: z.string().min(1, '프레임워크를 선택해주세요.'),
  feedback: z
    .string()
    .min(10, '피드백은 10자 이상 작성해주세요.')
    .max(500, '피드백은 500자 이하로 작성해주세요.'),
})

type SurveyFormData = z.infer<typeof surveySchema>

function SignupForm() {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  })

  function onSubmit(data: SignupFormData) {
    toast.success('회원가입 완료!', {
      description: `${data.name}님, 환영합니다!`,
    })
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
        <CardDescription>
          react-hook-form + zod 유효성 검증 예제
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="홍길동" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="user@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription>8자 이상 입력하세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex items-start gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal">
                      서비스 약관에 동의합니다
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              회원가입
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function SurveyForm() {
  const form = useForm<SurveyFormData>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      experience: '',
      framework: '',
      feedback: '',
    },
  })

  function onSubmit(data: SurveyFormData) {
    toast.success('설문 제출 완료!', {
      description: `선택: ${data.framework} (경험: ${data.experience})`,
    })
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>개발자 설문조사</CardTitle>
        <CardDescription>Select, Textarea를 활용한 폼 예제</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>개발 경험</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="경험을 선택하세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">입문 (1년 미만)</SelectItem>
                      <SelectItem value="intermediate">
                        중급 (1~3년)
                      </SelectItem>
                      <SelectItem value="advanced">고급 (3~5년)</SelectItem>
                      <SelectItem value="expert">전문가 (5년 이상)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="framework"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>선호 프레임워크</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="프레임워크를 선택하세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="nextjs">Next.js</SelectItem>
                      <SelectItem value="remix">Remix</SelectItem>
                      <SelectItem value="nuxt">Nuxt</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>피드백</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="이 스타터 킷에 대한 의견을 자유롭게 작성해주세요..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {field.value.length}/500자
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              설문 제출
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default function FormsPage() {
  return (
    <>
      <PageHeader
        title="폼 예제"
        description="react-hook-form과 zod를 활용한 다양한 폼 패턴을 확인하세요."
      />
      <div className="container mx-auto pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <SignupForm />
          <SurveyForm />
        </div>
      </div>
    </>
  )
}

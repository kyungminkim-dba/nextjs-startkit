'use client'

import { AuthCard } from '@/components/patterns/auth-card'
import { PasswordInput } from '@/components/composites/password-input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type FormValues = z.infer<typeof formSchema>

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  })

  function onSubmit(data: FormValues) {
    // 이메일에서 mock 사용자 이름 생성 (예: john.doe@example.com → John Doe)
    const namePart = data.email.split('@')[0]
    const name = namePart
      .split(/[._-]/)
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ')

    login(
      { id: crypto.randomUUID(), name, email: data.email },
      `mock-jwt-token-${crypto.randomUUID()}`
    )

    toast.success('Login successful')
    router.push('/dashboard')
  }

  return (
    <AuthCard
      title="Welcome back"
      description="Enter your credentials to login"
      footer={{
        text: "Don't have an account?",
        linkText: 'Sign up',
        linkHref: '/register',
      }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Enter password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </AuthCard>
  )
}

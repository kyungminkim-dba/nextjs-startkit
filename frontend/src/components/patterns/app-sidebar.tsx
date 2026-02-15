'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Settings, Home, type LucideIcon } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { UserMenu } from '@/components/composites/user-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { SITE_CONFIG, DASHBOARD_NAV_ITEMS } from '@/lib/constants'

const ICON_MAP: Record<string, LucideIcon> = {
  LayoutDashboard,
  Settings,
}

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
    router.push('/login')
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-4 py-2 font-bold"
        >
          <Home className="h-5 w-5" />
          {SITE_CONFIG.name}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {DASHBOARD_NAV_ITEMS.map((item) => {
                const Icon = ICON_MAP[item.icon]
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                    >
                      <Link href={item.href}>
                        {Icon && <Icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {user ? (
          <SidebarMenu>
            <SidebarMenuItem>
              <UserMenu user={user} onLogout={handleLogout} />
            </SidebarMenuItem>
          </SidebarMenu>
        ) : (
          <div className="px-4 py-2 text-xs text-muted-foreground">v1.0.0</div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}

'use client'

import { createContext, useCallback, useSyncExternalStore } from 'react'
import type { User } from '@/types'

interface AuthContextValue {
  user: User | null
  login: (user: User, token?: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

const STORAGE_KEY_USER = 'auth_user'
const STORAGE_KEY_TOKEN = 'auth_token'

// localStorage 외부 스토어 동기화
let listeners: (() => void)[] = []

function emitChange() {
  listeners.forEach((l) => l())
}

function subscribe(callback: () => void) {
  listeners.push(callback)
  return () => {
    listeners = listeners.filter((l) => l !== callback)
  }
}

// 참조 동일성 유지를 위한 캐싱
let cachedRaw: string | null = null
let cachedUser: User | null = null

function getSnapshot(): User | null {
  const raw = localStorage.getItem(STORAGE_KEY_USER)
  if (raw !== cachedRaw) {
    cachedRaw = raw
    if (!raw) {
      cachedUser = null
    } else {
      try {
        cachedUser = JSON.parse(raw)
      } catch {
        localStorage.removeItem(STORAGE_KEY_USER)
        cachedUser = null
      }
    }
  }
  return cachedUser
}

function getServerSnapshot(): User | null {
  return null
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const login = useCallback((newUser: User, token?: string) => {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(newUser))
    if (token) {
      localStorage.setItem(STORAGE_KEY_TOKEN, token)
    }
    emitChange()
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY_USER)
    localStorage.removeItem(STORAGE_KEY_TOKEN)
    cachedRaw = null
    cachedUser = null
    emitChange()
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

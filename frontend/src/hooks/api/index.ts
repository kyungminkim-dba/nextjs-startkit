import { useQuery } from '@tanstack/react-query'
import { apiGet } from '@/lib/api/client'
import { API_ENDPOINTS } from '@/lib/api/endpoints'
import type { HealthCheckResponse } from '@/lib/api/types'

export function useHealthCheck() {
  return useQuery({
    queryKey: ['health'],
    queryFn: () => apiGet<HealthCheckResponse>(API_ENDPOINTS.HEALTH),
  })
}

import { StatCard } from '@/components/composites/stat-card'

export function StatsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Total Users" value="2,543" trend={12} />
      <StatCard label="Revenue" value="$45,231" trend={8} />
      <StatCard label="Active Now" value="573" trend={-3} />
      <StatCard label="Conversion" value="3.24%" trend={5} />
    </div>
  )
}

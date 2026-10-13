import { openingHours } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

export function OpeningHours({ className }: { className?: string }) {
  return (
    <dl className={cn('flex flex-col divide-y divide-border', className)}>
      {openingHours.map((item) => (
        <div key={item.days} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <dt className="font-medium">{item.days}</dt>
          <dd className="text-sm text-muted-foreground sm:text-right">{item.hours}</dd>
        </div>
      ))}
    </dl>
  )
}

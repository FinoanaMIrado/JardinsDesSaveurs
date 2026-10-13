import { restaurant } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden bg-muted', className)}>
      <iframe
        title={`Carte : ${restaurant.name}, ${restaurant.address}`}
        src={restaurant.mapSrc}
        className="size-full border-0 grayscale-[30%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}

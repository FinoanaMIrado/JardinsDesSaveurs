import Image from 'next/image'
import { Flame, Leaf, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { formatPrice, type MenuBadge, type MenuItem } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

const badgeIcons: Record<MenuBadge, React.ComponentType<{ className?: string }>> = {
  Végétarien: Leaf,
  Épicé: Flame,
  Nouveau: Sparkles,
}

const badgeStyles: Record<MenuBadge, string> = {
  Végétarien: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  Épicé: 'bg-red-50 text-red-800 border-red-200',
  Nouveau: 'bg-accent text-accent-foreground border-primary/20',
}

export function MenuBadges({ badges }: { badges?: MenuBadge[] }) {
  if (!badges?.length) return null
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Caractéristiques">
      {badges.map((badge) => {
        const Icon = badgeIcons[badge]
        return (
          <li key={badge}>
            <Badge variant="outline" className={cn('gap-1 rounded-full', badgeStyles[badge])}>
              <Icon className="size-3" aria-hidden="true" />
              {badge}
            </Badge>
          </li>
        )
      })}
    </ul>
  )
}

export function MenuItemCard({ item, variant = 'list' }: { item: MenuItem; variant?: 'list' | 'feature' }) {
  if (variant === 'feature') {
    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          {item.image && (
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl leading-snug font-medium">{item.name}</h3>
            <p className="shrink-0 font-serif text-lg text-primary">{formatPrice(item.price)}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex gap-4 rounded-2xl p-3 transition-colors hover:bg-card sm:gap-5 sm:p-4">
      {item.image ? (
        <div className="relative size-20 shrink-0 overflow-hidden rounded-xl sm:size-24">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="96px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-baseline gap-3">
          <h3 className="text-lg leading-snug font-medium sm:text-xl">{item.name}</h3>
          <span className="mb-1 hidden flex-1 border-b border-dotted border-foreground/25 sm:block" aria-hidden="true" />
          <p className="ml-auto shrink-0 font-serif text-lg text-primary sm:ml-0">{formatPrice(item.price)}</p>
        </div>
        <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{item.description}</p>
        <MenuBadges badges={item.badges} />
      </div>
    </article>
  )
}

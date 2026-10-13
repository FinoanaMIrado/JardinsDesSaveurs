import Link from 'next/link'
import { Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link href="/" className={cn('group flex items-center gap-2.5', className)} aria-label="Le Jardin des Saveurs — Accueil">
      <span
        className={cn(
          'flex size-9 items-center justify-center rounded-full border transition-colors',
          inverted ? 'border-ink-foreground/30 text-primary' : 'border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground',
        )}
      >
        <Leaf className="size-4" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('text-[0.65rem] tracking-[0.25em] uppercase', inverted ? 'text-ink-foreground/60' : 'text-muted-foreground')}>
          Le Jardin
        </span>
        <span className={cn('font-serif text-lg', inverted ? 'text-white' : 'text-foreground')}>des Saveurs</span>
      </span>
    </Link>
  )
}

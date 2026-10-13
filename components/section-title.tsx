import { cn } from '@/lib/utils'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  id?: string
  className?: string
}

export function SectionTitle({ eyebrow, title, description, align = 'center', as: Heading = 'h2', id, className }: SectionTitleProps) {
  return (
    <div className={cn('flex max-w-2xl flex-col gap-4', align === 'center' && 'mx-auto items-center text-center', className)}>
      {eyebrow && (
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
          <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
          {eyebrow}
          {align === 'center' && <span className="h-px w-8 bg-primary/60" aria-hidden="true" />}
        </p>
      )}
      <Heading id={id} className="text-4xl leading-tight font-medium sm:text-5xl">
        {title}
      </Heading>
      {description && <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  )
}

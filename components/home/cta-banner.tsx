import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CtaBanner({ title = 'Réservez votre table dès maintenant' }: { title?: string }) {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
        <Image src="/images/interior.png" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25 mix-blend-multiply" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/90 to-primary/70" aria-hidden="true" />
        <h2 id="cta-title" className="mx-auto max-w-2xl text-4xl leading-tight font-medium sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
          Réservation en ligne en moins d&apos;une minute. Vous choisirez vos plats directement sur place, en toute tranquillité.
        </p>
        <Link
          href="/reservation"
          className={cn(
            buttonVariants({ variant: 'secondary', size: 'lg' }),
            'mt-8 h-12 rounded-full bg-background px-8 text-base text-foreground hover:bg-background/90',
          )}
        >
          <CalendarDays data-icon="inline-start" aria-hidden="true" />
          Réserver une table
        </Link>
      </div>
    </section>
  )
}

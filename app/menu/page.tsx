import type { Metadata } from 'next'
import Image from 'next/image'
import { Info } from 'lucide-react'
import { CtaBanner } from '@/components/home/cta-banner'
import { MenuTabs } from '@/components/menu/menu-tabs'
import { SectionTitle } from '@/components/section-title'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Découvrez la carte du Jardin des Saveurs : entrées, plats, desserts et boissons, avec les prix en Ariary.',
}

export default function MenuPage() {
  return (
    <main>
      <section aria-labelledby="menu-title" className="relative isolate overflow-hidden bg-ink py-20 text-ink-foreground sm:py-28">
        <Image src="/images/poisson.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 to-ink" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            as="h1"
            id="menu-title"
            eyebrow="La carte"
            title="Notre menu"
            description="Une carte courte, renouvelée au fil des saisons et des arrivages du marché."
            className="[&_h1]:text-white [&_p:last-child]:text-ink-foreground/80"
          />
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <MenuTabs />

        <aside className="mt-16 flex items-start gap-4 rounded-2xl border border-primary/20 bg-accent/50 p-6">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="leading-relaxed text-foreground/85">
            Le menu est consultable sur place et en ligne. La réservation concerne uniquement votre table.
            <span className="mt-1 block text-sm text-muted-foreground">
              Prix nets en Ariary, service compris. Merci de signaler toute allergie à notre équipe.
            </span>
          </p>
        </aside>
      </div>

      <CtaBanner title="Envie de goûter ? Réservez votre table" />
    </main>
  )
}

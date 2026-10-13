import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MenuItemCard } from '@/components/menu-item-card'
import { Reveal } from '@/components/reveal'
import { SectionTitle } from '@/components/section-title'
import { menuItems } from '@/lib/restaurant'

export function SignatureDishes() {
  const dishes = menuItems.filter((item) => item.signature)

  return (
    <section aria-labelledby="signature-title" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="signature-title"
          eyebrow="La carte"
          title="Nos plats signature"
          description="Les assiettes que nos habitués redemandent, saison après saison."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, index) => (
            <li key={dish.id}>
              <Reveal delay={index * 100} className="h-full">
                <MenuItemCard item={dish} variant="feature" />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
          >
            Découvrir toute la carte
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

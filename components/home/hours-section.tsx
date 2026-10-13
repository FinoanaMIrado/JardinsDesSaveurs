import Image from 'next/image'
import { Clock, Phone } from 'lucide-react'
import { OpeningHours } from '@/components/opening-hours'
import { Reveal } from '@/components/reveal'
import { restaurant } from '@/lib/restaurant'

export function HoursSection() {
  return (
    <section aria-labelledby="hours-title" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
      <Reveal className="grid overflow-hidden rounded-3xl bg-card ring-1 ring-border lg:grid-cols-5">
        <div className="relative min-h-64 lg:col-span-2">
          <Image
            src="/images/chef.png"
            alt="Le chef prépare une assiette en cuisine"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 p-8 sm:p-12 lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-accent text-primary">
              <Clock className="size-5" aria-hidden="true" />
            </span>
            <h2 id="hours-title" className="text-3xl font-medium sm:text-4xl">
              Horaires d&apos;ouverture
            </h2>
          </div>
          <OpeningHours className="text-base" />
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            Une question ? Appelez-nous au{' '}
            <a href={`tel:${restaurant.phoneHref}`} className="font-medium text-foreground underline-offset-4 hover:underline">
              {restaurant.phone}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  )
}

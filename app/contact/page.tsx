import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'
import { MapEmbed } from '@/components/map-embed'
import { OpeningHours } from '@/components/opening-hours'
import { SectionTitle } from '@/components/section-title'
import { SocialLinks } from '@/components/social-links'
import { restaurant } from '@/lib/restaurant'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Le Jardin des Saveurs à Antananarivo : adresse, téléphone, email, horaires et plan d’accès.',
}

export default function ContactPage() {
  const details = [
    { Icon: MapPin, label: 'Adresse', value: `${restaurant.address}, ${restaurant.city}` },
    { Icon: Phone, label: 'Téléphone', value: restaurant.phone, href: `tel:${restaurant.phoneHref}` },
    { Icon: Mail, label: 'Email', value: restaurant.email, href: `mailto:${restaurant.email}` },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionTitle
        as="h1"
        eyebrow="Contact"
        title="Parlons-en autour d’une table"
        description="Une question, un événement privé, une demande particulière ? Écrivez-nous, nous vous répondons sous 24 heures."
      />

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-5 lg:gap-12">
        <section aria-labelledby="contact-form-title" className="rounded-3xl bg-card p-6 ring-1 ring-border sm:p-10 lg:col-span-3">
          <h2 id="contact-form-title" className="mb-6 font-serif text-2xl">
            Envoyez-nous un message
          </h2>
          <ContactForm />
        </section>

        <aside aria-labelledby="contact-details-title" className="flex flex-col gap-6 lg:col-span-2">
          <section className="rounded-3xl bg-ink p-6 text-ink-foreground sm:p-8">
            <h2 id="contact-details-title" className="mb-6 font-serif text-2xl text-white">
              Nos coordonnées
            </h2>
            <ul className="flex flex-col gap-5">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-xs tracking-wider text-ink-foreground/60 uppercase">{label}</span>
                    {href ? (
                      <a href={href} className="break-words text-white hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <span className="text-white">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-white uppercase">Réseaux sociaux</h3>
              <SocialLinks variant="dark" />
            </div>
          </section>

          <section aria-labelledby="contact-hours" className="rounded-3xl bg-card p-6 ring-1 ring-border sm:p-8">
            <h2 id="contact-hours" className="mb-4 flex items-center gap-2 font-serif text-xl">
              <Clock className="size-5 text-primary" aria-hidden="true" />
              Horaires d&apos;ouverture
            </h2>
            <OpeningHours className="text-sm" />
          </section>
        </aside>
      </div>

      <section aria-labelledby="map-title" className="mt-16">
        <h2 id="map-title" className="sr-only">
          Plan d&apos;accès
        </h2>
        <MapEmbed className="aspect-[4/3] rounded-3xl ring-1 ring-border sm:aspect-[21/9]" />
      </section>
    </main>
  )
}

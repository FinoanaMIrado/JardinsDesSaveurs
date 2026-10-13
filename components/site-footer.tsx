import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { MapEmbed } from '@/components/map-embed'
import { SocialLinks } from '@/components/social-links'
import { navLinks, openingHours, restaurant } from '@/lib/restaurant'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <section aria-labelledby="footer-location">
          <h2 id="footer-location" className="mb-4 font-serif text-xl text-white">
            Nous trouver
          </h2>
          <MapEmbed className="aspect-[4/3] rounded-xl" />
          <address className="mt-4 flex gap-3 text-sm not-italic leading-relaxed">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {restaurant.name}
              <br />
              {restaurant.address}
              <br />
              {restaurant.city}
            </span>
          </address>
        </section>

        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="mb-4 font-serif text-xl text-white">
            Contact & horaires
          </h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" aria-hidden="true" />
              <a href={`tel:${restaurant.phoneHref}`} className="hover:text-white">
                {restaurant.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              <a href={`mailto:${restaurant.email}`} className="break-all hover:text-white">
                {restaurant.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-primary" aria-hidden="true" />
              <span>
                {restaurant.address}, {restaurant.city}
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="mb-3 flex items-center gap-2 font-sans text-sm font-semibold tracking-wider text-white uppercase">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              Horaires d&apos;ouverture
            </h3>
            <dl className="flex flex-col gap-2 text-sm">
              {openingHours.map((item) => (
                <div key={item.days} className="flex flex-col">
                  <dt className="text-white">{item.days}</dt>
                  <dd className="text-ink-foreground/70">{item.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="footer-links" className="flex flex-col gap-8">
          <Logo inverted />
          <div>
            <h2 id="footer-links" className="mb-4 font-serif text-xl text-white">
              Liens rapides
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/reservation" className="transition-colors hover:text-primary">
                  Réserver une table
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-sans text-sm font-semibold tracking-wider text-white uppercase">Suivez-nous</h3>
            <SocialLinks variant="dark" />
          </div>
        </section>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 {restaurant.name}. Tous droits réservés.</p>
          <p>Cuisine maison · Produits locaux · Antananarivo</p>
        </div>
      </div>
    </footer>
  )
}

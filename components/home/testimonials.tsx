import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionTitle } from '@/components/section-title'
import { testimonials } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="testimonials-title" eyebrow="Témoignages" title="Ils nous ont rendu visite" />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <li key={t.name}>
              <Reveal delay={index * 120} className="h-full">
                <figure className="relative flex h-full flex-col gap-6 rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg">
                  <Quote className="absolute top-6 right-6 size-10 text-accent" aria-hidden="true" />
                  <div className="flex gap-0.5" role="img" aria-label={`Note : ${t.rating} sur 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn('size-4', i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-border')}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="flex-1 leading-relaxed text-foreground/85">
                    <p>« {t.quote} »</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                    <span className="flex size-10 items-center justify-center rounded-full bg-primary font-serif text-primary-foreground" aria-hidden="true">
                      {t.name.charAt(0)}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-medium">{t.name}</span>
                      <span className="text-sm text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

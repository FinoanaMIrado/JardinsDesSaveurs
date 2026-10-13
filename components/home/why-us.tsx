import { HandHeart, Sprout, Flame } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionTitle } from '@/components/section-title'

const reasons = [
  {
    Icon: Sprout,
    title: 'Produits frais',
    text: 'Des ingrédients sélectionnés chaque matin auprès de producteurs locaux, pour une cuisine de saison.',
  },
  {
    Icon: Flame,
    title: 'Ambiance chaleureuse',
    text: 'Une salle lumineuse, une terrasse ombragée et une atmosphère conviviale, du déjeuner au dîner.',
  },
  {
    Icon: HandHeart,
    title: 'Service attentionné',
    text: 'Une équipe aux petits soins, attentive à vos envies, vos allergies et vos occasions spéciales.',
  },
]

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionTitle id="why-title" eyebrow="Notre engagement" title="Pourquoi nous choisir" />
      <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
        {reasons.map(({ Icon, title, text }, index) => (
          <li key={title}>
            <Reveal delay={index * 120} className="flex flex-col items-center gap-5 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-accent text-primary ring-8 ring-accent/40">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-medium">{title}</h3>
              <p className="max-w-xs leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

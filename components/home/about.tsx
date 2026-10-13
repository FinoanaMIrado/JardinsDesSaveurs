import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionTitle } from '@/components/section-title'

const stats = [
  { value: '2014', label: 'Année d’ouverture' },
  { value: '80 %', label: 'Produits locaux' },
  { value: '60', label: 'Couverts' },
]

export function About() {
  return (
    <section id="a-propos" aria-labelledby="about-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/interior.png"
              alt="Salle du restaurant décorée de plantes et de tables en bois"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-8 hidden w-48 overflow-hidden rounded-2xl border-8 border-background shadow-xl sm:block lg:-right-10 lg:w-56">
            <div className="relative aspect-square">
              <Image src="/images/chef.png" alt="Notre chef dressant une assiette en cuisine" fill sizes="224px" className="object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-8">
          <SectionTitle
            id="about-title"
            eyebrow="À propos"
            title="Une maison de famille au cœur d’Isoraka"
            align="left"
          />
          <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              Tout a commencé en 2014, dans une ancienne villa aux volets bleus et à la cour plantée de
              manguiers. Le chef Andry Rakoto, formé à Lyon, y a ouvert la table qu&apos;il rêvait :
              simple, généreuse, et fidèle aux producteurs de la Grande Île.
            </p>
            <p>
              Chaque matin, nous composons nos assiettes avec ce que le marché d&apos;Analakely a de
              meilleur : zébu des hauts plateaux, poissons de la côte, vanille de Sambava et légumes de
              nos maraîchers partenaires.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs tracking-wide text-muted-foreground uppercase sm:text-sm sm:normal-case">{stat.label}</dt>
                <dd className="order-1 font-serif text-3xl text-primary sm:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { restaurant } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Assiette gastronomique dressée sur une table en bois à la lueur des bougies"
        fill
        priority
        sizes="100vw"
        className="-z-20 animate-in object-cover duration-[2000ms] fade-in zoom-in-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-in text-white duration-1000 fade-in slide-in-from-bottom-6">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-white/80 uppercase">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            Restaurant · Isoraka, Antananarivo
          </p>
          <h1 id="hero-title" className="text-5xl leading-[1.05] font-medium sm:text-6xl lg:text-7xl">
            {restaurant.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/85 sm:text-xl">{restaurant.tagline}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/reservation"
              className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full px-7 text-base hover:bg-primary/90')}
            >
              Réserver une table
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
            <Link
              href="/menu"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 rounded-full border-white/40 bg-white/10 px-7 text-base text-white backdrop-blur-sm hover:bg-white hover:text-foreground',
              )}
            >
              Voir le menu
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-white/80">
            <span className="flex text-amber-300" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span>4,8/5 · plus de 600 avis clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}

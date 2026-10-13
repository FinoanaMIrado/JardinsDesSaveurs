import type { Metadata } from 'next'
import { ReservationForm } from '@/components/reservation/reservation-form'
import { SectionTitle } from '@/components/section-title'

export const metadata: Metadata = {
  title: 'Réservation',
  description: 'Réservez votre table en ligne au Jardin des Saveurs. Vous choisirez vos plats directement au restaurant.',
}

export default function ReservationPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionTitle
        as="h1"
        eyebrow="Réservation"
        title="Réservez votre table"
        description="Réservez votre table. Vous choisirez vos plats directement au restaurant."
      />
      <div className="mt-12 lg:mt-16">
        <ReservationForm />
      </div>
    </main>
  )
}

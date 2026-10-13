import { CalendarDays, Clock, Info, Users } from 'lucide-react'
import { OpeningHours } from '@/components/opening-hours'
import { formatGuests, formatReservationDate, type ReservationData } from '@/lib/reservation'
import { cn } from '@/lib/utils'

export function ReservationSummary({ data }: { data: ReservationData }) {
  const rows = [
    { Icon: CalendarDays, label: 'Date', value: formatReservationDate(data.date) },
    { Icon: Clock, label: 'Heure', value: data.time?.replace(':', 'h') },
    { Icon: Users, label: 'Personnes', value: formatGuests(data.guests) },
  ]

  return (
    <aside aria-labelledby="summary-title" className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
      <section className="overflow-hidden rounded-3xl bg-ink text-ink-foreground">
        <div className="p-6 sm:p-8">
          <h2 id="summary-title" className="font-serif text-2xl text-white">
            Votre réservation
          </h2>
          <p className="mt-1 text-sm text-ink-foreground/70">Récapitulatif mis à jour en temps réel</p>
          <dl className="mt-6 flex flex-col gap-4" aria-live="polite">
            {rows.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="flex min-w-0 flex-col">
                  <dt className="text-xs tracking-wider text-ink-foreground/60 uppercase">{label}</dt>
                  <dd className={cn('truncate', value ? 'text-white' : 'text-ink-foreground/50 italic')}>{value ?? 'À choisir'}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <p className="flex gap-3 border-t border-white/10 bg-white/5 px-6 py-4 text-sm text-ink-foreground/80 sm:px-8">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          Seule votre table est réservée. Vous choisirez vos plats sur place.
        </p>
      </section>

      <section aria-labelledby="summary-hours" className="rounded-3xl bg-card p-6 ring-1 ring-border sm:p-8">
        <h2 id="summary-hours" className="mb-4 font-serif text-xl">
          Horaires d&apos;ouverture
        </h2>
        <OpeningHours className="text-sm" />
      </section>
    </aside>
  )
}

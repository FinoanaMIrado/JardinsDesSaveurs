'use client'

import Link from 'next/link'
import { CalendarDays, CircleCheck, Clock, Mail, User, Users } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { formatGuests, formatReservationDate, type ReservationData } from '@/lib/reservation'
import { cn } from '@/lib/utils'

export function ReservationSuccess({ reservation, onClose }: { reservation: ReservationData | null; onClose: () => void }) {
  const rows = reservation
    ? [
        { Icon: CalendarDays, label: 'Date', value: formatReservationDate(reservation.date) },
        { Icon: Clock, label: 'Heure', value: reservation.time?.replace(':', 'h') },
        { Icon: Users, label: 'Personnes', value: formatGuests(reservation.guests) },
        { Icon: User, label: 'Au nom de', value: reservation.name },
        { Icon: Mail, label: 'Confirmation envoyée à', value: reservation.email },
      ]
    : []

  return (
    <Dialog open={reservation !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-md">
        <div className="flex flex-col items-center gap-3 bg-accent/60 px-6 pt-10 pb-8 text-center">
          <span className="flex size-16 animate-in items-center justify-center rounded-full bg-primary text-primary-foreground duration-500 zoom-in-50">
            <CircleCheck className="size-8" aria-hidden="true" />
          </span>
          <DialogTitle className="font-serif text-3xl font-medium">Réservation confirmée</DialogTitle>
          <DialogDescription className="text-balance text-foreground/75">
            Merci ! Votre table vous attend. Vous choisirez vos plats directement au restaurant.
          </DialogDescription>
        </div>
        <dl className="flex flex-col gap-3 px-6 py-6">
          {rows.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 text-sm">
              <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="ml-auto truncate text-right font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        {reservation?.notes ? (
          <p className="mx-6 mb-6 rounded-xl bg-muted p-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Demandes spéciales : </span>
            {reservation.notes}
          </p>
        ) : null}
        <div className="border-t border-border p-6">
          <Link href="/" onClick={onClose} className={cn(buttonVariants({ size: 'lg' }), 'h-12 w-full rounded-full text-base')}>
            Retour à l&apos;accueil
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

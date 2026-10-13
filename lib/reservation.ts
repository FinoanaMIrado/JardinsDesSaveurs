import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export type ReservationData = {
  date?: Date
  time?: string
  guests: number
  name: string
  phone: string
  email: string
  notes: string
}

export function formatReservationDate(date?: Date) {
  if (!date) return undefined
  const label = format(date, 'EEEE d MMMM yyyy', { locale: fr })
  return label.charAt(0).toUpperCase() + label.slice(1)
}

export function formatGuests(guests: number) {
  return `${guests} ${guests > 1 ? 'personnes' : 'personne'}`
}

'use client'

import { useState } from 'react'
import { isSunday, startOfDay } from 'date-fns'
import { fr as dayPickerFr } from 'react-day-picker/locale'
import { Loader2, Minus, Moon, Plus, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ReservationSummary } from '@/components/reservation/reservation-summary'
import { ReservationSuccess } from '@/components/reservation/reservation-success'
import { FieldError } from '@/components/field-error'
import { dinnerSlots, lunchSlots } from '@/lib/restaurant'
import { isValidEmail, isValidPhone } from '@/lib/validation'
import { formatGuests, type ReservationData } from '@/lib/reservation'
import { cn } from '@/lib/utils'

type Errors = Partial<Record<'date' | 'time' | 'name' | 'phone' | 'email', string>>

const initialData: ReservationData = { guests: 2, name: '', phone: '', email: '', notes: '' }

function validate(data: ReservationData): Errors {
  const errors: Errors = {}
  if (!data.date) errors.date = 'Veuillez choisir une date.'
  if (!data.time) errors.time = 'Veuillez choisir un créneau horaire.'
  if (data.name.trim().length < 2) errors.name = 'Veuillez indiquer votre nom complet.'
  if (!data.phone.trim()) errors.phone = 'Le téléphone est requis.'
  else if (!isValidPhone(data.phone)) errors.phone = 'Numéro de téléphone invalide (ex. 034 12 345 67).'
  if (!data.email.trim()) errors.email = 'L’email est requis.'
  else if (!isValidEmail(data.email)) errors.email = 'Adresse email invalide.'
  return errors
}

export function ReservationForm() {
  const [data, setData] = useState<ReservationData>(initialData)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [confirmed, setConfirmed] = useState<ReservationData | null>(null)

  const today = startOfDay(new Date())
  const availableDinnerSlots = data.date && isSunday(data.date) ? [] : dinnerSlots

  function update<K extends keyof ReservationData>(key: K, value: ReservationData[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function handleDateSelect(date: Date | undefined) {
    setData((prev) => ({
      ...prev,
      date,
      time: date && isSunday(date) && prev.time && dinnerSlots.includes(prev.time) ? undefined : prev.time,
    }))
    setErrors((prev) => ({ ...prev, date: undefined }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(data)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      document.getElementById(`field-${firstError}`)?.focus()
      return
    }
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmitting(false)
    setConfirmed(data)
  }

  function handleReset() {
    setConfirmed(null)
    setData(initialData)
  }

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10 rounded-3xl bg-card p-6 ring-1 ring-border sm:p-10 lg:col-span-2">
          <fieldset className="flex flex-col gap-6">
            <legend className="mb-6 flex items-center gap-3 font-serif text-2xl">
              <StepNumber n={1} /> Date, heure et convives
            </legend>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <Label id="label-date" className="text-sm font-semibold">
                  Date
                </Label>
                <div
                  id="field-date"
                  tabIndex={-1}
                  aria-labelledby="label-date"
                  aria-describedby={errors.date ? 'error-date' : undefined}
                  className={cn(
                    'w-fit rounded-2xl border bg-background p-1 outline-none',
                    errors.date ? 'border-destructive' : 'border-border',
                  )}
                >
                  <Calendar
                    mode="single"
                    locale={dayPickerFr}
                    selected={data.date}
                    onSelect={handleDateSelect}
                    disabled={{ before: today }}
                    startMonth={today}
                    weekStartsOn={1}
                    className="rounded-xl [--cell-size:--spacing(9)] sm:[--cell-size:--spacing(10)]"
                  />
                </div>
                <FieldError id="error-date" message={errors.date} />
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3" role="group" aria-labelledby="label-time" aria-describedby={errors.time ? 'error-time' : undefined}>
                  <span id="label-time" className="text-sm font-semibold">
                    Heure
                  </span>
                  <SlotGroup
                    label="Déjeuner"
                    icon={<Sun className="size-4" aria-hidden="true" />}
                    slots={lunchSlots}
                    value={data.time}
                    onChange={(time) => update('time', time)}
                    firstId="field-time"
                  />
                  <SlotGroup
                    label="Dîner"
                    icon={<Moon className="size-4" aria-hidden="true" />}
                    slots={availableDinnerSlots}
                    value={data.time}
                    onChange={(time) => update('time', time)}
                    emptyMessage="Pas de service le dimanche soir."
                  />
                  <FieldError id="error-time" message={errors.time} />
                </div>

                <div className="flex flex-col gap-3">
                  <span id="label-guests" className="text-sm font-semibold">
                    Nombre de personnes
                  </span>
                  <div className="flex w-fit items-center gap-2 rounded-full border border-border bg-background p-1" role="group" aria-labelledby="label-guests">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-lg"
                      className="size-10 rounded-full"
                      onClick={() => update('guests', Math.max(1, data.guests - 1))}
                      disabled={data.guests <= 1}
                      aria-label="Retirer une personne"
                    >
                      <Minus aria-hidden="true" />
                    </Button>
                    <output aria-live="polite" className="w-24 text-center font-medium tabular-nums">
                      {formatGuests(data.guests)}
                    </output>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-lg"
                      className="size-10 rounded-full"
                      onClick={() => update('guests', Math.min(12, data.guests + 1))}
                      disabled={data.guests >= 12}
                      aria-label="Ajouter une personne"
                    >
                      <Plus aria-hidden="true" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Au-delà de 12 personnes, contactez-nous par téléphone.</p>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-6 border-t border-border pt-10">
            <legend className="mb-6 flex items-center gap-3 font-serif text-2xl">
              <StepNumber n={2} /> Vos coordonnées
            </legend>
            <div className="grid gap-6 sm:grid-cols-2">
              <TextField
                id="name"
                label="Nom complet"
                autoComplete="name"
                placeholder="Rasoa Rakotomalala"
                value={data.name}
                error={errors.name}
                onChange={(v) => update('name', v)}
                className="sm:col-span-2"
              />
              <TextField
                id="phone"
                label="Téléphone"
                type="tel"
                autoComplete="tel"
                placeholder="034 12 345 67"
                value={data.phone}
                error={errors.phone}
                onChange={(v) => update('phone', v)}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="vous@exemple.mg"
                value={data.email}
                error={errors.email}
                onChange={(v) => update('email', v)}
              />
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="field-notes" className="text-sm font-semibold">
                  Demandes spéciales <span className="font-normal text-muted-foreground">(facultatif)</span>
                </Label>
                <Textarea
                  id="field-notes"
                  rows={4}
                  maxLength={500}
                  placeholder="Anniversaire, chaise bébé, allergie, table en terrasse…"
                  value={data.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  className="bg-background"
                />
              </div>
            </div>
          </fieldset>

          <Button type="submit" size="lg" disabled={submitting} className="h-13 rounded-full text-base sm:w-fit sm:px-10">
            {submitting ? (
              <>
                <Loader2 className="animate-spin" data-icon="inline-start" aria-hidden="true" />
                Envoi en cours…
              </>
            ) : (
              'Confirmer ma réservation'
            )}
          </Button>
        </form>

        <ReservationSummary data={data} />
      </div>

      <ReservationSuccess reservation={confirmed} onClose={handleReset} />
    </>
  )
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex size-8 items-center justify-center rounded-full bg-primary font-sans text-sm font-semibold text-primary-foreground" aria-hidden="true">
      {n}
    </span>
  )
}

function SlotGroup({
  label,
  icon,
  slots,
  value,
  onChange,
  firstId,
  emptyMessage,
}: {
  label: string
  icon: React.ReactNode
  slots: string[]
  value?: string
  onChange: (slot: string) => void
  firstId?: string
  emptyMessage?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="flex items-center gap-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
        {icon}
        {label}
      </p>
      {slots.length === 0 ? (
        <p className="text-sm text-muted-foreground italic">{emptyMessage}</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {slots.map((slot, index) => {
            const selected = value === slot
            return (
              <button
                key={slot}
                id={index === 0 ? firstId : undefined}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange(slot)}
                className={cn(
                  'h-10 min-w-18 rounded-full border px-4 text-sm font-medium tabular-nums transition-all focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
                  selected
                    ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                    : 'border-border bg-background hover:border-primary hover:text-primary',
                )}
              >
                {slot.replace(':', 'h')}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function TextField({
  id,
  label,
  value,
  error,
  onChange,
  className,
  ...props
}: {
  id: string
  label: string
  value: string
  error?: string
  onChange: (value: string) => void
  className?: string
} & Omit<React.ComponentProps<'input'>, 'id' | 'value' | 'onChange'>) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor={`field-${id}`} className="text-sm font-semibold">
        {label}
      </Label>
      <Input
        id={`field-${id}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `error-${id}` : undefined}
        className="h-11 bg-background"
        {...props}
      />
      <FieldError id={`error-${id}`} message={error} />
    </div>
  )
}

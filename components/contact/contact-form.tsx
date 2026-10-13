'use client'

import { useState } from 'react'
import { Loader2, Send } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { FieldError } from '@/components/field-error'
import { isValidEmail } from '@/lib/validation'

type Fields = { name: string; email: string; subject: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = { name: '', email: '', subject: '', message: '' }

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Veuillez indiquer votre nom.'
  if (!f.email.trim()) e.email = 'L’email est requis.'
  else if (!isValidEmail(f.email)) e.email = 'Adresse email invalide.'
  if (!f.subject.trim()) e.subject = 'Veuillez préciser le sujet.'
  if (f.message.trim().length < 10) e.message = 'Votre message doit contenir au moins 10 caractères.'
  return e
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [sending, setSending] = useState(false)

  function update(key: keyof Fields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    const first = Object.keys(nextErrors)[0]
    if (first) {
      document.getElementById(`contact-${first}`)?.focus()
      return
    }
    setSending(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSending(false)
    toast.success('Message envoyé !', {
      description: `Merci ${fields.name.split(' ')[0]}, nous vous répondrons très vite.`,
    })
    setFields(empty)
  }

  const fieldProps = (key: keyof Fields) => ({
    id: `contact-${key}`,
    value: fields[key],
    'aria-invalid': Boolean(errors[key]),
    'aria-describedby': errors[key] ? `contact-error-${key}` : undefined,
  })

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name" className="text-sm font-semibold">
          Nom
        </Label>
        <Input {...fieldProps('name')} autoComplete="name" placeholder="Votre nom" className="h-11 bg-background" onChange={(e) => update('name', e.target.value)} />
        <FieldError id="contact-error-name" message={errors.name} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-email" className="text-sm font-semibold">
          Email
        </Label>
        <Input
          {...fieldProps('email')}
          type="email"
          autoComplete="email"
          placeholder="vous@exemple.mg"
          className="h-11 bg-background"
          onChange={(e) => update('email', e.target.value)}
        />
        <FieldError id="contact-error-email" message={errors.email} />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Label htmlFor="contact-subject" className="text-sm font-semibold">
          Sujet
        </Label>
        <Input
          {...fieldProps('subject')}
          placeholder="Privatisation, événement, question…"
          className="h-11 bg-background"
          onChange={(e) => update('subject', e.target.value)}
        />
        <FieldError id="contact-error-subject" message={errors.subject} />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Label htmlFor="contact-message" className="text-sm font-semibold">
          Message
        </Label>
        <Textarea
          {...fieldProps('message')}
          rows={6}
          maxLength={2000}
          placeholder="Écrivez votre message ici…"
          className="bg-background"
          onChange={(e) => update('message', e.target.value)}
        />
        <FieldError id="contact-error-message" message={errors.message} />
      </div>
      <Button type="submit" size="lg" disabled={sending} className="h-12 rounded-full text-base sm:col-span-2 sm:w-fit sm:px-8">
        {sending ? (
          <Loader2 className="animate-spin" data-icon="inline-start" aria-hidden="true" />
        ) : (
          <Send data-icon="inline-start" aria-hidden="true" />
        )}
        {sending ? 'Envoi en cours…' : 'Envoyer le message'}
      </Button>
    </form>
  )
}

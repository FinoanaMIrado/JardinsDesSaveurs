import { CircleAlert } from 'lucide-react'

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="flex items-center gap-1.5 text-sm text-destructive animate-in fade-in slide-in-from-top-1">
      <CircleAlert className="size-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}

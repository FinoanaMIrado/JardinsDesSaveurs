import { restaurant } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
  )
}

const socials = [
  { label: 'Instagram', href: restaurant.socials.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: restaurant.socials.facebook, Icon: FacebookIcon },
]

export function SocialLinks({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <ul className="flex items-center gap-3">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (nouvel onglet)`}
            className={cn(
              'flex size-10 items-center justify-center rounded-full border transition-colors',
              variant === 'dark'
                ? 'border-ink-foreground/20 text-ink-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                : 'border-border text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground',
            )}
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  )
}

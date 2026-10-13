'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CalendarDays, Menu } from 'lucide-react'
import { Logo } from '@/components/logo'
import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks, restaurant } from '@/lib/restaurant'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground',
                    'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform',
                    'hover:after:scale-x-100 aria-[current=page]:text-foreground aria-[current=page]:after:scale-x-100',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/reservation"
            className={cn(buttonVariants({ size: 'lg' }), 'hidden h-10 rounded-full px-5 sm:inline-flex hover:bg-primary/90')}
          >
            <CalendarDays data-icon="inline-start" aria-hidden="true" />
            Réserver une table
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'md:hidden')}
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <SheetTitle className="font-serif text-xl">{restaurant.name}</SheetTitle>
              <nav aria-label="Navigation mobile" className="mt-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(link.href) ? 'page' : undefined}
                        className="block rounded-lg px-3 py-3 font-serif text-2xl text-foreground/80 transition-colors hover:bg-muted hover:text-foreground aria-[current=page]:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link
                href="/reservation"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ size: 'lg' }), 'mt-6 h-12 w-full rounded-full text-base')}
              >
                <CalendarDays data-icon="inline-start" aria-hidden="true" />
                Réserver une table
              </Link>
              <p className="mt-auto text-sm text-muted-foreground">
                {restaurant.address}
                <br />
                {restaurant.phone}
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

import { profile } from '@/lib/profile'

const links = [
  { href: '#t-shape', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#built-here', label: 'This Site' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg font-semibold">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground"
          >
            T
          </span>
          <span>{profile.name}</span>
        </a>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {"Let's talk"}
        </a>
      </div>
    </header>
  )
}

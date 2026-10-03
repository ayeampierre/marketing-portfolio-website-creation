import { ArrowUpRight, Briefcase, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/lib/profile'

const secondary = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: profile.phoneHref },
  { icon: Globe, label: profile.websiteLabel, href: profile.website, external: true },
]

export function Contact() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">Contact</p>
        <h2 className="mt-3 max-w-3xl text-balance font-serif text-4xl leading-tight font-semibold md:text-6xl">
          {"Let's turn your data into a story customers care about."}
        </h2>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-background/70">
          The best way to reach me is on LinkedIn. Send a message or connection request and
          {" I'll get back to you."}
        </p>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          <Briefcase className="size-5" aria-hidden="true" />
          Connect on LinkedIn
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <p className="mt-3 text-sm text-background/60">{profile.linkedinLabel}</p>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-background/80">
          {secondary.map(({ icon: Icon, label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 transition-colors hover:text-background"
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
          <li className="inline-flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </li>
        </ul>

        <div className="mt-20 flex flex-col justify-between gap-2 border-t border-background/15 pt-6 text-sm text-background/60 md:flex-row">
          <p>
            {'© '}
            {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with v0 by Vercel</p>
        </div>
      </div>
    </footer>
  )
}

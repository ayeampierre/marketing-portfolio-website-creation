import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/profile'

export function Contact() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">Contact</p>
        <h2 className="mt-3 max-w-3xl text-balance font-serif text-4xl leading-tight font-semibold md:text-6xl">
          {"Let's turn your data into a story customers care about."}
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-background/10"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
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

import Image from 'next/image'
import { ArrowDown, ArrowUpRight, BarChart3 } from 'lucide-react'
import { profile, stats } from '@/lib/profile'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            {profile.title}
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.05] font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Analytics depth. <span className="text-accent italic">Real-world</span> breadth.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {
              "I'm Andre Yeampierre, a T-shaped digital strategist and e-commerce operator. I use marketing analytics, AI tools and digital media to drive audience engagement, building on a career that runs from Southern California radio to founding a certified artisan brand in Puerto Rico."
            }
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my experience
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Connect on LinkedIn
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-workspace.png"
              alt="Hand-carved coconut shell crafts beside a laptop displaying a marketing analytics dashboard"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg md:-left-8">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <BarChart3 className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold">Data meets craft</p>
              <p className="text-xs text-muted-foreground">Insight-led, human-centered</p>
            </div>
          </div>
        </div>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card px-6 py-6">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="mt-1 font-serif text-3xl font-semibold text-primary">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

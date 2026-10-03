import { Code2, Gauge, ImageIcon, Smartphone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const points = [
  {
    icon: Code2,
    title: 'AI-assisted build',
    body: 'Designed and built with v0, turning a written brief into a production-ready Next.js site.',
  },
  {
    icon: ImageIcon,
    title: 'Generated visuals',
    body: 'Custom imagery created with AI to reflect my story, from radio to coconut craft.',
  },
  {
    icon: Smartphone,
    title: 'Responsive & accessible',
    body: 'Mobile-first layout, semantic HTML and readable contrast for every visitor.',
  },
  {
    icon: Gauge,
    title: 'Measurable by design',
    body: 'Analytics-ready from day one, because a marketer should measure their own site too.',
  },
]

export function BuiltHere() {
  return (
    <section id="built-here" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <SectionHeading
          eyebrow="This page is the proof"
          title="I didn't just describe AI skills. I used them."
          description="This one-page site demonstrates how I put AI tools to work: fast, intentional and tied to a clear goal."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {points.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

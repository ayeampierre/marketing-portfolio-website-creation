import { Award, BrainCircuit, GraduationCap, Palmtree } from 'lucide-react'
import { credentials } from '@/lib/profile'
import { SectionHeading } from '@/components/section-heading'

const icons = [GraduationCap, Award, BrainCircuit, Palmtree]

export function Credentials() {
  return (
    <section id="credentials" className="border-y border-border bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education & certifications"
          title="Formal training behind the instincts."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c, i) => {
            const Icon = icons[i]
            return (
              <li key={c.label} className="flex flex-col bg-card p-6">
                <Icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-6 font-serif text-xl font-semibold">{c.label}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{c.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

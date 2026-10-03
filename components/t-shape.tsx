import { broadSkills, deepSkills } from '@/lib/profile'
import { SectionHeading } from '@/components/section-heading'

export function TShape() {
  return (
    <section id="t-shape" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The T-shaped profile"
          title="Broad enough to connect. Deep enough to prove it."
          description="The top of the T is the range of disciplines I've worked in. The stem is where I go deepest: measuring what works and why."
          inverted
        />

        <div className="mt-16" role="group" aria-label="T-shaped skills diagram">
          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
              Breadth
            </p>
            <ul className="flex flex-wrap gap-2">
              {broadSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-primary-foreground/20 px-4 py-2 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-3 max-w-md rounded-2xl bg-accent p-6 text-accent-foreground">
            <p className="mb-1 text-xs font-medium uppercase tracking-widest opacity-70">Depth</p>
            <p className="font-serif text-2xl font-semibold">Marketing Analytics</p>
            <ul className="mt-5 space-y-3">
              {deepSkills.map((skill, i) => (
                <li key={skill} className="flex items-center gap-3 text-sm">
                  <span className="font-mono text-xs opacity-60">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h-px flex-1 bg-accent-foreground/20" aria-hidden="true" />
                  <span className="font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

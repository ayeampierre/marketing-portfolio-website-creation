import { ArrowUpRight, Award, GraduationCap } from 'lucide-react'
import { certificationGroups, education, profile } from '@/lib/profile'
import { SectionHeading } from '@/components/section-heading'

export function Credentials() {
  return (
    <section id="credentials" className="border-y border-border bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education & certifications"
          title="Formal training behind the instincts."
          description="Two marketing degrees from WGU, plus verified certifications in AI, data analysis, marketing strategy and leadership."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="size-6 text-accent" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold">Education</h3>
            </div>
            <ol className="mt-6 space-y-5">
              {education.map((item) => (
                <li key={item.label} className="border-l-2 border-accent/60 pl-4">
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.issuer} <span aria-hidden="true">·</span> {item.date}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Award className="size-6 text-accent" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold">Licenses & certifications</h3>
              </div>
              <a
                href={`${profile.linkedin}/details/certifications/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                See all on LinkedIn
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 space-y-8">
              {certificationGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {group.title}
                  </p>
                  <ul className="mt-3 divide-y divide-border">
                    {group.items.map((cert) => (
                      <li
                        key={cert.name}
                        className="flex items-start justify-between gap-4 py-3"
                      >
                        <div>
                          <p className="font-medium leading-snug">{cert.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer} <span aria-hidden="true">·</span> {cert.date}
                          </p>
                        </div>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border px-3 py-1 text-xs font-medium transition-colors hover:bg-secondary"
                          >
                            Verify
                            <ArrowUpRight className="size-3" aria-hidden="true" />
                            <span className="sr-only">{cert.name} certificate</span>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

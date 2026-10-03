import Image from 'next/image'
import { experiences } from '@/lib/profile'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Every role sharpened how I read an audience."
        description="From the broadcast booth to my own storefront to a Puerto Rico artisan workshop, each chapter adds context to the numbers."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((item) => (
          <article
            key={item.role + item.org}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <p className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span>{item.period}</span>
              <span>{item.place}</span>
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold">{item.role}</h3>
            <p className="text-sm font-medium text-primary">{item.org}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2 pt-2">
              {item.highlights.map((h) => (
                <li key={h} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                  {h}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src="/images/radio-studio.png"
            alt="Broadcast microphone and mixing console in a Southern California radio studio"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
            Southern California radio
          </figcaption>
        </figure>
        <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src="/images/coconut-craft.png"
            alt="Handcrafted coconut shell bowl, earrings and spoon"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
            Certified coconut artisan crafts, Puerto Rico
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

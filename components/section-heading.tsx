import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  inverted?: boolean
}

export function SectionHeading({ eyebrow, title, description, inverted }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-serif text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-pretty text-lg leading-relaxed',
            inverted ? 'text-primary-foreground/75' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

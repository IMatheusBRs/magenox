import type { ReactNode } from 'react'
import Reveal from './Reveal'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-signal-light/80">
      <span className="h-px w-6 bg-signal/60" />
      {children}
    </span>
  )
}

type HeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: HeadingProps) {
  return (
    <Reveal
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-steel-100 md:text-[42px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-steel-400 md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  )
}

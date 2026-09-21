import type { ReactNode } from 'react'
import Backdrop from './Backdrop'
import Reveal from './Reveal'
import { Eyebrow } from './Section'

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-[74px]">
      <Backdrop intensity={0.7} />
      <div className="container-x relative py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-[38px] font-bold leading-[1.06] tracking-tight md:text-[58px]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-400 md:text-lg">
            {description}
          </p>
          {children && <div className="mt-9">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}

import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'ghost' | 'steel'

type Props = {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const base =
  'group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] font-display font-semibold uppercase tracking-[0.16em] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none'

const styles: Record<Variant, string> = {
  primary:
    'text-white bg-signal/15 border border-signal/60 shadow-[0_0_24px_-6px_var(--color-signal)] hover:bg-signal/30 hover:border-signal hover:shadow-[0_0_36px_-4px_var(--color-signal)]',
  steel:
    'text-steel-100 border border-steel-600/70 bg-white/[0.03] hover:border-steel-300 hover:bg-white/[0.07]',
  ghost:
    'text-steel-300 border border-transparent hover:text-white hover:border-line-2',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
}: Props) {
  const cls = `${base} ${styles[variant]} ${className}`
  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(120deg, transparent 20%, rgba(111,192,255,0.18) 50%, transparent 80%)',
        }}
      />
    </>
  )

  if (to) return <Link to={to} className={cls}>{inner}</Link>
  if (href)
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {inner}
      </a>
    )
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {inner}
    </button>
  )
}

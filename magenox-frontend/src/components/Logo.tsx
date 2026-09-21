import { useId } from 'react'

type MarkProps = {
  size?: number
  className?: string
  glow?: boolean
}

/* Marca Magenox — escudo hexagonal cromado com ameias, X facetado,
   lua crescente com estrela e lâmina descendente. viewBox 0 0 128 128. */
const SHIELD_OUTER = 'M12 44 L30 12 L64 28 L98 12 L116 44 L116 84 L64 112 L12 84 Z'
const SHIELD_INNER = 'M21 48 L34 24 L64 36 L94 24 L107 48 L107 82 L64 101 L21 82 Z'
const X_BLADES =
  'M26 48 L42 38 L64 66 L86 38 L102 48 L74 72 L90 84 L76 94 L64 80 L52 94 L38 84 L54 72 Z'
const CRESCENT = 'M59.02 53.66 A5.5 5.5 0 1 0 68.98 53.66 A5 5 0 0 1 59.02 53.66 Z'
const SPARK = 'M64 37 Q65.4 42.7 70.5 44 Q65.4 45.3 64 51 Q62.6 45.3 57.5 44 Q62.6 42.7 64 37 Z'
const BLADE = 'M64 70 L68.8 79 L65.8 81 L65 95 L64 98 L63 95 L62.2 81 L59.2 79 Z'

export function Mark({ size = 40, className = '', glow = true }: MarkProps) {
  const id = `mx-${useId().replace(/:/g, '')}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      className={className}
      role="img"
      aria-label="Magenox"
    >
      <defs>
        <linearGradient id={`${id}-steel`} gradientUnits="userSpaceOnUse" x1="0" y1="16" x2="0" y2="114">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="18%" stopColor="#C4CEDB" />
          <stop offset="40%" stopColor="#5F6975" />
          <stop offset="55%" stopColor="#EDF2F8" />
          <stop offset="72%" stopColor="#8A94A2" />
          <stop offset="88%" stopColor="#DCE4EE" />
          <stop offset="100%" stopColor="#5A636F" />
        </linearGradient>
        <linearGradient id={`${id}-steel-x`} gradientUnits="userSpaceOnUse" x1="0" y1="38" x2="0" y2="94">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor="#B9C4D1" />
          <stop offset="38%" stopColor="#69737F" />
          <stop offset="54%" stopColor="#F1F6FB" />
          <stop offset="70%" stopColor="#98A3B1" />
          <stop offset="86%" stopColor="#E6EDF5" />
          <stop offset="100%" stopColor="#7E8894" />
        </linearGradient>
        <linearGradient id={`${id}-blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A9DDFF" />
          <stop offset="50%" stopColor="#2E9BFF" />
          <stop offset="100%" stopColor="#0B5BD3" />
        </linearGradient>
        <radialGradient id={`${id}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2E9BFF" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#2E9BFF" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* moldura cromada */}
      <path d={SHIELD_OUTER} fill={`url(#${id}-steel)`} />
      <path d={SHIELD_INNER} fill="#060A10" />
      <path
        d={SHIELD_INNER}
        fill="none"
        stroke={`url(#${id}-blue)`}
        strokeWidth="1"
        opacity="0.45"
      />

      {glow && <circle cx="64" cy="68" r="30" fill={`url(#${id}-core)`} />}

      {/* X facetado */}
      <path d={X_BLADES} fill={`url(#${id}-steel-x)`} />
      <g stroke={`url(#${id}-blue)`} strokeWidth="2.6" strokeLinecap="round">
        <path d="M39 50 L50 62" />
        <path d="M89 50 L78 62" />
      </g>

      {/* lua + estrela */}
      <g filter={glow ? `url(#${id}-glow)` : undefined}>
        <path d={CRESCENT} fill={`url(#${id}-blue)`} />
        <path d={SPARK} fill="#E2F2FF" />
      </g>

      {/* lâmina descendente */}
      <path d={BLADE} fill={`url(#${id}-blue)`} />
    </svg>
  )
}

type LogoProps = {
  size?: number
  showSystems?: boolean
  className?: string
}

/** Lockup horizontal: marca + wordmark cromado com o X em azul. */
export default function Logo({ size = 36, showSystems = true, className = '' }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Mark size={size} />
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-[0.16em] text-chrome"
          style={{ fontSize: size * 0.52 }}
        >
          MAGENO<span className="text-blue-glow">X</span>
        </span>
        {showSystems && (
          <span className="mt-1 flex items-center gap-2">
            <span
              aria-hidden
              className="h-px flex-1 bg-gradient-to-r from-transparent to-signal/70"
            />
            <span
              className="font-display font-medium tracking-[0.52em] text-signal/90"
              style={{ fontSize: size * 0.2 }}
            >
              SYSTEMS
            </span>
            <span
              aria-hidden
              className="h-px flex-1 bg-gradient-to-l from-transparent to-signal/70"
            />
          </span>
        )}
      </span>
    </span>
  )
}

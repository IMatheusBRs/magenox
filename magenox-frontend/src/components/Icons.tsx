type P = { className?: string }
const base = 'h-6 w-6'
const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export const IconShield = ({ className = base }: P) => (
  <svg {...common} className={className}>
    <path d="M12 2.5 20 6v6c0 4.4-3.2 8.2-8 9.5-4.8-1.3-8-5.1-8-9.5V6z" />
    <path d="M9 11.5 12 14l3-4.5" />
  </svg>
)

export const IconBrain = ({ className = base }: P) => (
  <svg {...common} className={className}>
    <circle cx="12" cy="12" r="2.4" />
    <circle cx="5" cy="6" r="1.8" />
    <circle cx="19" cy="6" r="1.8" />
    <circle cx="5" cy="18" r="1.8" />
    <circle cx="19" cy="18" r="1.8" />
    <path d="M6.4 7.3 10 10.4M17.6 7.3 14 10.4M6.4 16.7 10 13.6M17.6 16.7 14 13.6" />
  </svg>
)

export const IconNetwork = ({ className = base }: P) => (
  <svg {...common} className={className}>
    <rect x="9.5" y="2.5" width="5" height="4" rx="1" />
    <rect x="2.5" y="17.5" width="5" height="4" rx="1" />
    <rect x="16.5" y="17.5" width="5" height="4" rx="1" />
    <path d="M12 6.5v5M5 17.5v-3h14v3" />
  </svg>
)

export const IconServer = ({ className = base }: P) => (
  <svg {...common} className={className}>
    <rect x="3" y="3.5" width="18" height="6" rx="1.2" />
    <rect x="3" y="14.5" width="18" height="6" rx="1.2" />
    <path d="M6.5 6.5h.01M6.5 17.5h.01M10 6.5h4M10 17.5h4" />
  </svg>
)

export const IconRadar = ({ className = base }: P) => (
  <svg {...common} className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 12 18.4 5.6" />
    <circle cx="16" cy="8.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const IconLock = ({ className = base }: P) => (
  <svg {...common} className={className}>
    <rect x="4.5" y="10" width="15" height="10.5" rx="1.6" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2.5" />
  </svg>
)

export const IconBolt = ({ className = base }: P) => (
  <svg {...common} className={className}>
    <path d="M13 2.5 5 13.5h6l-2 8 8-11h-6z" />
  </svg>
)

export const IconGraph = ({ className = base }: P) => (
  <svg {...common} className={className}>
    <path d="M3 20.5V4M3 20.5h18" />
    <path d="M6.5 16l4-5 3.5 3 5-7.5" />
  </svg>
)

export const IconArrow = ({ className = 'h-4 w-4' }: P) => (
  <svg {...common} className={className}>
    <path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5" />
  </svg>
)

export const IconCheck = ({ className = 'h-4 w-4' }: P) => (
  <svg {...common} className={className}>
    <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
  </svg>
)

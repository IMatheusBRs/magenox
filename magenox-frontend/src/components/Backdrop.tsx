/** Traços de circuito + brilho azul: o mesmo clima da arte da marca. */
export default function Backdrop({ intensity = 1 }: { intensity?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 circuit-grid opacity-60" />

      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        fill="none"
      >
        <g
          stroke="#2E9BFF"
          strokeOpacity={0.18 * intensity}
          strokeWidth="1"
          strokeDasharray="6 10"
          className="animate-dash"
        >
          <path d="M-20 160 H240 L300 220 H520 L560 180 H900" />
          <path d="M1460 300 H1180 L1120 240 H860 L820 280 H520" />
          <path d="M-20 640 H180 L260 720 H600 L660 660 H1000 L1060 720 H1460" />
          <path d="M120 -20 V120 L200 200 V420 L140 480 V900" />
          <path d="M1320 -20 V180 L1240 260 V520 L1300 580 V900" />
        </g>
        <g fill="#2E9BFF" fillOpacity={0.5 * intensity}>
          <circle cx="240" cy="160" r="3" className="animate-pulse-soft" />
          <circle cx="520" cy="220" r="3" className="animate-pulse-soft" />
          <circle cx="1180" cy="300" r="3" className="animate-pulse-soft" />
          <circle cx="260" cy="720" r="3" className="animate-pulse-soft" />
          <circle cx="1060" cy="720" r="3" className="animate-pulse-soft" />
          <circle cx="200" cy="200" r="3" className="animate-pulse-soft" />
        </g>
      </svg>

      <div
        className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(30,123,255,${0.16 * intensity}) 0%, rgba(30,123,255,0) 68%)`,
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-void to-transparent" />
    </div>
  )
}

import { useEffect, useState } from 'react'

type Severity = 'critical' | 'warn' | 'info' | 'secure'

type Event = {
  time: string
  sev: Severity
  source: string
  text: string
  action: string
}

const FEED: Event[] = [
  {
    time: '04:11:07',
    sev: 'critical',
    source: 'sentinel/core-vlan-40',
    text: 'Beacon periódico para ASN não classificado — jitter 2,1%',
    action: 'AEGIS · host isolado',
  },
  {
    time: '04:11:22',
    sev: 'warn',
    source: 'fabric/east-west',
    text: 'SMB inédito entre segmento de RH e cluster de banco',
    action: 'AEGIS · rota bloqueada',
  },
  {
    time: '04:12:03',
    sev: 'info',
    source: 'aegis/identity',
    text: 'Token OAuth reutilizado a 940 km da sessão original',
    action: 'AEGIS · sessão revogada',
  },
  {
    time: '04:12:44',
    sev: 'critical',
    source: 'sentinel/tls-fingerprint',
    text: 'JA3 associado a loader conhecido em canal cifrado',
    action: 'AEGIS · contenção graduada',
  },
  {
    time: '04:13:10',
    sev: 'secure',
    source: 'aegis/triage',
    text: '312 alertas correlacionados em 4 incidentes reais',
    action: 'AEGIS · ruído suprimido',
  },
  {
    time: '04:13:51',
    sev: 'warn',
    source: 'forge/gpu-fabric-02',
    text: 'Desvio térmico em nó de inferência — carga remanejada',
    action: 'FORGE · failover automático',
  },
  {
    time: '04:14:19',
    sev: 'info',
    source: 'fabric/zero-trust',
    text: 'Política de menor privilégio validada em dry-run (0 quebras)',
    action: 'FABRIC · pronta para aplicar',
  },
]

const sevStyle: Record<Severity, { dot: string; text: string; label: string }> = {
  critical: { dot: 'bg-critical', text: 'text-critical', label: 'CRIT' },
  warn: { dot: 'bg-warn', text: 'text-warn', label: 'WARN' },
  info: { dot: 'bg-signal-light', text: 'text-signal-light', label: 'INFO' },
  secure: { dot: 'bg-secure', text: 'text-secure', label: 'OK' },
}

export default function ThreatConsole() {
  const [cursor, setCursor] = useState(3)

  useEffect(() => {
    const id = setInterval(() => setCursor((c) => (c + 1) % FEED.length), 2600)
    return () => clearInterval(id)
  }, [])

  const visible = Array.from({ length: 4 }, (_, i) => FEED[(cursor + i) % FEED.length])

  return (
    <div className="relative panel-surface overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-signal/10 to-transparent animate-scan"
      />

      <header className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-secure animate-pulse-soft" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-300">
            magenox aegis · live
          </span>
        </div>
        <span className="font-mono text-[11px] tracking-[0.18em] text-steel-600">
          SOC-BR1 / AUTON. NÍVEL 3
        </span>
      </header>

      <div className="grid gap-px bg-line md:grid-cols-[1fr_260px]">
        <div className="bg-panel p-5">
          <ul className="space-y-3">
            {visible.map((e, i) => {
              const s = sevStyle[e.sev]
              return (
                <li
                  key={`${e.time}-${i}`}
                  className="border-l-2 pl-3.5 transition-opacity duration-500"
                  style={{
                    borderColor:
                      e.sev === 'critical'
                        ? 'var(--color-critical)'
                        : e.sev === 'warn'
                          ? 'var(--color-warn)'
                          : e.sev === 'secure'
                            ? 'var(--color-secure)'
                            : 'var(--color-signal)',
                    opacity: 1 - i * 0.16,
                  }}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.14em]">
                    <span className="text-steel-600">{e.time}</span>
                    <span className={s.text}>{s.label}</span>
                    <span className="text-steel-500">{e.source}</span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-steel-200">{e.text}</p>
                  <p className="mt-1 font-mono text-[11px] text-signal-light/80">{e.action}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <aside className="bg-panel-2 p-5">
          <Radar />
          <dl className="mt-5 space-y-4">
            <Metric label="Fluxos/s" value="184.902" />
            <Metric label="Triagem autônoma" value="94%" accent />
            <Metric label="Detecção → contenção" value="83s" />
          </dl>
          <div className="mt-5 border-t border-line pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-600">
              Envelope de autonomia
            </p>
            <div className="mt-2.5 h-1 w-full bg-line-2">
              <div className="h-full w-[62%] bg-gradient-to-r from-signal-deep to-signal-light shadow-[0_0_10px_var(--color-signal)]" />
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-steel-500">
              Contenção automática liberada até blast radius médio. Acima disso,
              exige aprovação humana.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-600">{label}</dt>
      <dd
        className={`font-display text-lg font-semibold tabular-nums ${
          accent ? 'text-signal-light' : 'text-steel-100'
        }`}
      >
        {value}
      </dd>
    </div>
  )
}

function Radar() {
  return (
    <svg viewBox="0 0 120 120" className="mx-auto h-28 w-28" aria-hidden>
      <defs>
        <linearGradient id="mx-radar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2E9BFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2E9BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="#222c3c" fill="none">
        <circle cx="60" cy="60" r="52" />
        <circle cx="60" cy="60" r="34" />
        <circle cx="60" cy="60" r="16" />
        <path d="M60 8 V112 M8 60 H112" strokeDasharray="3 6" />
      </g>
      <path
        d="M60 60 L60 8 A52 52 0 0 1 105 34 Z"
        fill="url(#mx-radar)"
        className="animate-sweep"
        style={{ transformOrigin: '60px 60px' }}
      />
      <circle cx="82" cy="42" r="2.5" fill="#ff5364" className="animate-pulse-soft" />
      <circle cx="42" cy="78" r="2" fill="#2fd6a0" />
      <circle cx="70" cy="86" r="2" fill="#2fd6a0" />
    </svg>
  )
}

const SOURCES = ['Rede / NetFlow', 'Endpoint / EDR', 'Identidade / IAM', 'Nuvem / API', 'OT / ICS']
const CORE = [
  { name: 'SENSE', desc: 'normalização e enriquecimento' },
  { name: 'REASON', desc: 'baseline, grafo e agentes' },
  { name: 'ACT', desc: 'contenção com envelope' },
]
const OUT = ['Sentinel', 'Aegis', 'Fabric', 'Forge']

export default function ArchitectureDiagram() {
  return (
    <div className="panel-surface p-6 md:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
        <Column title="Telemetria">
          {SOURCES.map((s) => (
            <div
              key={s}
              className="border border-line bg-void/60 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-steel-400"
            >
              {s}
            </div>
          ))}
        </Column>

        <Connector />

        <div className="flex-1">
          <ColTitle>Magenox Core</ColTitle>
          <div className="relative mt-4 border border-signal/40 bg-signal/[0.04] p-5 shadow-[0_0_60px_-30px_var(--color-signal)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-signal/12 to-transparent animate-scan"
            />
            <div className="space-y-3">
              {CORE.map((c, i) => (
                <div key={c.name} className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-steel-600">0{i + 1}</span>
                  <div className="flex-1 border border-line bg-panel px-4 py-3">
                    <p className="font-display text-sm font-semibold tracking-[0.18em] text-steel-100">
                      {c.name}
                    </p>
                    <p className="mt-1 text-[12px] text-steel-500">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-line pt-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-signal-light/80">
              inferência no perímetro do cliente · trilha de auditoria imutável
            </p>
          </div>
        </div>

        <Connector />

        <Column title="Produtos">
          {OUT.map((o) => (
            <div
              key={o}
              className="border border-line bg-void/60 px-4 py-3 font-display text-[12px] font-semibold uppercase tracking-[0.18em] text-steel-200"
            >
              {o}
            </div>
          ))}
          <div className="border border-secure/30 bg-secure/[0.05] px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-secure">
            SOC 24/7 · humano no loop
          </div>
        </Column>
      </div>
    </div>
  )
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-steel-600">{children}</p>
  )
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex-1">
      <ColTitle>{title}</ColTitle>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  )
}

function Connector() {
  return (
    <div aria-hidden className="flex items-center justify-center lg:w-16">
      <svg viewBox="0 0 64 8" className="h-2 w-16 rotate-90 lg:rotate-0" fill="none">
        <path
          d="M0 4 H56"
          stroke="#2E9BFF"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="animate-dash"
        />
        <path d="M56 1 L62 4 L56 7 Z" fill="#2E9BFF" fillOpacity="0.6" />
      </svg>
    </div>
  )
}

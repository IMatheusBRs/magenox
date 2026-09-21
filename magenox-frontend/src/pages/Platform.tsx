import ArchitectureDiagram from '../components/ArchitectureDiagram'
import Button from '../components/Button'
import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Section, { SectionHeading } from '../components/Section'
import { IconCheck } from '../components/Icons'
import { products } from '../data/site'

const integrations = [
  'Cisco', 'Fortinet', 'Palo Alto', 'Juniper', 'Arista', 'CrowdStrike',
  'SentinelOne', 'Splunk', 'Elastic', 'Microsoft Entra', 'AWS', 'Azure',
  'Google Cloud', 'Kubernetes', 'NVIDIA', 'Zscaler',
]

export default function Platform() {
  return (
    <>
      <PageHero
        eyebrow="Plataforma Magenox"
        title={
          <>
            <span className="text-chrome">Um núcleo de IA</span>
            <br />
            <span className="text-steel-300">quatro superfícies de defesa</span>
          </>
        }
        description="Sentinel, Aegis, Fabric e Forge compartilham o mesmo grafo de ativos, o mesmo baseline comportamental e a mesma trilha de auditoria. Você adota um produto e ganha a base inteira."
      >
        <Button to="/contato">Solicitar demonstração técnica</Button>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Arquitetura"
          title="Da telemetria bruta à ação contida"
          description="Nada de exportar seu tráfego para uma nuvem de terceiro. O núcleo roda onde o dado está."
        />
        <Reveal className="mt-14" delay={80}>
          <ArchitectureDiagram />
        </Reveal>
      </Section>

      <section className="border-t border-line bg-abyss">
        {products.map((p, i) => (
          <div
            key={p.id}
            id={p.id}
            className="scroll-mt-24 border-b border-line last:border-b-0"
          >
            <div className="container-x py-20 md:py-24">
              <div
                className={`grid gap-12 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <Reveal>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-steel-600">
                    0{i + 1} / {p.suite}
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-[40px]">
                    <span className="text-steel-400">Magenox </span>
                    <span className="text-chrome">{p.name}</span>
                  </h2>
                  <p className="mt-3 font-display text-sm uppercase tracking-[0.18em] text-signal-light">
                    {p.claim}
                  </p>
                  <p className="mt-6 leading-relaxed text-steel-400">{p.description}</p>
                  <div className="mt-8 inline-flex items-baseline gap-3 border border-line bg-panel px-5 py-4">
                    <span className="font-display text-2xl font-semibold text-steel-100">
                      {p.metric.value}
                    </span>
                    <span className="text-[12px] text-steel-500">{p.metric.label}</span>
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <div className="panel-surface h-full p-7 md:p-9">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel-600">
                      Capacidades
                    </p>
                    <ul className="mt-6 space-y-5">
                      {p.capabilities.map((c) => (
                        <li key={c} className="flex gap-4">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-signal/40 text-signal-light">
                            <IconCheck className="h-3 w-3" />
                          </span>
                          <span className="text-sm leading-relaxed text-steel-300">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Section>
        <SectionHeading
          eyebrow="Integrações"
          title="Entra no seu stack, não no lugar dele"
          description="Conectores nativos para o que já está em produção. A Magenox lê o que existe antes de propor qualquer troca."
          align="center"
        />
        <div className="mt-14 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-4">
          {integrations.map((n, i) => (
            <Reveal key={n} delay={i * 30}>
              <div className="flex h-20 items-center justify-center bg-panel px-4 text-center font-display text-sm font-medium tracking-[0.1em] text-steel-500 transition-colors hover:bg-panel-2 hover:text-steel-200">
                {n}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-steel-600">
          Marcas citadas pertencem aos respectivos titulares
        </p>
      </Section>

      <CTA
        title="Quer ver o núcleo rodando no seu tráfego?"
        text="Fazemos uma prova de conceito passiva: espelhamos o tráfego, treinamos o baseline e mostramos o que a plataforma vê em duas semanas."
      />
    </>
  )
}

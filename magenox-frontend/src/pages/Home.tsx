import { Link } from 'react-router-dom'
import Backdrop from '../components/Backdrop'
import Button from '../components/Button'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'
import Section, { Eyebrow, SectionHeading } from '../components/Section'
import ThreatConsole from '../components/ThreatConsole'
import {
  IconArrow,
  IconBolt,
  IconBrain,
  IconNetwork,
  IconServer,
  IconShield,
} from '../components/Icons'
import { pipeline, products, sectors, stats } from '../data/site'

const pillars = [
  {
    icon: IconBrain,
    title: 'IA de defesa',
    text: 'Modelos treinados no seu tráfego, não em média de mercado. O que é anômalo na sua rede é definido pela sua rede.',
  },
  {
    icon: IconShield,
    title: 'Segurança da informação',
    text: 'Detecção, resposta e contenção operando em conjunto — do endpoint à identidade, da nuvem ao chão de fábrica.',
  },
  {
    icon: IconNetwork,
    title: 'Redes e Zero Trust',
    text: 'Microssegmentação orientada por dependências reais, validada em simulação antes de tocar em produção.',
  },
  {
    icon: IconServer,
    title: 'Infra e datacenter',
    text: 'Cluster de GPU, fabric de baixa latência e inferência no seu perímetro. O modelo vai até o dado.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[74px]">
        <Backdrop />
        <div className="container-x relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-28">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 border border-line bg-panel/70 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-steel-400">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-soft" />
                IA aplicada à segurança da informação e redes
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 font-display text-[42px] font-bold leading-[1.04] tracking-tight md:text-[64px]">
                <span className="text-chrome">Defesa autônoma</span>
                <br />
                <span className="text-steel-300">para redes críticas</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-steel-400 md:text-lg">
                A Magenox constrói a camada de inteligência que observa,
                entende e responde dentro da sua infraestrutura. Rede,
                identidade, nuvem e datacenter sob um mesmo raciocínio de
                máquina — com o humano decidindo até onde a máquina pode ir.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button to="/contato">
                  Agendar avaliação <IconArrow />
                </Button>
                <Button to="/plataforma" variant="steel">
                  Conhecer a plataforma
                </Button>
              </div>
            </Reveal>

            <Reveal delay={330}>
              <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl font-semibold text-steel-100 md:text-[28px]">
                      {s.value}
                    </dt>
                    <dd className="mt-1.5 text-[12px] leading-snug text-steel-500">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pl-4">
            <ThreatConsole />
          </Reveal>
        </div>

        {/* faixa de setores */}
        <div className="relative border-y border-line bg-abyss/70 py-5">
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-12 pr-12">
              {[...sectors, ...sectors].map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.24em] text-steel-600"
                >
                  {s}
                  <span className="ml-12 text-signal/40">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pilares ──────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Domínios"
          title={
            <>
              Quatro frentes,{' '}
              <span className="text-chrome">um único núcleo de decisão</span>
            </>
          }
          description="Segurança, rede e infraestrutura param de ser silos quando compartilham o mesmo modelo do que é normal no seu ambiente."
        />

        <div className="mt-14 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group h-full bg-panel p-7 transition-colors duration-300 hover:bg-panel-2">
                <div className="flex h-11 w-11 items-center justify-center border border-line-2 text-signal-light transition-all duration-300 group-hover:border-signal/60 group-hover:shadow-[0_0_20px_-6px_var(--color-signal)]">
                  <p.icon />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-steel-100">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-500">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Pipeline ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-line bg-abyss py-24 md:py-32">
        <div aria-hidden className="absolute inset-0 circuit-grid opacity-40" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Como opera"
            title="Sense · Reason · Act"
            description="O ciclo que roda a cada pacote, a cada login, a cada chamada de API — em segundos, sem esperar o próximo turno do SOC."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pipeline.map((p, i) => (
              <Reveal key={p.name} delay={i * 110}>
                <div className="relative h-full border-t border-line pt-7">
                  <span className="absolute -top-px left-0 h-px w-16 bg-signal shadow-[0_0_12px_var(--color-signal)]" />
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-steel-600">
                      {p.step}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-[0.06em] text-signal-light">
                      {p.name}
                    </h3>
                  </div>
                  <h4 className="mt-4 font-display text-lg font-medium text-steel-100">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-steel-500">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plataforma ───────────────────────────────────────── */}
      <Section>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Plataforma"
            title={<>Quatro produtos, uma base comum</>}
            description="Cada um resolve um problema inteiro sozinho. Juntos, fecham o ciclo de detecção, decisão e resposta."
            className="max-w-2xl"
          />
          <Reveal delay={120}>
            <Link
              to="/plataforma"
              className="inline-flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-signal-light transition-colors hover:text-white"
            >
              Ver arquitetura <IconArrow />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <Link
                to={`/plataforma#${p.id}`}
                className="group flex h-full flex-col bg-panel p-8 transition-colors duration-300 hover:bg-panel-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-steel-600">
                    {p.suite}
                  </span>
                  <IconBolt className="h-4 w-4 text-signal/50 transition-colors group-hover:text-signal-light" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-steel-100">
                  Magenox <span className="text-chrome">{p.name}</span>
                </h3>
                <p className="mt-2 font-display text-sm uppercase tracking-[0.14em] text-signal-light/80">
                  {p.claim}
                </p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-steel-500">
                  {p.description}
                </p>
                <div className="mt-7 flex items-baseline gap-3 border-t border-line pt-5">
                  <span className="font-display text-xl font-semibold text-steel-100">
                    {p.metric.value}
                  </span>
                  <span className="text-[12px] text-steel-600">{p.metric.label}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Diferencial ──────────────────────────────────────── */}
      <Section className="border-t border-line bg-abyss">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Por que Magenox</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-steel-100 md:text-[40px]">
              Automação sem <span className="text-chrome">cheque em branco</span>
            </h2>
            <p className="mt-6 leading-relaxed text-steel-400">
              A maior parte das plataformas de segurança com IA falha por um de
              dois extremos: ou só sugere e deixa o trabalho para o analista, ou
              age sozinha sem que ninguém consiga explicar o que aconteceu às
              três da manhã.
            </p>
            <p className="mt-4 leading-relaxed text-steel-400">
              A Magenox opera no meio: agentes autônomos com envelope de
              autonomia explícito, evidência anexada a cada decisão e reversão
              de um clique. Rápido como máquina, prestável como engenheiro.
            </p>
            <div className="mt-10">
              <Button to="/empresa" variant="steel">
                Nossos princípios
              </Button>
            </div>
          </div>

          <Reveal delay={120}>
            <div className="grid gap-px bg-line">
              {[
                ['Evidência anexada', 'Toda detecção carrega a cadeia causal que a gerou.'],
                ['Reversível por padrão', 'Nenhuma ação de contenção sem caminho de volta.'],
                ['Dado no seu perímetro', 'Inferência local. Nada de tráfego sensível saindo para treinar modelo alheio.'],
                ['Integra com o que existe', 'Cisco, Fortinet, Palo Alto, CrowdStrike, Splunk, Azure, AWS, GCP.'],
              ].map(([title, text]) => (
                <div key={title} className="bg-panel p-6">
                  <h3 className="font-display text-base font-semibold tracking-tight text-steel-100">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-500">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </>
  )
}

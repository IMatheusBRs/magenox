import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Section, { SectionHeading } from '../components/Section'
import { Mark } from '../components/Logo'
import { principles, timeline } from '../data/site'

const etymology = [
  {
    glyph: 'מָגֵן',
    latin: 'MAGEN',
    read: 'ma-guên',
    meaning: 'Escudo. O objeto que existe para receber o golpe no lugar de outro.',
  },
  {
    glyph: 'עֹז',
    latin: 'OZ',
    read: 'ôz',
    meaning: 'Força, vigor, poder. Não a força que agride — a que sustenta.',
  },
  {
    glyph: '✕',
    latin: 'X',
    read: 'ex',
    meaning: 'O cruzamento: onde IA, rede e infraestrutura se encontram no símbolo.',
  },
]

export default function Company() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title={
          <>
            <span className="text-steel-300">Engenharia de defesa</span>
            <br />
            <span className="text-chrome">para sistemas que não podem cair</span>
          </>
        }
        description="A Magenox Systems nasceu do encontro de gente que operou SOC de madrugada, gente que manteve backbone de operadora de pé e gente que treina modelos. A empresa é a interseção desses três ofícios."
      />

      {/* ── Marca ────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden panel-surface">
              <div aria-hidden className="absolute inset-0 circuit-grid opacity-60" />
              <div
                aria-hidden
                className="absolute h-64 w-64 rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(30,123,255,0.22) 0%, rgba(30,123,255,0) 70%)',
                }}
              />
              <div className="relative flex flex-col items-center">
                <Mark size={112} />
                <p className="mt-8 font-display text-2xl font-bold tracking-[0.2em] text-chrome">
                  MAGENO<span className="text-blue-glow">X</span>
                </p>
                <p className="mt-2 font-display text-[10px] font-medium tracking-[0.5em] text-signal/80">
                  SYSTEMS
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="A marca"
              title="Escudo e força, em duas raízes"
              description="O nome não foi escolhido por sonoridade. Ele descreve a função: proteger com poder suficiente para importar."
            />
            <div className="mt-10 space-y-px bg-line">
              {etymology.map((e) => (
                <Reveal key={e.latin}>
                  <div className="flex items-start gap-6 bg-panel p-6">
                    <span className="min-w-[72px] font-display text-2xl text-signal-light">
                      {e.glyph}
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold tracking-[0.2em] text-steel-100">
                        {e.latin}
                        <span className="ml-3 font-mono text-[10px] font-normal tracking-[0.12em] text-steel-600">
                          {e.read}
                        </span>
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-steel-500">{e.meaning}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-steel-500">
              O símbolo carrega a mesma ideia: um escudo ameado — a torre, o
              perímetro — atravessado por um X de energia. Metal para a defesa,
              luz para a inteligência que a comanda.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Princípios ───────────────────────────────────────── */}
      <section className="border-y border-line bg-abyss py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Princípios"
            title="O que não negociamos"
            description="Regras de engenharia antes de regras de marketing. Elas definem o que a plataforma pode e não pode fazer."
          />
          <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full bg-panel p-8 md:p-10">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-signal/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-steel-100">
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-steel-500">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trajetória ───────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Trajetória"
          title="Construído em produção, não em slide"
        />
        <ol className="mt-14 space-y-px bg-line">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 60} as="li">
              <div className="flex flex-col gap-3 bg-panel p-6 md:flex-row md:items-center md:gap-10 md:p-7">
                <span className="min-w-[92px] font-display text-lg font-semibold tracking-[0.14em] text-signal-light">
                  {t.year}
                </span>
                <span className="hidden h-px flex-none w-10 bg-line-2 md:block" />
                <p className="text-sm leading-relaxed text-steel-400 md:text-base">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── Carreiras ────────────────────────────────────────── */}
      <Section className="border-t border-line bg-abyss">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Carreiras"
            title="Procuramos quem já apagou incêndio de madrugada"
            description="Times de detecção, engenharia de redes, ML aplicado e infraestrutura de GPU. Remoto no Brasil, com encontros presenciais por trimestre."
          />
          <Reveal delay={100}>
            <div className="grid gap-px bg-line">
              {[
                ['Engenharia de detecção', 'Sentinel · São Paulo / remoto'],
                ['ML aplicado a segurança', 'Core · remoto'],
                ['Engenharia de redes', 'Fabric · São Paulo'],
                ['Infraestrutura de GPU', 'Forge · Fortaleza / remoto'],
                ['Analista de SOC N2/N3', 'Aegis · 24/7 em escala'],
              ].map(([role, meta]) => (
                <div
                  key={role}
                  className="flex flex-wrap items-baseline justify-between gap-3 bg-panel p-6 transition-colors hover:bg-panel-2"
                >
                  <span className="font-display text-base font-medium text-steel-100">{role}</span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-steel-600">
                    {meta}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CTA
        title="Vamos conversar sobre o seu perímetro"
        text="Time de engenharia disponível para uma conversa técnica — sem apresentação comercial de 40 slides."
      />
    </>
  )
}

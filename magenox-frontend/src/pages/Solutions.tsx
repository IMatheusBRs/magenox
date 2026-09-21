import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Section, { SectionHeading } from '../components/Section'
import Button from '../components/Button'
import { IconArrow, IconGraph, IconLock, IconRadar } from '../components/Icons'
import { sectors, solutions } from '../data/site'

const engagements = [
  {
    icon: IconRadar,
    name: 'Avaliação de exposição',
    duration: '2 semanas',
    text: 'Espelhamento passivo de tráfego, baseline inicial e relatório do que já está acontecendo na sua rede hoje.',
  },
  {
    icon: IconLock,
    name: 'Implantação assistida',
    duration: '6 a 12 semanas',
    text: 'Sentinel e Fabric em produção, políticas validadas em dry-run e integração com o SOC existente.',
  },
  {
    icon: IconGraph,
    name: 'Operação gerenciada',
    duration: 'Contínuo',
    text: 'SOC 24/7 com Aegis na linha de frente, revisão trimestral de envelope de autonomia e cobertura.',
  },
]

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title={
          <>
            <span className="text-steel-300">O problema primeiro,</span>
            <br />
            <span className="text-chrome">a tecnologia depois</span>
          </>
        }
        description="Cada frente abaixo começa por uma dor operacional real que ouvimos de times de segurança e redes — e termina no produto Magenox que a resolve."
      >
        <Button to="/contato">
          Discutir seu cenário <IconArrow />
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="flex h-full flex-col bg-panel p-8 transition-colors duration-300 hover:bg-panel-2">
                <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-steel-100">
                  {s.title}
                </h3>
                <p className="mt-5 border-l-2 border-critical/60 pl-4 text-sm italic leading-relaxed text-steel-500">
                  {s.problem}
                </p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-steel-300">{s.answer}</p>
                <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-steel-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="border-y border-line bg-abyss py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Como engajamos"
            title="Três formatos, um caminho"
            description="Começamos observando. Só propomos mudança depois de provar que entendemos o ambiente."
          />
          <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
            {engagements.map((e, i) => (
              <Reveal key={e.name} delay={i * 90}>
                <div className="h-full bg-panel p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-line-2 text-signal-light">
                      <e.icon />
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-steel-600">
                      {e.duration}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-steel-100">
                    {e.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-500">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Setores"
          title="Onde a indisponibilidade custa caro"
          description="Ambientes regulados, distribuídos e com janela de manutenção escassa — o tipo de rede em que a plataforma foi construída para operar."
          align="center"
        />
        <div className="mt-14 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {sectors.map((s, i) => (
            <Reveal key={s} delay={i * 50}>
              <div className="flex h-24 items-center justify-center bg-panel px-5 text-center font-display text-[13px] font-medium uppercase tracking-[0.14em] text-steel-400 transition-colors hover:bg-panel-2 hover:text-signal-light">
                {s}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Traga o cenário. Devolvemos um plano."
        text="Descreva a topologia, o time e a restrição. Voltamos com o desenho de implantação e o que dá para automatizar primeiro."
      />
    </>
  )
}

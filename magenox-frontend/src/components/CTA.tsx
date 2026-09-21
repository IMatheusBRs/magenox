import Button from './Button'
import Reveal from './Reveal'
import { Mark } from './Logo'

export default function CTA({
  title = 'Sua rede já está sendo observada. A questão é por quem.',
  text = 'Trinta minutos com nosso time de engenharia para mapear onde a sua superfície está exposta e o que dá para automatizar já no primeiro ciclo.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-abyss py-24 md:py-28">
      <div aria-hidden className="absolute inset-0 circuit-grid opacity-50" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(30,123,255,0.15) 0%, rgba(30,123,255,0) 70%)',
        }}
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Mark size={56} />
          </div>
          <h2 className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight text-steel-100 md:text-[40px]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-400 md:text-lg">{text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/contato">Agendar avaliação</Button>
            <Button to="/plataforma" variant="steel">
              Ver a plataforma
            </Button>
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-signal/70">
            Secure systems. Intelligent future.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

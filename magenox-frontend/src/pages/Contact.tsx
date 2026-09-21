import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import Button from '../components/Button'
import { IconCheck } from '../components/Icons'
import { site } from '../data/site'

type Status = 'idle' | 'sending' | 'sent'

const interests = [
  'Detecção e resposta (Aegis)',
  'Segurança de rede (Sentinel / Fabric)',
  'Infra, datacenter e GPU (Forge)',
  'Avaliação de exposição',
  'Parceria ou canal',
  'Outro assunto',
]

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setError('Preencha nome, e-mail corporativo e mensagem.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError('Informe um e-mail válido.')
      return
    }

    setError('')
    setStatus('sending')
    // Front-end apenas: ligue aqui o endpoint do backend quando existir.
    window.setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            <span className="text-steel-300">Fale com</span>{' '}
            <span className="text-chrome">engenharia</span>
          </>
        }
        description="Sem funil de qualificação e sem discurso pronto. A primeira conversa é com quem constrói a plataforma."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <Reveal>
            {status === 'sent' ? (
              <div className="panel-surface flex h-full flex-col items-start justify-center p-10">
                <span className="flex h-12 w-12 items-center justify-center border border-secure/50 text-secure">
                  <IconCheck className="h-5 w-5" />
                </span>
                <h2 className="mt-7 font-display text-2xl font-semibold tracking-tight text-steel-100">
                  Mensagem registrada
                </h2>
                <p className="mt-3 max-w-md leading-relaxed text-steel-500">
                  Nosso time responde em até um dia útil. Para incidente em
                  andamento, acione diretamente{' '}
                  <a
                    href={`mailto:${site.soc}`}
                    className="text-signal-light underline-offset-4 hover:underline"
                  >
                    {site.soc}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-8 font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-steel-400 transition-colors hover:text-signal-light"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="panel-surface p-7 md:p-10" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Nome" name="name" placeholder="Seu nome" />
                  <Field
                    label="E-mail corporativo"
                    name="email"
                    type="email"
                    placeholder="voce@empresa.com"
                  />
                  <Field label="Empresa" name="company" placeholder="Razão social" />
                  <Field label="Cargo" name="role" placeholder="CISO, Head de Redes…" />
                </div>

                <div className="mt-6">
                  <Label htmlFor="interest">Assunto</Label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue={interests[0]}
                    className="mt-2 w-full appearance-none border border-line bg-void px-4 py-3 text-sm text-steel-200 outline-none transition-colors focus:border-signal/70"
                  >
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <Label htmlFor="message">Contexto</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Topologia, tamanho do time, restrições e o que precisa resolver."
                    className="mt-2 w-full resize-y border border-line bg-void px-4 py-3 text-sm text-steel-200 outline-none transition-colors placeholder:text-steel-600 focus:border-signal/70"
                  />
                </div>

                {error && (
                  <p className="mt-5 border-l-2 border-critical pl-3 text-sm text-critical">
                    {error}
                  </p>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Button type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
                  </Button>
                  <p className="max-w-xs text-[11px] leading-relaxed text-steel-600">
                    Dados usados apenas para responder este contato, conforme a LGPD.
                  </p>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-px bg-line">
              <InfoBlock
                title="Comercial"
                lines={[site.sales, site.phone]}
                note="Novos projetos, provas de conceito e parcerias."
              />
              <InfoBlock
                title="SOC 24/7"
                lines={[site.soc]}
                note="Incidente em andamento. Resposta imediata em regime de plantão."
                urgent
              />
              <InfoBlock
                title="Divulgação responsável"
                lines={['security@magenox.com']}
                note="Encontrou uma vulnerabilidade em nossos sistemas? Fale conosco antes de publicar."
              />
              <InfoBlock title="Escritório" lines={[site.address]} note={site.socAddress} />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-steel-500"
    >
      {children}
    </label>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border border-line bg-void px-4 py-3 text-sm text-steel-200 outline-none transition-colors placeholder:text-steel-600 focus:border-signal/70"
      />
    </div>
  )
}

function InfoBlock({
  title,
  lines,
  note,
  urgent,
}: {
  title: string
  lines: string[]
  note?: string
  urgent?: boolean
}) {
  return (
    <div className="bg-panel p-7">
      <div className="flex items-center gap-2.5">
        {urgent && <span className="h-1.5 w-1.5 rounded-full bg-critical animate-pulse-soft" />}
        <h3 className="font-display text-[12px] font-semibold uppercase tracking-[0.22em] text-steel-200">
          {title}
        </h3>
      </div>
      <ul className="mt-4 space-y-1.5">
        {lines.map((l) => (
          <li key={l} className="text-sm text-steel-300">
            {l.includes('@') ? (
              <a href={`mailto:${l}`} className="transition-colors hover:text-signal-light">
                {l}
              </a>
            ) : (
              l
            )}
          </li>
        ))}
      </ul>
      {note && <p className="mt-3 text-[12px] leading-relaxed text-steel-600">{note}</p>}
    </div>
  )
}

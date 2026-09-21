import { Link } from 'react-router-dom'
import Logo from './Logo'
import { nav, site } from '../data/site'
import { products } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-abyss">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size={38} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-steel-500">
              Defesa autônoma para redes, infraestrutura e datacenter. IA que
              observa, entende e responde dentro do limite que você define.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-signal/80">
              {site.tagline}
            </p>
          </div>

          <FooterCol
            title="Plataforma"
            links={products.map((p) => ({
              label: `Magenox ${p.name}`,
              to: `/plataforma#${p.id}`,
            }))}
          />
          <FooterCol title="Navegação" links={nav.map((n) => ({ label: n.label, to: n.to }))} />

          <div>
            <h3 className="font-display text-[12px] font-semibold uppercase tracking-[0.22em] text-steel-200">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-steel-500">
              <li>
                <a className="transition-colors hover:text-signal-light" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>{site.phone}</li>
              <li className="leading-relaxed">{site.address}</li>
              <li className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-600">
                {site.socAddress}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel-600">
            © {new Date().getFullYear()} {site.name} — Todos os direitos reservados
          </p>
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-steel-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secure animate-pulse-soft" />
              Operação estável
            </span>
            <Link to="/contato" className="transition-colors hover:text-steel-300">
              Divulgação responsável
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; to: string }[]
}) {
  return (
    <div>
      <h3 className="font-display text-[12px] font-semibold uppercase tracking-[0.22em] text-steel-200">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-steel-500">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="transition-colors hover:text-signal-light">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

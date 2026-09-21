import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { nav } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-line bg-void/85 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-[74px] items-center justify-between">
        <Link to="/" aria-label="Magenox Systems — início" className="shrink-0">
          <Logo size={34} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-4 py-2 font-display text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  isActive ? 'text-white' : 'text-steel-400 hover:text-steel-100'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute inset-x-3 -bottom-px h-px transition-opacity ${
                      isActive ? 'bg-signal opacity-100' : 'opacity-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contato"
            className="ml-4 border border-signal/60 bg-signal/10 px-5 py-2.5 font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_20px_-8px_var(--color-signal)] transition-all hover:bg-signal/25 hover:shadow-[0_0_28px_-6px_var(--color-signal)]"
          >
            Falar com engenharia
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-line text-steel-200 lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-void/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <nav className="container-x flex flex-col py-4">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `border-b border-line/60 py-4 font-display text-sm uppercase tracking-[0.18em] ${
                  isActive ? 'text-signal-light' : 'text-steel-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contato"
            className="mt-5 border border-signal/60 bg-signal/10 px-5 py-3.5 text-center font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
          >
            Falar com engenharia
          </Link>
        </nav>
      </div>
    </header>
  )
}

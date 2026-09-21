import Button from '../components/Button'
import Backdrop from '../components/Backdrop'
import { Mark } from '../components/Logo'

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] items-center">
      <Backdrop intensity={0.6} />
      <div className="container-x relative text-center">
        <div className="flex justify-center">
          <Mark size={64} />
        </div>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.28em] text-signal-light/80">
          404 · rota não encontrada
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-steel-100 md:text-5xl">
          Sem rota para este destino
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-steel-400">
          O caminho que você pediu não existe neste perímetro. Volte para a
          superfície conhecida.
        </p>
        <div className="mt-9 flex justify-center">
          <Button to="/">Voltar ao início</Button>
        </div>
      </div>
    </div>
  )
}

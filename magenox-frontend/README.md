# Magenox Systems — Frontend

Site institucional da **Magenox Systems**: IA aplicada à segurança da informação, redes,
infraestrutura e datacenter.

O tema visual é derivado da logo: preto profundo (`#04070C`), acabamento cromado
prateado, X em azul elétrico com glow (`#1E7BFF` / `#6FC0FF`) e traços de circuito ao
fundo. Assinatura: *Secure systems. Intelligent future.*

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 (tokens em `src/index.css`)
- React Router 7

Sem dependência de UI kit ou biblioteca de animação — logo, ícones, diagrama, radar e
console SOC são SVG/CSS próprios.

## Rodar

```bash
npm install
npm run dev
```

Build de produção e verificação de tipos:

```bash
npm run build
```

## Estrutura

```
src/
  components/   Logo (marca vetorial), Navbar, Footer, ThreatConsole (feed SOC ao vivo),
                ArchitectureDiagram, Backdrop (circuito), Reveal, Button, Section, Icons
  pages/        Home, Platform, Solutions, Company, Contact, NotFound
  data/site.ts  Todo o conteúdo editorial (produtos, soluções, métricas, timeline, contato)
  index.css     Design tokens, utilitários (text-chrome, circuit-grid, panel-surface) e animações
public/
  mark-magenox.svg / favicon.svg   Escudo ameado com o X azul
```

## Onde editar

- **Textos, produtos, métricas, e-mails, endereço:** `src/data/site.ts`.
- **Cores e tipografia:** bloco `@theme` em `src/index.css`.
- **Marca:** `src/components/Logo.tsx` (componentes `Mark` e `Logo`).

## Formulário de contato

`src/pages/Contact.tsx` valida no cliente e simula o envio (`setTimeout`). Para ligar a um
backend, substitua esse trecho por um `fetch` para o endpoint desejado — o comentário
`// Front-end apenas` marca o ponto exato.

## Acessibilidade

Foco visível, contraste alto sobre fundo escuro, navegação por teclado no menu mobile e
respeito a `prefers-reduced-motion` (todas as animações são desligadas).

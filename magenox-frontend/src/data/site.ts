export const site = {
  name: 'Magenox Systems',
  tagline: 'Secure systems. Intelligent future.',
  domain: 'magenox.com',
  email: 'contato@magenox.com',
  sales: 'comercial@magenox.com',
  soc: 'soc@magenox.com',
  phone: '+55 11 4000-0000',
  address: 'Av. Brigadeiro Faria Lima, 3477 — São Paulo, SP',
  socAddress: 'SOC 24/7 — São Paulo · Fortaleza · Lisboa',
}

export const nav = [
  { label: 'Plataforma', to: '/plataforma' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Empresa', to: '/empresa' },
  { label: 'Contato', to: '/contato' },
]

export type Product = {
  id: string
  name: string
  suite: string
  claim: string
  description: string
  capabilities: string[]
  metric: { value: string; label: string }
}

export const products: Product[] = [
  {
    id: 'sentinel',
    name: 'Sentinel',
    suite: 'Network Detection & Response',
    claim: 'A rede como sensor',
    description:
      'Modelos de comportamento treinados no seu próprio tráfego. Sentinel aprende o que é normal em cada VLAN, cada par de hosts e cada janela de horário — e trata desvio como sinal, não como ruído.',
    capabilities: [
      'Baseline comportamental por ativo, identidade e segmento',
      'Detecção de C2, exfiltração e movimento lateral em tráfego cifrado',
      'Correlação NetFlow, PCAP, DNS, TLS fingerprint e telemetria de EDR',
      'Explicabilidade: toda detecção acompanha evidência e cadeia causal',
    ],
    metric: { value: '< 90s', label: 'do pacote ao alerta correlacionado' },
  },
  {
    id: 'aegis',
    name: 'Aegis',
    suite: 'Autonomous SOC',
    claim: 'Resposta na velocidade da máquina',
    description:
      'Agentes de IA que triam, investigam e contêm. Aegis executa o runbook que seu analista escreveria — em segundos, com trilha de auditoria completa e limites de autonomia definidos por você.',
    capabilities: [
      'Triagem autônoma com supressão de falso-positivo por contexto',
      'Investigação multi-fonte: identidade, endpoint, nuvem, rede',
      'Contenção graduada: quarentena, revogação de sessão, bloqueio de rota',
      'Human-in-the-loop configurável por criticidade e blast radius',
    ],
    metric: { value: '94%', label: 'de alertas resolvidos sem toque humano' },
  },
  {
    id: 'fabric',
    name: 'Fabric',
    suite: 'Network & Zero Trust',
    claim: 'Segmentação que se ajusta sozinha',
    description:
      'Microssegmentação orientada por intenção. Fabric mapeia dependências reais entre serviços, propõe política de menor privilégio e valida cada mudança em simulação antes de aplicar.',
    capabilities: [
      'Descoberta automática de dependências leste-oeste',
      'Política como código com validação em dry-run',
      'Zero Trust para acesso remoto, OT e cargas efêmeras',
      'Integração com Cisco, Fortinet, Palo Alto, Juniper, Arista e SD-WAN',
    ],
    metric: { value: '-71%', label: 'de superfície lateral exposta' },
  },
  {
    id: 'forge',
    name: 'Forge',
    suite: 'Infrastructure & Datacenter',
    claim: 'Infraestrutura para inferência sob pressão',
    description:
      'Projeto, implantação e operação de datacenter e clusters de GPU — do fabric de baixa latência ao pipeline de inferência que sustenta os modelos da Magenox no seu perímetro.',
    capabilities: [
      'Clusters de GPU, RDMA/RoCE e fabric de baixa latência',
      'Inferência on-premise: dado sensível não sai do seu domínio',
      'Alta disponibilidade, DR e capacidade planejada por telemetria',
      'Hardening de hipervisor, storage e plano de controle',
    ],
    metric: { value: '99,99%', label: 'de disponibilidade contratada' },
  },
]

export type Solution = {
  title: string
  problem: string
  answer: string
  tags: string[]
}

export const solutions: Solution[] = [
  {
    title: 'Detecção e resposta gerenciada',
    problem: 'O SOC recebe mais alertas do que consegue investigar.',
    answer:
      'Aegis assume a triagem de linha de frente e devolve ao time apenas o que exige julgamento humano — com investigação já montada.',
    tags: ['MDR', 'SOC 24/7', 'Aegis'],
  },
  {
    title: 'Segurança de rede e Zero Trust',
    problem: 'A rede é plana onde deveria ser compartimentada.',
    answer:
      'Fabric descobre as dependências reais, propõe segmentação de menor privilégio e valida a política antes de qualquer corte em produção.',
    tags: ['Microssegmentação', 'NAC', 'Fabric'],
  },
  {
    title: 'Defesa de infraestrutura crítica',
    problem: 'Ambientes OT e legado não aceitam agente nem janela de parada.',
    answer:
      'Sentinel observa passivamente pela rede — sem agente, sem impacto — e modela o comportamento de protocolos industriais.',
    tags: ['OT/ICS', 'Passivo', 'Sentinel'],
  },
  {
    title: 'Cloud, datacenter e IA privada',
    problem: 'Rodar IA exige tirar dado sensível de casa.',
    answer:
      'Forge entrega o cluster e o pipeline de inferência dentro do seu perímetro. O modelo vai até o dado, não o contrário.',
    tags: ['GPU', 'On-premise', 'Forge'],
  },
  {
    title: 'Red team assistido por IA',
    problem: 'Testes de intrusão anuais não acompanham a mudança do ambiente.',
    answer:
      'Simulação contínua de adversário validando se a detecção realmente dispara — e corrigindo a lacuna encontrada.',
    tags: ['BAS', 'Purple team', 'Contínuo'],
  },
  {
    title: 'Conformidade e evidência',
    problem: 'Auditoria consome semanas de coleta manual de evidência.',
    answer:
      'Controle mapeado para LGPD, ISO 27001, PCI-DSS e NIST CSF, com evidência gerada continuamente pela própria operação.',
    tags: ['LGPD', 'ISO 27001', 'NIST CSF'],
  },
]

export const sectors = [
  'Serviços financeiros',
  'Telecomunicações',
  'Energia e utilities',
  'Governo e defesa',
  'Saúde',
  'Indústria e OT',
  'Provedores de nuvem',
  'Logística',
]

export const pipeline = [
  {
    step: '01',
    name: 'Sense',
    title: 'Sensoriamento total',
    text: 'Coletores passivos em rede, endpoint, identidade e nuvem. Nenhuma sonda ativa, nenhum agente onde não pode haver agente.',
  },
  {
    step: '02',
    name: 'Reason',
    title: 'Raciocínio de máquina',
    text: 'Modelos de comportamento, grafo de ativos e agentes de investigação convergem para uma hipótese com evidência anexada.',
  },
  {
    step: '03',
    name: 'Act',
    title: 'Ação com limite',
    text: 'Contenção graduada dentro do envelope de autonomia que você define. Toda ação é reversível e registrada.',
  },
]

export const stats = [
  { value: '1,4 Tb/s', label: 'de tráfego analisado por cliente/dia' },
  { value: '< 90s', label: 'mediana de detecção a contenção' },
  { value: '94%', label: 'de triagem autônoma' },
  { value: '24/7', label: 'SOC em três fusos' },
]

export const principles = [
  {
    title: 'Autonomia com coleira',
    text: 'Máquina decide rápido, humano decide o limite. Todo agente opera dentro de um envelope explícito, auditável e revogável.',
  },
  {
    title: 'Evidência antes de alarme',
    text: 'Detecção sem cadeia causal é ruído com confiança. Nada sobe para o analista sem o porquê anexado.',
  },
  {
    title: 'O dado fica em casa',
    text: 'Inferência no perímetro do cliente por padrão. Soberania de dado não é feature de plano enterprise.',
  },
  {
    title: 'Engenharia, não dashboard',
    text: 'Painel bonito não contém invasão. Medimos entrega por tempo de contenção e superfície reduzida.',
  },
]

export const timeline = [
  { year: '2021', text: 'Núcleo de engenharia formado a partir de times de SOC, backbone de telecom e pesquisa em ML.' },
  { year: '2022', text: 'Primeiro motor de baseline comportamental em produção num backbone de operadora.' },
  { year: '2023', text: 'Sentinel e Fabric entram em operação conjunta em infraestrutura crítica.' },
  { year: '2024', text: 'Aegis leva triagem autônoma a SOC 24/7, com envelope de autonomia auditável.' },
  { year: '2025', text: 'Forge consolida inferência on-premise em cluster de GPU no perímetro do cliente.' },
  { year: '2026', text: 'Operação em três fusos, com defesa autônoma cobrindo rede, nuvem e OT.' },
]

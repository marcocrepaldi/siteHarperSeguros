import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './ServiceDetail.module.css';

const servicesData: Record<string, any> = {
  auto: {
    title: 'Seguro Automotivo',
    description: 'A proteção que seu carro merece com a confiança que você precisa.',
    content: 'O Seguro Auto da Harper Seguros oferece coberturas completas e assistência 24h em todo o Brasil. Protegemos seu veículo contra roubo, furto, colisão, incêndio e danos a terceiros.',
    benefits: [
      'Assistência 24h (Guincho, Chaveiro, Troca de Pneus)',
      'Carro reserva por até 30 dias',
      'Cobertura para vidros, faróis e retrovisores',
      'Descontos em estacionamentos e serviços',
    ],
    icon: '🚗',
  },
  vida: {
    title: 'Seguro de Vida',
    description: 'Planeje o futuro e garanta a proteção financeira da sua família.',
    content: 'Nosso Seguro de Vida vai além da cobertura básica. Oferecemos soluções flexíveis que incluem coberturas para doenças graves, invalidez e auxílio funeral, garantindo que você e sua família estejam amparados.',
    benefits: [
      'Cobertura para doenças graves',
      'Indenização por invalidez temporária ou permanente',
      'Sorteios mensais em dinheiro',
      'Assistência funeral completa',
    ],
    icon: '❤️',
  },
  empresarial: {
    title: 'Seguro Patrimonial',
    description: 'Sua empresa protegida para que você foque no que importa: crescer.',
    content: 'O Seguro Patrimonial protege a estrutura física e os bens da sua empresa contra incêndio, danos elétricos, roubo e outros imprevistos que podem paralisar seu negócio.',
    benefits: [
      'Cobertura de lucros cessantes',
      'Proteção contra danos elétricos e eletrônicos',
      'Responsabilidade Civil Operações',
      'Assistência emergencial para reparos (Chaveiro, Elétrica, Hidráulica)',
    ],
    icon: '🏢',
  },
  residencial: {
    title: 'Seguro Residencial',
    description: 'Sua casa é seu porto seguro. Nós cuidamos dela para você.',
    content: 'O Seguro Residencial da Harper é acessível e oferece muito mais que proteção contra incêndio. Você conta com uma rede de serviços de assistência para pequenos reparos do dia a dia.',
    benefits: [
      'Danos elétricos e impacto de veículos',
      'Roubo e furto de bens dentro da residência',
      'Check-up residencial (Limpeza de calhas, revisão elétrica)',
      'Serviços de encanador e eletricista 24h',
    ],
    icon: '🏠',
  },
  saude: {
    title: 'Seguro Saúde',
    description: 'Acesso aos melhores hospitais e médicos para você e sua família.',
    content: 'O Seguro Saúde oferece tranquilidade com ampla rede referenciada, reembolso de despesas e programas de prevenção à saúde.',
    benefits: [
      'Livre escolha de médicos e hospitais (Reembolso)',
      'Rede referenciada nacional',
      'Programas de bem-estar e saúde preventiva',
      'Atendimento digital e telemedicina 24h',
    ],
    icon: '🏥',
  },
  viagem: {
    title: 'Seguro Viagem',
    description: 'Viaje com tranquilidade sabendo que está assistido em qualquer lugar do mundo.',
    content: 'Proteção para viagens nacionais e internacionais, cobrindo despesas médicas, extravio de bagagem e interrupção de viagem.',
    benefits: [
      'Assistência médica e odontológica internacional',
      'Seguro para extravio de bagagem',
      'Repatriação médica e funerária',
      'Suporte jurídico no exterior',
    ],
    icon: '✈️',
  },
  aluguel: {
    title: 'Seguro Aluguel',
    description: 'A garantia que substitui o fiador e facilita a locação de imóveis.',
    content: 'O Seguro Aluguel (ou Fiança Locatícia) é a solução ideal para proprietários e inquilinos, garantindo o recebimento dos aluguéis e encargos.',
    benefits: [
      'Substitui a necessidade de fiador ou caução',
      'Garantia de pagamento de aluguel e IPTU',
      'Assistência residencial gratuita para o inquilino',
      'Agilidade na análise cadastral',
    ],
    icon: '🔑',
  },
  'do-eo': {
    title: 'D&O / E&O',
    description: 'Seguro de responsabilidade civil para diretores e profissionais.',
    content: 'Proteção contra processos judiciais, administrativos ou arbitrais decorrentes de atos de gestão ou falhas profissionais.',
    benefits: [
      'Defesa em processos judiciais e administrativos',
      'Cobertura para bloqueio de bens de diretores',
      'Indenizações a terceiros por erros profissionais',
      'Amparo em investigações regulatórias',
    ],
    icon: '⚖️',
  },
  engenharia: {
    title: 'Riscos de Engenharia',
    description: 'Segurança total para obras civis e montagens.',
    content: 'Protege construções, reformas, instalações e montagens de máquinas contra acidentes de origem súbita e imprevista.',
    benefits: [
      'Cobertura para danos à própria obra',
      'Responsabilidade Civil Cruzada (Danos a vizinhos)',
      'Proteção para materiais e equipamentos no canteiro',
      'Cobertura para erros de projeto',
    ],
    icon: '🏗️',
  },
  garantia: {
    title: 'Seguro Garantia',
    description: 'Assegura o cumprimento de obrigações contratuais.',
    content: 'Garante o fiel cumprimento das obrigações assumidas pelo tomador perante o segurado em contratos públicos ou privados.',
    benefits: [
      'Garantia de licitante (Bid Bond)',
      'Garantia de execução (Performance Bond)',
      'Substituição de depósitos judiciais',
      'Melhora o fluxo de caixa da empresa',
    ],
    icon: '📜',
  },
  'responsabilidade-civil': {
    title: 'Responsabilidade Civil',
    description: 'Amparo para danos causados a terceiros.',
    content: 'Garante o reembolso de indenizações por danos corporais ou materiais causados involuntariamente a terceiros no exercício das atividades.',
    benefits: [
      'RC Operações e Estabelecimentos',
      'RC Produtos no Brasil e Exterior',
      'RC Empregador',
      'RC Eventos e Exposições',
    ],
    icon: '🤝',
  },
  maquinas: {
    title: 'Máquinas e Equipamentos',
    description: 'Proteção para o maquinário essencial do seu negócio.',
    content: 'Seguro para equipamentos agrícolas, industriais, médicos e de construção civil contra danos externos e roubo.',
    benefits: [
      'Cobertura para roubo e furto qualificado',
      'Proteção contra danos de causas externas',
      'Cobertura para equipamentos em trânsito',
      'Opção de cobertura para perda de aluguel',
    ],
    icon: '🚜',
  },
  'consorcio-imovel': {
    title: 'Consórcio de Imóveis: O Investimento Inteligente',
    description: 'A forma mais sólida e estratégica de construir patrimônio sem pagar juros abusivos.',
    content: 'O Consórcio de Imóveis é hoje uma das ferramentas financeiras mais eficazes para quem busca alavancagem patrimonial. Ao contrário do financiamento, onde você paga quase três imóveis ao final do contrato, o consórcio oferece taxas de administração diluídas e zero juros, tornando-se o investimento preferido de investidores imobiliários.',
    benefits: [
      'Custo Efetivo Reduzido: Zero juros, apenas taxa de administração competitiva.',
      'Poder de Negociação: Com a carta de crédito, você compra à vista e consegue descontos agressivos.',
      'Uso do FGTS: Utilize seu saldo para lances, amortização ou quitação de parcelas.',
      'Alavancagem com Aluguel: Use o valor do aluguel do imóvel adquirido para pagar as parcelas restantes.',
      'Formação de Patrimônio: Disciplina financeira com alta rentabilidade a longo prazo.',
      'Flexibilidade Total: Compre imóveis residenciais, comerciais, terrenos ou use para reforma.',
    ],
    icon: '🏗️',
  },
  'consorcio-auto': {
    title: 'Consórcio Automóvel',
    description: 'Planeje a conquista do seu novo veículo com parcelas que cabem no seu bolso.',
    content: 'Fuja das altas taxas de juros dos bancos. O consórcio de automóveis permite que você planeje a troca do seu veículo ou a compra do primeiro carro com total segurança e economia.',
    benefits: [
      'Parcelas sem juros, apenas taxa de administração.',
      'Liberdade de escolha: Use o crédito para qualquer marca ou modelo.',
      'Compra à vista: Ganhe poder de barganha com a concessionária.',
      'Prazos flexíveis para pagamento.',
      'Possibilidade de lances para antecipar a contemplação.',
    ],
    icon: '🚘',
  },
  moto: {
    title: 'Seguro Moto',
    description: 'A liberdade de duas rodas com a proteção que você precisa.',
    content: 'Proteção completa para sua moto contra roubo, furto, colisão e danos a terceiros. Inclui assistência 24h especializada para motociclistas.',
    benefits: [
      'Socorro mecânico e guincho 24h',
      'Cobertura para acessórios (Capacete, jaqueta)',
      'Danos a terceiros (Responsabilidade Civil)',
      'Descontos em oficinas especializadas',
    ],
    icon: '🏍️',
  },
  bicicleta: {
    title: 'Seguro Bicicleta',
    description: 'Segurança para suas pedaladas, seja no lazer ou no esporte.',
    content: 'Proteja sua bike contra roubo, furto qualificado e danos durante o transporte. Ideal para ciclistas urbanos e de alta performance.',
    benefits: [
      'Cobertura contra roubo e furto qualificado',
      'Proteção contra danos acidentais',
      'Responsabilidade Civil para ciclistas',
      'Extensão de cobertura para viagens',
    ],
    icon: '🚲',
  },
  embarcacoes: {
    title: 'Seguro de Embarcações',
    description: 'Navegue com tranquilidade e segurança total.',
    content: 'Seguro para lanchas, iates e motos aquáticas (jet-ski). Cobertura para danos ao casco, motores, equipamentos e responsabilidade civil em águas.',
    benefits: [
      'Cobertura para perda total e danos parciais',
      'Roubo ou furto da embarcação',
      'Assistência e salvamento',
      'Responsabilidade Civil de proprietários de embarcações',
    ],
    icon: '🚤',
  },
  'acidentes-pessoais': {
    title: 'Seguro de Acidentes Pessoais',
    description: 'Proteção financeira imediata em casos de imprevistos.',
    content: 'Garante o pagamento de indenização em caso de morte acidental ou invalidez por acidente, além de auxiliar em despesas médicas.',
    benefits: [
      'Indenização rápida por morte acidental',
      'Amparo em caso de invalidez por acidente',
      'Diária de internação hospitalar (opcional)',
      'Baixo custo mensal com alta proteção',
    ],
    icon: '🩹',
  },
  eletronicos: {
    title: 'Seguro de Equipamentos Eletrônicos',
    description: 'Seus dispositivos protegidos onde quer que você esteja.',
    content: 'Seguro para smartphones, notebooks, tablets e câmeras fotográficas contra roubo, furto qualificado e danos acidentais.',
    benefits: [
      'Cobertura contra roubo e furto qualificado',
      'Proteção para danos elétricos',
      'Garantia internacional (opcional)',
      'Reposição rápida do equipamento',
    ],
    icon: '💻',
  },
  odontologico: {
    title: 'Seguro Odontológico',
    description: 'Sua saúde começa pela boca. Cuide do seu sorriso.',
    content: 'Planos odontológicos com ampla rede de atendimento, cobrindo consultas, limpezas, radiografias, restaurações e tratamentos de canal.',
    benefits: [
      'Ampla rede credenciada de dentistas',
      'Cobertura para urgência e emergência 24h',
      'Tratamentos estéticos e ortodônticos (conforme plano)',
      'Sem burocracia para autorização de guias',
    ],
    icon: '🦷',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Serviço não encontrado",
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Harper Seguros`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <Link href="/#servicos" className={styles.back}>← Voltar para Serviços</Link>
          <div className={styles.hero}>
            <div className={styles.icon}>{service.icon}</div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Sobre o <span>Serviço</span></h2>
              <p>{service.content}</p>
              
              <h3>Principais Benefícios</h3>
              <ul className={styles.benefits}>
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index}>✅ {benefit}</li>
                ))}
              </ul>
            </div>
            
            <aside className={styles.sidebar}>
              <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
                <h3>Solicitar Cotação</h3>
                <p>Receba uma proposta personalizada agora mesmo.</p>
                <Link href="/#contato" className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
                  Falar com Consultor
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

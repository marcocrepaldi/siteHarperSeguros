import Link from 'next/link';
import styles from './ServicesGrid.module.css';

const individualServices = [
  {
    title: 'Seguro Auto',
    description: 'Proteção completa para seu veículo contra roubo, furto, colisão e danos a terceiros.',
    icon: '🚗',
    slug: 'auto',
  },
  {
    title: 'Seguro de Vida',
    description: 'Garanta a tranquilidade financeira de quem você ama nos momentos mais difíceis.',
    icon: '❤️',
    slug: 'vida',
  },
  {
    title: 'Seguro Residencial',
    description: 'Sua casa protegida contra incêndios, danos elétricos e outros imprevistos.',
    icon: '🏠',
    slug: 'residencial',
  },
  {
    title: 'Seguro Saúde',
    description: 'Acesso aos melhores hospitais e médicos para você e sua família.',
    icon: '🏥',
    slug: 'saude',
  },
  {
    title: 'Seguro Viagem',
    description: 'Viaje com tranquilidade sabendo que está assistido em qualquer lugar do mundo.',
    icon: '✈️',
    slug: 'viagem',
  },
  {
    title: 'Seguro Moto',
    description: 'Proteção para sua moto com coberturas específicas e assistência 24h.',
    icon: '🏍️',
    slug: 'moto',
  },
  {
    title: 'Seguro Bicicleta',
    description: 'Pedale com segurança. Proteção contra roubo e danos acidentais para sua bike.',
    icon: '🚲',
    slug: 'bicicleta',
  },
  {
    title: 'Seguro Embarcações',
    description: 'Navegue tranquilo com proteção para lanchas, iates e jet-skis.',
    icon: '🚤',
    slug: 'embarcacoes',
  },
  {
    title: 'Acidentes Pessoais',
    description: 'Segurança financeira em caso de imprevistos com sua integridade física.',
    icon: '🩹',
    slug: 'acidentes-pessoais',
  },
  {
    title: 'Equipamentos',
    description: 'Proteção para seus gadgets (notebook, smartphone) contra roubo e danos.',
    icon: '💻',
    slug: 'eletronicos',
  },
  {
    title: 'Odontológico',
    description: 'Sorriso em dia com ampla rede de dentistas e procedimentos cobertos.',
    icon: '🦷',
    slug: 'odontologico',
  },
  {
    title: 'Seguro Aluguel',
    description: 'A garantia que substitui o fiador e facilita a locação de imóveis.',
    icon: '🔑',
    slug: 'aluguel',
  },
];

const corporateServices = [
  {
    title: 'Patrimonial',
    description: 'Proteja os bens e a estrutura física da sua empresa com coberturas sob medida.',
    icon: '🏢',
    slug: 'empresarial',
  },
  {
    title: 'Vida Empresarial',
    description: 'Tranquilidade e segurança financeira para seus colaboradores e famílias.',
    icon: '💙',
    slug: 'vida-empresarial',
  },
  {
    title: 'Saúde PME/Corp',
    description: 'Acesso a tratamentos de qualidade, promovendo saúde e qualidade de vida.',
    icon: '🩺',
    slug: 'saude-empresarial',
  },
  {
    title: 'Odonto PME/Corp',
    description: 'Bem-estar e saúde bucal completa para o seu time de colaboradores.',
    icon: '🦷',
    slug: 'odonto-empresarial',
  },
  {
    title: 'Previdência Privada',
    description: 'Diferencial competitivo para ajudar seus funcionários no planejamento do futuro.',
    icon: '💰',
    slug: 'previdencia-privada',
  },
  {
    title: 'Medicina do Trabalho',
    description: 'Ambientes mais saudáveis e produtivos com foco em prevenção e segurança.',
    icon: '⚕️',
    slug: 'medicina-trabalho',
  },
  {
    title: 'Benefícios Personalizados',
    description: 'Portfólio de benefícios adaptado às necessidades e ao perfil da sua empresa.',
    icon: '🖋️',
    slug: 'beneficios-personalizados',
  },
  {
    title: 'D&O / E&O',
    description: 'Seguro de responsabilidade civil para diretores, conselheiros e profissionais.',
    icon: '⚖️',
    slug: 'do-eo',
  },
  {
    title: 'Engenharia',
    description: 'Segurança total para obras civis, instalações e montagens de equipamentos.',
    icon: '🏗️',
    slug: 'engenharia',
  },
  {
    title: 'Garantia Contratual',
    description: 'Assegura o cumprimento de obrigações contratuais, licitações e judiciais.',
    icon: '📜',
    slug: 'garantia',
  },
  {
    title: 'Responsabilidade Civil',
    description: 'Amparo para danos causados a terceiros decorrentes da atividade empresarial.',
    icon: '🤝',
    slug: 'responsabilidade-civil',
  },
  {
    title: 'Máquinas e Equip.',
    description: 'Proteção para equipamentos móveis e estacionários de diversos setores.',
    icon: '🚜',
    slug: 'maquinas',
  },
];

export default function ServicesGrid() {
  return (
    <section id="servicos" className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2>Nossos <span>Serviços</span></h2>
          <p>Soluções especializadas para cada fase da sua vida ou do seu negócio.</p>
        </div>

        <div className={styles.categoryHeader}>
          <h3>Para <span>Você</span></h3>
        </div>
        <div className={styles.grid}>
          {individualServices.map((service) => (
            <Link 
              href={`/servicos/${service.slug}`} 
              key={service.slug}
              className={`${styles.card} glass`}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className={styles.more}>Saiba Mais →</span>
            </Link>
          ))}
        </div>

        <div className={styles.categoryHeader} style={{ marginTop: '5rem' }}>
          <h3>Para sua <span>Empresa</span></h3>
        </div>
        <div className={styles.grid}>
          {corporateServices.map((service) => (
            <Link 
              href={`/servicos/${service.slug}`} 
              key={service.slug}
              className={`${styles.card} glass ${styles.corporateCard}`}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className={styles.more}>Saiba Mais →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

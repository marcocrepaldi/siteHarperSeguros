import Image from 'next/image';
import styles from './AboutHarper.module.css';

export default function AboutHarper() {
  const timeline = [
    { year: '2010', title: 'Início em 2010', desc: 'Como Ultraffinity Consultoria, focada no desenvolvimento de seguros massificados.' },
    { year: '2011', title: 'Em 2011', desc: 'Fundada a Harper Corretora de Seguros, com um leque amplo para Pessoa Física e Jurídica.' },
    { year: '2014', title: '2014', desc: 'A Harper amplia seus investimentos em processos de seguros e atendimento.' },
    { year: '2020', title: '2020', desc: 'Implementação de novos sistemas de gestão e governança para maior eficiência.' },
    { year: '2021', title: '2021', desc: 'Firmação de parcerias estratégicas com seguradoras para vendas online e melhoria contínua.' },
    { year: '2025', title: '2025', desc: 'Lançamento do novo portal Harper, com portfólio de seguros sem igual no mercado.' }
  ];

  const differentials = [
    'Portfólio de Seguros sem igual',
    'Gestão e Análise de Riscos',
    'Parceria de Negócios',
    'Excelência no Atendimento',
    'Foco nas Necessidades dos Clientes',
    'Projeto de Redução de Custos'
  ];

  return (
    <section id="a-harper" className={styles.section}>
      <div className="container">
        {/* Intro Section */}
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <span className={styles.tag}>Seguro para tudo</span>
            <h2>Uma corretora realmente <span>diferente</span> e focada em <span>soluções</span></h2>
            <p>
              A <strong>Harper</strong> é uma corretora de seguros com ampla experiência no setor, 
              oferecendo um atendimento consultivo e acompanhando o segurado desde a 
              contratação até a resolução de eventuais sinistros.
            </p>
            <p>
              Com um perfil ágil e próximo, a Harper atua como consultoria, buscando as 
              soluções mais adequadas para cada cliente.
            </p>
            
            <div className={styles.diffGrid}>
              {differentials.map((diff, index) => (
                <div key={index} className={styles.diffItem}>
                  <span className={styles.check}>✓</span> {diff}
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.introImage}>
            <div className={`${styles.imageWrapper} glass`}>
              <Image 
                src="https://images.unsplash.com/photo-1600880212340-02d956381b08?auto=format&fit=crop&q=80&w=800" 
                alt="Equipe Harper" 
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.experienceBadge}>
                <h3>+30 Anos</h3>
                <p>Experiência dos sócios</p>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className={styles.historySection}>
          <div className={styles.historyHeader}>
            <h2>Temos uma grande <span>história</span> para te contar</h2>
            <p>Nossa jornada é marcada pela inovação e pelo compromisso com nossos clientes.</p>
          </div>
          
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={styles.teamSection}>
          <div className={styles.teamGrid}>
            <div className={styles.teamTitle}>
              <span className={styles.tag}>Nosso time</span>
              <h2>Profissionais <span>experientes</span> e <span>especializados</span></h2>
            </div>
            <div className={styles.teamDesc}>
              <p>
                Possuímos um time com profissionais altamente experientes, com décadas de 
                atuação nos segmentos de seguros e serviços. Além da experiência, é uma equipe 
                atualizada, com diversas especializações no setor e participações frequentes em 
                eventos e congressos do mercado segurador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

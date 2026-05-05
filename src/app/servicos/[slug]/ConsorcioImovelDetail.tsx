import Image from 'next/image';
import Link from 'next/link';
import styles from './ConsorcioImovel.module.css';

export default function ConsorcioImovelDetail() {
  return (
    <div className={styles.page}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/cons-imovel-hero.png"
            alt="Luxo e Realização"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <Link href="/#servicos" style={{ color: '#10b981', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: '600' }}>
              ← Voltar para Serviços
            </Link>
            <h1>Consórcio de Imóveis: A Arte da <span>Alavancagem</span></h1>
            <p>Construa seu império imobiliário ou conquiste a casa dos seus sonhos sem pagar 3 vezes o valor do bem.</p>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>0%</h3>
                <p>Taxa de Juros</p>
              </div>
              <div className={styles.statCard}>
                <h3>100%</h3>
                <p>Alavancagem Patrimonial</p>
              </div>
              <div className={styles.statCard}>
                <h3>FGTS</h3>
                <p>Uso na Contemplação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY SECTION */}
      <section className={styles.strategySection}>
        <div className="container">
          <div className={styles.strategyGrid}>
            <div className={styles.strategyImage}>
              <Image
                src="/cons-imovel-strat.png"
                alt="Estratégia de Investimento"
                width={800}
                height={800}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '2rem',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
            </div>
            <div className={styles.strategyText}>
              <h2>O Segredo dos <span>Grandes Investidores</span></h2>

              <p>O consórcio não é apenas para quem quer morar, é para quem quer crescer. Entenda a lógica que os bancos não te contam:</p>

              <ul className={styles.strategyList}>
                <li className={styles.strategyItem}>
                  <div className={styles.strategyNumber}>1</div>
                  <div>
                    <h4>Planejamento de Custo Zero</h4>
                    <p>Você acumula capital com uma taxa de administração mínima, infinitamente menor que qualquer juro bancário.</p>
                  </div>
                </li>
                <li className={styles.strategyItem}>
                  <div className={styles.strategyNumber}>2</div>
                  <h4>Poder de Compra à Vista</h4>
                  <p>Com a carta de crédito na mão, você negocia como um investidor com dinheiro vivo, conseguindo descontos de até 15% no imóvel.</p>
                </li>
                <li className={styles.strategyItem}>
                  <div className={styles.strategyNumber}>3</div>
                  <h4>Aluguel que paga a Parcela</h4>
                  <p>Compre o imóvel contemplado, coloque para alugar e use o rendimento para quitar as parcelas restantes. O imóvel se paga sozinho.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)' }}>Compare e <span>Decida</span></h2>
            <p>A diferença entre um passivo eterno e um ativo lucrativo.</p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Financiamento Bancário</th>
                  <th className={styles.highlight}>Consórcio Harper</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Taxa de Juros</td>
                  <td>9% a 12% ao ano + TR</td>
                  <td className={styles.highlight}>0% (Zero Juros)</td>
                </tr>
                <tr>
                  <td>Custo Final</td>
                  <td>Paga-se de 2 a 3 vezes o imóvel</td>
                  <td className={styles.highlight}>Apenas taxa adm. diluída</td>
                </tr>
                <tr>
                  <td>Entrada</td>
                  <td>Mínimo 20% do valor do bem</td>
                  <td className={styles.highlight}>Zero entrada necessária</td>
                </tr>
                <tr>
                  <td>Burocracia</td>
                  <td>Análise rigorosa e lenta</td>
                  <td className={styles.highlight}>Processo ágil e simplificado</td>
                </tr>
                <tr>
                  <td>Poder de Negociação</td>
                  <td>Limitado às regras do banco</td>
                  <td className={styles.highlight}>Total (Compra à Vista)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SUCCESS CASES */}
      <section className={styles.casesSection}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', textAlign: 'center' }}>Casos de <span>Conquista</span></h2>
          <div className={styles.casesGrid}>
            <div className={styles.caseCard}>
              <h3>O Primeiro Apartamento</h3>
              <p>"Aos 25 anos, planejei minha carta de crédito. Em 18 meses fui contemplado por lance. Comprei meu apartamento com 10% de desconto por ser à vista e hoje moro no que é meu, sem a dívida de 30 anos do banco."</p>
              <strong>— Ricardo S., Cliente Harper</strong>
            </div>
            <div className={styles.caseCard}>
              <h3>Renda Passiva Imobiliária</h3>
              <p>"Utilizei o consórcio para comprar salas comerciais. O valor do aluguel hoje cobre 120% da parcela do consórcio. Estou construindo patrimônio usando o dinheiro do mercado, não o meu."</p>
              <strong>— Mariana L., Investidora</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className={styles.ctaFooter}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'white' }}>Pronto para sua próxima <span>Grande Conquista?</span></h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: '0.9' }}>Nossos especialistas estão prontos para desenhar sua estratégia de alavancagem.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <Link href="/#contato" className="btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1.2rem' }}>
              Solicitar Estudo Personalizado
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

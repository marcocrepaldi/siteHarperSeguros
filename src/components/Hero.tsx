import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={styles.badge}>Segurança e Confiança</span>
          <h1 className="animate-fade-in">
            Proteja seu futuro com a <span className={styles.highlight}>Harper Seguros</span>
          </h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Trabalhamos com as melhores seguradoras do mercado para oferecer 
            tranquilidade a você, sua família e sua empresa.
          </p>
          <div className={styles.actions + " animate-fade-in"} style={{ animationDelay: '0.4s' }}>
            <a href="#servicos" className="btn-primary">
              Nossos Serviços
            </a>
            <a href="#contato" className={styles.btnSecondary}>
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

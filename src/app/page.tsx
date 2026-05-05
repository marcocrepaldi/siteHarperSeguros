import Link from "next/link";
import Hero from "@/components/Hero";
import AboutHarper from "@/components/AboutHarper";
import ServicesGrid from "@/components/ServicesGrid";
import KnowMore from "@/components/KnowMore";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <AboutHarper />
      <ServicesGrid />
      <KnowMore />
      
      <section id="consorcios" className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className={styles.header} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Realize seus <span>Sonhos</span></h2>
            <p>Conheça as vantagens do consórcio para planejar seu futuro sem juros.</p>
          </div>
          <div className={styles.consorcioGrid}>
            <Link href="/servicos/consorcio-imovel" className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius)', display: 'block', transition: 'all 0.3s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏗️</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>Consórcio de Imóvel</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                A forma mais inteligente de investir em patrimônio. Compre sua casa, terreno ou sala comercial com as menores taxas do mercado.
              </p>
              <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>Ver Vantagens de Investimento →</span>
            </Link>
            <Link href="/servicos/consorcio-auto" className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius)', display: 'block', transition: 'all 0.3s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚘</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>Consórcio Automóvel</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Troque de carro ou adquira seu primeiro veículo de forma planejada, sem as taxas abusivas do financiamento tradicional.
              </p>
              <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>Saiba Mais →</span>
            </Link>
          </div>
        </div>
      </section>
      
      <section id="contato" className="section-padding">
        <div className="container">
          <div className={styles.contactCard + " glass"}>
            <div className={styles.contactHeader}>
              <h2>Entre em <span>Contato</span></h2>
              <p>Peça uma cotação sem compromisso e receba em poucos minutos.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

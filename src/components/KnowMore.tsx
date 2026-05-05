import Image from 'next/image';
import Link from 'next/link';
import styles from './KnowMore.module.css';

export default function KnowMore() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Side: Image with Decorations */}
          <div className={styles.imageContainer}>
            <div className={styles.dots}></div>
            <div className={styles.imageWrapper}>
              <Image 
                src="/harper_team_meeting.png" 
                alt="Equipe Harper Seguros" 
                width={600} 
                height={500}
                className={styles.mainImage}
              />
              <div className={styles.decorBar1}></div>
              <div className={styles.decorBar2}></div>
              <div className={styles.decorBar3}></div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className={styles.content}>
            <span className={styles.subtitle}>Seguros para você, sua família e sua empresa</span>
            <h2 className={styles.title}>Conheça a <span>Harper</span></h2>
            
            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>
                Com proteção não se brinca. Confie em quem tem experiência e conhecimento.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                </div>
                <span>Economia</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    <path d="M8 9h8M8 13h5" />
                  </svg>
                </div>
                <span>Suporte especializado</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.6-11.7 8.38 8.38 0 013.8.9L21 3z" />
                  </svg>
                </div>
                <span>Atendimento por WhatsApp</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <span>Atendimento Consultivo</span>
              </div>
            </div>

            <Link href="/#sobre" className={styles.btn}>
              Saiba mais <span>→</span>
            </Link>

            <div className={styles.contactFooter}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.6-11.7 8.38 8.38 0 013.8.9L21 3z" />
                  </svg>
                </div>
                <div>
                  <small>WhatsApp:</small>
                  <strong>(11) 97616-8829</strong>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <small>Fone:</small>
                  <strong>(11) 2639-4655</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

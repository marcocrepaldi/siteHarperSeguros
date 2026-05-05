import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>Harper<span>Seguros</span></h3>
            <p>Tranquilidade e segurança para você e seu patrimônio.</p>
          </div>
          <div className={styles.links}>
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="/#servicos">Serviços</a></li>
              <li><a href="/#sobre">Sobre Nós</a></li>
              <li><a href="/#contato">Contato</a></li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h4>Escritório SP</h4>
            <p>📍 Rua Pais Leme, 215 - Sala 415<br/>Pinheiros - São Paulo - SP<br/>CEP 05424-010</p>
            <p>📞 (11) 2639-4655</p>
            <p>💬 (11) 97616-8829 (WhatsApp)</p>
            <p>⏰ Seg a Sex: 08:00 às 18:00</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Harper Corretora de Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

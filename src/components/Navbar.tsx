'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.social}>
              <a href="https://www.facebook.com/harperseguros" target="_blank" rel="noopener noreferrer" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://x.com/harperseguros" target="_blank" rel="noopener noreferrer" title="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/harper-seguros/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/></svg>
              </a>
              <a href="https://www.instagram.com/harperseguros/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.75-.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className={`${styles.navbar} glass`}>
        <div className={`${styles.container} container`}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            Harper<span>Seguros</span>
          </Link>
          
          <button className={`${styles.menuToggle} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
            <Link href="/#a-harper" onClick={closeMenu}>A Harper</Link>
            <Link href="/#servicos" onClick={closeMenu}>Serviços</Link>
            <Link href="/#consorcios" onClick={closeMenu}>Consórcios</Link>
            <Link href="/#sobre" onClick={closeMenu}>Sobre</Link>
            <Link href="/#contato" onClick={closeMenu}>Contato</Link>
            <Link href="/#contato" className="btn-primary" onClick={closeMenu}>
              Cotação Grátis
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

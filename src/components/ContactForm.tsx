'use client';

import { useState } from 'react';
import styles from '../app/page.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <input type="text" name="name" placeholder="Seu Nome" required />
        <input type="email" name="email" placeholder="Seu E-mail" required />
      </div>
      <input type="tel" name="phone" placeholder="Seu Telefone" required />
      <select name="service" required>
        <option value="">Selecione o Serviço</option>
        <option value="auto">Seguro Auto</option>
        <option value="vida">Seguro de Vida</option>
        <option value="empresarial">Seguro Empresarial</option>
        <option value="residencial">Seguro Residencial</option>
        <option value="saude">Seguro Saúde</option>
      </select>
      <textarea name="message" placeholder="Como podemos ajudar?" rows={4}></textarea>
      
      <button 
        type="submit" 
        className="btn-primary" 
        disabled={status === 'loading'}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
      </button>

      {status === 'success' && (
        <p style={{ color: 'var(--secondary)', textAlign: 'center', fontWeight: '600' }}>
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#ef4444', textAlign: 'center', fontWeight: '600' }}>
          Ocorreu um erro. Por favor, tente novamente.
        </p>
      )}
    </form>
  );
}

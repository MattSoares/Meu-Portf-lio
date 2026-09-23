'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

const contacts = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/amorimmatheus',
    href: profile.linkedin,
    external: true,
  },
  { label: 'GitHub', value: 'github.com/MattSoares', href: profile.github, external: true },
  { label: 'WhatsApp', value: '(11) 94700-6489', href: profile.whatsapp, external: true },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    let success = false;

    try {
      await navigator.clipboard.writeText(profile.email);
      success = true;
    } catch {
      const field = document.createElement('textarea');
      field.value = profile.email;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      try {
        field.select();
        success = document.execCommand('copy');
      } catch {
        success = false;
      } finally {
        field.remove();
      }
    }

    if (!success) {
      window.prompt('Copie o endereço de e-mail:', profile.email);
      return;
    }

    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section className="contact section-pad" id="contato" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div className="contact-copy reveal">
          <h2 id="contact-title">
            Vamos
            <br />
            conversar<span className="blue-dot">?</span>
          </h2>
          <p>Estou aberto a oportunidades de estágio, conexões e conversas sobre tecnologia.</p>
        </div>
        <div className="contact-links reveal">
          <div className="contact-email">
            <span aria-live="polite">{copied ? 'Copiado!' : 'E-mail'}</span>
            <button
              className="contact-email-copy"
              type="button"
              onClick={copyEmail}
              aria-label={copied ? 'Endereço de e-mail copiado' : `Copiar ${profile.email}`}
              title="Copiar endereço de e-mail"
            >
              <strong>{profile.email}</strong>
              {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            </button>
            <a
              className="contact-email-compose"
              href={`mailto:${profile.email}`}
              aria-label="Abrir aplicativo de e-mail"
              title="Abrir aplicativo de e-mail"
            >
              <Mail aria-hidden="true" />
            </a>
          </div>
          {contacts.map(({ label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              <span>{label}</span>
              <strong>{value}</strong>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

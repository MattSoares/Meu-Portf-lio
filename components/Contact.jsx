import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/portfolio';

const contacts = [
  { label: 'E-mail', value: profile.email, href: `mailto:${profile.email}`, external: false },
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

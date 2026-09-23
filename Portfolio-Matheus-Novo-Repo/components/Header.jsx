'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '@/data/portfolio';

const links = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label={`${profile.name}, voltar ao início`}
          onClick={() => setMenuOpen(false)}
        >
          {profile.name}
          <span className="brand-mark">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          id="site-nav"
          aria-label="Navegação principal"
        >
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contato">
          Fale comigo
        </a>
      </div>
    </header>
  );
}

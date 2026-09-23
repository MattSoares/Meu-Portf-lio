import { ArrowUp } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <span>
          {profile.name} © {new Date().getFullYear()}
        </span>
        <a href="#inicio">
          Voltar ao início <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

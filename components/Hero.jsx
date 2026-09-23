import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { assetPath, profile } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="shell hero-inner">
        <div className="hero-portrait reveal">
          <img
            src={assetPath('/assets/matheus-portrait.jpeg')}
            alt="Foto de Matheus Soares"
            width="240"
            height="300"
            fetchPriority="high"
          />
        </div>
        <div className="hero-copy reveal">
          <p className="eyebrow">Olá, eu sou</p>
          <h1 id="hero-title">
            Matheus Soares<span className="blue-dot">.</span>
          </h1>
          <p className="hero-role">Desenvolvedor backend em formação</p>
          <p className="hero-description">
            Estudante de Engenharia de Software na FIAP. Transformo ideias em aplicações funcionais,
            com atenção à lógica, às APIs e à experiência de quem usa.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Ver projetos <ArrowDownRight aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-aside reveal">
          <span className="aside-rule" />
          <p>Desenvolvendo soluções reais, uma linha de código por vez.</p>
          <a href="#contato">
            Vamos conversar <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

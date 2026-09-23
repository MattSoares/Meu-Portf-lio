import { ArrowUpRight, CalendarDays, LayoutDashboard, Users } from 'lucide-react';
import PortfolioGallery from '@/components/PortfolioGallery';
import { profile, projects } from '@/data/portfolio';

const features = [
  { icon: CalendarDays, label: 'Agenda e consultas' },
  { icon: Users, label: 'Pacientes e profissionais' },
  { icon: LayoutDashboard, label: 'Dashboard de gestão' },
];

export default function Projects() {
  return (
    <section className="projects section-pad" id="projetos" aria-labelledby="projects-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Trabalhos em destaque / 01-02</p>
          <h2 id="projects-title">
            Projetos que saíram do papel<span className="blue-dot">.</span>
          </h2>
        </div>

        <article
          className="project-feature reveal"
          id="odontovida"
          aria-labelledby="odontovida-title"
        >
          <div className="project-copy">
            <p className="project-index">01 / Aplicação full-stack</p>
            <h3 id="odontovida-title">Clínica OdontoVida</h3>
            <p>
              Sistema de gestão para uma clínica odontológica fictícia. Organiza o dia a dia da
              equipe com autenticação por perfil, cadastro de pacientes e agenda com validação de
              conflitos.
            </p>
            <ul className="feature-list">
              {features.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <ul className="tech-tags" aria-label="Tecnologias do projeto">
              {['React', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a
              className="text-link"
              href={projects.odontovida.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código no GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <PortfolioGallery images={projects.odontovida.images} />
        </article>

        <article className="project-secondary reveal" aria-labelledby="firewatch-title">
          <div className="secondary-identity" aria-hidden="true">
            <span className="identity-number">02</span>
            <span className="identity-name">FireWatch</span>
            <span className="identity-caption">Monitoramento ambiental · IoT</span>
          </div>
          <div className="project-copy">
            <p className="project-index">02 / IoT e sistemas embarcados</p>
            <h3 id="firewatch-title">FireWatch</h3>
            <p>
              Protótipo da Global Solution 2026 da FIAP para monitorar temperatura, umidade e fumaça
              com Arduino e classificar o risco de incêndio em três níveis.
            </p>
            <ul className="tech-tags" aria-label="Tecnologias do projeto">
              {['Arduino', 'C++', 'Sensores', 'IoT'].map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a
              className="text-link"
              href={projects.firewatch.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorar no GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

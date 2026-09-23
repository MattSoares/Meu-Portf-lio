import { Braces, Code2, Database, Wrench } from 'lucide-react';
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiOpenjdk,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiVite,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const groups = [
  {
    title: 'Backend e dados',
    description: 'Lógica, APIs e persistência',
    icon: Database,
    items: [
      { name: 'Java', icon: SiOpenjdk, color: '#c94d42' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#5c9d35' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#579646' },
      { name: 'Express', icon: SiExpress, color: '#313947' },
      { name: 'MongoDB', icon: SiMongodb, color: '#469355' },
      { name: 'Mongoose', icon: SiMongoose, color: '#9b3b39' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#7c536e' },
      { name: 'APIs REST', icon: Braces, color: '#496979' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Interfaces e experiências web',
    icon: Code2,
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#b09624' },
      { name: 'React', icon: SiReact, color: '#328fb0' },
      { name: 'HTML5', icon: SiHtml5, color: '#d96b36' },
      { name: 'CSS3', icon: SiCss, color: '#3477b6' },
    ],
  },
  {
    title: 'Ferramentas',
    description: 'Fluxo de trabalho e desenvolvimento',
    icon: Wrench,
    items: [
      { name: 'Git', icon: SiGit, color: '#d05a41' },
      { name: 'GitHub', icon: SiGithub, color: '#303847' },
      { name: 'Postman', icon: SiPostman, color: '#dd724c' },
      { name: 'Vite', icon: SiVite, color: '#8b65b7' },
      { name: 'VS Code', icon: VscVscode, color: '#3387ba' },
    ],
  },
];

export default function Stack() {
  return (
    <section className="stack section-pad" id="tecnologias" aria-labelledby="stack-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Tecnologias</p>
          <h2 id="stack-title">
            Minha stack<span className="blue-dot">.</span>
          </h2>
          <p>Ferramentas que aplico nos estudos e nos projetos.</p>
        </div>
        <div className="stack-grid">
          {groups.map(({ title, description, icon: Icon, items }) => (
            <div className="stack-group reveal" key={title}>
              <div className="stack-icon">
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {items.map(({ name, icon: BrandIcon, color }) => (
                  <li key={name} style={{ '--logo-color': color }}>
                    <BrandIcon aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="stack-learning reveal">
          <Braces aria-hidden="true" /> Estudando agora: SQL, testes automatizados, segurança de
          APIs e arquitetura de software.
        </p>
      </div>
    </section>
  );
}

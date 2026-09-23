export default function About() {
  return (
    <section className="about section-pad" id="sobre" aria-labelledby="about-title">
      <div className="shell about-layout">
        <div className="reveal">
          <p className="eyebrow">Um pouco sobre mim</p>
          <h2 id="about-title">
            Curiosidade que vira solução<span className="blue-dot">.</span>
          </h2>
        </div>
        <div className="about-copy reveal">
          <p>
            Sou estudante de Engenharia de Software na FIAP e técnico em Informática pelo SENAC.
            Tenho interesse especial em desenvolvimento backend, arquitetura de APIs e bancos de
            dados.
          </p>
          <p>
            Gosto de entender o sistema por inteiro, da interface à regra de negócio. Busco minha
            primeira oportunidade de estágio para aprender com uma equipe e contribuir em projetos
            reais.
          </p>
          <div className="education">
            <div>
              <strong>FIAP</strong>
              <span>Engenharia de Software · Em andamento</span>
            </div>
            <div>
              <strong>SENAC</strong>
              <span>Técnico em Informática · Concluído</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

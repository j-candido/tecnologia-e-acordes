const projects = [
    {
      category: "Inteligência Artificial",
      title: "Sistema de Reconhecimento Facial",
      description:
        "Projeto de reconhecimento facial de baixo custo, desenvolvido para identificar pessoas utilizando câmeras simples e tecnologias de visão computacional.",
      technologies: ["Python", "OpenCV", "DeepFace"],
      status: "Em desenvolvimento",
      subtitle: null,
      link: null,
      linkText: null,
    },
    {
      category: "Pesquisa e análise de dados",
      title:
        "Análise de dados e gestão da informação aplicada às mídias sociais",
      subtitle:
        "O que as reações às postagens nas mídias sociais podem expressar?",
      description:
        "Pesquisa que relaciona análise de dados e gestão da informação para investigar comportamentos e padrões de interação nas mídias sociais.",
      technologies: [
        "Análise de dados",
        "Gestão da informação",
        "Mídias sociais",
      ],
      status: "Em desenvolvimento",
      link: null,
      linkText: null,
    },
    {
      category: "Desenvolvimento Web",
      title: "Portfólio Tecnologia e Acordes",
      description:
        "Site responsivo criado para reunir minha trajetória profissional, formação, projetos, conteúdos e canais de contato em um único espaço.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "Em desenvolvimento",
      subtitle: null,
      link: null,
      linkText: null,
    },
  ];
  
  export default function Projects() {
    return (
      <section
        id="projetos"
        className="mt-10 scroll-mt-10 md:mt-16"
      >
        <div>
          <h2 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
            Projetos
          </h2>
        </div>
  
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.07]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300 sm:text-sm">
                  {project.category}
                </p>
  
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {project.status}
                </span>
              </div>
  
              <h3 className="mt-6 max-w-xl text-2xl font-bold leading-snug text-slate-100 sm:text-3xl">
                {project.title}
              </h3>

              {project.subtitle ? (
                <p className="mt-3 max-w-xl text-base font-medium leading-7 text-purple-200/80">
                  {project.subtitle}
                </p>
              ) : null}
  
              <p lang="pt-BR" className="mt-4 flex-1 text-left leading-7 text-white/65 [text-align-last:left] sm:hyphens-auto sm:text-justify">
                {project.description}
              </p>
  
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-purple-300/15 bg-purple-300/10 px-3 py-1 text-xs font-medium text-purple-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
  
              <div className="mt-8 border-t border-white/10 pt-6">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex font-semibold text-white transition hover:text-purple-300"
                  >
                    {project.linkText}
                    <span className="ml-2" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : (
                  <p className="text-sm font-medium text-white/45">
                    Novidades em breve
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

const projects = [
    {
      category: "Conteúdo e tecnologia",
      title: "Tecnologia e Acordes",
      description:
        "Blog criado para compartilhar experiências, estudos, tutoriais e descobertas sobre tecnologia, inteligência artificial e música.",
      technologies: ["Blogger", "Inteligência Artificial", "Produção de conteúdo"],
      status: "Publicado",
      link: "https://tecnologiaeacordes.blogspot.com/",
      linkText: "Acessar o blog",
    },
    {
      category: "Inteligência Artificial",
      title: "Sistema de Reconhecimento Facial",
      description:
        "Projeto de reconhecimento facial de baixo custo, desenvolvido para identificar pessoas utilizando câmeras simples e tecnologias de visão computacional.",
      technologies: ["Python", "OpenCV", "DeepFace"],
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
      link: null,
      linkText: null,
    },
  ];
  
  export default function Projects() {
    return (
      <section
        id="projetos"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-28"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
            Projetos
          </p>
  
          <h2 className="text-5xl font-bold text-slate-100">
            Ideias transformadas em experiências reais.
          </h2>
  
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Projetos que representam meus estudos, interesses e experiências com
            tecnologia, inteligência artificial e produção de conteúdo.
          </p>
        </div>
  
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                  {project.category}
                </p>
  
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {project.status}
                </span>
              </div>
  
              <h3 className="mt-6 text-2xl font-bold leading-snug text-slate-100">
                {project.title}
              </h3>
  
              <p className="mt-4 flex-1 leading-7 text-white/65">
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
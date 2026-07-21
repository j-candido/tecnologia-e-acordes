const cards = [
    {
      icon: "🎓",
      category: "Graduação",
      title: "Bacharelado em Sistemas de Informação",
      description: "Instituto Federal Catarinense — Campus Araquari.",
    },
    {
      icon: "🎓",
      category: "Pós-graduação",
      title: "Gestão de Tecnologia da Informação",
      description:
        "Especialização voltada à gestão estratégica de recursos, serviços e soluções de TI.",
    },
    {
      icon: "💼",
      category: "Atuação profissional",
      title: "Técnica em Tecnologia da Informação",
      description:
        "Universidade Federal de Santa Catarina — Campus Blumenau.",
    },
    {
      icon: "🤖",
      category: "Áreas de interesse",
      title: "Tecnologia e Inteligência Artificial",
      description:
        "Inteligência artificial, desenvolvimento web, reconhecimento facial e tecnologias emergentes.",
    },
    {
      icon: "📚",
      category: "Cursos e certificações",
      title: "Aprendizado em evolução",
      description:
        "Capacitações em inteligência artificial, transformação digital, sustentabilidade e ambiente institucional.",
    },
    {
      icon: "🚀",
      category: "Aprendizado contínuo",
      title: "Conhecimento aplicado na prática",
      description:
        "Estudos e experiências transformados em projetos, conteúdos e soluções para desafios reais.",
    },
  ];
  
  const certifications = [
    {
      title: "Espanhol",
      institution: "IFRS",
      workload: "30 horas",
      status: "Em andamento",
    },
    {
      title: "Inteligência Artificial na Prática",
      institution: "SC TEC",
      workload: "46 horas",
      status: "Concluído",
    },
    {
      title: "Plataforma Solar: SPA e Pedidos",
      institution: "Universidade Federal de Santa Catarina",
      workload: "30 horas",
      status: "Concluído",
    },
    {
      title: "Iniciação ao Ambiente Institucional UFSC",
      institution: "Universidade Federal de Santa Catarina",
      workload: "33 horas",
      status: "Concluído",
    },
    {
      title: "Agentes da Mudança: Sustentabilidade para Servidores",
      institution: "Universidade Federal de Santa Catarina",
      workload: "30 horas",
      status: "Concluído",
    },
  ];
  
  export default function Education() {
    return (
      <section
        id="capacitacoes"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-28"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
            Formação & Capacitações
          </p>
  
          <h2 className="text-5xl font-bold text-slate-100">
            Uma trajetória construída por estudo, prática e aprendizado contínuo.
          </h2>
  
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Minha formação acadêmica, experiência profissional e capacitações
            refletem o compromisso de continuar aprendendo e aplicando novos
            conhecimentos em projetos reais.
          </p>
        </div>
  
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.07]"
            >
              <span
                className="text-3xl"
                role="img"
                aria-hidden="true"
              >
                {card.icon}
              </span>
  
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
                {card.category}
              </p>
  
              <h3 className="mt-3 text-xl font-bold leading-snug text-slate-100">
            {card.title}
              </h3>
  
              <p className="mt-4 leading-7 text-slate-100/65">
                {card.description}
              </p>
            </article>
          ))}
        </div>
  
        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
              Cursos & Certificações
            </p>
  
            <h2 className="text-5xl font-bold text-slate-100">
              Capacitações que acompanham minha evolução.
            </h2>
          </div>
  
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            {certifications.map((certification, index) => (
              <article
                key={certification.title}
                className={`grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-center ${
                  index !== certifications.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div>
                <h4 className="text-lg font-semibold text-slate-100">
                  {certification.title}
                </h4>
  
                  <p className="mt-2 text-sm leading-6 text-slate-100/65">
                    {certification.institution} • {certification.workload}
                  </p>
                </div>
  
                <span
                  className={`w-fit rounded-full border px-4 py-2 text-xs font-semibold ${
                    certification.status === "Concluído"
                      ? "border-purple-300/20 bg-purple-300/10 text-purple-200"
                      : "border-white/15 bg-white/5 text-white/65"
                  }`}
                >
                  {certification.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
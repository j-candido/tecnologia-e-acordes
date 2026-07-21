const contactLinks = [
    {
      name: "Instagram",
      description: "@tecnologiaeacordes",
      href: "https://www.instagram.com/tecnologiaeacordes/",
    },
    {
      name: "Blog",
      description: "Tecnologia e Acordes",
      href: "https://tecnologiaeacordes.blogspot.com/",
    },
  ];
  
  export default function Contact() {
    return (
      <section
        id="contato"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
              Contato
            </p>
  
            <h2 className="text-5xl font-bold text-slate-100">
              Vamos compartilhar ideias e construir novas conexões.
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-white/65">
              Acompanhe meu trabalho, conheça novos conteúdos e entre em contato
              para conversar sobre tecnologia, inteligência artificial, projetos
              e aprendizado.
            </p>
          </div>
  
          <div className="space-y-4">
            {contactLinks.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-purple-300/30 hover:bg-white/[0.07]"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                    {contact.name}
                  </p>
  
                  <p className="mt-2 text-lg font-semibold text-white">
                    {contact.description}
                  </p>
                </div>
  
                <span
                  className="text-2xl text-white/50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
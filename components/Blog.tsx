export default function Blog() {
    return (
      <section
        id="blog"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-28"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
  
          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
              Tecnologia e Acordes
            </p>
  
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Conteúdo para aprender, experimentar e compartilhar.
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-white/65">
              No blog, compartilho experiências, tutoriais, projetos e
              descobertas sobre tecnologia, inteligência artificial e música,
              sempre de forma simples, prática e acessível.
            </p>
  
            <a
              href="https://tecnologiaeacordes.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#0d0714] transition hover:bg-purple-100"
            >
              Ler artigos
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
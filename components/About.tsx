export default function About() {
    return (
      <section
        id="sobre"
        className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:pb-28 sm:pt-20"
      >
        <div className="max-w-4xl">
  
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
            Sobre
          </p>
  
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
          Sobre o Tecnologia e Acordes
          </h1>
  
          <div className="mt-12 space-y-8 text-lg leading-9 text-white/70">
            <p>
              O <strong className="text-white">Tecnologia e Acordes</strong> é um
              espaço para compartilhar conteúdos, cursos, experiências e
              descobertas sobre tecnologia, inteligência artificial e música de
              forma simples, prática e acessível.
            </p>
            <p>
              Acredito que aprender é um processo contínuo e que compartilhar esse
              conhecimento é uma das melhores formas de crescer profissionalmente,
              inspirar outras pessoas e transformar ideias em projetos reais.
            </p>
          </div>
          <h2 className="mt-20 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
            Quem está por trás
          </h2>
          <div className="mt-10 space-y-8 text-lg leading-9 text-white/70">
  
            <p>
              Sou <strong className="text-white">Juliana Cândido</strong>,
              profissional da área de Tecnologia da Informação, apaixonada por
              tecnologia, inteligência artificial e aprendizado contínuo.
            </p>
  
            <p>
              Atualmente atuo como{" "}
              <strong className="text-white">
                Técnica em Tecnologia da Informação
              </strong>{" "}
              na Universidade Federal de Santa Catarina (UFSC), Campus Blumenau,
              contribuindo com infraestrutura, suporte e soluções tecnológicas
              para a comunidade acadêmica.
            </p>
  
            <p>
              Sou bacharela em <strong className="text-white">Sistemas de Informação</strong>{" "}
              pelo Instituto Federal Catarinense (IFC), Campus Araquari, com formação
              em desenvolvimento de software, dados e infraestrutura de tecnologia,
              e tenho especialização em{" "}
              <strong className="text-white">Gestão de Tecnologia da Informação</strong>.
            </p>
  
  
          </div>
          <a
            href="https://lattes.cnpq.br/3686286770123469"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-purple-300/30 bg-purple-300/10 px-5 py-3 text-sm font-semibold text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-300/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
          >
            Ver currículo Lattes <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    );
  }

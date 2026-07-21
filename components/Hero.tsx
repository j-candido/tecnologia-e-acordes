import Link from "next/link";

export default function Hero() {
  return (
    // cole aqui a seção completa
    <section
        id="inicio"
        className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 pt-40 pb-20 lg:grid-cols-2"
    >
        <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
                Tecnologia • Inteligência Artificial • Música
            </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Onde a tecnologia encontra a criatividade.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            Um espaço para compartilhar projetos, estudos, experiências e
            descobertas sobre tecnologia, inteligência artificial e música.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projetos"
              className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-[#0d0714] transition hover:bg-purple-100"
            >
              Conheça meus projetos
            </Link>

            <a
              href="https://tecnologiaeacordes.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 text-center font-semibold transition hover:border-white/40 hover:bg-white/5"
            >
              Acessar o blog
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-purple-500/20 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Perfil profissional
            </p>

            <h2 className="mt-5 text-3xl font-bold">
              Juliana Cândido
            </h2>

            <p className="mt-2 text-white/60">
              Técnica em Tecnologia da Informação
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Atuação</p>
                <p className="mt-1 font-semibold">UFSC Blumenau</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Formação</p>
                <p className="mt-1 font-semibold">
                  Bacharelado em Sistemas de Informação
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Pós-graduação em Gestão de Tecnologia da Informação
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Interesses</p>
                <p className="mt-1 font-semibold">
                  Inteligência Artificial, desenvolvimento e música
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-7 text-white/60">
              Criando projetos, aprendendo novas tecnologias e compartilhando
              conhecimento de forma simples.
            </p>
          </div>
        </div>
      </section>
  );
}
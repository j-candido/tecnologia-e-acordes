import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-[960px] px-5 pb-8 pt-8 text-center sm:px-6 sm:pt-10">
      <div>
        <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-50 sm:text-[42px] lg:text-5xl">
          Onde a tecnologia encontra a criatividade.
        </h1>
        <p className="mx-auto mt-5 max-w-[760px] text-lg leading-8 text-white/65">
          Conteúdos, cursos e experiências sobre tecnologia, inteligência artificial
          e música. Um espaço para aprender, explorar ideias e compartilhar descobertas.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/blog" className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-[#0d0714] transition hover:bg-purple-100">
            Explorar o blog
          </Link>
          <Link href="/cursos" className="rounded-xl border border-purple-300/30 bg-purple-300/10 px-6 py-3 text-center font-semibold text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-300/15">
            Conhecer os cursos
          </Link>
        </div>
      </div>
    </section>
  );
}

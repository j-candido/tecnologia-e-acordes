import Link from "next/link";

export default function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-title" className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center md:p-10">
        <h2 id="about-preview-title" className="text-2xl font-bold text-slate-100 sm:text-3xl">
          Conheça o Tecnologia e Acordes
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] leading-7 text-white/70">
          Um espaço criado por Juliana Cândido para compartilhar conhecimento,
          experiências e descobertas sobre tecnologia, inteligência artificial e música.
        </p>
        <Link href="/sobre" className="mt-6 inline-flex rounded-full border border-purple-300/30 bg-purple-300/10 px-6 py-3 font-semibold text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-300/15">
          Conheça o espaço <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

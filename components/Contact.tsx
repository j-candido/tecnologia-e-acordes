const contactLinks = [
  {
    label: "E-mail profissional",
    value: "j.candido@ufsc.br",
    href: "mailto:j.candido@ufsc.br",
  },
  {
    label: "LinkedIn",
    value: "Juliana Cândido",
    href: "https://br.linkedin.com/in/candidojuliana",
  },
  {
    label: "Instagram",
    value: "@tecnologiaeacordes",
    href: "https://www.instagram.com/tecnologiaeacordes/",
  },
  {
    label: "Currículo Lattes",
    value: "Formação e produção acadêmica",
    href: "https://lattes.cnpq.br/3686286770123469",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
            Contato
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
            Vamos compartilhar ideias e construir novas conexões.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Acompanhe meu trabalho e entre em contato para conversar sobre
            tecnologia, inteligência artificial, projetos e aprendizado.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-purple-300/30 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                  {contact.label}
                </p>
                <p className="mt-2 font-semibold text-white">{contact.value}</p>
              </div>
              <span className="text-xl text-white/60 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const lattesUrl = "https://lattes.cnpq.br/3686286770123469";

const cards = [
  {
    icon: "🎓",
    category: "Graduação",
    title: "Bacharelado em Sistemas de Informação",
    description:
      "Formação no Instituto Federal Catarinense (IFC), Campus Araquari, com base em desenvolvimento de software, dados e infraestrutura de tecnologia.",
  },
  {
    icon: "📈",
    category: "Pós-graduação",
    title: "Gestão de Tecnologia da Informação",
    description:
      "Especialização voltada à gestão estratégica de recursos, serviços, processos e soluções de TI.",
  },
  {
    icon: "🏛️",
    category: "Atuação profissional",
    title: "Técnica de Tecnologia da Informação",
    description:
      "Atuação na Universidade Federal de Santa Catarina (UFSC), Campus Blumenau, conectando conhecimento técnico às demandas do ambiente universitário.",
  },
];

type Certification = {
  title: string;
  institution: string;
  workload: string;
  period: string;
  summary: string;
};

const certifications: Certification[] = [
  {
    title: "Espanhol",
    institution: "Instituto Federal do Rio Grande do Sul (IFRS)",
    workload: "30 horas",
    period: "Em andamento",
    summary:
      "Desenvolvimento de vocabulário, compreensão textual e comunicação em situações cotidianas.",
  },
  {
    title: "Inteligência Artificial na Prática",
    institution: "SC TEC",
    workload: "46 horas",
    period: "2026",
    summary:
      "Aplicação de conceitos e ferramentas de IA na resolução de problemas e em atividades profissionais.",
  },
  {
    title: "Plataforma Solar: SPA e Pedidos",
    institution: "Universidade Federal de Santa Catarina (UFSC)",
    workload: "30 horas",
    period: "2025",
    summary:
      "Uso dos módulos administrativos da UFSC para tramitação de processos, pedidos e rotinas institucionais.",
  },
  {
    title: "Iniciação ao Ambiente Institucional UFSC",
    institution: "Universidade Federal de Santa Catarina",
    workload: "33 horas",
    period: "2025",
    summary:
      "Conhecimento da estrutura, das normas, dos serviços e das rotinas administrativas da Universidade.",
  },
  {
    title: "Agentes da Mudança: Sustentabilidade para Servidores",
    institution: "Universidade Federal de Santa Catarina",
    workload: "30 horas",
    period: "2025",
    summary:
      "Práticas sustentáveis no serviço público e reflexão sobre impactos ambientais no ambiente de trabalho.",
  },
  {
    title: "Detecção e Reconhecimento Facial com Python",
    institution: "Udemy",
    workload: "9 horas",
    period: "2023–2024",
    summary:
      "Construção de soluções para detectar, identificar e comparar faces utilizando Python e visão computacional.",
  },
  {
    title: "Reconhecimento Facial com Python e OpenCV",
    institution: "Udemy",
    workload: "4 horas",
    period: "2023",
    summary:
      "Fundamentos de processamento de imagens e implementação de reconhecimento facial com a biblioteca OpenCV.",
  },
  {
    title: "Scrum",
    institution: "Alura",
    workload: "10 horas",
    period: "2021",
    summary:
      "Fundamentos do framework ágil Scrum, seus papéis, eventos, artefatos e organização de entregas iterativas.",
  },
  {
    title: "Eclipse",
    institution: "Alura",
    workload: "12 horas",
    period: "2021",
    summary:
      "Configuração e uso da IDE Eclipse para criação, execução, depuração e organização de projetos Java.",
  },
  {
    title: "Git e GitHub",
    institution: "Alura",
    workload: "6 horas",
    period: "2021",
    summary:
      "Versionamento de código, trabalho com branches, commits e colaboração em repositórios remotos.",
  },
  {
    title: "Modelagem de Banco de Dados",
    institution: "Alura",
    workload: "10 horas",
    period: "2021",
    summary:
      "Criação de modelos conceituais e relacionais, definição de entidades, atributos e relacionamentos.",
  },
  {
    title: "Kanban",
    institution: "Alura",
    workload: "6 horas",
    period: "2021",
    summary:
      "Visualização do fluxo de trabalho, controle de tarefas em andamento e melhoria contínua de processos.",
  },
  {
    title: "Java OO",
    institution: "Alura",
    workload: "8 horas",
    period: "2021",
    summary:
      "Aplicação de orientação a objetos em Java, incluindo classes, encapsulamento, herança e polimorfismo.",
  },
  {
    title: "Java",
    institution: "Curso em Vídeo",
    workload: "40 horas",
    period: "2020",
    summary:
      "Fundamentos da linguagem Java, estruturas de controle, métodos, vetores e desenvolvimento de programas.",
  },
  {
    title: "Desenvolvimento Android Completo",
    institution: "Udemy",
    workload: "103 horas",
    period: "2019",
    summary:
      "Desenvolvimento de aplicativos Android, criação de interfaces, persistência de dados e integração de recursos móveis.",
  },
  {
    title: "Introdução ao Vue.js para Desenvolvimento Front-End",
    institution: "Instituto Federal Catarinense (IFC)",
    workload: "4 horas • Extensão universitária",
    period: "2019",
    summary:
      "Introdução à criação de interfaces reativas e componentes reutilizáveis para aplicações web com Vue.js.",
  },
  {
    title: "Técnicas de Depuração e TDD em Python utilizando VS Code",
    institution: "Instituto Federal Catarinense (IFC)",
    workload: "4 horas • Extensão universitária",
    period: "2019",
    summary:
      "Práticas de depuração, testes automatizados e desenvolvimento orientado a testes em projetos Python.",
  },
  {
    title: "O Canivete Suíço do Docker",
    institution: "Instituto Federal Catarinense (IFC)",
    workload: "4 horas • Extensão universitária",
    period: "2019",
    summary:
      "Conceitos essenciais de contêineres, imagens e ambientes isolados para desenvolvimento e execução de aplicações.",
  },
  {
    title: "Mentalidade de Desenvolvimento Contínuo",
    institution: "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
    workload: "4 horas • Extensão universitária",
    period: "2019",
    summary:
      "Princípios de evolução incremental, colaboração e aperfeiçoamento constante de produtos e processos.",
  },
  {
    title: "Introdução ao Python Básico",
    institution: "Instituto Politécnico de Ensino a Distância (iPED)",
    workload: "10 horas",
    period: "2019",
    summary:
      "Primeiros passos em Python, com sintaxe, variáveis, operadores e estruturas básicas de programação.",
  },
  {
    title: "Python 3",
    institution: "Curso em Vídeo",
    workload: "40 horas",
    period: "2019",
    summary:
      "Programação com Python 3, abordando estruturas de dados, funções, módulos e resolução de exercícios práticos.",
  },
  {
    title: "Webdesigner",
    institution: "Prime Cursos",
    workload: "45 horas",
    period: "2018",
    summary:
      "Fundamentos de planejamento visual, composição e criação de interfaces para páginas na web.",
  },
  {
    title: "Registro e Hospedagem de Sites",
    institution: "Cursos IAG Formação a Distância",
    workload: "6 horas",
    period: "2018",
    summary:
      "Conceitos de domínio, DNS, contratação de hospedagem e publicação de sites na internet.",
  },
  {
    title: "HTML e CSS",
    institution: "Cursos IAG Formação a Distância",
    workload: "24 horas",
    period: "2018",
    summary:
      "Estruturação semântica de páginas e estilização de layouts, tipografia, cores e elementos web.",
  },
  {
    title: "Lógica de Programação para Iniciantes",
    institution: "Learncafe Ensino",
    workload: "2 horas",
    period: "2018",
    summary:
      "Introdução a algoritmos, sequências lógicas, variáveis e estruturas de decisão e repetição.",
  },
];

function periodSortValue(period: string) {
  if (period === "Em andamento") return Number.POSITIVE_INFINITY;
  return Math.max(...(period.match(/\d{4}/g) ?? ["0"]).map(Number));
}

const certificationGroups = Array.from(
  certifications.reduce((groups, certification) => {
    const group = groups.get(certification.period) ?? [];
    group.push(certification);
    groups.set(certification.period, group);
    return groups;
  }, new Map<string, Certification[]>()),
  ([period, courses]) => ({
    period,
    courses,
    id: `period-${period.toLowerCase().replaceAll(" ", "-").replace("–", "-")}`,
  }),
).sort((a, b) => periodSortValue(b.period) - periodSortValue(a.period));

export default function Education() {
  return (
    <section id="capacitacoes" className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
          Formação & Capacitações
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
          Uma trajetória construída por estudo, prática e aprendizado contínuo.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Minha formação acadêmica, experiência profissional e capacitações
          refletem o compromisso de continuar aprendendo e aplicando novos
          conhecimentos em projetos reais.
        </p>
        <a
          href={lattesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-purple-300/30 bg-purple-300/10 px-5 py-3 text-sm font-semibold text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-300/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
        >
          Ver currículo Lattes completo <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.07]">
            <span className="text-3xl" role="img" aria-hidden="true">{card.icon}</span>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">{card.category}</p>
            <h2 className="mt-3 text-xl font-bold leading-snug text-slate-100">{card.title}</h2>
            <p className="mt-4 leading-7 text-slate-100/70">{card.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">Cursos & Certificações</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">Capacitações que acompanham minha evolução.</h2>
        </div>

        <div className="mt-10 space-y-8">
          {certificationGroups.map((group) => (
            <section key={group.period} aria-labelledby={group.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="border-b border-white/10 bg-purple-300/[0.07] px-6 py-5">
                <h3 id={group.id} className="text-xl font-bold text-purple-200">{group.period}</h3>
              </div>
              <div>
                {group.courses.map((certification, index) => (
                  <article key={certification.title} className={`p-6 ${index !== group.courses.length - 1 ? "border-b border-white/10" : ""}`}>
                    <h4 className="text-lg font-semibold text-slate-100">{certification.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-100/70">{certification.institution} • {certification.workload}</p>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-100/60">{certification.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

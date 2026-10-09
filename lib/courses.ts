export type Course = {
  id: string;
  title: string;
  cover: { src: string; alt: string; width: number; height: number } | null;
  description: string;
  shortDescription?: string;
  audience?: string;
  date: string | null;
  dateIsTentative?: boolean;
  time: string | null;
  location: string | null;
  locationDetails: string | null;
  registrationUrl: string | null;
  status: "open" | "soon" | "closed";
};

export const courses: Course[] = [
  {
    id: "seguranca-digital-na-pratica",
    title: "Segurança Digital na Prática",
    cover: {
      src: "/images/seguranca-digital-instagram-ufsc-1080x1350-v2.png",
      alt: "Segurança Digital na Prática — como usar o celular e as redes sociais com mais segurança. Fotografia de uma pessoa usando o celular. Autoria: Juliana Cândido, Técnica de TI. Identificação da UFSC.",
      width: 1080,
      height: 1350,
    },
    description:
      "Minicurso prático voltado a pessoas a partir de 40 anos, com orientações para usar o celular e as redes sociais com mais segurança. Por meio de exemplos do WhatsApp, Facebook, Instagram e TikTok, os participantes aprenderão a reconhecer golpes e notícias falsas, conferir informações antes de compartilhá-las e adotar cuidados ao clicar em links, fornecer dados ou realizar pagamentos. O minicurso também abordará os primeiros passos a tomar caso a pessoa seja vítima de um golpe.",
    shortDescription:
      "Minicurso prático para pessoas a partir de 40 anos sobre o uso seguro do celular e das redes sociais. Aprenda a reconhecer golpes e notícias falsas, proteger seus dados e saber como agir caso seja vítima de um golpe.",
    date: "2026-10-21",
    dateIsTentative: true,
    time: null,
    location: "UFSC Blumenau",
    locationDetails: null,
    registrationUrl: "https://inscricoes.ufsc.br/seguranca-digital",
    status: "open",
  },
];

export const courseStatusLabels = {
  open: "Inscrições abertas",
  soon: "Em breve",
  closed: "Encerrado",
};

// Só libera inscrições confirmadas com endereço seguro no site da UFSC.
export function getRegistrationUrl(course: Course): string | null {
  if (course.status !== "open" || !course.registrationUrl) return null;
  try {
    const url = new URL(course.registrationUrl);
    const isUfsc = url.hostname === "ufsc.br" || url.hostname.endsWith(".ufsc.br");
    return url.protocol === "https:" && isUfsc && !url.username && !url.password
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export function sortCourses(items: readonly Course[]): Course[] {
  return [...items].sort((a, b) => {
    const aClosed = a.status === "closed";
    const bClosed = b.status === "closed";
    if (aClosed !== bClosed) return aClosed ? 1 : -1;
    if (!a.date) return b.date ? 1 : 0;
    if (!b.date) return -1;
    return aClosed ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date);
  });
}

export function formatCourseDate(date: string): string {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

export function getNextCourse(items: readonly Course[], today: string): Course | null {
  return sortCourses(items).find(
    (course) => course.status !== "closed" && (!course.date || course.date >= today),
  ) ?? null;
}

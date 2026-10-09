import CourseCard from "@/components/CourseCard";
import { courses, sortCourses } from "@/lib/courses";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cursos",
  description:
    "Cursos ministrados por Juliana Cândido. Conheça o minicurso Segurança Digital na Prática, com data prevista em 21/10/2026 na UFSC Blumenau.",
  path: "/cursos",
});

export default function CursosPage() {
  const orderedCourses = sortCourses(courses);
  const groups = [
    { title: "Próximos cursos", items: orderedCourses.filter((course) => course.status !== "closed") },
    { title: "Cursos realizados", items: orderedCourses.filter((course) => course.status === "closed") },
  ];
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[960px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
            Cursos
          </p>
          <h1 className="mt-4 text-[30px] font-bold leading-[1.15] text-slate-100 sm:text-4xl lg:text-[44px]">
            Conhecimento para a vida!
          </h1>
        </div>
        {groups.filter((group) => group.items.length > 0).map((group) => (
          <section key={group.title} aria-label={group.title} className="mt-14">
            {group.title === "Cursos realizados" ? (
              <h2 className="text-3xl font-bold text-slate-100">{group.title}</h2>
            ) : null}
            <div className="mt-8 grid items-start gap-6">
              {group.items.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}

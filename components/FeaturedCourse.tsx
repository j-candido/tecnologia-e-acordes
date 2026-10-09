import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { courses, getNextCourse } from "@/lib/courses";

export default function FeaturedCourse() {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const course = getNextCourse(courses, today);

  return (
    <section aria-labelledby="featured-course-title" className="mx-auto max-w-6xl px-6 pt-12">
      <h2 id="featured-course-title" className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
        {course ? "Curso em destaque" : "Conheça os cursos realizados"}
      </h2>
      <div className="mt-10">
        {course ? <CourseCard course={course} featured /> : (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="leading-7 text-white/70">
              Confira os cursos realizados por Juliana Cândido e acompanhe as novidades na página de cursos.
            </p>
            <Link href="/cursos" className="mt-6 inline-flex rounded-full border border-purple-300/30 bg-purple-300/10 px-6 py-3 font-semibold text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-300/15">
              Conhecer os cursos realizados <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

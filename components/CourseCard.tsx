import Image from "next/image";
import Link from "next/link";
import { courseStatusLabels, formatCourseDate, getRegistrationUrl, type Course } from "@/lib/courses";

export default function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
  const registrationUrl = getRegistrationUrl(course);

  return (
    <article aria-labelledby={`course-${course.id}`} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start">
      {course.cover ? (
        <Image
          src={course.cover.src}
          alt={course.cover.alt}
          width={course.cover.width}
          height={course.cover.height}
          unoptimized
          className="mx-auto h-auto w-full max-w-[360px] object-contain lg:max-w-none"
        />
      ) : (
        <p className="border-b border-white/10 px-6 py-5 text-sm text-white/60">
          Capa original a disponibilizar.
        </p>
      )}
      <div className="min-w-0 p-6 text-left sm:p-8">
        <span className="inline-flex rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-sm font-medium text-purple-200">
          {course.status === "open" && !registrationUrl ? "Inscrições a confirmar" : courseStatusLabels[course.status]}
        </span>
        <h3 id={`course-${course.id}`} className="mt-5 break-words text-2xl font-bold leading-snug text-slate-100 sm:text-3xl">
          {course.title}
        </h3>
        <p className="mt-4 leading-7 text-white/70">{course.shortDescription ?? course.description}</p>
        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          {course.audience ? (
            <div className="col-span-2">
              <dt className="font-semibold text-purple-200">Público indicado</dt>
              <dd className="mt-1 leading-6 text-white/70">{course.audience}</dd>
            </div>
          ) : null}
          <div>
            <dt className="font-semibold text-purple-200">{course.dateIsTentative ? "Data prevista" : "Data"}</dt>
            <dd className="mt-1 text-white/70">
              {course.date ? <time dateTime={course.date}>{formatCourseDate(course.date)}</time> : "A confirmar"}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-purple-200">Horário</dt>
            <dd className="mt-1 text-white/70">{course.time ?? "A confirmar"}</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-semibold text-purple-200">Local</dt>
            <dd className="mt-1 leading-6 text-white/70">
              {course.location ?? "A confirmar"}
              <span className="block">Sala ou endereço: {course.locationDetails ?? "a confirmar"}</span>
            </dd>
          </div>
        </dl>
        <div className="mt-5 border-t border-white/10 pt-5">
          {registrationUrl ? (
            <>
              <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-purple-300/30 bg-purple-300/10 px-6 py-3 font-semibold text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-300/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">
                Inscreva-se <span className="ml-2" aria-hidden="true">↗</span>
                <span className="sr-only"> no site da UFSC (abre em nova aba)</span>
              </a>
            </>
          ) : featured ? (
            <Link href="/cursos" className="inline-flex rounded-full border border-purple-300/30 bg-purple-300/10 px-6 py-3 font-semibold text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-300/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">
              Conhecer o curso <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          ) : (
            <p className="text-sm leading-6 text-white/60">
              {course.status === "closed" ? "Inscrições encerradas. Curso disponível como histórico." : "Inscrições: A confirmar. O link será disponibilizado quando as inscrições estiverem abertas."}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

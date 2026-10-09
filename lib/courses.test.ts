import assert from "node:assert/strict";
import test from "node:test";
import { courses, formatCourseDate, getNextCourse, getRegistrationUrl, sortCourses, type Course } from "./courses.ts";

const course: Course = { ...courses[0], status: "soon", registrationUrl: null };

test("não libera inscrição pendente ou encerrada mesmo com URL", () => {
  assert.equal(getRegistrationUrl(course), null);
  for (const status of ["soon", "closed"] as const) {
    assert.equal(getRegistrationUrl({ ...course, status, registrationUrl: "https://inscricoes.ufsc.br/curso" }), null);
  }
});

test("abre inscrição somente com URL HTTPS da UFSC e confirmação", () => {
  const openCourse: Course = { ...course, status: "open" };
  assert.equal(getRegistrationUrl({ ...openCourse, registrationUrl: "https://inscricoes.ufsc.br/curso" }), "https://inscricoes.ufsc.br/curso");
  for (const registrationUrl of [null, "inválida", "javascript:alert(1)", "http://ufsc.br/curso", "https://ufsc.br.example.com/curso", "https://example.com", "https://usuario:senha@ufsc.br/curso"]) {
    assert.equal(getRegistrationUrl({ ...openCourse, registrationUrl }), null);
  }
});

test("ordena próximos por data e histórico do mais recente ao mais antigo sem alterar os dados", () => {
  const items: Course[] = [
    { ...course, id: "antigo", status: "closed", date: "2025-01-01" },
    { ...course, id: "futuro", date: "2026-12-01" },
    { ...course, id: "recente", status: "closed", date: "2026-09-01" },
    { ...course, id: "sem-data", date: null },
    { ...course, id: "proximo", date: "2026-10-21" },
  ];
  assert.deepEqual(sortCourses(items).map((item) => item.id), ["proximo", "futuro", "sem-data", "recente", "antigo"]);
  assert.equal(items[0].id, "antigo");
});

test("formata data prevista sem conversão de fuso horário", () => {
  assert.equal(formatCourseDate("2026-10-21"), "21/10/2026");
});

test("destaque ignora cursos encerrados e datas passadas", () => {
  assert.equal(getNextCourse([{ ...course, status: "closed" }], "2026-10-09"), null);
  assert.equal(getNextCourse([course], "2026-10-22"), null);
  assert.equal(getNextCourse([course], "2026-10-21")?.id, course.id);
  assert.equal(getNextCourse([], "2026-10-09"), null);
  assert.equal(getNextCourse([{ ...course, date: "2026-11-01" }, course], "2026-10-09")?.date, "2026-10-21");
});

import About from "@/components/About";
import Projects from "@/components/Projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sobre",
  description:
    "Conheça o Tecnologia e Acordes, seu propósito e os projetos de Juliana Cândido, Técnica em TI na UFSC Blumenau.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:pb-28 sm:pt-20">
        <About />
        <Projects />
      </div>
    </main>
  );
}

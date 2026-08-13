import Projects from "@/components/Projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Projetos de Juliana Cândido em inteligência artificial, análise de dados, desenvolvimento web e produção de conteúdo.",
  path: "/projetos",
});

export default function ProjetosPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <Projects />
    </main>
  );
}

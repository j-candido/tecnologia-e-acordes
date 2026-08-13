import Education from "@/components/Education";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Formação e Capacitações",
  description:
    "Formação acadêmica, experiência em tecnologia, cursos e certificações de Juliana Cândido.",
  path: "/capacitacoes",
});

export default function CapacitacoesPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <Education />
    </main>
  );
}

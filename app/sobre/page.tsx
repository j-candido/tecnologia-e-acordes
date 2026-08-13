import About from "@/components/About";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sobre mim",
  description:
    "Conheça a trajetória de Juliana Cândido na tecnologia, sua atuação na UFSC e seus interesses profissionais.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <About />
    </main>
  );
}

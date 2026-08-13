import Contact from "@/components/Contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contato",
  description:
    "Entre em contato com Juliana Cândido e acompanhe o Tecnologia e Acordes nas redes profissionais.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <Contact />
    </main>
  );
}

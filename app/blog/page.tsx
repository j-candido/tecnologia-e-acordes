import Blog from "@/components/Blog";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Artigos sobre tecnologia, inteligência artificial, projetos, aprendizado e música no Tecnologia e Acordes.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <Blog />
    </main>
  );
}

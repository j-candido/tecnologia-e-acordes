import Link from "next/link";

import {
  formatPostDate,
  getBloggerPosts,
  getPostImage,
  getPostSlug,
  removeHtml,
} from "@/lib/blogger";

export default async function Blog() {
  const posts = await getBloggerPosts();

  return (
    <section
      id="blog"
      className="mx-auto max-w-6xl scroll-mt-10 px-6 pb-24 pt-32"
    >
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
          Tecnologia e Acordes
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Blog
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
          Experiências, tutoriais, projetos e descobertas sobre tecnologia,
          inteligência artificial e música.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-xl font-semibold text-white">
            Não foi possível carregar as postagens
          </h2>

          <p className="mt-3 text-white/60">
            Tente novamente em alguns instantes.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const postSlug = getPostSlug(post);
            const postUrl = `/blog/${postSlug}`;
            const imageUrl = getPostImage(post);
            const postContent =
              post.summary?.$t ?? post.content?.$t ?? "";

            const cleanContent = removeHtml(postContent);
            const description = cleanContent.slice(0, 150);

            return (
              <article
                key={post.id.$t}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <Link href={postUrl} className="block">
                  <div className="aspect-[16/10] overflow-hidden bg-white/5">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`Imagem da postagem ${post.title.$t}`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-white/50">
                        Tecnologia e Acordes
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-6">
                  <time className="text-sm text-white/45">
                    {formatPostDate(post.published.$t)}
                  </time>

                  <h2 className="mt-3 text-xl font-semibold leading-snug text-white">
                    <Link
                      href={postUrl}
                      className="transition hover:text-purple-200"
                    >
                      {post.title.$t}
                    </Link>
                  </h2>

                  {description && (
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/60">
                      {description}
                      {cleanContent.length > 150 ? "..." : ""}
                    </p>
                  )}

                  <Link
                    href={postUrl}
                    className="mt-5 inline-flex items-center font-semibold text-purple-300 transition hover:text-purple-200"
                  >
                    Ler artigo
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
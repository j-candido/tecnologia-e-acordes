import Link from "next/link";

import {
  formatPostDate,
  getBloggerPosts,
  getPostImage,
  getPostSlug,
  removeHtml,
  type BloggerPost,
} from "@/lib/blogger";

function createExcerpt(post: BloggerPost) {
  const originalText = post.summary?.$t ?? post.content?.$t ?? "";
  const cleanText = removeHtml(originalText);

  if (cleanText.length <= 160) {
    return cleanText;
  }

  return `${cleanText.slice(0, 157).trim()}...`;
}

export default async function LatestPosts() {
  let posts: BloggerPost[] = [];

  try {
    const allPosts = await getBloggerPosts();
    posts = allPosts.slice(0, 3);
  } catch (error) {
    console.error("Erro ao carregar postagens:", error);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-12">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
          Últimas atualizações
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-100 md:text-5xl">
        Publicações mais recentes
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Conteúdos sobre tecnologia, inteligência artificial, projetos,
          aprendizado e música.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const postSlug = getPostSlug(post);
            const postUrl = `/blog/${postSlug}`;
            const postImage = getPostImage(post);

            return (
              <article
                key={post.id.$t}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.07]"
              >
                {postImage && (
                  <Link
                    href={postUrl}
                    className="-mx-7 -mt-7 mb-7 block overflow-hidden"
                  >
                    <img
                      src={postImage}
                      alt={`Imagem da publicação ${post.title.$t}`}
                      className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                )}

                <p className="text-sm font-medium text-purple-300">
                  {formatPostDate(post.published.$t)}
                </p>

                <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-100">
                  <Link
                    href={postUrl}
                    className="transition hover:text-purple-300"
                  >
                    {post.title.$t}
                  </Link>
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-300">
                  {createExcerpt(post)}
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <Link
                    href={postUrl}
                    className="inline-flex font-semibold text-slate-100 transition hover:text-purple-300"
                  >
                    Ler mais
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-slate-300">
            Não foi possível carregar as publicações neste momento.
          </p>
        </div>
      )}

      <div className="mt-10">
        <Link
          href="/blog"
          className="inline-flex rounded-full border border-purple-300/30 bg-purple-300/10 px-6 py-3 font-semibold text-purple-200 transition hover:border-purple-300/50 hover:bg-purple-300/15"
        >
          Ver todas as publicações
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
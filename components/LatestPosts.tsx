type BloggerLink = {
    rel: string;
    href: string;
  };
  
  type BloggerPost = {
    id: {
      $t: string;
    };
    title: {
      $t: string;
    };
    published: {
      $t: string;
    };
    content?: {
      $t: string;
    };
    summary?: {
      $t: string;
    };
    link: BloggerLink[];
  };
  
  type BloggerFeed = {
    feed?: {
      entry?: BloggerPost[];
    };
  };
  
  const BLOG_URL = "https://tecnologiaeacordes.blogspot.com";
  
  function removeHtml(html: string) {
    return html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getPostImage(post: BloggerPost) {
    const html = post.content?.$t || post.summary?.$t || "";
  
    const imageMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  
    return imageMatch?.[1] ?? null;
  }
  
  function createExcerpt(post: BloggerPost) {
    const originalText = post.summary?.$t || post.content?.$t || "";
    const cleanText = removeHtml(originalText);
  
    if (cleanText.length <= 160) {
      return cleanText;
    }
  
    return `${cleanText.slice(0, 157).trim()}...`;
  }
  
  function formatDate(date: string) {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }
  
  async function getLatestPosts() {
    const feedUrl =
      `${BLOG_URL}/feeds/posts/default` +
      "?alt=json&max-results=3&orderby=published";
  
    const response = await fetch(feedUrl, {
      next: {
        revalidate: 3600,
      },
    });
  
    if (!response.ok) {
      throw new Error("Não foi possível carregar as postagens do Blogger.");
    }
  
    const data: BloggerFeed = await response.json();
  
    return data.feed?.entry ?? [];
  }
  
  export default async function LatestPosts() {
    let posts: BloggerPost[] = [];
  
    try {
      posts = await getLatestPosts();
    } catch (error) {
      console.error("Erro ao carregar postagens:", error);
    }
  
    return (
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
            Últimas atualizações
          </p>
  
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-100 md:text-5xl">
            Novidades do blog
          </h2>
  
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Conteúdos sobre tecnologia, inteligência artificial, projetos,
            aprendizado e música.
          </p>
        </div>
  
        {posts.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const postLink = post.link.find(
                (link) => link.rel === "alternate",
              )?.href;

              const postImage = getPostImage(post);
  
              return (
                <article
                
                  key={post.id.$t}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.07]"
                >
                {postImage && (
  <div className="-mx-7 -mt-7 mb-7 overflow-hidden">
    <img
      src={postImage}
      alt={`Imagem da publicação ${post.title.$t}`}
      className="h-52 w-full object-cover"
      loading="lazy"
    />
  </div>
)}
                  <p className="text-sm font-medium text-purple-300">
                    {formatDate(post.published.$t)}
                  </p>
  
                  <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-100">
                    {post.title.$t}
                  </h3>
  
                  <p className="mt-4 flex-1 leading-7 text-slate-300">
                    {createExcerpt(post)}
                  </p>
  
                  {postLink && (
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <a
                        href={postLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex font-semibold text-slate-100 transition hover:text-purple-300"
                      >
                        Ler publicação
                        <span className="ml-2" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </div>
                  )}
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
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-purple-300/30 bg-purple-300/10 px-6 py-3 font-semibold text-purple-200 transition hover:border-purple-300/50 hover:bg-purple-300/15"
          >
            Ver todas as publicações
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </section>
    );
  }
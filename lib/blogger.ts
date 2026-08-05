import sanitizeHtml from "sanitize-html";

export type BloggerLink = {
    rel: string;
    href: string;
  };
  
  export type BloggerPost = {
    id: {
      $t: string;
    };
    title: {
      $t: string;
    };
    published: {
      $t: string;
    };
    updated?: {
      $t: string;
    };
    content?: {
      $t: string;
    };
    summary?: {
      $t: string;
    };
    media$thumbnail?: {
      url: string;
    };
    link: BloggerLink[];
  };
  
  type BloggerFeed = {
    feed?: {
      entry?: BloggerPost[];
    };
  };
  
  const BLOG_FEED_URL =
    "https://tecnologiaeacordes.blogspot.com/feeds/posts/default";
  const BLOG_FEED_PAGE_SIZE = 100;
  
  export async function getBloggerPosts(): Promise<BloggerPost[]> {
    const posts: BloggerPost[] = [];
    let startIndex = 1;

    while (true) {
      const url = new URL(BLOG_FEED_URL);
      url.searchParams.set("alt", "json");
      url.searchParams.set("max-results", String(BLOG_FEED_PAGE_SIZE));
      url.searchParams.set("start-index", String(startIndex));

      const response = await fetch(url, {
        next: {
          revalidate: 3600,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao carregar o Blogger: ${response.status}`);
      }
  
      const data: BloggerFeed = await response.json();
  
      const pagePosts = data.feed?.entry ?? [];

      posts.push(...pagePosts);

      if (pagePosts.length < BLOG_FEED_PAGE_SIZE) {
        return posts;
      }

      startIndex += BLOG_FEED_PAGE_SIZE;
    }
  }
  
  export function getPostOriginalUrl(post: BloggerPost): string {
    return post.link.find((link) => link.rel === "alternate")?.href ?? "";
  }
  
  export function getPostSlug(post: BloggerPost): string {
    const originalUrl = getPostOriginalUrl(post);
  
    if (!originalUrl) {
      return "";
    }
  
    try {
      const pathname = new URL(originalUrl).pathname;
      const fileName = pathname.split("/").filter(Boolean).at(-1) ?? "";
  
      return fileName.replace(/\.html$/, "");
    } catch {
      return "";
    }
  }
  
  export async function getBloggerPostBySlug(
    slug: string
  ): Promise<BloggerPost | null> {
    const posts = await getBloggerPosts();
  
    return posts.find((post) => getPostSlug(post) === slug) ?? null;
  }
  
  export function getPostImage(post: BloggerPost): string {
    const html = post.content?.$t ?? post.summary?.$t ?? "";
  
    const imageMatch = html.match(
      /<img[^>]+src=["']([^"']+)["'][^>]*>/i
    );
  
    if (imageMatch?.[1]) {
      return improveBloggerImage(imageMatch[1]);
    }
  
    if (post.media$thumbnail?.url) {
      return improveBloggerImage(post.media$thumbnail.url);
    }
  
    return "";
  }
  
  function improveBloggerImage(imageUrl: string): string {
    return imageUrl
      .replace(/\/s\d+(-c)?\//, "/s1600/")
      .replace(/=s\d+(-c)?/, "=s1600");
  }
  
  export function removeHtml(html: string): string {
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
  
  export function cleanPostHtml(html: string): string {
    const sanitizedHtml = sanitizeHtml(html, {
      allowedTags: [
        "a", "b", "blockquote", "br", "code", "div", "em", "figcaption",
        "figure", "h2", "h3", "h4", "hr", "i", "iframe", "img", "li",
        "ol", "p", "pre", "span", "strong", "table", "tbody", "td", "th",
        "thead", "tr", "ul", "video", "source",
      ],
      allowedAttributes: {
        a: ["href", "target", "rel", "title"],
        iframe: ["src", "title", "allow", "allowfullscreen", "loading"],
        img: ["src", "alt", "title", "width", "height", "loading"],
        video: ["src", "controls", "poster", "width", "height"],
        source: ["src", "type"],
        td: ["colspan", "rowspan"],
        th: ["colspan", "rowspan", "scope"],
      },
      allowedSchemes: ["http", "https", "mailto"],
      allowedIframeHostnames: [
        "www.youtube.com",
        "youtube.com",
        "player.vimeo.com",
      ],
      transformTags: {
        a: sanitizeHtml.simpleTransform(
          "a",
          { rel: "noopener noreferrer" },
          true
        ),
        img: sanitizeHtml.simpleTransform("img", { loading: "lazy" }, true),
      },
    });

    return sanitizedHtml
      .replace(/<\/?font[^>]*>/gi, "")
      .replace(/<\/?big[^>]*>/gi, "")
      .replace(/<\/?small[^>]*>/gi, "")
  
      // Remove negrito quando envolve um parágrafo inteiro
      .replace(
        /<p([^>]*)>\s*<(strong|b)>([\s\S]*?)<\/\2>\s*<\/p>/gi,
        "<p$1>$3</p>"
      )
  
      // Remove negrito quando envolve uma div inteira
      .replace(
        /<div([^>]*)>\s*<(strong|b)>([\s\S]*?)<\/\2>\s*<\/div>/gi,
        "<div$1>$3</div>"
      )
  
      // Corrige casos em que o Blogger abre o negrito antes de vários parágrafos
      .replace(
        /<(strong|b)>\s*((?:<p[^>]*>[\s\S]*?<\/p>\s*)+)<\/\1>/gi,
        "$2"
      )
  
      // Remove blocos vazios
      .replace(/<p>\s*(?:&nbsp;|<br\s*\/?>|\s)*<\/p>/gi, "")
      .replace(/<div>\s*(?:&nbsp;|<br\s*\/?>|\s)*<\/div>/gi, "");
  }
  
  export function formatPostDate(date: string): string {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }

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
    "https://tecnologiaeacordes.blogspot.com/feeds/posts/default?alt=json&max-results=100";
  
  export async function getBloggerPosts(): Promise<BloggerPost[]> {
    try {
      const response = await fetch(BLOG_FEED_URL, {
        next: {
          revalidate: 3600,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao carregar o Blogger: ${response.status}`);
      }
  
      const data: BloggerFeed = await response.json();
  
      return data.feed?.entry ?? [];
    } catch (error) {
      console.error("Erro ao carregar as postagens:", error);
      return [];
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
    return html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/\son\w+=["'][^"']*["']/gi, "")
      .replace(/javascript:/gi, "")
  
      // remove estilos inline
      .replace(/\sstyle="[^"]*"/gi, "")
  
      // remove classes do Blogger
      .replace(/\sclass="[^"]*"/gi, "")
  
      // remove ids
      .replace(/\sid="[^"]*"/gi, "");
  }
  
  export function formatPostDate(date: string): string {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }
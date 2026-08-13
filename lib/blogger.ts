import { cache } from "react";
import sanitizeHtml from "sanitize-html";

export type BloggerLink = {
  rel: string;
  href: string;
};

export type BloggerPost = {
  id: { $t: string };
  title: { $t: string };
  published: { $t: string };
  updated?: { $t: string };
  content?: { $t: string };
  summary?: { $t: string };
  media$thumbnail?: { url: string };
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
const BLOG_FEED_MAX_PAGES = 20;
const BLOG_REQUEST_TIMEOUT_MS = 10_000;

export const getBloggerPosts = cache(async (): Promise<BloggerPost[]> => {
  const posts: BloggerPost[] = [];
  let startIndex = 1;
  let page = 0;

  while (page < BLOG_FEED_MAX_PAGES) {
    const url = new URL(BLOG_FEED_URL);
    url.searchParams.set("alt", "json");
    url.searchParams.set("max-results", String(BLOG_FEED_PAGE_SIZE));
    url.searchParams.set("start-index", String(startIndex));

    const response = await fetch(url, {
      signal: AbortSignal.timeout(BLOG_REQUEST_TIMEOUT_MS),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Erro ao carregar o Blogger: ${response.status}`);
    }

    const data: BloggerFeed = await response.json();
    const pagePosts = data.feed?.entry ?? [];
    posts.push(...pagePosts);

    if (pagePosts.length < BLOG_FEED_PAGE_SIZE) {
      return posts.filter((post) => getPostSlug(post));
    }

    startIndex += BLOG_FEED_PAGE_SIZE;
    page += 1;
  }

  return posts.filter((post) => getPostSlug(post));
});

export function getPostOriginalUrl(post: BloggerPost): string {
  return post.link.find((link) => link.rel === "alternate")?.href ?? "";
}

export function getPostSlug(post: BloggerPost): string {
  const originalUrl = getPostOriginalUrl(post);

  if (!originalUrl) return "";

  try {
    const pathname = new URL(originalUrl).pathname;
    const fileName = pathname.split("/").filter(Boolean).at(-1) ?? "";
    return fileName.replace(/\.html$/, "");
  } catch {
    return "";
  }
}

export const getBloggerPostBySlug = cache(
  async (slug: string): Promise<BloggerPost | null> => {
    if (!slug) return null;

    const posts = await getBloggerPosts();
    return posts.find((post) => getPostSlug(post) === slug) ?? null;
  },
);

export function getPostImage(post: BloggerPost): string {
  const html = post.content?.$t ?? post.summary?.$t ?? "";
  const imageMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);

  if (imageMatch?.[1]) return improveBloggerImage(imageMatch[1]);
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
  const text = sanitizeHtml(html, {
    allowedTags: [],
    allowedAttributes: {},
  });

  const namedEntities: Record<string, string> = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };

  function decodeCodePoint(entity: string, code: string, radix: number) {
    const value = Number.parseInt(code, radix);
    if (!Number.isInteger(value) || value < 0 || value > 0x10ffff) {
      return entity;
    }
    return String.fromCodePoint(value);
  }

  return text
    .replace(/&([a-z]+);/gi, (entity, name: string) =>
      namedEntities[name.toLowerCase()] ?? entity,
    )
    .replace(/&#(\d+);/g, (entity, code: string) =>
      decodeCodePoint(entity, code, 10),
    )
    .replace(/&#x([\da-f]+);/gi, (entity, code: string) =>
      decodeCodePoint(entity, code, 16),
    )
    .replace(/\s+/g, " ")
    .trim();
}

export function cleanPostHtml(html: string): string {
  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: [
      "a",
      "b",
      "blockquote",
      "br",
      "code",
      "div",
      "em",
      "figcaption",
      "figure",
      "h2",
      "h3",
      "h4",
      "hr",
      "i",
      "iframe",
      "img",
      "li",
      "ol",
      "p",
      "pre",
      "span",
      "strong",
      "table",
      "tbody",
      "td",
      "th",
      "thead",
      "tr",
      "ul",
      "video",
      "source",
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
        true,
      ),
      img: sanitizeHtml.simpleTransform("img", { loading: "lazy" }, true),
    },
  });

  return sanitizedHtml
    .replace(/<iframe(?![^>]*\bsrc=)[^>]*>\s*<\/iframe>/gi, "")
    .replace(/<\/?font[^>]*>/gi, "")
    .replace(/<\/?big[^>]*>/gi, "")
    .replace(/<\/?small[^>]*>/gi, "")
    .replace(
      /<p([^>]*)>\s*<(strong|b)>([\s\S]*?)<\/\2>\s*<\/p>/gi,
      "<p$1>$3</p>",
    )
    .replace(
      /<div([^>]*)>\s*<(strong|b)>([\s\S]*?)<\/\2>\s*<\/div>/gi,
      "<div$1>$3</div>",
    )
    .replace(
      /<(strong|b)>\s*((?:<p[^>]*>[\s\S]*?<\/p>\s*)+)<\/\1>/gi,
      "$2",
    )
    .replace(/<p>\s*(?:&nbsp;|<br\s*\/?>|\s)*<\/p>/gi, "")
    .replace(/<div>\s*(?:&nbsp;|<br\s*\/?>|\s)*<\/div>/gi, "");
}

export function formatPostDate(date: string): string {
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "Data não informada";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

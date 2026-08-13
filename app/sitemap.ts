import type { MetadataRoute } from "next";
import { getBloggerPosts, getPostSlug } from "@/lib/blogger";

const siteUrl = "https://www.tecnologiaeacordes.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/sobre", "/capacitacoes", "/projetos", "/blog", "/contato"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "/blog" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    }),
  );

  try {
    const posts = await getBloggerPosts();
    const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${siteUrl}/blog/${getPostSlug(post)}`,
      lastModified: new Date(post.updated?.$t ?? post.published.$t),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...staticRoutes, ...postRoutes];
  } catch {
    return staticRoutes;
  }
}

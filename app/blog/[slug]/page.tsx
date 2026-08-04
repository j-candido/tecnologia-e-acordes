import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Scrolltotop from "@/components/Scrolltotop";

import {
  cleanPostHtml,
  formatPostDate,
  getBloggerPostBySlug,
  getPostImage,
  removeHtml,
} from "@/lib/blogger";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBloggerPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado | Tecnologia e Acordes",
    };
  }

  const postContent = post.content?.$t ?? post.summary?.$t ?? "";
  const description = removeHtml(postContent).slice(0, 160);
  const image = getPostImage(post);

  return {
    title: `${post.title.$t} | Tecnologia e Acordes`,
    description,
    openGraph: {
      title: post.title.$t,
      description,
      type: "article",
      publishedTime: post.published.$t,
      images: image ? [{ url: image }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBloggerPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const originalHtml = post.content?.$t ?? post.summary?.$t ?? "";
  const postHtml = cleanPostHtml(originalHtml);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070B1A] via-[#0B1226] to-[#131B33]">
      <Header />

      <article className="mx-auto max-w-4xl px-6 pb-24 pt-24">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center font-semibold text-purple-300 transition hover:text-purple-200"
        >
          <span className="mr-2" aria-hidden="true">
            ←
          </span>
          Voltar ao blog
        </Link>

        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
            Tecnologia e Acordes
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
            {post.title.$t}
          </h1>

          <time
            dateTime={post.published.$t}
            className="mt-5 block text-sm text-white/50"
          >
            {formatPostDate(post.published.$t)}
          </time>
        </header>

        <div
          className="
            overflow-hidden rounded-3xl bg-white px-8 pb-14 pt-5 shadow-2xl
            text-[15px] leading-7 text-justify text-slate-800
            sm:px-12 sm:pb-16 sm:pt-6

            [&>*:first-child]:mt-0
            [&>*:first-child]:pt-0

            [&_a]:font-semibold
            [&_a]:text-blue-600
            [&_a]:no-underline
            [&_a:hover]:underline

            [&_blockquote]:my-8
            [&_blockquote]:border-l-4
            [&_blockquote]:border-purple-500
            [&_blockquote]:bg-slate-50
            [&_blockquote]:py-3
            [&_blockquote]:pl-6
            [&_blockquote]:pr-4
            [&_blockquote]:italic
            [&_blockquote]:text-slate-700

            [&_code]:rounded
            [&_code]:bg-slate-100
            [&_code]:px-1
            [&_code]:py-0.5

            [&_pre]:my-8
            [&_pre]:overflow-x-auto
            [&_pre]:rounded-xl
            [&_pre]:bg-slate-900
            [&_pre]:p-5
            [&_pre]:text-left
            [&_pre]:text-slate-100

            [&_h2]:mb-5
            [&_h2]:mt-12
            [&_h2]:text-2xl
            [&_h2]:font-bold
            [&_h2]:text-left
            [&_h2]:text-slate-900

            [&_h3]:mb-4
            [&_h3]:mt-10
            [&_h3]:text-xl
            [&_h3]:font-bold
            [&_h3]:text-left
            [&_h3]:text-slate-900

            [&_img]:mx-auto
            [&_img]:my-8
            [&_img]:block
            [&_img]:h-auto
            [&_img]:w-auto
            [&_img]:max-w-full
            [&_img]:rounded-2xl

            [&_figure]:mx-auto
            [&_figure]:my-8
            [&_figure]:max-w-full
            [&_figure]:text-center

            [&_iframe]:mx-auto
            [&_iframe]:my-8
            [&_iframe]:block
            [&_iframe]:aspect-video
            [&_iframe]:h-auto
            [&_iframe]:w-full
            [&_iframe]:max-w-3xl
            [&_iframe]:rounded-2xl
            [&_iframe]:border-0

            [&_video]:mx-auto
            [&_video]:my-8
            [&_video]:block
            [&_video]:h-auto
            [&_video]:w-full
            [&_video]:max-w-3xl
            [&_video]:rounded-2xl

            [&_div]:text-[15px]
            [&_span]:text-[15px]
            [&_font]:text-[15px]
            [&_big]:text-[15px]
            [&_small]:text-[15px]

            [&_strong]:font-bold
            [&_strong]:text-slate-900

            [&_p>strong:only-child]:font-normal
            [&_p>b:only-child]:font-normal
            [&_div>strong:only-child]:font-normal
            [&_div>b:only-child]:font-normal

            [&_p]:mb-4
            [&_p]:text-[15px]
            [&_p]:font-normal
            [&_p]:leading-7
            [&_p]:text-justify

            [&_ul]:my-5
            [&_ul]:list-disc
            [&_ul]:pl-8

            [&_ol]:my-5
            [&_ol]:list-decimal
            [&_ol]:pl-8

            [&_li]:mb-1
            [&_li]:text-[15px]
            [&_li]:font-normal
            [&_li]:leading-7
            [&_li]:text-justify
          "
          dangerouslySetInnerHTML={{ __html: postHtml }}
        />
      </article>

      <Scrolltotop />
      <Footer />
    </main>
  );
}
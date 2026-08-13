import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Scrolltotop from "@/components/Scrolltotop";
import "./globals.css";

const siteUrl = "https://www.tecnologiaeacordes.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tecnologia e Acordes",
    template: "%s | Tecnologia e Acordes",
  },
  description:
    "Tecnologia, inteligência artificial, desenvolvimento de software, projetos, música e aprendizado por Juliana Cândido.",
  keywords: [
    "Tecnologia",
    "Inteligência Artificial",
    "Next.js",
    "Programação",
    "Python",
    "Desenvolvimento",
    "Blog",
    "Tecnologia e Acordes",
  ],
  authors: [{ name: "Juliana Cândido" }],
  creator: "Juliana Cândido",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Tecnologia e Acordes",
    title: "Tecnologia e Acordes",
    description:
      "Tecnologia, inteligência artificial, desenvolvimento de software, projetos, música e aprendizado por Juliana Cândido.",
    images: [
      {
        url: "/images/capa-tecnologia-e-acordes.webp",
        width: 1536,
        height: 1024,
        alt: "Tecnologia e Acordes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnologia e Acordes",
    description:
      "Tecnologia, inteligência artificial, desenvolvimento de software, projetos, música e aprendizado por Juliana Cândido.",
    images: ["/images/capa-tecnologia-e-acordes.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-[#070B1A] text-slate-50">
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-lg bg-white px-4 py-2 font-semibold text-[#070B1A] transition focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <Header />
        {children}
        <Footer />
        <Scrolltotop />
      </body>
    </html>
  );
}

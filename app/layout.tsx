import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

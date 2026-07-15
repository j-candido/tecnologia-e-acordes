import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="#inicio"
            className="font-semibold text-white transition hover:text-purple-300"
          >
            Tecnologia e Acordes
          </Link>

          <p className="mt-2">
            Tecnologia, inteligência artificial e música.
          </p>
        </div>

        <div className="sm:text-right">
          <p>© 2026 Juliana Cândido.</p>

          <p className="mt-2">
            Desenvolvido com Next.js e Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
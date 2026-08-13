"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Sobre mim", href: "/sobre" },
  { label: "Capacitações", href: "/capacitacoes" },
  { label: "Projetos", href: "/projetos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function isActive(href: string) {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B1A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4 md:py-5">
        <Link
          href="/"
          className="text-base font-bold sm:text-lg"
          onClick={closeMenu}
        >
          Tecnologia e Acordes
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`transition hover:text-white ${
                isActive(item.href) ? "text-purple-200" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-purple-300/30 hover:bg-white/10 sm:h-11 sm:w-11 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">
            {menuOpen ? "Fechar menu" : "Abrir menu"}
          </span>

          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#070B1A]/95 md:hidden"
        >
        <nav aria-label="Navegação móvel" className="mx-auto flex max-w-6xl flex-col px-6 py-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b border-white/5 py-3 transition last:border-b-0 hover:text-white ${
                isActive(item.href) ? "text-purple-200" : "text-white/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        </div>
      ) : null}
    </header>
  );
}

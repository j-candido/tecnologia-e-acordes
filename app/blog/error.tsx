"use client";

import { useEffect } from "react";

type BlogErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function BlogError({ error, reset }: BlogErrorProps) {
  useEffect(() => {
    console.error("Erro ao carregar o Blogger:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#070B1A] via-[#0B1226] to-[#131B33] px-6 text-white">
      <div className="max-w-lg rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
        <h1 className="text-2xl font-bold">Blog temporariamente indisponível</h1>
        <p className="mt-4 leading-7 text-white/65">
          Não foi possível consultar as publicações agora. Tente novamente em
          alguns instantes.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-7 rounded-xl bg-white px-6 py-3 font-semibold text-[#0d0714] transition hover:bg-purple-100"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}

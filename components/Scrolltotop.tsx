"use client";

import { useEffect, useState } from "react";

export default function Scrolltotop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      className="
        fixed bottom-6 right-6 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-purple-300/30
        bg-[#11182d]/80
        text-purple-200
        shadow-lg shadow-black/30
        backdrop-blur-md
        transition duration-300
        hover:-translate-y-1
        hover:border-purple-300/60
        hover:bg-purple-500/20
        hover:text-white
        focus:outline-none
        focus:ring-2
        focus:ring-purple-400
        focus:ring-offset-2
        focus:ring-offset-[#070B1A]
      "
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
      >
        <path
          d="M12 19V5M6.5 10.5 12 5l5.5 5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
import Image from "next/image";

export default function SiteCover() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
        <Image
          src="/images/capa-tecnologia-e-acordes.png"
          alt="Capa do site Tecnologia e Acordes, unindo tecnologia, programação e música"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
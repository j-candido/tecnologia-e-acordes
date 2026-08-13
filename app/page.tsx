import SiteCover from "@/components/SiteCover";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <SiteCover />
      <Hero />
      <LatestPosts />
    </main>
  );
}

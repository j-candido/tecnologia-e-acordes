import SiteCover from "@/components/SiteCover";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
import FeaturedCourse from "@/components/FeaturedCourse";

export const revalidate = 300;

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <SiteCover />
      <Hero />
      <FeaturedCourse />
      <LatestPosts />
    </main>
  );
}

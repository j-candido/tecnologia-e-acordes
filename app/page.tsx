import Header from "@/components/Header";
import SiteCover from "@/components/SiteCover";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Scrolltotop from "@/components/Scrolltotop";
import LatestPosts from "@/components/LatestPosts";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070B1A] via-[#0B1226] to-[#131B33] text-white">
      <Header />
      <SiteCover />
      <Hero />
      <LatestPosts />
      <Footer />
      <Scrolltotop />
    </main>
  );
}
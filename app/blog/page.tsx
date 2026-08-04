import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Scrolltotop from "@/components/Scrolltotop";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070B1A] via-[#0B1226] to-[#131B33]">
      <Header />
      <Blog />
      <Scrolltotop />
      <Footer />
    </main>
  );
}
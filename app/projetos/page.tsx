import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Scrolltotop from "@/components/Scrolltotop";

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070B1A] via-[#0B1226] to-[#131B33]">
      <Header />
      <Projects />
      <Footer />
      <Scrolltotop />
    </main>
  );
}
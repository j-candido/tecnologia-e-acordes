import Header from "@/components/Header";
import About from "@/components/About";
import Scrolltotop from "@/components/Scrolltotop";
import Footer from "@/components/Footer";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070B1A] via-[#0B1226] to-[#131B33]">
      <Header />
      <About />
      <Scrolltotop />
      <Footer />
    </main>
  );
}
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Scrolltotop from "@/components/Scrolltotop";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070B1A] via-[#0B1226] to-[#131B33]">
      <Header />
      <Contact />
      <Footer />
      <Scrolltotop />
    </main>
  );
}
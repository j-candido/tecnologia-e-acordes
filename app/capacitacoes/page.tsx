import Header from "@/components/Header";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Scrolltotop from "@/components/Scrolltotop";

export default function CapacitacoesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070B1A] via-[#0B1226] to-[#131B33]">
      <Header />
      <Education />
      <Footer />
      <Scrolltotop />
    </main>
  );
}
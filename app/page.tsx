import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Scrolltotop from "@/components/Scrolltotop";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070B1A] via-[#0B1226] to-[#131B33] text-white">
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <Scrolltotop />
    </main>
  );
}
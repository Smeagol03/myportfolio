import Hero from "../komponen/sections/Hero";
import About from "../komponen/sections/About";
import Pendidikan from "../komponen/sections/Pendidikan";
import Skills from "../komponen/sections/Skills";
import Projects from "../komponen/sections/Projects";
import Experience from "../komponen/sections/Experience";
import Contact from "../komponen/sections/Contact";
import BlogSection from "../komponen/sections/BlogSection";
import LayananPreview from "../komponen/sections/LayananPreview";
import SEO from "../komponen/ui/SEO";

const Home = () => (
  <>
    <SEO 
      title="Alpian - Web Developer & Designer" 
      description="Solusi website profesional untuk personal branding, UMKM, atau bisnis Anda. Spesialis React dan sistem manajemen data." 
      url={window.location.href}
    />
    <Hero />
    <LayananPreview />
    <Projects />
    <About />
    <Skills />
    <Experience />
    <Pendidikan />
    <BlogSection />
    <Contact />
  </>
);

export default Home;

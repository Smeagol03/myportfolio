import Hero from "../komponen/sections/Hero";
import About from "../komponen/sections/About";
import Pendidikan from "../komponen/sections/Pendidikan";
import Skills from "../komponen/sections/Skills";
import Projects from "../komponen/sections/Projects";
import Experience from "../komponen/sections/Experience";
import Contact from "../komponen/sections/Contact";
import BlogSection from "../komponen/sections/BlogSection";
import SEO from "../komponen/ui/SEO";

const Home = () => (
  <>
    <SEO 
      title="Alpian - Web Developer & Designer" 
      description="Portofolio Alpian, seorang web developer dan designer yang berfokus pada pembuatan website modern, responsif, dan interaktif." 
      url={window.location.href}
    />
    <Hero />
    <About />
    <Pendidikan />
    <Skills />
    <Projects />
    <Experience />
    <BlogSection />
    <Contact />
  </>
);

export default Home;

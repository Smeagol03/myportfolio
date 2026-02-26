import Navbar from "./komponen/Navbar";
import Hero from "./komponen/Hero";
import About from "./komponen/About";
import Pendidikan from "./komponen/Pendidikan";
import Skills from "./komponen/Skills";
import Projects from "./komponen/Projects";
import Experience from "./komponen/Experience";
import Layanan from "./komponen/layanan";
import Contact from "./komponen/Contact";
import Footer from "./komponen/Footer";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pendidikan />
        <Skills />
        <Projects />
        <Experience />
        <Layanan />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

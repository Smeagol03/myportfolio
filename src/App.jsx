import Navbar from "./komponen/Navbar";
import Hero from "./komponen/Hero";
import About from "./komponen/About";
import Pendidikan from "./komponen/Pendidikan";
import Skills from "./komponen/Skills";
import Projects from "./komponen/Projects";
import Experience from "./komponen/Experience";
import Contact from "./komponen/Contact";
import Footer from "./komponen/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Pendidikan />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

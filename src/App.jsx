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

import { Routes, Route } from "react-router-dom";
import Checkout from "./komponen/Checkout";
import ScrollToTop from "./komponen/ScrollToTop"; // We need this to reset scroll on route change

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Layanan />
      <Pendidikan />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  </>
);

const App = () => {
  return (
    <div className="relative">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout/:paket" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

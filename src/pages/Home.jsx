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

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Alpian Tabrani - Web Developer & Designer",
    "image": "https://alpiant.my.id/og-default.png",
    "@id": "https://alpiant.my.id",
    "url": "https://alpiant.my.id",
    "telephone": "+6281547190395",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lombok Timur",
      "addressLocality": "Lombok Timur",
      "addressRegion": "NTB",
      "postalCode": "83611",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -8.65,
      "longitude": 116.5
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://github.com/Smeagol03",
      "https://www.linkedin.com/in/alpian-tabrani-b83455275/",
      "https://www.instagram.com/npc_alpiant"
    ],
    "priceRange": "Rp 1.000.000 - Rp 2.500.000",
    "description": "Jasa pembuatan website profesional, landing page, dan sistem manajemen data di Lombok Timur. Fokus pada performa tinggi dan desain minimalis."
  };

  return (
    <>
<SEO 
        title="Alpian Tabrani - Jasa Pembuatan Website Profesional & Terjangkau" 
        description="Solusi website modern untuk UMKM, Personal Branding, dan Sistem Manajemen Data. Website cepat, responsif, dan SEO-friendly. Mulai dari 1 Juta Rupiah."
        url={window.location.href}
        schema={homeSchema}
        keywords="Jasa Pembuatan Website Lombok, Web Developer Lombok, Freelancer Website Lombok, Jasa Website UMKM Lombok, Jasa Pembuatan Website Murah Lombok, Web Developer Freelancer Lombok"
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
};

export default Home;

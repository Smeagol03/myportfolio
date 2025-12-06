import gsap from "gsap";
import { useEffect, useRef } from "react";
import RotatingText from "./efek/RotatingText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const nama = "Alpian Tabrani";
  const role = "Administrative & Web Support";
  const deskrisi =
    "I support organizations in managing data, documents, and digital systems while also building responsive websites using modern tools like React, Firebase, and Microsoft Office. I am detail-oriented, organized, and ready to contribute to an efficient work environment.";
  const GitHubLink = "https://github.com/Smeagol03";
  const LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/";
  const InstagramLink =
    "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6";

  const handleCTAclick = () => {
    // Scroll to Projects section
    const projectsSection = document.getElementById("about");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleInTouch = () => {
    // Scroll to Projects section
    const projectsSection = document.getElementById("contact");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroRef = useRef(null);
  useEffect(() => {
    if (!heroRef.current) return;

    const items = heroRef.current.querySelectorAll(".hero-animate-item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 20%",
        toggleActions: "play none none none",
      },
    });

    items.forEach((item) => {
      tl.fromTo(
        item,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen py-10 bg-linear-to-br from-slate-900 via-zinc-800 to-slate-950 overflow-hidden"
    >
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            {/* Name */}
            <h1 className="hero-animate-item text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                {nama}
              </span>
            </h1>

            {/* Job Title */}
            <p className="hero-animate-item text-xl sm:text-2xl text-cyan-300 font-semibold mb-6">
              {role}
            </p>

            {/* Tagline */}
            <p className="hero-animate-item text-base sm:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              {deskrisi}
            </p>

            {/* CTA Buttons */}
            <div className="hero-animate-item flex flex-wrap gap-4">
              <button
                onClick={handleCTAclick}
                className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </button>
              <button
                onClick={handleInTouch}
                className="px-8 py-3 border border-cyan-400 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400 hover:bg-opacity-10 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-10">
              <a
                href={GitHubLink}
                target="_blank"
                className="hero-animate-item text-slate-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
              >
                Github
              </a>
              <a
                href={LinkedInLink}
                target="_blank"
                className="hero-animate-item text-slate-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href={InstagramLink}
                target="_blank"
                className="hero-animate-item text-slate-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div>
            <div className="relative w-full flex justify-center items-center">
              {/* Avatar circle with linear border */}
              <RotatingText
                texts={["Ambis", "Produktif", "Santai"]}
                mainClassName="text-white mb-20 md:mb-0 overflow-hidden justify-center items-center text-4xl md:text-8xl font-bold"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-cyan-300 opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

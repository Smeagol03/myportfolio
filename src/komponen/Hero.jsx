import { useState, useEffect } from "react";
import RotatingText from "./efek/RotatingText";

const Hero = () => {
  const nama = "Alpian Tabrani";
  const role = "Administrative & Web Support";
  const deskrisi =
    "I support organizations in managing data, documents, and digital systems while also building responsive websites using modern tools like React, Firebase, and Microsoft Office. I am detail-oriented, organized, and ready to contribute to an efficient work environment.";
  const GitHubLink = "https://github.com/Smeagol03";
  const LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/";
  const InstagramLink =
    "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6";

  const [isVisible, setIsVisible] = useState(false);
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
  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen py-10 bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                {nama}
              </span>
            </h1>

            {/* Job Title */}
            <p className="text-xl sm:text-2xl text-cyan-300 font-semibold mb-6">
              {role}
            </p>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              {deskrisi}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
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
                className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
              >
                Github
              </a>
              <a
                href={LinkedInLink}
                target="_blank"
                className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href={InstagramLink}
                target="_blank"
                className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
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

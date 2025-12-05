import { useState, useEffect } from "react";
import Bg from "/pasAlpianTabrani.jpg";

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
    <section className="relative w-full min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Subtle background elements - lightweight */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32 flex flex-col justify-center min-h-screen">
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
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full aspect-square">
              {/* Avatar circle with linear border */}
              <div className="w-full h-full rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 p-1">
                <img
                  src={Bg}
                  alt="Profile"
                  className="w-full h-full rounded-2xl object-top object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-bounce">
                <div className="w-3 h-3 bg-cyan-300 rounded-full"></div>
                <span className="text-sm font-semibold">
                  Available for Work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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

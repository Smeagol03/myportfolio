import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import RotatingText from "./efek/RotatingText"; // Pastikan path import ini benar

const Hero = ({
  nama = "Alpian Tabrani",
  role = "Administrative & Web Support",
  deskripsi = "I support organizations in managing data, documents, and digital systems while also building responsive websites using modern tools like React, Firebase, and Microsoft Office. I am detail-oriented, organized, and ready to contribute to an efficient work environment.",
  GitHubLink = "https://github.com/Smeagol03",
  LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/",
  InstagramLink = "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Animasi Elemen Teks (Muncul berurutan)
      gsap.from(".hero-text-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15, // Jeda antar elemen
        ease: "power3.out",
        delay: 0.2,
      });

      // 2. Animasi Visual Kanan (Fade In + Scale)
      gsap.from(".hero-visual", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)", // Efek membal sedikit
        delay: 0.5,
      });

      // 3. Animasi Scroll Indicator (Naik turun infinite)
      gsap.to(".scroll-indicator", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center py-10 bg-slate-950 overflow-hidden"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      {/* 2. Glowing Blobs (Orbs) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="text-center lg:text-left">
            {/* Greeting & Name */}
            <h1 className="hero-text-item text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">
                {nama}
              </span>
            </h1>

            {/* Job Title */}
            <div className="hero-text-item inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
              <p className="text-lg sm:text-xl text-cyan-300 font-medium tracking-wide">
                {role}
              </p>
            </div>

            {/* Description */}
            <p className="hero-text-item text-base sm:text-lg text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {deskripsi}
            </p>

            {/* CTA Buttons */}
            <div className="hero-text-item flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="group relative px-8 py-3 bg-white text-slate-900 font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors">
                  View My Work
                </span>
              </a>

              <a
                href="#contact"
                className="px-8 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:bg-cyan-950/30"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-text-item flex justify-center lg:justify-start gap-6 items-center">
              <span className="h-px w-8 bg-slate-700 hidden lg:block"></span>
              {[
                { name: "Github", link: GitHubLink },
                { name: "LinkedIn", link: LinkedInLink },
                { name: "Instagram", link: InstagramLink },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-widest hover:-translate-y-1 transform duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: VISUAL ELEMENT --- */}
          <div className="hero-visual relative flex justify-center items-center w-full mt-10 lg:mt-0">
            <div className="relative z-10 text-center w-full">
              <RotatingText
                texts={["Ambis", "Produktif", "Santai"]}
                mainClassName="text-white overflow-hidden justify-center items-center font-black tracking-tighter transition-all duration-300
        text-4xl 
        sm:text-5xl 
        md:text-6xl 
        lg:text-7xl 
        xl:text-8xl"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

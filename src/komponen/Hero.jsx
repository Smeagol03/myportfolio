import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { FadeIn, StaggerText } from "./animasi";
import "./animasi/native/hero.css";

const Hero = ({
  nama = "Alpian Tabrani",
  deskripsi = "I bridge the gap between technical web development and efficient administrative workflows. Specializing in building robust React applications and managing complex operational data.",
  GitHubLink = "https://github.com/Smeagol03",
  LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/",
  InstagramLink = "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
}) => {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Animated Background Integrated with Native CSS */}
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="hero-glow" />
        
        {/* Gradient Orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        
        {/* Animated Circles */}
        <div className="hero-circle hero-circle-1" />
        <div className="hero-circle hero-circle-2" />
        <div className="hero-circle hero-circle-3" />
        
        {/* Geometric Shapes */}
        <div className="hero-shape hero-hexagon" />
        <div className="hero-shape hero-triangle" />
        <div className="hero-shape hero-diamond" />
        
        {/* Dots */}
        <div className="hero-dot hero-dot-1" />
        <div className="hero-dot hero-dot-2" />
        <div className="hero-dot hero-dot-3" />
        <div className="hero-dot hero-dot-4" />
        <div className="hero-dot hero-dot-5" />
        
        {/* Wave Lines */}
        <div className="hero-wave hero-wave-1" />
        <div className="hero-wave hero-wave-2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <FadeIn delay={0} direction="down" duration={0.5} className="mb-12">
            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-sm font-bold uppercase text-(--accent-blue)">
              Available for New Projects
            </span>
          </FadeIn>

          {/* Typography-Led Title */}
          <div className="relative mb-16 flex flex-col items-center">
            <div className="pb-4">
              <StaggerText
                text="Creative"
                delay={0.1}
                className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-hero font-outfit uppercase opacity-40"
              />
            </div>
            <div className="-mt-4 md:-mt-8 lg:-mt-12 pb-4 tracking-tighter">
              <StaggerText
                text="Builder."
                delay={0.1}
                className="text-(--text-primary) text-hero font-outfit uppercase"
              />
            </div>
          </div>

          {/* Description & CTA */}
          <div className="max-w-3xl mx-auto">
            <FadeIn
              delay={0.5}
              direction="up"
              duration={1}
              className="text-sm md:text-xl text-(--text-secondary) font-inter mb-12 leading-relaxed tracking-tight"
            >
              Hi, I'm{" "}
              <span className="text-(--text-primary) font-semibold">
                {nama}
              </span>
              .{deskripsi}
            </FadeIn>

            <FadeIn
              delay={0.8}
              direction="up"
              duration={0.5}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="#projects"
                className="group relative px-10 py-5 bg-(--text-primary) text-(--bg-primary) font-bold uppercase text-xs tracking-widest overflow-hidden hover:opacity-90 transition-all rounded-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              <a
                href="/resume.pdf"
                className="group px-10 py-5 border border-(--border-color) hover:border-(--text-secondary) text-(--text-primary) font-bold uppercase text-xs tracking-widest transition-all rounded-sm backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" /> Resume
                </span>
              </a>
            </FadeIn>
          </div>

          {/* Social Links Bar */}
          <FadeIn
            delay={1.5}
            direction="up"
            duration={1}
            className="flex items-center gap-12 pt-10"
          >
            {[
              { icon: Github, link: GitHubLink },
              { icon: Linkedin, link: LinkedInLink },
              { icon: Instagram, link: InstagramLink },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--text-muted) hover:text-(--text-primary) transition-colors duration-500"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;

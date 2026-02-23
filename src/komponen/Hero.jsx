import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Hero = ({
  nama = "Alpian Tabrani",
  role = "Web Developer & Administrative Professional",
  deskripsi = "I bridge the gap between technical web development and efficient administrative workflows. Specializing in building robust React applications and managing complex operational data.",
  GitHubLink = "https://github.com/Smeagol03",
  LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/",
  InstagramLink = "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#0A0A0A]">
      {/* Refined Background - Subtle Grid instead of large neon glowing blurs */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[32px_32px]"></div>

      {/* Very subtle top glow to separate from navbar */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-blue-600/5 rounded-[100%] blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl font-outfit font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
              Efficient
            </span>{" "}
            Systems <br className="hidden md:block" />
            <span className="text-zinc-400">& Digital Solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Hi, I'm <strong className="text-white font-medium">{nama}</strong>.{" "}
            {deskripsi}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="group w-full sm:w-auto px-7 py-3.5 bg-white text-zinc-950 font-semibold rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/AlpianTabrani.pdf"
              className="group w-full sm:w-auto px-7 py-3.5 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-800 flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              Download Resume
            </a>
          </motion.div>

          {/* Minimalist Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, link: GitHubLink, label: "GitHub" },
              { icon: Linkedin, link: LinkedInLink, label: "LinkedIn" },
              { icon: Instagram, link: InstagramLink, label: "Instagram" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded-lg flex items-center gap-2"
              >
                <social.icon className="w-5 h-5" />
                <span className="text-sm font-medium sr-only md:not-sr-only md:-ml-1">
                  {social.label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

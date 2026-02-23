import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Hero = ({
  nama = "Alpian Tabrani",
  deskripsi = "I bridge the gap between technical web development and efficient administrative workflows. Specializing in building robust React applications and managing complex operational data.",
  GitHubLink = "https://github.com/Smeagol03",
  LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/",
  InstagramLink = "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-(--bg-primary) transition-colors duration-500"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Floating Shapes */}
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-[15%] left-[10%] w-64 h-64 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-yellow-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal"
        />

        {/* Geometric Outlines */}
        <motion.div
          style={{ y: y2, rotate: rotate1 }}
          className="absolute top-[25%] right-[15%] w-16 h-16 border-(--border-color) rounded-lg hidden md:block"
        />
        <motion.div
          style={{ y: y1, rotate: rotate2 }}
          className="absolute bottom-[30%] left-[15%] w-12 h-12 border-(--border-color) rounded-full hidden md:block"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-500/20 rounded-sm"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 text-xs font-medium text-blue-600 dark:text-blue-400 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for New Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-outfit font-bold tracking-tight text-(--text-primary) mb-8 leading-[1.1]"
          >
            Crafting{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                Digital
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-2 left-0 h-1 bg-linear-to-r from-blue-600 to-transparent dark:from-blue-400 opacity-30"
              />
            </span>{" "}
            <br />
            Experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-(--text-secondary) max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Hi, I'm{" "}
            <strong className="text-(--text-primary) font-medium">
              {nama}
            </strong>
            . {deskripsi}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          >
            <a
              href="#projects"
              className="group relative w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl flex items-center justify-center gap-2 overflow-hidden transition-all hover:pr-10 shadow-xl shadow-blue-900/10 dark:shadow-none"
            >
              <span className="relative z-10">Explore Work</span>
              <ArrowRight className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="/AlpianTabrani.pdf"
              className="group w-full sm:w-auto px-8 py-4 bg-(--bg-primary) border-(--border-color) text-(--text-secondary) dark:text-white font-medium rounded-2xl hover:bg-(--bg-secondary) dark:hover:bg-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 backdrop-blur-md flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4 text-(--text-muted) group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              Get Resume
            </a>
          </motion.div>

          {/* Minimalist Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center gap-8"
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
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-(--bg-secondary) border-(--border-color) flex items-center justify-center text-(--text-muted) group-hover:text-blue-600 dark:group-hover:text-white group-hover:bg-(--bg-primary) dark:group-hover:bg-zinc-800/50 group-hover:border-blue-200 dark:group-hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-md">
                  <social.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-(--text-muted) group-hover:text-blue-600 dark:group-hover:text-zinc-400 transition-colors font-bold">
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

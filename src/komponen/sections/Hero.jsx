import { useRef } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Instagram,
  Database,
  Code,
  Activity,
  Layers,
  Zap,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FadeIn } from "../animasi";
import "../animasi/native/hero.css";

const Hero = ({
  nama = "Alpian Tabrani",
  GitHubLink = "https://github.com/Smeagol03",
  LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/",
  InstagramLink = "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const yContent = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  // Parallax for floating elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const smoothY1 = useSpring(y1, { stiffness: 60, damping: 20 });
  const smoothY2 = useSpring(y2, { stiffness: 60, damping: 20 });
  const smoothY3 = useSpring(y3, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen md:min-h-[120vh] flex items-center justify-center pt-28 md:pt-32 pb-24 md:pb-40 overflow-hidden bg-(--bg-primary)"
    >
      {/* Background with Grid & Parallax Orbs */}
      <div className="hero-background">
        <div className="hero-grid opacity-30" />
        <motion.div
          style={{ y: smoothY2, opacity: 0.1 }}
          className="hero-orb hero-orb-1"
        />
        <motion.div
          style={{ y: smoothY1, opacity: 0.05 }}
          className="hero-orb hero-orb-2"
        />
      </div>

      {/* Floating Administrative & Builder Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Admin Card 1: System Monitor */}
        <motion.div
          style={{ y: smoothY1, rotate: rotate1, opacity }}
          className="absolute top-[20%] left-[5%] md:left-[10%] w-56 glass-2 rounded-xl p-5 hidden lg:block border-l-4 border-l-blue-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Database className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-(--text-primary)">
                Data Archive
              </span>
              <span className="text-[8px] text-(--text-muted) uppercase">
                Auto-sync active
              </span>
            </div>
          </div>
          <div className="space-y-3">
            {[85, 60, 40].map((w, i) => (
              <div
                key={i}
                className="h-1 w-full bg-white/5 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-blue-500/40"
                  initial={{ width: 0 }}
                  animate={{ width: `${w}%` }}
                  transition={{ duration: 2, delay: 1 + i * 0.2 }}
                />
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-[8px] text-(--text-muted) uppercase font-bold tracking-tighter">
              Integrity Check
            </span>
            <Activity className="w-3 h-3 text-green-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Builder Card 1: Development Engine */}
        <motion.div
          style={{ y: smoothY2, rotate: rotate2, opacity }}
          className="absolute top-[25%] right-[5%] md:right-[10%] w-64 glass-2 rounded-xl p-5 hidden lg:block border-t-4 border-t-purple-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Code className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-(--text-primary)">
                Build Engine
              </span>
              <span className="text-[8px] text-(--text-muted) uppercase font-mono">
                v4.0.2-stable
              </span>
            </div>
          </div>
          <div className="font-mono text-[10px] space-y-1.5 p-3 bg-black/40 rounded-lg border border-white/5">
            <p className="text-purple-400">
              class <span className="text-yellow-400">Solution</span> &#123;
            </p>
            <p className="pl-3 text-blue-300">optimize(data) &#123;</p>
            <p className="pl-6 text-green-400">return build(data);</p>
            <p className="pl-3 text-blue-300">&#125;</p>
            <p className="text-purple-400">&#125;</p>
          </div>
        </motion.div>

        {/* Small Decorative Badges */}
        <motion.div
          style={{ y: smoothY3, opacity }}
          className="absolute bottom-[30%] left-[20%] p-4 glass-2 rounded-2xl hidden md:flex items-center gap-3"
        >
          <Layers className="w-5 h-5 text-blue-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--text-muted)">
            Multilayer
          </span>
        </motion.div>

        <motion.div
          style={{ y: smoothY1, opacity }}
          className="absolute top-[50%] right-[25%] p-4 glass-2 rounded-2xl hidden md:flex items-center gap-3"
        >
          <Zap className="w-5 h-5 text-yellow-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--text-muted)">
            High Perf
          </span>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ opacity, scale, y: yContent }}
          className="flex flex-col items-center text-center"
        >
          {/* Status Badge */}
          <FadeIn delay={0.2} direction="down" duration={0.8} className="mb-12">
            <div className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-xl">
              <div className="flex -space-x-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-75" />
              </div>
              <span className="text-[6px] md:text-xs font-bold uppercase tracking-[0.3em] text-blue-500/80">
                Administrative Modern & Web Builder
              </span>
            </div>
          </FadeIn>

          {/* Core Tagline */}
          <div className="mb-16 relative">
            <h1 className="flex flex-col items-center leading-none">
              <motion.span
                className="text-hero text-gradient-swiss"
                initial={{ y: 80, opacity: 0, filter: "blur(20px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Structure.
              </motion.span>
              <motion.span
                className="text-hero text-(--text-primary) -mt-4 md:-mt-8 lg:-mt-12"
                initial={{ y: 80, opacity: 0, filter: "blur(20px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Precision.
              </motion.span>
            </h1>

            {/* Visual Underline/Line */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[1px] bg-linear-to-r from-transparent via-blue-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.5 }}
            />
          </div>

          {/* Narrative Bio */}
          <div className="max-w-3xl mx-auto mb-16 px-4">
            <motion.p
              className="text-base md:text-2xl text-(--text-secondary) font-inter leading-relaxed tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Hi, I'm{" "}
              <span className="text-(--text-primary) font-semibold">
                {nama}
              </span>
              . I design{" "}
              <span className="text-blue-500 italic">
                administrative workflows
              </span>{" "}
              that make sense, and build{" "}
              <span className="text-purple-500 font-medium">
                digital interfaces
              </span>{" "}
              that work flawlessly.
            </motion.p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="/layanan"
              className="group relative px-8 md:px-12 py-4 md:py-5 bg-white text-black font-bold uppercase text-[10px] tracking-[0.4em] overflow-hidden rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Collaborate{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="/AlpianTabrani.pdf"
              download="AlpianTabrani_CV.pdf"
              className="group px-8 md:px-12 py-4 md:py-5 glass-2 text-(--text-primary) font-bold uppercase text-[10px] tracking-[0.4em] transition-all rounded-sm hover:border-blue-500/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <Download className="w-4 h-4" /> Credentials
              </span>
            </motion.a>
          </div>

          {/* Secondary Links/Socials */}
          <div className="flex items-center gap-12 mt-24">
            {[
              { icon: Github, link: GitHubLink, color: "hover:text-white" },
              {
                icon: Linkedin,
                link: LinkedInLink,
                color: "hover:text-blue-500",
              },
              {
                icon: Instagram,
                link: InstagramLink,
                color: "hover:text-pink-500",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-(--text-muted) transition-all duration-500 ${social.color}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.2 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity }}
      >
        <div className="w-[1px] h-16 bg-linear-to-b from-blue-500 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ y: ["0%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="mt-4 text-[8px] font-bold uppercase tracking-[0.5em] text-blue-500/50">
          Explore System
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;

import {
  Monitor,
  Briefcase,
  Palette,
  Layout,
  Cpu,
  ShieldCheck,
  Database,
  Code,
  Zap,
  CheckCircle2,
  Settings,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../animasi";

const colorMap = {
  blue: {
    accent: "text-blue-500",
    bgSubtle: "bg-blue-500/10",
    borderSubtle: "border-blue-500/20",
    hoverBorder: "group-hover:border-blue-500/50",
    hoverIconBg: "group-hover:bg-blue-500",
    bar: "bg-blue-500",
    dot: "bg-blue-500/50",
  },
  emerald: {
    accent: "text-emerald-500",
    bgSubtle: "bg-emerald-500/10",
    borderSubtle: "border-emerald-500/20",
    hoverBorder: "group-hover:border-emerald-500/50",
    hoverIconBg: "group-hover:bg-emerald-500",
    bar: "bg-emerald-500",
    dot: "bg-emerald-500/50",
  },
  purple: {
    accent: "text-purple-500",
    bgSubtle: "bg-purple-500/10",
    borderSubtle: "border-purple-500/20",
    hoverBorder: "group-hover:border-purple-500/50",
    hoverIconBg: "group-hover:bg-purple-500",
    bar: "bg-purple-500",
    dot: "bg-purple-500/50",
  },
  pink: {
    accent: "text-pink-500",
    bgSubtle: "bg-pink-500/10",
    borderSubtle: "border-pink-500/20",
    hoverBorder: "group-hover:border-pink-500/50",
    hoverIconBg: "group-hover:bg-pink-500",
    bar: "bg-pink-500",
    dot: "bg-pink-500/50",
  },
};

const skillsData = [
  {
    category: "System Engineering",
    icon: Code,
    description:
      "Architecting high-performance web applications with structured logic and modern frameworks.",
    metrics: { efficiency: "98%", reliability: "Stable" },
    items: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Vite",
      "JavaScript",
      "HTML/CSS",
    ],
    color: "blue",
  },
  {
    category: "Data Administration",
    icon: Database,
    description:
      "Managing complex datasets and organizational workflows with surgical precision and integrity.",
    metrics: { integrity: "100%", security: "Advanced" },
    items: [
      "Excel Expert",
      "Data Entry",
      "Digital Filing",
      "System Audit",
      "Archive Management",
    ],
    color: "emerald",
  },
  {
    category: "Operational Solutions",
    icon: Layout,
    description:
      "Developing custom digital tools designed to automate and optimize administrative processes.",
    metrics: { automation: "High", uptime: "99.9%" },
    items: [
      "Absensi Online",
      "E-Commerce Basic",
      "Comment System",
      "Inventory Tracking",
    ],
    color: "purple",
  },
  {
    category: "Interface Design",
    icon: Palette,
    description:
      "Crafting minimalist and intuitive visual identities that enhance user operational flow.",
    metrics: { aesthetics: "Premium", ux: "Optimized" },
    items: [
      "Canva",
      "Photoshop",
      "Minimalist Design",
      "Brand Identity",
      "UX Research",
    ],
    color: "pink",
  },
];

const SkillCard = ({ skill, index }) => {
  const theme = colorMap[skill.color];

  return (
    <FadeIn
      delay={index * 0.1}
      direction="up"
      duration={0.8}
      className="group relative"
    >
      <div
        className={`glass-2 p-8 lg:p-10 rounded-2xl flex flex-col h-full transition-all duration-700 bg-white/5 border-t border-white/10 ${theme.hoverBorder}`}
      >
        {/* Card Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
          <motion.div
            className={`h-full ${theme.bar}`}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
          />
        </div>

        <div className="flex justify-between items-start mb-8">
          <div
            className={`p-4 rounded-xl transition-all duration-500 ${theme.bgSubtle} ${theme.accent} ${theme.borderSubtle} ${theme.hoverIconBg} group-hover:text-white`}
          >
            <skill.icon className="w-6 h-6" />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-(--text-muted) uppercase tracking-[0.2em] mb-1">
              Module Stat
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-1 h-3 rounded-full ${theme.dot} opacity-20`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-black font-outfit text-(--text-primary) mb-3 uppercase tracking-tighter">
            {skill.category}
          </h3>
          <p className="text-(--text-secondary) text-sm leading-relaxed mb-8 max-w-sm font-inter opacity-80">
            {skill.description}
          </p>

          {/* Technical Specs Metric */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-black/80 rounded-xl border border-white/5 mb-8">
            {Object.entries(skill.metrics).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-[8px] font-bold text-(--text-muted) uppercase tracking-widest mb-1">
                  {key}
                </span>
                <span
                  className={`text-sm font-black uppercase font-mono ${theme.accent} opacity-80`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Tags */}
        <div className="mt-auto">
          <span className="text-[8px] font-black text-(--text-muted) uppercase tracking-[0.3em] mb-4 block">
            Operational Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-(--text-muted) text-[9px] uppercase font-black tracking-widest hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                <div className={`w-1 h-1 rounded-full ${theme.dot}`} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="section-padding relative border-t border-white/5 bg-(--bg-primary) overflow-hidden"
    >
      {/* Decorative Matrix Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex flex-col justify-center gap-10 select-none">
        <motion.div
          style={{ x: xLeft }}
          className="text-[12rem] font-black whitespace-nowrap"
        >
          CAPABILITIES ARCHITECTURE SYSTEMS OPERATIONS
        </motion.div>
        <motion.div
          style={{ x: xRight }}
          className="text-[12rem] font-black whitespace-nowrap text-right"
        >
          PRECISION DATA LOGIC INTERFACE INTEGRITY
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <header className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <FadeIn
                delay={0}
                direction="left"
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-12 bg-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500">
                  Operational Matrix
                </span>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h2 className="text-5xl md:text-9xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.85]">
                  Core <br />
                  <span className="text-(--text-muted)">Capacity.</span>
                </h2>
              </FadeIn>
            </div>

            <FadeIn
              delay={0.4}
              direction="up"
              className="flex items-center gap-4 mb-4"
            >
              <div className="p-4 rounded-2xl glass-2 flex items-center gap-4 border-l-4 border-l-blue-500">
                <Settings className="w-8 h-8 text-blue-500 animate-spin-slow" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-(--text-muted) uppercase tracking-widest">
                    System Load
                  </span>
                  <span className="text-xs font-black text-(--text-primary) uppercase">
                    Fully Operational
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Footer Integrity Indicator */}
        <FadeIn
          delay={0.8}
          direction="up"
          className="mt-32 flex justify-center"
        >
          <div className="flex items-center gap-8 px-8 py-4 glass-2 rounded-full border border-white/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-[9px] font-black text-(--text-primary) uppercase tracking-[0.3em]">
                Integrity Verified
              </span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-3">
              <Cpu className="w-4 h-4 text-blue-500" />
              <span className="text-[9px] font-black text-(--text-primary) uppercase tracking-[0.3em]">
                v2.5 Engine
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Briefcase,
  Code,
  Terminal,
  Calendar,
  MapPin,
  Activity,
  ArrowRight,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { useRef } from "react";
import { FadeIn } from "../animasi";

const experienceData = [
  {
    id: "LOG-2020",
    title: "Tenaga Teknis / Administrasi",
    company: "Dinas Perumahan & Kawasan Permukiman",
    period: "2020 - PRESENT",
    location: "Government Sector",
    description: [
      "Manajemen arsip & dokumen digital organisasi dengan standar integritas tinggi.",
      "Optimasi sistem e-government & CMS dinas untuk efisiensi operasional.",
      "Koordinasi administrasi internal & eksternal lintas departemen.",
    ],
    tech: ["MS Office", "CMS Admin", "Google Suite", "E-Gov Systems"],
    icon: Briefcase,
    color: "blue",
  },
  {
    id: "DEV-2022",
    title: "Web Developer",
    company: "Freelance & Projects",
    period: "2022 - PRESENT",
    location: "Remote / Digital Lab",
    description: [
      "Mengembangkan solusi web modern menggunakan ekosistem Firebase & React.",
      "Implementasi kecerdasan buatan (AI) untuk optimasi alur kerja pengembangan.",
      "Membangun antarmuka yang responsif dan berorientasi pada data.",
    ],
    tech: ["React.js", "Firebase", "Tailwind CSS", "AI Integration"],
    icon: Code,
    color: "purple",
  },
];

const ExperienceCard = ({ exp, index, isLast }) => {
  return (
    <div className="relative pl-12 md:pl-20 pb-20">
      {/* Vertical Timeline Thread */}
      {!isLast && (
        <div className="absolute left-4.75 md:left-6.75 top-10 bottom-0 w-0.5 bg-linear-to-b from-blue-500/50 via-purple-500/20 to-transparent" />
      )}

      {/* Timeline Node */}
      <div className="absolute left-0 top-0 z-10">
        <motion.div
          className="w-10 h-10 md:w-14 md:h-14 glass-2 rounded-xl flex items-center justify-center border-l-2 border-l-blue-500 bg-white/5"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <exp.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
        </motion.div>

        {/* Pulsing Signal */}
        <div className="absolute -inset-2 bg-blue-500/10 rounded-full blur-xl animate-pulse -z-10" />
      </div>

      <FadeIn delay={index * 0.2} direction="up" duration={1}>
        <div className="group glass-2 p-6 md:p-12 rounded-2xl hover:border-blue-500/30 transition-all duration-700 bg-white/5 border-t border-white/10 relative overflow-hidden">
          {/* Background Label */}
          <div className="absolute top-4 right-6 text-[4rem] font-black text-white/2 pointer-events-none select-none uppercase">
            {exp.id}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">
                  Deployment Info
                </span>
                <div className="h-px w-8 bg-blue-500/30" />
              </div>
              <h3 className="text-3xl md:text-5xl font-black font-outfit text-(--text-primary) uppercase tracking-tighter mb-2 group-hover:text-blue-500 transition-colors">
                {exp.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-(--text-secondary)">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-500/50" />
                  <span className="text-sm font-bold uppercase tracking-widest">
                    {exp.company}
                  </span>
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500/50" />
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-3">
                <Calendar className="w-3 h-3 text-blue-500" />
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>
              <span className="text-[8px] font-mono text-(--text-muted) mt-3 uppercase tracking-tighter">
                Status: Active / Stable
              </span>
            </div>
          </div>

          {/* Task Logs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[8px] font-black text-(--text-muted) uppercase tracking-[0.4em] mb-4 block">
                Operation Logs
              </span>
              {exp.description.map((point, i) => (
                <div key={i} className="flex items-start gap-4 group/item">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform" />
                  <p className="text-sm md:text-lg text-(--text-secondary) leading-relaxed font-inter group-hover/item:text-(--text-primary) transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="p-6 bg-black/80 rounded-xl border border-white/5">
                <span className="text-[8px] font-black text-(--text-muted) uppercase tracking-[0.4em] mb-4 block">
                  System Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 border border-white/5 text-(--text-muted) text-[9px] uppercase font-black tracking-widest hover:text-white hover:bg-blue-500/20 transition-all rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="section-padding relative border-t border-white/5 bg-(--bg-primary) overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-500/2 to-transparent pointer-events-none" />

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
                  Career Deployment
                </span>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h2 className="text-5xl md:text-9xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.85]">
                  Professional <br />
                  <span className="text-(--text-muted)">Timeline.</span>
                </h2>
              </FadeIn>
            </div>

            <FadeIn
              delay={0.4}
              direction="up"
              className="hidden lg:flex flex-col items-end gap-4"
            >
              <div className="flex items-center gap-6 p-6 glass-2 rounded-2xl border-r-4 border-r-blue-500">
                <div className="text-right">
                  <span className="text-[8px] font-black text-(--text-muted) uppercase tracking-widest block mb-1">
                    Total Runtime
                  </span>
                  <span className="text-2xl font-black text-(--text-primary) uppercase">
                    4+ Years
                  </span>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                  <Layers className="w-6 h-6" />
                </div>
              </div>
            </FadeIn>
          </div>
        </header>

        <div className="relative">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>

        {/* Technical Footer */}
        <FadeIn
          delay={0.8}
          direction="up"
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-6 h-6 text-blue-500/50" />
            <span className="text-[10px] font-black text-(--text-muted) uppercase tracking-[0.4em]">
              Career Record: Authenticated & Stable
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest">
              Awaiting Next Deployment
            </span>
            <ArrowRight className="w-4 h-4 text-blue-500" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Experience;

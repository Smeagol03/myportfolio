import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Code, PenTool, Calendar, CheckCircle2 } from "lucide-react";

const experienceData = [
  {
    title: "Tenaga Teknis / Administrasi",
    company: "Dinas Perumahan & Kawasan Permukiman",
    period: "2020 - Sekarang",
    description: [
      "Manajemen arsip & dokumen digital organisasi.",
      "Optimasi sistem e-government & CMS dinas.",
      "Koordinasi administrasi internal & eksternal.",
    ],
    tech: ["MS Office", "CMS Admin", "Google Suite"],
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Developer",
    company: "Freelance & Projects",
    period: "2022 - Sekarang",
    description: [
      "Pemanfaatan AI Dengan Baik.",
      "Mengembangkan Web dengan layanan Firebase.",
    ],
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    icon: Code,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Multimedia Enthusiast",
    company: "Digital Printing Cahaya Mandiri",
    period: "2019 - 2019",
    description: [
      "Produksi konten visual & digital printing.",
      "Desain grafis untuk branding & promosi.",
      "Manajemen operasional peralatan kreatif.",
    ],
    tech: ["Photoshop", "Canva", "Printing Tools"],
    icon: PenTool,
    color: "from-amber-400 to-orange-500",
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-[#030712]"
    >
      {/* Elegant Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent blur-sm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Career Timeline
            </span>
            <div className="h-px w-8 bg-cyan-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-outfit text-white mb-6"
          >
            Perjalanan <span className="cyan-gradient-text">Belajar Saya.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* The Flowing Thread (Animated Line) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-slate-800 hidden md:block" />
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-linear-to-b from-cyan-400 via-blue-500 to-purple-600 hidden md:block z-20 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />

          <div className="space-y-24">
            {experienceData.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center justify-between"
                >
                  {/* Left Side (Desktop) */}
                  <div
                    className={`hidden md:block w-[42%] ${isLeft ? "text-right order-1" : "order-3"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-4">
                        {exp.company}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 justify-center ${isLeft ? "md:justify-end" : "md:justify-start"}`}
                      >
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-lg border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Icon Node (Desktop Center) */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-30 flex items-center justify-center p-1.5 rounded-3xl bg-[#030712] border border-slate-800 shadow-2xl">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-linear-to-br ${exp.color} flex items-center justify-center`}
                    >
                      <exp.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[42%] pl-16 md:pl-0 ${isLeft ? "md:order-3" : "md:order-1"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-effect p-8 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all shadow-sm group"
                    >
                      {/* Mobile Header (Hidden on Desktop) */}
                      <div className="md:hidden mb-6">
                        <h3 className="text-2xl font-bold font-outfit text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 mb-6">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-4">
                        {exp.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                            <span className="text-slate-400 text-sm font-light leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

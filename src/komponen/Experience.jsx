import { motion } from "framer-motion";
import { Briefcase, Code, PenTool, ExternalLink } from "lucide-react";
import { FadeIn } from "./animasi";

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
  },
  // {
  //   title: "Multimedia Enthusiast",
  //   company: "Digital Printing Cahaya Mandiri",
  //   period: "2019 - 2019",
  //   description: [
  //     "Produksi konten visual & digital printing.",
  //     "Desain grafis untuk branding & promosi.",
  //     "Manajemen operasional peralatan kreatif.",
  //   ],
  //   tech: ["Photoshop", "Canva", "Printing Tools"],
  //   icon: PenTool,
  // },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative border-t border-white/5 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <header className="mb-20">
          <FadeIn
            delay={0}
            direction="left"
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-blue-500/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-(--text-muted)">
              Timeline
            </span>
          </FadeIn>
          <FadeIn
            delay={0.2}
            direction="up"
            className="text-4xl md:text-8xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.8]"
          >
            Experience<span className="text-(--text-muted)">.</span>
          </FadeIn>
        </header>

        <div className="flex flex-col gap-6">
          {experienceData.map((exp, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              direction="up"
              className="group glass-2 p-8 md:p-10 rounded-sm hover:border-(--accent-blue)/50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="flex items-center justify-center flex-col md:flex-row gap-5">
                  <div className="w-14 h-14 bg-(--bg-secondary) border border-(--border-color) flex items-center justify-center rounded-sm group-hover:bg-(--accent-blue) group-hover:border-(--accent-blue) transition-all duration-500 shrink-0">
                    <exp.icon className="w-6 h-6 text-(--text-secondary) group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col text-center md:text-left gap-2">
                    <h3 className="text-2xl font-bold font-outfit text-(--text-primary) tracking-tight group-hover:text-(--accent-blue) transition-colors mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-(--accent-blue) font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-1.5 bg-(--bg-secondary) border border-(--border-color) rounded-full text-xs font-bold text-(--text-muted) tracking-widest uppercase shrink-0">
                  {exp.period}
                </div>
              </div>

              <div className="mb-8 space-y-3 pl-0 md:pl-[76px]">
                {exp.description.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-(--accent-blue) opacity-60 mt-2 shrink-0" />
                    <p className="text-(--text-secondary) text-sm md:text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-(--border-color) pl-0 md:pl-[76px]">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-(--bg-primary) border border-(--border-color) text-(--text-muted) text-[10px] uppercase font-bold tracking-widest hover:text-(--text-primary) hover:border-(--text-primary) transition-all duration-300 rounded-sm cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

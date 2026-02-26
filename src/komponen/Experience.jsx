import { motion } from "framer-motion";
import { Briefcase, Code, PenTool, ExternalLink } from "lucide-react";

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
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative border-t border-white/5 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-blue-500/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-(--text-muted)">
              Timeline
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.8]"
          >
            Experience<span className="text-(--text-muted)">.</span>
          </motion.h2>
        </header>

        <div className="flex flex-col gap-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-2 p-10 flex flex-col md:flex-row gap-10 hover:border-(--accent-blue) transition-all duration-700 rounded-sm"
            >
              <div className="md:w-1/4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-(--text-muted) mb-4 block">
                  {exp.period}
                </span>
                <div className="w-12 h-12 glass-2 flex items-center justify-center rounded-sm group-hover:bg-(--accent-blue) group-hover:text-purple-600 transition-all duration-500">
                  <exp.icon className="w-5 h-5" />
                </div>
              </div>

              <div className="md:w-3/4">
                <h3 className="text-3xl font-bold font-outfit text-(--text-primary) mb-2 uppercase tracking-tighter group-hover:text-(--accent-blue) transition-colors">
                  {exp.title}
                </h3>
                <p className="text-(--accent-blue) font-bold text-[10px] uppercase tracking-widest mb-8">
                  {exp.company}
                </p>

                <ul className="space-y-4 mb-10">
                  {experienceData[index].description.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5 shrink-0" />
                      <span className="text-(--text-secondary) text-sm md:text-base leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-(--bg-secondary) border border-(--border-color) text-(--text-muted) text-[9px] font-bold uppercase tracking-widest rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { motion } from "framer-motion";
import { Briefcase, Code, PenTool, CheckCircle2 } from "lucide-react";

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
      className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative"
    >
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-white mb-4">
            Professional <span className="text-zinc-500">Timeline.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            My career journey blending administrative operations and web
            development.
          </p>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-6 sm:gap-8 items-start border border-zinc-800"
            >
              <div className="md:w-1/4 shrink-0 mt-1">
                <div className="text-xs font-bold text-zinc-500 tracking-widest uppercase mb-3">
                  {exp.period}
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 items-center justify-center">
                  <exp.icon className="w-5 h-5 text-zinc-400" />
                </div>
              </div>

              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold font-outfit text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-blue-400 font-medium mb-5 text-sm">
                  {exp.company}
                </p>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                      <span className="text-zinc-400 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold tracking-wider uppercase text-zinc-500 bg-zinc-900/50 border border-zinc-800 px-2 py-1 rounded"
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

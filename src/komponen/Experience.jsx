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
      className="py-24 bg-slate-50 dark:bg-[#0A0A0A] border-t border-slate-200 dark:border-zinc-900 relative transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Professional <span className="text-blue-600 dark:text-zinc-500">Timeline.</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">
            My career journey blending administrative operations and web
            development.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-6 sm:gap-8 items-start border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-xl hover:border-blue-200 dark:hover:border-zinc-700 transition-all"
            >
              <div className="md:w-1/4 shrink-0 mt-1">
                <div className="text-xs font-bold text-blue-600 dark:text-zinc-500 tracking-widest uppercase mb-3">
                  {exp.period}
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-zinc-800 transition-colors duration-300">
                  <exp.icon className="w-5 h-5 text-blue-600 dark:text-zinc-400 group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-5 text-sm">
                  {exp.company}
                </p>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-zinc-600 shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold tracking-wider uppercase text-slate-600 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 px-2 py-1 rounded group-hover:bg-blue-50 dark:group-hover:bg-zinc-800 group-hover:text-blue-700 dark:group-hover:text-zinc-300 transition-colors"
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

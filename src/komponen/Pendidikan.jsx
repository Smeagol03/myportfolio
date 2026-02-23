import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Library, Award } from "lucide-react";

const educationData = [
  {
    level: "S1 Administrasi Publik",
    school: "ITSKes Muhammadiyah Selong",
    year: "2020 - 2025",
    description:
      "Mempelajari konsep administrasi, kebijakan publik, dan manajemen pemerintahan.",
    achievements: ["Asisten Administrasi"],
    icon: GraduationCap,
  },
  {
    level: "SMK Multimedia",
    school: "SMK Negeri 3 Selong",
    year: "2017 - 2020",
    description:
      "Belajar desain grafis, editing video, dan produksi konten multimedia.",
    icon: School,
  },
  {
    level: "SMP Negeri 2 Sakra",
    school: "",
    year: "2014 - 2017",
    description: "Pendidikan dasar menengah pertama.",
    icon: BookOpen,
  },
  {
    level: "SD Negeri 1 Rumbuk",
    school: "",
    year: "2008 - 2014",
    description: "Pendidikan dasar.",
    icon: Library,
  },
];

const Pendidikan = () => {
  return (
    <section
      id="pendidikan"
      className="py-24 bg-white dark:bg-[#0A0A0A] border-t border-slate-100 dark:border-zinc-900 relative transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Education <span className="text-blue-600 dark:text-zinc-500">Journey.</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">
            Rekam jejak pendidikan yang membentuk dasar pemikiran kritis dan
            keahlian teknis.
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 10, backgroundColor: "var(--bg-hover)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
              style={{ "--bg-hover": "rgba(59, 130, 246, 0.05)" }}
              className="group relative p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-6 sm:gap-8 items-start border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-blue-200 dark:hover:border-zinc-700 shadow-sm hover:shadow-md transition-all"
            >
              <div className="md:w-1/4 shrink-0 mt-1">
                <div className="text-xs font-bold text-blue-600 dark:text-zinc-500 tracking-widest uppercase mb-3">
                  {item.year}
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-blue-600 dark:text-zinc-400 group-hover:text-blue-700 dark:group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {item.level}
                </h3>
                {item.school ? (
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-sm">
                    {item.school}
                  </p>
                ) : (
                  <div className="mb-4"></div>
                )}

                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {item.achievements && (
                  <div className="flex flex-wrap gap-3">
                    {item.achievements.map((ach, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 text-blue-700 dark:text-zinc-300 text-xs font-medium"
                      >
                        <Award className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                        {ach}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pendidikan;

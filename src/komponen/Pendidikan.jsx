import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";

// DATA
const educationData = [
  {
    level: "S1 Administrasi Publik",
    school: "ITSK Muhammadiyah Selong",
    year: "2020 - Sekarang",
    description:
      "Mempelajari konsep administrasi, kebijakan publik, dan manajemen pemerintahan.",
    achievements: ["Asisten Administrasi", "Pengurus Organisasi"],
  },
  {
    level: "SMK Multimedia",
    school: "SMK Negeri 3 Selong",
    year: "2017 - 2020",
    description:
      "Belajar desain grafis, editing video, dan produksi konten multimedia.",
  },
  {
    level: "SMP Negeri 2 Sakra",
    year: "2014 - 2017",
    description: "Belajar dasar-dasar ilmu pengetahuan dan keterampilan umum.",
  },
  {
    level: "SD Negeri 1 Rumbuk",
    year: "2008 - 2014",
    description: "Belajar dasar-dasar ilmu pengetahuan dan keterampilan umum.",
  },
];

export default function Pendidikan() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Pendidikan
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Perjalanan pendidikan yang membentuk kemampuan teknis, kreativitas,
            dan pola pikir profesional saya.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* GARIS TENGAH */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full" />

          <div className="space-y-16">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* DOT */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 shadow-xl flex items-center justify-center">
                    <span className="absolute w-full h-full bg-indigo-600/40 rounded-full animate-ping" />
                    <span className="relative z-10 w-2.5 h-2.5 bg-white rounded-full" />
                  </div>

                  {/* CARD */}
                  <div
                    className={`
                    mt-10 md:mt-0
                    w-full md:max-w-md
                    ${
                      isLeft
                        ? "md:mr-auto md:pr-12 pl-10 md:pl-0"
                        : "md:ml-auto md:pl-12 pl-10"
                    }
                  `}
                  >
                    <div
                      className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl
                        border border-slate-200 dark:border-slate-800
                        shadow-xl rounded-2xl p-6 md:p-8
                        hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">
                            {item.level}
                          </h3>
                          <p className="text-indigo-600 font-medium text-base">
                            {item.school}
                          </p>
                        </div>

                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          {item.year}
                        </div>
                      </div>

                      <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {item.achievements && (
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs md:text-sm font-medium"
                            >
                              <Award className="w-4 h-4" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

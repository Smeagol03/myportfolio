import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Award, Library } from "lucide-react";

const educationData = [
  {
    level: "S1 Administrasi Publik",
    school: "ITSKes Muhammadiyah Selong",
    year: "2020 - 2025",
    description: "Mempelajari konsep administrasi, kebijakan publik, dan manajemen pemerintahan.",
    achievements: ["Asisten Administrasi"],
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-600"
  },
  {
    level: "SMK Multimedia",
    school: "SMK Negeri 3 Selong",
    year: "2017 - 2020",
    description: "Belajar desain grafis, editing video, dan produksi konten multimedia.",
    icon: School,
    color: "from-purple-500 to-pink-500"
  },
  {
    level: "SMP Negeri 2 Sakra",
    year: "2014 - 2017",
    description: "Belajar dasar-dasar ilmu pengetahuan dan keterampilan umum.",
    icon: BookOpen,
    color: "from-amber-400 to-orange-500"
  },
  {
    level: "SD Negeri 1 Rumbuk",
    year: "2008 - 2014",
    description: "Belajar dasar-dasar ilmu pengetahuan dan keterampilan umum.",
    icon: Library,
    color: "from-emerald-400 to-teal-500"
  },
];

const Pendidikan = () => {
  return (
    <section id="pendidikan" className="py-32 relative overflow-hidden bg-[#030712]">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />
      {/* Elegant Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent blur-sm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Education Journey</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-outfit text-white mb-6"
          >
            Langkah Dalam <span className="cyan-gradient-text">Dunia Akademik.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 font-light leading-relaxed"
          >
            Rekam jejak pendidikan yang membentuk dasar pemikiran kritis dan keahlian teknis saya selama bertahun-tahun.
          </motion.p>
        </div>

        {/* Modern Timeline */}
        <div className="relative max-w-4xl mx-auto md:mx-0">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-slate-800" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20 md:pl-32"
              >
                {/* Timeline Icon Node */}
                <div className="absolute left-0 md:left-6 -translate-y-1/2 top-8 md:top-1/2 flex items-center justify-center p-0.5 rounded-2xl bg-[#030712] border border-slate-800 shadow-2xl z-20 group">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-[1.2rem] bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="glass-effect p-6 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all group shadow-sm hover:shadow-cyan-500/5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white leading-tight group-hover:text-cyan-400 transition-colors">
                        {item.level}
                      </h3>
                      {item.school && (
                        <p className="text-lg font-medium text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          {item.school}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-400 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {item.achievements && (
                    <div className="flex flex-wrap gap-3">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                          <Award className="w-3.5 h-3.5" />
                          {ach}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pendidikan;

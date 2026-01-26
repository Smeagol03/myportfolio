import { motion } from "framer-motion";
import { Monitor, Briefcase, Palette, Layout, CheckCircle2 } from "lucide-react";

const skillsData = [
  {
    category: "Web Development",
    icon: Monitor,
    color: "from-cyan-500 to-blue-600",
    description: "Membangun website interaktif dan sistem berbasis web untuk berbagai kebutuhan.",
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Vite", "Firebase"],
  },
  {
    category: "Office & Administration",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    description: "Mendukung pekerjaan administrasi dan pengolahan data secara rapi dan terstruktur.",
    items: ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Data Entry", "Arsip Digital"],
  },
  {
    category: "Design & Multimedia",
    icon: Palette,
    color: "from-amber-400 to-orange-500",
    description: "Membuat desain visual minimalis untuk konten, poster, dan kebutuhan digital.",
    items: ["Canva", "Photoshop (Basic)", "Poster Design", "Social Media Content"],
  },
  {
    category: "Digital Solutions",
    icon: Layout,
    color: "from-emerald-400 to-teal-500",
    description: "Pengalaman dalam pengembangan sistem sederhana dan proyek digital mandiri.",
    items: ["Absensi Online", "Comment System", "Website Undangan", "E-Commerce Basic"],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#030712]">
      {/* Elegant Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent blur-sm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Technical Arsenal</span>
            <div className="h-px w-8 bg-cyan-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-outfit text-white mb-6"
          >
            Keahlian & <span className="cyan-gradient-text">Teknologi.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-400 font-light"
          >
            Kombinasi antara manajemen data administratif dan pengembangan web modern.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-8 md:p-10 rounded-[3rem] border border-white/5 hover:border-white/10 transition-all group hover:shadow-2xl hover:shadow-cyan-500/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {skill.category}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                    {skill.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all cursor-default"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500/70" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

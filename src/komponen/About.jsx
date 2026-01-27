import { motion } from "framer-motion";
import { Code2, FileText, Users, ArrowRight } from "lucide-react";
import DataDiri from "./DataDiri";
import Bg from "/pasAlpianTabrani.jpg";

const About = () => {
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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stats = [
    {
      label: "Years Experience",
      value: "3+",
      color: "from-cyan-400 to-blue-500",
    },
    {
      label: "Completed Projects",
      value: "15+",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#030712]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Minimalist Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-20 aspect-4/5 lg:aspect-auto">
                <img
                  src={Bg}
                  alt="Alpian Tabrani"
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#030712]/60 via-transparent to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-cyan-500/20 rounded-[2.5rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-4xl -z-10" />
            </div>
          </motion.div>

          {/* Right: Refined Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-cyan-500" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Inside My Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-outfit leading-tight text-white">
                Membangun Efisiensi Melalui <br />
                <span className="cyan-gradient-text">
                  Solusi Digital Kreatif.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 leading-relaxed font-light"
            >
              Halo! Saya Alpian Tabrani, tenaga administrasi dan web support
              yang berdedikasi pada efisiensi. Dengan keahlian manajemen data
              serta pengembangan solusi digital menggunakan
              <span className="text-white font-medium"> React & Firebase</span>,
              saya membantu organisasi bekerja lebih terstruktur dan terus
              belajar untuk memberikan hasil yang lebih baik melalui pendekatan
              yang detail.
            </motion.p>

            {/* Micro Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pb-4"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-effect p-6 rounded-3xl border border-white/5"
                >
                  <p
                    className={`text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r ${stat.color} font-outfit mb-1`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Core Pillars */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {[
                {
                  icon: FileText,
                  text: "Data Management",
                  color: "text-blue-400",
                },
                {
                  icon: Code2,
                  text: "Web Architecture",
                  color: "text-cyan-400",
                },
                {
                  icon: Users,
                  text: "Collaboration",
                  color: "text-purple-400",
                },
              ].map((pill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <pill.icon className={`w-4 h-4 ${pill.color}`} />
                  <span className="text-sm font-medium text-slate-300">
                    {pill.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Action Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#030712] font-bold rounded-2xl hover:bg-cyan-400 transition-all shadow-xl shadow-white/5"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="h-10 w-px bg-slate-800 hidden sm:block" />
              <DataDiri />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

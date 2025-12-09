import { motion } from "framer-motion";
import { Code2, Zap, FileText, Users } from "lucide-react";
import DataDiri from "./DataDiri";
import Bg from "/pasAlpianTabrani.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Administrasi Digital",
      desc: "Dokumen • Arsip • Persuratan",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Web Development",
      desc: "React • Firebase • Tailwind",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Performance",
      desc: "Optimized & Responsive",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Collaboration",
      desc: "Communication & Coordination",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-blue-900/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-slate-700/50" />
            </div>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm sm:max-w-md border border-slate-700/50">
              <img
                src={Bg}
                alt="Alpian Tabrani"
                className="w-full h-auto object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 left-4 right-4 bg-slate-800/90 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                      5+
                    </p>
                    <p className="text-sm text-slate-400">Years Experience</p>
                  </div>
                  <div className="h-10 w-px bg-slate-700" />
                  <div>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
                      10+
                    </p>
                    <p className="text-sm text-slate-400">Projects Done</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-3">
              <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Kemampuan Dalam{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  Manajemen Data
                </span>{" "}
                &{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
                  Sistem Digital
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed text-sm sm:text-base"
            >
              Halo! Saya adalah tenaga administrasi dan web support dengan
              pengalaman dalam pengelolaan data, dokumen, serta pengembangan
              website sederhana untuk mendukung sistem kerja yang lebih efisien.
              Saya terbiasa menggunakan Microsoft Office, React, Firebase, dan
              berbagai tools digital untuk membantu organisasi bekerja lebih
              cepat, rapi, dan terstruktur.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed text-sm sm:text-base"
            >
              Saat ini saya terus mengembangkan keterampilan dalam pengelolaan
              sistem digital, pengolahan data, dan pengembangan website yang
              sederhana namun fungsional. Saya percaya bahwa ketelitian pada
              detail kecil dapat memberikan dampak besar terhadap efisiensi dan
              kualitas kerja.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 p-4 rounded-xl ${feature.bg} border ${feature.border} hover:border-opacity-50 transition-all group`}
                >
                  <div
                    className={`p-2.5 rounded-lg bg-slate-800/50 ${feature.color} group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-6 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5"
              >
                Hubungi Saya
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="/cvAlpianTabrani.pdf"
                download="CV-Alpian-Tabrani.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800/50 border border-slate-700 text-slate-200 font-semibold rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Data Diri Section */}
        <div className="mt-20">
          <DataDiri />
        </div>
      </div>
    </section>
  );
};

export default About;

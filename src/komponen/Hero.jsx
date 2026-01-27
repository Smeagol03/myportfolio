import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Download,
  MousePointer2,
} from "lucide-react";
import RotatingText from "./efek/RotatingText";

const Hero = ({
  nama = "Alpian Tabrani",
  role = "Administrative & Web Support",
  deskripsi = "I support organizations in managing data, documents, and digital systems while also building responsive websites using modern tools like React, Firebase, and Microsoft Office.",
  GitHubLink = "https://github.com/Smeagol03",
  LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/",
  InstagramLink = "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,rgba(3,7,18,1)_100%)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold font-outfit mb-6 leading-[1.05]"
            >
              <span className="block text-slate-400 text-2xl md:text-3xl font-medium mb-2">
                Hi, I'm
              </span>
              <span className="cyan-gradient-text block mb-2">{nama}</span>
              <span className="text-white">Tech & Admin Explorer.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              {deskripsi}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-3 transition-all"
              >
                Explore Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/cvAlpianTabrani.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 flex items-center justify-center gap-3 transition-all"
              >
                Download CV
                <Download className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Social Medias */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <div className="h-px w-8 bg-slate-800" />
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500 mr-2">
                Follow Me
              </p>
              {[
                { icon: Github, link: GitHubLink, label: "GitHub" },
                { icon: Linkedin, link: LinkedInLink, label: "LinkedIn" },
                { icon: Instagram, link: InstagramLink, label: "Instagram" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-full h-full rounded-[3rem] border border-dashed border-cyan-500/20 scale-110"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-[90%] h-[90%] rounded-[2.5rem] border border-dashed border-blue-500/10 scale-125"
                />
              </div>

              {/* Central Card */}
              <div className="relative z-10 glass-effect p-8 md:p-12 rounded-[3.5rem] aspect-square flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="absolute top-8 right-8">
                  <MousePointer2 className="w-6 h-6 text-cyan-500 rotate-12" />
                </div>

                <RotatingText
                  texts={["Persistent", "Growing", "Productive", "Dynamic"]}
                  mainClassName="font-outfit font-black text-5xl md:text-7xl leading-none text-white tracking-tighter"
                  staggerFrom={"last"}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  rotationInterval={3000}
                />

                <div className="mt-8 flex flex-col items-center">
                  <div className="h-1.5 w-12 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full mb-4 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                  <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px]">
                    My Core Values
                  </p>
                </div>

                {/* Floating Tags */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 px-5 py-2.5 glass-effect rounded-2xl border border-white/10 shadow-lg"
                >
                  <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider">
                    Web Support
                  </span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -left-6 px-5 py-2.5 glass-effect rounded-2xl border border-white/10 shadow-lg"
                >
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
                    Learning Admin
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-slate-500 mb-4 font-bold">
          Scroll Down
        </span>
        <div className="w-px h-12 bg-linear-to-b from-cyan-500 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

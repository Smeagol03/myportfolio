import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Hero = ({
  nama = "Alpian Tabrani",
  deskripsi = "I bridge the gap between technical web development and efficient administrative workflows. Specializing in building robust React applications and managing complex operational data.",
  GitHubLink = "https://github.com/Smeagol03",
  LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/",
  InstagramLink = "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
}) => {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Personal Portfolio 2025
            </span>
          </motion.div>

          {/* Typography-Led Title */}
          <div className="relative mb-16">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.03,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="text-hero font-outfit uppercase flex flex-col items-center"
            >
              <div className="flex pb-4">
                {"Creative".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 0.4,
                        transition: { duration: 0.4, ease: "easeOut" },
                      },
                    }}
                    className="inline-block bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex -mt-4 md:-mt-8 lg:-mt-12 pb-4">
                {"Builder.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" },
                      },
                    }}
                    className={`inline-block text-(--text-primary) ${char === " " ? "ml-4" : ""}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
          </div>

          {/* Description & CTA */}
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-(--text-secondary) font-inter mb-12 leading-relaxed tracking-tight"
            >
              Hi, I'm{" "}
              <span className="text-(--text-primary) font-semibold">
                {nama}
              </span>
              .{deskripsi}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="#projects"
                className="group relative px-10 py-5 bg-(--text-primary) text-(--bg-primary) font-bold uppercase text-xs tracking-widest overflow-hidden hover:opacity-90 transition-all rounded-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              <a
                href="/resume.pdf"
                className="group px-10 py-5 border border-(--border-color) hover:border-(--text-secondary) text-(--text-primary) font-bold uppercase text-xs tracking-widest transition-all rounded-sm backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" /> Resume
                </span>
              </a>
            </motion.div>
          </div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center gap-12 pt-10"
          >
            {[
              { icon: Github, link: GitHubLink },
              { icon: Linkedin, link: LinkedInLink },
              { icon: Instagram, link: InstagramLink },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--text-muted) hover:text-(--text-primary) transition-colors duration-500"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Swiss Vertical Text Indicator */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block overflow-hidden">
        <motion.div
          animate={{ y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[10px] font-bold uppercase tracking-[1em] text-white/5 [writing-mode:vertical-lr]"
        >
          Built with precision • Swiss Design Philosophy • 2025 Edition •
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import RotatingText from "./efek/RotatingText"; // Pastikan path import ini benar

const Hero = ({
  nama = "Alpian Tabrani",
  role = "Administrative & Web Support",
  deskripsi = "I support organizations in managing data, documents, and digital systems while also building responsive websites using modern tools like React, Firebase, and Microsoft Office. I am detail-oriented, organized, and ready to contribute to an efficient work environment.",
  GitHubLink = "https://github.com/Smeagol03",
  LinkedInLink = "https://www.linkedin.com/in/alpian-tabrani-b83455275/",
  InstagramLink = "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
}) => {
  // 1. Variasi Container (Parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      // Mengaktifkan efek berurutan
      transition: {
        delayChildren: 0.2, // Jeda sebelum elemen anak pertama mulai
        staggerChildren: 0.15, // Jeda antar-animasi elemen anak
      },
    },
  };

  // 2. Variasi Item (Child)
  // Ini digunakan untuk semua elemen yang akan berurutan
  const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Mulai dari 30px ke bawah dan transparan
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120, // Untuk memberikan sedikit efek pantulan
        damping: 15,
      },
    },
  };

  // Variasi Khusus untuk Teks Nama (agar bisa sedikit berbeda)
  const nameVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3, // Kita ingin nama muncul setelah "Hi, I'm"
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center py-10 bg-slate-950 overflow-hidden">
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      {/* 2. Glowing Blobs (Orbs) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting & Name */}
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
              // Menggunakan itemVariants di sini, tetapi isinya akan dipecah
            >
              <motion.span variants={itemVariants} className="inline-block">
                Hi, I'm
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x inline-block"
                variants={nameVariants} // Menggunakan varian khusus
              >
                {nama}
              </motion.span>
            </motion.h1>

            {/* Job Title */}
            <motion.div
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
              variants={itemVariants} // Elemen urutan kedua
            >
              <p className="text-sm md:text-lg text-cyan-300 font-medium tracking-wide">
                {role}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xs sm:text-lg text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants} // Elemen urutan ketiga
            >
              {deskripsi}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
              variants={itemVariants} // Elemen urutan keempat
            >
              <a
                href="#projects"
                className="group relative px-8 py-3 bg-white text-slate-900 font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors">
                  View My Work
                </span>
              </a>

              <a
                href="/cvAlpianTabrani.pdf"
                download="CV-Alpian-Tabrani.pdf"
                className="group inline-flex items-center gap-2 px-8 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg 
             hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 
             transition-all duration-300"
              >
                Download CV
                {/* Icon */}
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-cyan-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6 items-center"
              variants={itemVariants} // Elemen urutan kelima
            >
              <span className="h-px w-8 bg-slate-700 hidden lg:block"></span>
              {[
                { name: "Github", link: GitHubLink },
                { name: "LinkedIn", link: LinkedInLink },
                { name: "Instagram", link: InstagramLink },
              ].map((social, idx) => (
                // Jika ingin social links juga berurutan, Anda bisa membungkusnya lagi dengan motion.a
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-widest hover:-translate-y-1 transform duration-200"
                >
                  {social.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: VISUAL ELEMENT --- */}
          <div className="relative flex justify-center items-center w-full my-10 md:my-0 lg:mt-0">
            <div className="relative z-10 text-center w-full">
              <RotatingText
                texts={["Ambis", "Produktif", "Santai"]}
                mainClassName="text-white overflow-hidden justify-center items-center font-black tracking-tighter transition-all duration-300
        text-4xl 
        sm:text-5xl 
        md:text-6xl 
        lg:text-7xl 
        xl:text-8xl"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

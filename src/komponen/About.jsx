import { motion } from "framer-motion";
import DataDiri from "./DataDiri";
import Bg from "/pasAlpianTabrani.jpg";

const About = () => {
  const gambarVariants = {
    hidden: { x: -100, opacity: 0, scale: 0.5 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // 1. Varian Anak (Item)
  // Semua elemen yang akan bergerak menggunakan varian ini.
  const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Mulai dari 30px di bawah dan transparan
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

  // 2. Varian Induk (Container)
  // Ini mendefinisikan urutan waktu antar-anak.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1, // Jeda sebelum anak pertama mulai
        staggerChildren: 0.1, // Jeda waktu (detik) antar animasi anak
      },
    },
  };

  // Varian Khusus untuk Skill/Statistik List (agar elemen di dalamnya berurutan lagi)
  const skillListContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15, // Stagger yang sedikit lebih lambat untuk item skill
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* --- Bagian Kiri: Gambar --- */}
          <motion.div
            className="relative flex justify-center md:justify-start"
            variants={gambarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Opsi viewport
          >
            {/* Container Gambar */}
            <div className=" relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
              <img
                src={Bg}
                alt="Profile"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-indigo-600">
                <p className="text-3xl font-bold text-indigo-600">5+</p>
                <p className="text-sm text-gray-600 font-medium">
                  Years Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- Bagian Kanan: Konten Teks --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Opsi viewport
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <span className=" text-indigo-600 font-semibold tracking-wider uppercase text-sm">
                About Me
              </span>
              <h2 className=" text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
                Kemampuan Dalam{" "}
                <span className="text-indigo-600">
                  Manajemen Data & Sistem Digital Modern
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className=" text-slate-600 dark:text-slate-300 leading-relaxed"
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
              className=" text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Saat ini saya terus mengembangkan keterampilan dalam pengelolaan
              sistem digital, pengolahan data, dan pengembangan website yang
              sederhana namun fungsional. Saya percaya bahwa ketelitian pada
              detail kecil dapat memberikan dampak besar terhadap efisiensi dan
              kualitas kerja.
            </motion.p>

            {/* List Statistik / Skill Singkat */}
            <motion.div
              variants={skillListContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6"
            >
              {/* Item 1 */}
              <motion.div
                variants={itemVariants}
                className=" flex items-start gap-4"
              >
                <div className="p-3 sm:p-4 bg-indigo-100/80 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">
                    Administrasi Digital
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Dokumen • Arsip • Persuratan
                  </p>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                variants={itemVariants}
                className=" flex items-start gap-4"
              >
                <div className="p-3 sm:p-4 bg-purple-100/80 dark:bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">
                    Fast Performance
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Optimized Build
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Tombol CTA */}
            <motion.div
              variants={itemVariants}
              className="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <a
                href="#contact"
                className=" w-full sm:w-auto text-center px-7 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1"
              >
                Hubungi Saya
              </a>

              <a
                href="/cv.pdf"
                className=" w-full sm:w-auto text-center px-7 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div>
          <DataDiri />
        </div>
      </div>
    </section>
  );
};

export default About;

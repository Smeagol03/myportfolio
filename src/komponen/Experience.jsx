import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Tenaga Teknis / Administrasi",
    company: "Dinas Perumahan & Kawasan Permukiman Kab. Lombok Timur",
    description: [
      "Mengelola dokumen dan arsip surat masuk dan keluar secara terstruktur.",
      "Menyusun dan mendistribusikan surat menyurat internal dan eksternal.",
      "Membantu pencatatan transaksi keuangan sederhana dan laporan administrasi.",
      "Menyiapkan jadwal rapat serta mendukung kelancaran kegiatan kantor.",
      "Terlibat dalam pengelolaan konten website dinas dan sistem e-government.",
    ],
    tech: [
      "Microsoft Word",
      "Microsoft Excel",
      "Google Workspace",
      "Website CMS",
    ],
  },
  {
    title: "Web Developer (Freelance & Personal Project)",
    company: "Self-Employed",
    description: [
      "Membangun website pemesanan bukber dan toko online sederhana.",
      "Membuat sistem absensi berbasis web menggunakan Firebase.",
      "Mengembangkan sistem komentar realtime dengan fitur hapus, reply, dan ekspor data.",
      "Mengintegrasikan form & keranjang belanja dengan WhatsApp.",
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Firebase", "Vite"],
  },
  {
    title: "Praktik Kerja Lapangan (Multimedia)",
    company: "Digital Printing Cahaya Mandiri",
    description: [
      "Mengoperasikan mesin digital printing, cetak foto, dan cetak stiker.",
      "Melakukan desain sederhana menggunakan Canva dan Photoshop.",
      "Membantu dalam produksi sablon dan bordir pesanan pelanggan.",
    ],
    tech: ["Canva", "Photoshop", "CorelDraw", "Digital Printing Tools"],
  },
];

const Experience = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* --- Header Section --- */}
        <div className=" text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase mb-4">
            Jejak Karir
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Pengalaman{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Profesional
            </span>
          </h2>
        </div>

        {/* --- Timeline Container --- */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-blue-200 via-indigo-400 to-purple-200 dark:from-blue-900 dark:via-indigo-700 dark:to-purple-900 md:-translate-x-1/2 rounded-full opacity-60"></div>

          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative z-10 mb-12 last:mb-0 flex flex-col md:flex-row items-start ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* 1. Spacer for Desktop Balance */}
                <div className="hidden md:block md:w-1/2" />

                {/* 2. Timeline Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-100 dark:border-slate-700 flex items-center justify-center shadow-md z-20 ring-4 ring-white dark:ring-slate-900 transition-transform duration-300 hover:scale-110">
                    <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  </div>
                </div>

                {/* 3. Card Content */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.1, once: true }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isLeft ? "md:pr-10 lg:pr-14" : "md:pl-10 lg:pl-14"
                  }`}
                >
                  <div className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1">
                    {/* Decorative subtle gradient background on hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        <span className="py-1 px-2.5 rounded-md bg-indigo-50 dark:bg-indigo-900/30">
                          Work
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-gray-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {exp.title}
                      </h3>

                      <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                        {exp.company}
                      </div>

                      <ul className="space-y-2 mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 w-1.5 h-0.5 bg-indigo-400 rounded-full shrink-0"></span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex flex-wrap gap-2">
                        {exp.tech.map((techItem, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-[10px] md:text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 rounded-md border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

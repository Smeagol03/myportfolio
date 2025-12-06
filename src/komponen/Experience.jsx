import { useRef, useEffect, use } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
  const pengalamanRef = useRef(null);

  useEffect(() => {
    // Gunakan gsap.context untuk pembersihan otomatis (sangat penting di React)
    let ctx = gsap.context(() => {
      // 1. Animasi Header (Muncul dari bawah)
      gsap.from(".gsap-header", {
        scrollTrigger: {
          trigger: ".gsap-header",
          start: "top 80%", // Mulai saat elemen 80% dari atas viewport
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2. Animasi Garis Tengah (Tumbuh ke bawah)
      gsap.from(".gsap-line", {
        scrollTrigger: {
          trigger: ".gsap-line",
          start: "top 70%",
          end: "bottom 90%",
          scrub: 1, // Animasi mengikuti pergerakan scroll mouse (halus)
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
      });

      // 3. Animasi Item Timeline (Masuk dari kiri/kanan)
      const items = gsap.utils.toArray(".gsap-item");

      items.forEach((item, i) => {
        // Tentukan arah: Genap (Kiri) dari -100, Ganjil (Kanan) dari 100
        // Catatan: Di mobile semua akan terasa "fade-up" atau sedikit geser
        const isEven = i % 2 === 0;
        const xValue = isEven ? -100 : 100;

        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%", // Muncul agak awal agar user tidak menunggu
            toggleActions: "play none none reverse", // Mainkan saat masuk, reverse saat keluar
          },
          x: xValue,
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, pengalamanRef); // Scope selector ke ref ini

    return () => ctx.revert(); // Hapus animasi saat komponen unmount
  }, []);
  return (
    <section
      ref={pengalamanRef}
      id="experience"
      className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* --- Header Section --- */}
        <div className="gsap-header text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase mb-4">
            Jejak Karir
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Pengalaman{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Profesional
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Perjalanan saya dalam menciptakan solusi digital yang berdampak.
          </p>
        </div>

        {/* --- Timeline Container --- */}
        <div className="relative max-w-5xl mx-auto">
          {/* Garis Vertikal (Desktop: Tengah, Mobile: Kiri) */}
          <div className="gsap-line absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-200 via-purple-200 to-indigo-200 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-900 md:-translate-x-1/2"></div>

          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`gsap-item relative z-10 mb-12 md:mb-24 flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* 1. Sisi Kosong (Spacer untuk Desktop) */}
                <div className="hidden md:block md:w-1/2" />

                {/* 2. Titik Tengah (Marker) */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-indigo-500 shadow-xl z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                </div>

                {/* 3. Konten Card */}
                <div
                  className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                    isLeft
                      ? "md:pr-12 lg:pr-16 text-left"
                      : "md:pl-12 lg:pl-16 text-left"
                  }`}
                >
                  {/* Card Container */}
                  <div className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl border border-slate-100 dark:border-slate-700 transition-all duration-300 ease-in-out hover:-translate-y-2">
                    {/* Hiasan background linear saat hover */}
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badge Tahun (Mobile & Desktop) */}
                    <div
                      className={`inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold border ${
                        isLeft
                          ? "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800"
                          : "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
                      } ${isLeft ? "md:ml-auto" : "md:mr-auto"}`}
                    >
                      {exp.year}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.title}
                    </h3>

                    <p className="text-base font-medium text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2 md:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      {exp.company}
                    </p>

                    <ul
                      className={`space-y-2 mb-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed ${
                        isLeft ? "md:pl-4" : "md:pr-4"
                      }`}
                    >
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-1.5 text-indigo-400 text-[10px]">
                            ●
                          </span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {exp.tech.map((techItem, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-md border border-slate-200 dark:border-slate-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 hover:border-indigo-200 transition-colors cursor-default"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

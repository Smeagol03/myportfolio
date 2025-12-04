const projectData = [
  {
    title: "Pendaftaran Rusunawa Online",
    description:
      "Sistem pendaftaran online untuk rumah susun sewa yang memudahkan proses aplikasi bagi calon penghuni.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://rusunawadaftar.vercel.app/src/asset/img/rusun.jpg", // Ganti dengan URL gambar Anda
    link: "https://rusunawadaftar.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Wedding Invitation",
    description:
      "Desain undangan pernikahan digital yang elegan dan responsif.",
    tech: ["Firebase", "Tailwind CSS"],
    image:
      "https://wedding-of-wijaya-rara.netlify.app/asset/img/mempelai/bg_open_2.jpg", // Ganti dengan URL gambar Anda
    link: "https://wedding-of-wijaya-rara.netlify.app/",
    category: "Web Development",
  },
  {
    title: "Wedding Invitation",
    description:
      "Undangan pernikahan digital dengan tampilan modern dan fitur interaktif.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://pernikahan-zulfan-izza.netlify.app/asset/img/open2.jpeg", // Ganti dengan URL gambar Anda
    link: "https://pernikahan-zulfan-izza.netlify.app/",
    category: "Web Development",
  },
  {
    title: "Warung Makan Online",
    description:
      "Platform pemesanan makanan online yang memudahkan pelanggan untuk memesan dari warung favorit mereka.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://warungsaya.netlify.app/image/product/chicken-dish.jpg", // Ganti dengan URL gambar Anda
    link: "https://warungsaya.netlify.app/",
    category: "Web Development",
  },
  {
    title: "Absensi Karyawan",
    description:
      "Sistem absensi karyawan berbasis web yang memudahkan pencatatan kehadiran dan pengelolaan data karyawan.",
    tech: ["Firebase", "Tailwind CSS"],
    image:
      "https://absensiperkim.vercel.app/images/Lambang_Kabupaten_Lombok_Timur.png", // Ganti dengan URL gambar Anda
    link: "https://absensiperkim.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Suara ke teks",
    description: "Aplikasi website untuk merubah suara ke text.",
    tech: ["Java Script", "Tailwind CSS"],
    image: "https://placehold.co/800x600/1e293b/a5b4fc?text=Suara+Ke+Text", // Ganti dengan URL gambar Anda
    link: "https://suara-ke-text.netlify.app/",
    category: "Web Development",
  },
  {
    title: "Portfolio Website",
    description:
      "Situs web portofolio pribadi untuk menampilkan proyek dan keterampilan.",
    tech: ["React", "Tailwind CSS"],
    image: "https://placehold.co/800x600/1e293b/a5b4fc?text=Portfolio+Website", // Ganti dengan URL gambar Anda
    link: "https://dinaportfolioteacher.netlify.app/",
    category: "Web Development",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* --- Header Section --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">
            My Work
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Proyek Pilihan Terbaru
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
            Lihat beberapa studi kasus dan proyek yang saya kerjakan dengan
            berbagai stack teknologi.
          </p>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Image Preview and Hover Effect */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay with CTA Button */}
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-xl hover:bg-indigo-50 transition-colors transform translate-y-4 group-hover:translate-y-0">
                    Lihat Proyek
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    project.category === "Fullstack"
                      ? "bg-indigo-100 text-indigo-700"
                      : project.category === "Design"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-green-100 text-green-700"
                  } dark:bg-opacity-20`}
                >
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((techItem, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50 px-2 py-0.5 rounded-md"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

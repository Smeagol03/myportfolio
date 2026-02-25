import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projectData = [
  {
    title: "Daftar Pelatihan Jahit",
    description:
      "Pendaftaran pelatihan menjahit secara online yang memudahkan peserta untuk mendaftar.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://lpkduaberkah.com/img/galeri/1.webp",
    link: "https://lpkduaberkah.com/",
    category: "Web App",
  },
  {
    title: "Aplikasi Pencatatan Keuangan",
    description:
      "Sistem pencatatan keuangan online yang memudahkan pengelolaan keuangan rumah tangga.",
    tech: ["Supabase", "Tailwind CSS", "React"],
    image: "https://laporan-keuangan-sand.vercel.app/logoBesar.png",
    link: "https://laporan-keuangan-sand.vercel.app/login",
    category: "Management System",
  },
  {
    title: "Wedding Invitation Platinum",
    description:
      "Desain undangan pernikahan digital yang elegan, responsif, dan interaktif.",
    tech: ["Firebase", "Tailwind CSS"],
    image:
      "https://wedding-of-wijaya-rara.netlify.app/asset/img/mempelai/bg_open_2.jpg",
    link: "https://wedding-of-wijaya-rara.netlify.app/",
    category: "Creative Site",
  },
  {
    title: "Modern Wedding Invitation",
    description:
      "Undangan pernikahan digital dengan tampilan modern dan fitur interaktif premium.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://pernikahan-zulfan-izza.netlify.app/asset/img/open2.jpeg",
    link: "https://pernikahan-zulfan-izza.netlify.app/",
    category: "Creative Site",
  },
  {
    title: "Warung Makan Digital",
    description:
      "Platform pemesanan makanan online yang memudahkan pelanggan memesan makanan.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://warungsaya.netlify.app/image/product/chicken-dish.jpg",
    link: "https://warungsaya.netlify.app/",
    category: "E-Commerce",
  },
  {
    title: "Sistem Absensi",
    description:
      "Sistem absensi karyawan berbasis web untuk pengelolaan kehadiran yang akurat.",
    tech: ["Firebase", "Tailwind CSS", "React"],
    image: "/ss-absensi.png",
    link: "https://perkim-absensi.vercel.app/",
    category: "Administrative Tool",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-(--bg-primary) relative border-t border-(--border-color) overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-(--text-primary) mb-4">
              Selected{" "}
              <span className="text-blue-600 dark:text-zinc-500">Works.</span>
            </h2>
            <p className="text-(--text-secondary) text-lg">
              A showcase of digital solutions I've built, emphasizing clean
              code, intuitive user experiences, and measurable business impact.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/Smeagol03"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:flex items-center gap-2 text-(--text-muted) hover:text-blue-600 dark:hover:text-white transition-colors mt-6 md:mt-0 font-medium"
          >
            View all on GitHub
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-3 rounded-2xl overflow-hidden flex flex-col h-full border-(--border-color) bg-(--bg-primary) hover:shadow-xl hover:border-blue-200 dark:hover:border-zinc-700 transition-all"
            >
              <div className="relative h-48 w-full rounded-xl overflow-hidden bg-(--bg-secondary) border-(--border-color) mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200 dark:border-zinc-700/50 rounded-md text-[10px] font-semibold tracking-wider uppercase text-slate-700 dark:text-zinc-300 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="px-2 pb-2 grow flex flex-col">
                <h3 className="text-xl font-bold font-outfit text-(--text-primary) mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-(--text-secondary) text-sm mb-4 line-clamp-2 grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold tracking-wider uppercase text-(--text-secondary) bg-(--bg-secondary) border-(--border-color) px-2 py-1 rounded group-hover:bg-blue-50 dark:group-hover:bg-zinc-800 group-hover:text-blue-700 dark:group-hover:text-zinc-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="https://github.com/Smeagol03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-(--text-secondary) hover:text-blue-600 dark:hover:text-white transition-colors font-medium"
          >
            View all on GitHub
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

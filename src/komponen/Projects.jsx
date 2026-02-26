import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useRef } from "react";

const projectData = [
  {
    title: "Daftar Pelatihan Jahit",
    description:
      "Pendaftaran pelatihan menjahit secara online yang memudahkan peserta untuk mendaftar.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://lpkduaberkah.com/img/galeri/1.webp",
    link: "https://lpkduaberkah.com/",
  },
  {
    title: "Sistem Absensi",
    description:
      "Sistem absensi karyawan berbasis web untuk pengelolaan kehadiran yang akurat.",
    tech: ["Firebase", "Tailwind CSS", "React"],
    image: "/ss-absensi.png",
    link: "https://perkim-absensi.vercel.app/",
  },
  {
    title: "Keuangan Digital",
    description:
      "Sistem pencatatan keuangan online yang memudahkan pengelolaan keuangan rumah tangga.",
    tech: ["Supabase", "React"],
    image: "https://laporan-keuangan-sand.vercel.app/logoBesar.png",
    link: "https://laporan-keuangan-sand.vercel.app/login",
  },
  {
    title: "Wedding Invite",
    description:
      "Desain undangan pernikahan digital yang elegan, responsif, dan interaktif.",
    tech: ["Firebase", "Tailwind"],
    image:
      "https://wedding-of-wijaya-rara.netlify.app/asset/img/mempelai/bg_open_2.jpg",
    link: "https://wedding-of-wijaya-rara.netlify.app/",
  },
  {
    title: "Warung Makan Digital",
    description: "Platform pemesanan makanan online yang memudahkan pelanggan.",
    tech: ["Firebase", "Tailwind"],
    image: "https://warungsaya.netlify.app/image/product/chicken-dish.jpg",
    link: "https://warungsaya.netlify.app/",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-32 relative border-t border-white/5 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-blue-500/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-(--text-muted)">
              Selected Works
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end gap-8"
          >
            <h2 className="text-6xl md:text-8xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.8]">
              Portfolio<span className="text-(--text-muted)">.</span>
            </h2>

            <motion.a
              href="https://github.com/Smeagol03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-(--text-muted) hover:text-(--text-primary) flex items-center gap-2 transition-colors duration-500"
            >
              GitHub / Explore <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group glass-2 rounded-sm flex flex-col h-full hover:border-(--accent-blue)/50 transition-all duration-700 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden border-b border-(--border-color)">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col flex-1 bg-(--bg-primary)">
                <h3 className="text-2xl font-bold font-outfit text-(--text-primary) mb-3 uppercase tracking-tighter group-hover:text-(--accent-blue) transition-colors">
                  {project.title}
                </h3>
                <p className="text-(--text-secondary) text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-(--bg-secondary) border border-(--border-color) text-(--text-muted) text-[9px] font-bold uppercase tracking-widest rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--text-primary) hover:text-(--accent-blue) transition-colors mt-auto"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";

const projectData = [
  {
    title: "Daftar Pelatihan Jahit",
    description: "Pendaftaran pelatihan menjahit secara online yang memudahkan peserta untuk mendaftar.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://lpkduaberkah.com/src/img/galeri/1.webp",
    link: "https://lpkduaberkah.com/",
    category: "Web App",
  },
  {
    title: "Aplikasi Pencatatan Keuangan",
    description: "Sistem pencatatan keuangan online yang memudahkan pengelolaan keuangan rumah tangga.",
    tech: ["Supabase", "Tailwind CSS"],
    image: "https://laporan-keuangan-sand.vercel.app/logoBesar.png",
    link: "https://laporan-keuangan-sand.vercel.app/login",
    category: "Management System",
  },
  {
    title: "Wedding Invitation Platinum",
    description: "Desain undangan pernikahan digital yang elegan, responsif, dan interaktif.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://wedding-of-wijaya-rara.netlify.app/asset/img/mempelai/bg_open_2.jpg",
    link: "https://wedding-of-wijaya-rara.netlify.app/",
    category: "Creative Site",
  },
  {
    title: "Modern Wedding Invitation",
    description: "Undangan pernikahan digital dengan tampilan modern dan fitur interaktif premium.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://pernikahan-zulfan-izza.netlify.app/asset/img/open2.jpeg",
    link: "https://pernikahan-zulfan-izza.netlify.app/",
    category: "Creative Site",
  },
  {
    title: "Warung Makan Digital",
    description: "Platform pemesanan makanan online yang memudahkan pelanggan memesan makanan.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://warungsaya.netlify.app/image/product/chicken-dish.jpg",
    link: "https://warungsaya.netlify.app/",
    category: "E-Commerce",
  },
  {
    title: "Sistem Absensi",
    description: "Sistem absensi karyawan berbasis web untuk pengelolaan kehadiran yang akurat.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://perkim-absensi.vercel.app/ss-absensi.png",
    link: "https://perkim-absensi.vercel.app/",
    category: "Administrative Tool",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#030712]">
      {/* Elegant Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent blur-sm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-cyan-500" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Selected Works</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold font-outfit text-white mb-6"
            >
              Katalog <span className="cyan-gradient-text">Project Pilihan.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-slate-400 font-light"
            >
              Kumpulan solusi digital yang saya bangun, mulai dari aplikasi web fungsional hingga desain undangan digital yang kreatif.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="p-4 glass-effect rounded-2xl border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">10+ Active Projects</p>
                <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest font-bold">Successfully Deployed</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Projects Catalog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative flex flex-col"
            >
              {/* Main Card */}
              <div className="relative glass-effect rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/5 h-full flex flex-col">
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-[#030712]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 px-4 py-2 glass-effect rounded-xl border border-white/10 text-[10px] font-bold text-cyan-400 uppercase tracking-widest leading-none">
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold font-outfit text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 font-light text-sm mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn hover:text-cyan-400 transition-colors"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </a>
                    
                    <button className="p-2 rounded-xl bg-white/5 border border-white/5 text-slate-500 hover:text-white hover:bg-white/10 transition-all">
                      <Code2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Shadow Overlay */}
              <div className="absolute -inset-2 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-[2.8rem] -z-10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Catalog Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 text-sm font-medium uppercase tracking-[0.4em] mb-6">Want to see more?</p>
          <a
            href="https://github.com/Smeagol03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#030712] font-black rounded-2xl hover:bg-cyan-400 transition-all shadow-xl shadow-white/5 group"
          >
            Visit GitHub Catalog
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import {
  Monitor,
  Briefcase,
  Palette,
  Layout,
  CheckCircle2,
} from "lucide-react";

const skillsData = [
  {
    category: "Web Development",
    icon: Monitor,
    description:
      "Membangun website interaktif dan sistem berbasis web untuk berbagai kebutuhan.",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Vite",
      "Firebase",
    ],
  },
  {
    category: "Office & Administration",
    icon: Briefcase,
    description:
      "Mendukung pekerjaan administrasi dan pengolahan data secara rapi dan terstruktur.",
    items: [
      "Microsoft Excel",
      "Microsoft Word",
      "PowerPoint",
      "Data Entry",
      "Arsip Digital",
    ],
  },
  {
    category: "Design & Multimedia",
    icon: Palette,
    description:
      "Membuat desain visual minimalis untuk konten, poster, dan kebutuhan digital.",
    items: ["Canva", "Photoshop", "Poster Design", "Social Media"],
  },
  {
    category: "Digital Solutions",
    icon: Layout,
    description:
      "Pengalaman dalam pengembangan sistem sederhana dan proyek digital mandiri.",
    items: [
      "Absensi Online",
      "Comment System",
      "Website Undangan",
      "E-Commerce Basic",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-[#0A0A0A] border-t border-slate-200 dark:border-zinc-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Technical <span className="text-blue-600 dark:text-zinc-500">Arsenal.</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Kombinasi antara manajemen data administratif dan pengembangan web
            modern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-xl hover:border-blue-200 dark:hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {skill.category}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-xs font-medium hover:bg-blue-50 dark:hover:bg-zinc-800 hover:text-blue-700 dark:hover:text-white transition-colors cursor-default"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-500 dark:text-zinc-600" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

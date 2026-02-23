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
      className="py-24 bg-[#0A0A0A] border-t border-zinc-900"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-white mb-4">
            Technical <span className="text-zinc-500">Arsenal.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Kombinasi antara manajemen data administratif dan pengembangan web
            modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-zinc-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <skill.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit text-white">
                    {skill.category}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-zinc-600" />
                    {item}
                  </div>
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

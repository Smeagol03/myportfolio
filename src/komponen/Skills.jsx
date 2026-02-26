import { Monitor, Briefcase, Palette, Layout } from "lucide-react";
import { FadeIn } from "./animasi";

const skillsData = [
  {
    category: "Web Development",
    icon: Monitor,
    description:
      "Membangun website interaktif dan sistem berbasis web untuk berbagai kebutuhan.",
    items: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Vite",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    category: "Digital Solutions",
    icon: Layout,
    description:
      "Pengalaman dalam pengembangan sistem sederhana dan proyek digital mandiri.",
    items: ["Absensi Online", "E-Commerce Basic", "Comment System"],
  },
  {
    category: "Office & Admin",
    icon: Briefcase,
    description:
      "Mendukung pekerjaan administrasi dan pengolahan data secara terstruktur.",
    items: ["Excel Expert", "Data Entry", "Digital Filing"],
  },
  {
    category: "Creative Design",
    icon: Palette,
    description:
      "Membuat desain visual minimalis untuk konten dan kebutuhan digital.",
    items: ["Canva", "Photoshop", "Minimalist Design"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 relative border-t border-white/5 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <header className="mb-20">
          <FadeIn
            delay={0}
            direction="left"
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-blue-500/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">
              Expertise
            </span>
          </FadeIn>
          <FadeIn
            delay={0.2}
            direction="up"
            className="text-4xl md:text-8xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.8]"
          >
            Capabilities<span className="text-(--text-muted)">.</span>
          </FadeIn>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((skill, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              direction="up"
              duration={0.6}
              className="group glass-2 p-8 lg:p-10 rounded-sm flex flex-col justify-between hover:border-(--accent-blue)/30 transition-all duration-700"
            >
              <div>
                <div className="mb-8 p-3 w-fit bg-(--bg-secondary) border border-(--border-color) rounded-sm group-hover:bg-(--accent-blue) group-hover:text-white group-hover:border-(--accent-blue) transition-all duration-500">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-(--text-primary) mb-4 uppercase tracking-tighter">
                  {skill.category}
                </h3>
                <p className="text-(--text-secondary) text-sm leading-relaxed mb-8 max-w-sm">
                  {skill.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-(--bg-secondary) border border-(--border-color) text-(--text-muted) text-[10px] uppercase font-bold tracking-widest hover:bg-(--text-primary) hover:text-(--bg-primary) hover:border-(--text-primary) transition-all duration-500 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { GraduationCap, School, BookOpen, Library, Award } from "lucide-react";
import { FadeIn } from "./animasi";

const educationData = [
  {
    level: "S1 Administrasi Publik",
    school: "ITSKes Muhammadiyah Selong",
    year: "2021 - 2025",
    description:
      "Mempelajari konsep administrasi, kebijakan publik, dan manajemen pemerintahan.",
    achievements: ["Asisten Administrasi"],
    icon: GraduationCap,
  },
  {
    level: "SMK Multimedia",
    school: "SMK Negeri 3 Selong",
    year: "2017 - 2020",
    description:
      "Belajar desain grafis, editing video, dan produksi konten multimedia.",
    icon: School,
  },
  {
    level: "SMP Negeri 2 Sakra",
    school: "",
    year: "2014 - 2017",
    description: "Pendidikan dasar menengah pertama.",
    icon: BookOpen,
  },
  {
    level: "SD Negeri 1 Rumbuk",
    school: "",
    year: "2008 - 2014",
    description: "Pendidikan dasar.",
    icon: Library,
  },
];

const Pendidikan = () => {
  return (
    <section
      id="pendidikan"
      className="py-24 bg-(--bg-primary) border-t border-(--border-color) relative transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <FadeIn delay={0} direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-(--text-primary) mb-4">
            Education <span className="text-(--accent-blue)">Journey.</span>
          </h2>
          <p className="text-(--text-secondary) text-lg">
            Rekam jejak pendidikan yang membentuk dasar pemikiran kritis dan
            keahlian teknis.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              direction="up"
              className="group relative p-8 rounded-sm flex flex-col items-start border border-transparent bg-transparent hover:bg-(--bg-secondary)/40 hover:border-(--border-color) transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Large Background Icon */}
              <item.icon className="absolute -right-8 -bottom-8 w-48 h-48 text-(--text-muted) opacity-[0.03] group-hover:opacity-10 group-hover:text-(--accent-blue) group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" />

              <div className="flex items-start md:items-center gap-4 mb-6 z-10">
                <div className="w-12 h-12 rounded-sm bg-(--bg-secondary) border border-(--border-color) flex items-center justify-center group-hover:bg-(--accent-blue) group-hover:border-(--accent-blue) transition-all duration-500 shrink-0">
                  <item.icon className="w-5 h-5 text-(--text-secondary) group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-(--accent-blue) tracking-widest uppercase mb-1">
                    {item.year}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-outfit text-(--text-primary) group-hover:text-(--accent-blue) transition-colors leading-tight">
                    {item.level}
                  </h3>
                </div>
              </div>

              <div className="z-10 flex-col flex h-full">
                {item.school && (
                  <p className="text-(--text-primary) font-bold text-sm mb-3">
                    {item.school}
                  </p>
                )}

                <p className="text-(--text-secondary) text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                {item.achievements && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-(--border-color)/50">
                    {item.achievements.map((ach, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-(--bg-primary) border border-(--border-color) text-(--text-muted) text-[10px] font-bold uppercase tracking-widest"
                      >
                        <Award className="w-3.5 h-3.5 text-(--accent-blue)" />
                        {ach}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pendidikan;

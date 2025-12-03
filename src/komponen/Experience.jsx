const experienceData = [
  {
    title: "Senior Fullstack Developer",
    company: "Tech Innovator Solutions",
    description: [
      "Memimpin tim yang terdiri dari 5 developer untuk merancang dan meluncurkan produk SaaS baru.",
      "Mengoptimalkan performa aplikasi, menghasilkan peningkatan kecepatan loading sebesar 40%.",
      "Mengimplementasikan alur kerja CI/CD menggunakan GitHub Actions dan AWS.",
    ],
    tech: ["React", "Node.js", "AWS", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Junior Frontend Engineer",
    company: "Creative Digital Agency",
    description: [
      "Bertanggung jawab atas pengembangan UI/UX dari 15+ website klien menggunakan framework modern.",
      "Melakukan testing dan debugging untuk memastikan kompatibilitas browser penuh.",
      "Berpartisipasi aktif dalam sesi brainstorming desain dan wireframing.",
    ],
    tech: ["Vue.js", "SASS", "Firebase", "Git"],
  },
  {
    title: "Web Developer Intern",
    company: "Startup Lokal XYZ",
    description: [
      "Membantu dalam maintenance dan update konten website utama perusahaan.",
      "Belajar dan mengimplementasikan dasar-dasar PHP dan MySQL.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];
const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* --- Header Section --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">
            Work History
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Pengalaman Profesional
          </h2>
        </div>

        {/* --- Timeline Container --- */}
        <div className="relative max-w-4xl mx-auto">
          {/* Garis Vertikal Utama Timeline (Hanya terlihat di layar besar) */}
          <div className="absolute left-1/2 hidden md:block w-0.5 h-full bg-indigo-200 dark:bg-indigo-900 -translate-x-1/2"></div>

          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0; // Tentukan sisi (kiri/kanan)

            return (
              <div
                key={index}
                className="mb-10 flex flex-col md:grid md:grid-cols-2 md:gap-8 relative"
              >
                {/* Timeline Item (Konten) */}
                <div
                  className={`flex ${
                    isLeft
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-2 md:text-left"
                  }`}
                >
                  <div
                    className={`w-full bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-t-4 ${
                      isLeft ? "border-indigo-600" : "border-purple-600"
                    } transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                      {exp.company}
                    </p>

                    {/* Tahun (Mobile Only) */}
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 md:hidden">
                      {exp.year}
                    </p>

                    {/* Deskripsi */}
                    <ul className="list-disc md:list-none ml-5 pl-3 space-y-2 text-slate-600 dark:text-slate-400 text-sm text-justify">
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.tech.map((techItem, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-2 py-0.5 rounded-md"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tahun & Timeline Marker (Desktop & Garis) */}
                <div
                  className={`hidden md:flex items-center justify-center absolute w-full h-full`}
                >
                  {/* Circle Marker */}
                  <div
                    className="absolute w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 z-10"
                    style={{ left: "50%", transform: "translateX(-50%)" }}
                  ></div>

                  {/* Tahun (Desktop Only) */}
                  <div
                    className={`absolute w-1/2 text-sm font-semibold text-slate-500 dark:text-slate-400 ${
                      isLeft
                        ? "right-[calc(50%+40px)] text-right"
                        : "left-[calc(50%+40px)] text-left"
                    }`}
                  >
                    {exp.year}
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

import React from "react";

const skillsData = [
  {
    category: "Web Development",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    description:
      "Membangun website interaktif dan sistem berbasis web untuk kebutuhan personal, bisnis, dan instansi.",
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
    icon: (
      <svg
        className="w-8 h-8 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6M9 16h6M7 8h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    description:
      "Mendukung pekerjaan administrasi dan pengolahan data secara rapi dan terstruktur.",
    items: [
      "Microsoft Excel",
      "Microsoft Word",
      "PowerPoint",
      "Data Entry",
      "Dokumentasi Arsip",
      "Pengelolaan Surat",
    ],
  },

  {
    category: "Design & Multimedia",
    icon: (
      <svg
        className="w-8 h-8 text-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
    description:
      "Membuat desain visual sederhana untuk konten, poster, dan kebutuhan digital.",
    items: [
      "Canva",
      "Photoshop (Basic)",
      "Desain Poster",
      "Desain Sosial Media",
      "Digital Printing",
    ],
  },

  {
    category: "System & Project Experience",
    icon: (
      <svg
        className="w-8 h-8 text-cyan-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
        />
      </svg>
    ),
    description:
      "Pengalaman dalam pengembangan sistem sederhana dan proyek digital mandiri.",
    items: [
      "Sistem Absensi Online",
      "Realtime Comment System",
      "Website Undangan",
      "Toko Online (Firebase + WA)",
      "Portfolio Website",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* --- Section Header --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">
            Technical Proficiency
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Keahlian & Teknologi
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
            Daftar teknologi yang saya gunakan sehari-hari untuk membangun
            produk digital yang berkualitas.
          </p>
        </div>

        {/* --- Skills Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
              </div>

              {/* Description (Optional) */}
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {skill.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-medium text-slate-700 bg-slate-100 rounded-full dark:bg-slate-700 dark:text-slate-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

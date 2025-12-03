import React from "react";

const skillsData = [
  {
    category: "Frontend Development",
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
    description: "Membangun antarmuka yang responsif dan interaktif.",
    items: [
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Next.js",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    category: "Backend Integration",
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
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    description: "Mengelola logika server, database, dan API.",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST API",
      "Firebase",
    ],
  },
  {
    category: "Tools & Workflow",
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    description: "Alat bantu untuk mempercepat pengembangan.",
    items: ["Git & GitHub", "Docker", "Figma", "Postman", "Vite", "VS Code"],
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

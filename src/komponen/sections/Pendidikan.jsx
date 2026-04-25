import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GraduationCap, School, BookOpen, Library, Award, FileCheck, CheckCircle2, History } from "lucide-react";
import { FadeIn } from "../animasi";

const educationData = [
  {
    id: "ACAD-01",
    level: "S1 Administrasi Publik",
    school: "ITSKes Muhammadiyah Selong",
    year: "2021 - 2025",
    status: "CURRENTLY ENROLLED",
    description: "Deepening expertise in public administration, organizational logic, and management systems.",
    achievements: ["Administrative Assistant", "High-Performance Record"],
    icon: GraduationCap,
    color: "blue"
  },
  {
    id: "ACAD-02",
    level: "SMK Multimedia",
    school: "SMK Negeri 3 Selong",
    year: "2017 - 2020",
    status: "GRADUATED",
    description: "Foundation of digital production, visual hierarchy, and multimedia systems.",
    icon: School,
    color: "purple"
  },
  {
    id: "ACAD-03",
    level: "SMP Negeri 2 Sakra",
    school: "Secondary Education",
    year: "2014 - 2017",
    status: "COMPLETED",
    description: "Developing core analytical skills and fundamental academic systems.",
    icon: BookOpen,
    color: "zinc"
  },
  {
    id: "ACAD-04",
    level: "SD Negeri 1 Rumbuk",
    school: "Primary Education",
    year: "2008 - 2014",
    status: "COMPLETED",
    description: "Initial academic registration and foundational learning modules.",
    icon: Library,
    color: "zinc"
  },
];

const TimelineNode = ({ item, index, isLast }) => {
  return (
    <div className="relative pl-12 md:pl-32 pb-24 group">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-[19px] md:left-[39px] top-10 bottom-0 w-[1px] bg-white/10 group-hover:bg-blue-500/30 transition-colors duration-700" />
      )}

      {/* Node Icon */}
      <div className="absolute left-0 top-0 z-20">
        <motion.div 
          className="w-10 h-10 md:w-20 md:h-20 glass-2 rounded-2xl flex items-center justify-center border-l-2 border-l-blue-500 bg-white/5 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6"
          whileHover={{ scale: 1.1 }}
        >
          <item.icon className="w-5 h-5 md:w-8 md:h-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
        </motion.div>
        
        {/* Decorative Status Dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-(--bg-primary) z-30" />
      </div>

      <FadeIn delay={index * 0.1} direction="up" duration={0.8}>
        <div className="glass-2 p-8 md:p-12 rounded-2xl bg-white/5 border-t border-white/10 hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden">
          
          {/* Administrative ID Stamp */}
          <div className="absolute top-4 right-8 text-[4rem] md:text-[6rem] font-black text-white/[0.02] pointer-events-none select-none">
            {item.id}
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Academic Record</span>
                <div className="h-px w-8 bg-blue-500/30" />
              </div>
              <h3 className="text-3xl md:text-5xl font-black font-outfit text-(--text-primary) uppercase tracking-tighter mb-2 group-hover:text-blue-500 transition-colors">
                {item.level}
              </h3>
              <p className="text-sm md:text-lg font-bold text-(--text-secondary) opacity-80 uppercase tracking-widest font-inter">
                {item.school}
              </p>
            </div>

            <div className="text-right flex flex-col items-start lg:items-end">
              <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">
                {item.year}
              </div>
              <span className="text-[8px] font-mono text-(--text-muted) uppercase tracking-tighter">
                System Status: <span className="text-green-500">{item.status}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <p className="text-base md:text-xl text-(--text-secondary) leading-relaxed font-inter opacity-70">
                {item.description}
              </p>
            </div>

            {item.achievements && (
              <div className="lg:col-span-4 flex flex-col gap-3">
                <span className="text-[8px] font-black text-(--text-muted) uppercase tracking-[0.4em] mb-2 block">Credentials Issued</span>
                {item.achievements.map((ach, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/5">
                    <Award className="w-4 h-4 text-blue-500/50" />
                    <span className="text-[9px] font-bold text-(--text-primary) uppercase tracking-widest">{ach}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

const Pendidikan = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll line progress
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const lineHeight = useTransform(lineScale, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="pendidikan"
      ref={containerRef}
      className="py-40 relative border-t border-white/5 bg-(--bg-primary) overflow-hidden"
    >
      {/* Background Dossier Aesthetics */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none flex flex-col justify-center items-center">
        <div className="text-[25rem] font-black uppercase leading-none">ARCHIVE</div>
        <div className="text-[25rem] font-black uppercase leading-none -mt-20">SYSTEM</div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <header className="mb-32 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <FadeIn delay={0} direction="left" className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                <div className="h-[1px] w-12 bg-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500">
                  Institutional History
                </span>
              </FadeIn>
              
              <FadeIn delay={0.2} direction="up">
                <h2 className="text-6xl md:text-9xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.85] mb-8">
                  Academic <br />
                  <span className="text-(--text-muted)">Registry.</span>
                </h2>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} direction="up" className="hidden lg:flex items-center gap-6 p-6 glass-2 rounded-2xl border-l-4 border-l-blue-500 bg-white/5">
              <History className="w-8 h-8 text-blue-500" />
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-(--text-muted) uppercase tracking-widest">Record Count</span>
                <span className="text-xl font-black text-(--text-primary) uppercase">04 Entries Found</span>
              </div>
            </FadeIn>
          </div>
        </header>

        <div className="relative">
          {/* The Scroll-Following Line */}
          <div className="absolute left-[19px] md:left-[39px] top-10 bottom-10 w-[2px] bg-white/5" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[39px] top-10 w-[2px] bg-linear-to-b from-blue-500 to-purple-500 z-10 origin-top"
          />

          {educationData.map((item, index) => (
            <TimelineNode 
              key={item.id} 
              item={item} 
              index={index} 
              isLast={index === educationData.length - 1} 
            />
          ))}
        </div>

        {/* Closing Verification Badge */}
        <FadeIn delay={1} direction="up" className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-20 bg-white/10" />
            <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20">
              <FileCheck className="w-6 h-6 text-blue-500" />
            </div>
            <div className="h-px w-20 bg-white/10" />
          </div>
          <div className="text-center">
            <span className="text-[10px] font-black text-(--text-muted) uppercase tracking-[0.5em] mb-2 block">End of Academic Registry</span>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span className="text-[8px] font-mono text-green-500 font-bold uppercase tracking-widest">All Records Verified & Valid</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Pendidikan;

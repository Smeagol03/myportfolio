import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  Code,
  Shield,
  Activity,
  Layers,
  Terminal,
} from "lucide-react";
import { FadeIn } from "../animasi";

const projectData = [
  {
    id: "01",
    title: "Company profile",
    description:
      "Enterprise-grade company profile with optimized performance and structured data management.",
    tech: ["Next JS", "React", "Tailwind CSS"],
    image: "https://picsum.photos/seed/construction-hero/1920/1080",
    link: "https://tabrani-company-profile.vercel.app/",
    status: "Stable",
    version: "v2.1.0",
  },
  {
    id: "02",
    title: "Wedding Invitation",
    description:
      "Modern digital invitation system featuring real-time RSVP and administrative guest management.",
    tech: ["Next JS", "Firebase", "Tailwind CSS"],
    image: "https://wedding04.vercel.app/assets/3-D3JJ2uVT.webp",
    link: "https://wedding04.vercel.app",
    status: "Production",
    version: "v4.2.3",
  },
  {
    id: "03",
    title: "LPK Dua Berkah",
    description:
      "Online registration and administrative portal for vocational training programs.",
    tech: ["Firebase", "Tailwind CSS"],
    image: "https://lpkduaberkah.com/img/galeri/1.webp",
    link: "https://lpkduaberkah.com/",
    status: "Live",
    version: "v1.0.5",
  },
  {
    id: "04",
    title: "Digital Finance",
    description:
      "Secure financial tracking system with data visualization and transaction auditing.",
    tech: ["Supabase", "React"],
    image: "https://laporan-keuangan-sand.vercel.app/logoBesar.png",
    link: "https://laporan-keuangan-sand.vercel.app/login",
    status: "Production",
    version: "v3.0.0",
  },
  {
    id: "05",
    title: "Swiss Architecture",
    description:
      "Architectural portfolio site emphasizing minimalist design principles and structural clarity.",
    tech: ["Next Js", "Tailwind CSS", "React"],
    image:
      "https://konsultan-web-alpiant.vercel.app/swiss_architecture_hero_1772712304283.png",
    link: "https://konsultan-web-alpiant.vercel.app/",
    status: "Stable",
    version: "v1.2.0",
  },
  {
    id: "06",
    title: "Pet Shop Admin",
    description:
      "Comprehensive pet service management platform with booking and inventory tracking.",
    tech: ["Next Js", "Tailwind CSS", "React"],
    image:
      "https://pet-shop-alpiant.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1543466835-00a7907e9de1%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D80&w=3840&q=75",
    link: "https://pet-shop-alpiant.vercel.app/",
    status: "Production",
    version: "v2.0.1",
  },
];

const ProjectCard = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  function onMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = (event.clientX - rect.left) / width - 0.5;
    const mouseYRelative = (event.clientY - rect.top) / height - 0.5;
    mouseX.set(mouseXRelative);
    mouseY.set(mouseYRelative);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative perspective-[1000px]"
    >
      <div className="glass-2 rounded-xl overflow-hidden h-full flex flex-col border-b-4 border-b-transparent group-hover:border-b-blue-500 transition-all duration-700">
        {/* Project Header Bar (Admin Look) */}
        <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] font-mono font-bold text-(--text-muted) uppercase tracking-tighter">
              ID: {project.id} // {project.status}
            </span>
          </div>
          <span className="text-[8px] font-mono text-blue-500/50">
            {project.version}
          </span>
        </div>

        {/* Image Container with Parallax Effect */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-linear-to-t from-(--bg-primary) to-transparent opacity-60" />

          {/* Tech Stack Overlay (Floating Badges) */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 2).map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 glass-2 rounded-sm text-[7px] font-black uppercase tracking-widest text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col bg-(--bg-primary)/40 backdrop-blur-md">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold font-outfit text-(--text-primary) uppercase tracking-tighter leading-none group-hover:text-blue-500 transition-colors">
              {project.title}
            </h3>
            <Terminal className="w-4 h-4 text-blue-500/30 group-hover:text-blue-500 transition-colors" />
          </div>

          <p className="text-(--text-secondary) text-xs leading-relaxed mb-8 flex-1 font-inter">
            {project.description}
          </p>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                <Globe className="w-4 h-4 text-(--text-muted) group-hover:text-blue-500" />
              </div>
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-purple-500/10 transition-colors">
                <Code className="w-4 h-4 text-(--text-muted) group-hover:text-purple-500" />
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-(--text-primary) hover:text-blue-500 transition-all group/link"
            >
              DEPLOY SITE{" "}
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="section-padding relative border-t border-white/5 bg-(--bg-primary) overflow-hidden"
    >
      {/* Decorative Background Labels */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 overflow-hidden">
        <div className="text-[20rem] font-black uppercase tracking-tighter leading-none absolute -top-20 -left-20">
          BUILD
        </div>
        <div className="text-[20rem] font-black uppercase tracking-tighter leading-none absolute -bottom-20 -right-20">
          DEPLOY
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <FadeIn
                delay={0}
                direction="left"
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-12 bg-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500">
                  Project Archive
                </span>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h2 className="text-5xl md:text-9xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.8] mb-8">
                  Selected <br />
                  <span className="text-(--text-muted)">Systems.</span>
                </h2>
              </FadeIn>
            </div>

            {/* System Analytics Look */}
            <FadeIn
              delay={0.4}
              direction="up"
              className="hidden lg:flex gap-12 border-l border-white/10 pl-12 h-full py-4"
            >
              <div className="flex flex-col">
                <span className="text-4xl font-black font-outfit text-blue-500">
                  12+
                </span>
                <span className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest mt-1">
                  Deployments
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black font-outfit text-purple-500">
                  99%
                </span>
                <span className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest mt-1">
                  Uptime Rate
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black font-outfit text-green-500">
                  03+
                </span>
                <span className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest mt-1">
                  Active Labs
                </span>
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center pt-24 border-t border-white/5">
            <motion.div
              className="flex items-center gap-2 md:gap-0"
              style={{ y }}
            >
              <Activity className="w-5 h-5 text-blue-500 animate-pulse" />
              <div className="h-px w-24 bg-white/10 hidden md:block" />
              <span className="text-[10px] md:text-sm font-bold text-(--text-muted) uppercase tracking-[0.3em]">
                Scroll to inspect records
              </span>
            </motion.div>

            <motion.a
              href="https://github.com/Smeagol03"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[8px] md:text-xs font-black uppercase tracking-[0.4em] text-(--text-primary) hover:text-blue-500 transition-all"
              whileHover={{ x: 5 }}
            >
              Github Index{" "}
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectData.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={0.2 + index * 0.1}
              direction="up"
              duration={1}
            >
              <ProjectCard project={project} index={index} />
            </FadeIn>
          ))}
        </div>

        {/* Bottom Technical Indicator */}
        <FadeIn
          delay={1}
          direction="up"
          className="mt-32 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-white/10" />
            <Layers className="w-6 h-6 text-(--text-muted)" />
            <div className="h-px w-24 bg-linear-to-l from-transparent to-white/10" />
          </div>
          <span className="text-[10px] font-bold text-(--text-muted) uppercase tracking-[0.6em]">
            End of Archive Record
          </span>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;

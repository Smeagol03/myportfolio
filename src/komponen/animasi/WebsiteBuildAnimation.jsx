import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WebsiteBuildAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transformasi untuk progres bar 0-100% (Selesai di 0.5)
  const width = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  
  // Animasi elemen website - Header (0.15 - 0.25)
  const headerY = useTransform(scrollYProgress, [0.15, 0.25], [-20, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  
  // Animasi elemen website - Main Content (0.25 - 0.4)
  const contentY = useTransform(scrollYProgress, [0.25, 0.4], [20, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  
  // Animasi elemen website - Cards (0.4 - 0.5)
  const cardScale = useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto aspect-video bg-(--bg-secondary)/30 rounded-lg border border-(--border-color) p-4 overflow-hidden glass-2">
      {/* Percentage Indicator */}
      <div className="absolute top-2 right-4 flex flex-col items-end">
        <motion.span style={{ opacity }} className="text-[10px] font-black text-(--accent-blue) uppercase tracking-widest">
          Development Progress
        </motion.span>
        <motion.div className="h-1 bg-(--accent-blue) mt-1 rounded-full" style={{ width }} />
      </div>

      <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Browser Header */}
        <motion.g style={{ y: headerY, opacity: headerOpacity }}>
          <rect x="20" y="20" width="360" height="30" rx="4" fill="var(--text-primary)" fillOpacity="0.1" />
          <circle cx="40" cy="35" r="3" fill="var(--accent-blue)" />
          <circle cx="50" cy="35" r="3" fill="var(--text-muted)" />
          <circle cx="60" cy="35" r="3" fill="var(--text-muted)" />
          <rect x="300" y="30" width="60" height="10" rx="2" fill="var(--accent-blue)" />
        </motion.g>

        {/* Hero Section Placeholder */}
        <motion.g style={{ y: contentY, opacity: contentOpacity }}>
          <rect x="40" y="70" width="180" height="15" rx="2" fill="var(--text-primary)" />
          <rect x="40" y="95" width="120" height="8" rx="2" fill="var(--text-secondary)" />
          <rect x="40" y="110" width="100" height="8" rx="2" fill="var(--text-secondary)" />
          <rect x="260" y="70" width="100" height="60" rx="4" fill="var(--accent-blue)" fillOpacity="0.2" />
          <path d="M280 100L300 120L340 80" stroke="var(--accent-blue)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        {/* Feature Cards */}
        <motion.g style={{ scale: cardScale, opacity: cardOpacity }}>
          <rect x="40" y="160" width="100" height="50" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" />
          <rect x="150" y="160" width="100" height="50" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" />
          <rect x="260" y="160" width="100" height="50" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" />
          
          <rect x="55" y="175" width="70" height="5" rx="1" fill="var(--text-muted)" />
          <rect x="165" y="175" width="70" height="5" rx="1" fill="var(--text-muted)" />
          <rect x="275" y="175" width="70" height="5" rx="1" fill="var(--text-muted)" />
        </motion.g>
      </svg>
    </div>
  );
};

export default WebsiteBuildAnimation;

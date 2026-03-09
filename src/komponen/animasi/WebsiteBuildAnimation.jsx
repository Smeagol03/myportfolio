import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WebsiteBuildAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Global progress (0 to 100% by 0.5 scroll)
  const buildProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 100]);
  const progressPercent = useTransform(buildProgress, (v) => `${Math.round(v)}%`);
  
  // Status text based on progress
  const statusText = useTransform(scrollYProgress, 
    [0.1, 0.2, 0.35, 0.45, 0.5], 
    ["INITIALIZING...", "WIREFRAMING...", "DEVELOPING...", "OPTIMIZING...", "READY TO LAUNCH"]
  );

  // Background Grid & Wireframe (Fades out as UI fades in)
  const wireframeOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.3, 0]);
  const uiOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  // Elements animation ranges
  const headerY = useTransform(scrollYProgress, [0.15, 0.25], [-30, 0]);
  const heroX = useTransform(scrollYProgress, [0.25, 0.4], [-50, 0]);
  const imageScale = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);
  
  // Cursor interaction
  const cursorX = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [350, 100, 320]);
  const cursorY = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [200, 40, 180]);
  const cursorOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.45, 0.5], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative w-full max-w-lg mx-auto aspect-video bg-(--bg-secondary)/20 rounded-xl border border-(--border-color) p-6 overflow-hidden glass-2 shadow-2xl">
      {/* Dynamic Header Info */}
      <div className="absolute top-4 left-6 right-6 flex justify-between items-end z-20">
        <div className="flex flex-col">
          <motion.span className="text-[8px] font-black text-(--accent-blue) tracking-[0.3em] uppercase mb-1">
            Status
          </motion.span>
          <motion.span className="text-[10px] font-bold text-(--text-primary) font-mono">
            {statusText}
          </motion.span>
        </div>
        <div className="flex flex-col items-end">
          <motion.span className="text-[18px] font-outfit font-black text-(--text-primary)">
            {progressPercent}
          </motion.span>
          <motion.div 
            className="h-1 bg-(--accent-blue) rounded-full" 
            style={{ width: useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]) }} 
          />
        </div>
      </div>

      <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full mt-4">
        {/* Background Grid Elements */}
        <motion.g opacity={0.1}>
          {[...Array(10)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="240" stroke="var(--text-primary)" strokeWidth="0.5" />
          ))}
          {[...Array(6)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="var(--text-primary)" strokeWidth="0.5" />
          ))}
        </motion.g>

        {/* Wireframe Layer (Technical/Blueprint look) */}
        <motion.g style={{ opacity: wireframeOpacity }}>
          <rect x="20" y="20" width="360" height="200" rx="4" stroke="var(--text-muted)" strokeDasharray="4 4" />
          <line x1="20" y1="50" x2="380" y2="50" stroke="var(--text-muted)" strokeDasharray="2 2" />
          <circle cx="200" cy="120" r="40" stroke="var(--text-muted)" strokeDasharray="4 4" />
        </motion.g>

        {/* Browser Frame */}
        <motion.g style={{ opacity: uiOpacity }}>
          <rect x="15" y="15" width="370" height="210" rx="8" fill="var(--bg-primary)" shadow="0 10px 30px rgba(0,0,0,0.5)" />
          
          {/* Toolbar */}
          <motion.g style={{ y: headerY }}>
            <rect x="15" y="15" width="370" height="35" rx="8" fill="var(--text-primary)" fillOpacity="0.05" />
            <circle cx="35" cy="32.5" r="3" fill="#FF5F56" />
            <circle cx="47" cy="32.5" r="3" fill="#FFBD2E" />
            <circle cx="59" cy="32.5" r="3" fill="#27C93F" />
            <rect x="80" y="27.5" width="200" height="10" rx="5" fill="var(--text-primary)" fillOpacity="0.1" />
          </motion.g>

          {/* Hero Content */}
          <motion.g style={{ x: heroX, opacity: uiOpacity }}>
            <rect x="35" y="70" width="140" height="12" rx="2" fill="var(--text-primary)" />
            <rect x="35" y="90" width="100" height="6" rx="1" fill="var(--text-secondary)" />
            <rect x="35" y="102" width="120" height="6" rx="1" fill="var(--text-secondary)" />
            <rect x="35" y="125" width="50" height="15" rx="2" fill="var(--accent-blue)" />
          </motion.g>

          {/* Abstract Image/Graphic */}
          <motion.g style={{ scale: imageScale }}>
            <rect x="230" y="70" width="130" height="80" rx="6" fill="var(--accent-blue)" fillOpacity="0.15" />
            <motion.path 
              d="M230 130L260 100L300 130L330 90L360 120" 
              stroke="var(--accent-blue)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="330" cy="85" r="8" fill="var(--accent-blue)" fillOpacity="0.3" />
          </motion.g>

          {/* Feature Grid */}
          <motion.g style={{ y: cardsY }}>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect x={35 + i * 115} y="170" width="100" height="40" rx="4" fill="var(--bg-secondary)" stroke="var(--border-color)" strokeWidth="0.5" />
                <rect x={45 + i * 115} y="180" width="40" height="4" rx="1" fill="var(--text-muted)" />
                <rect x={45 + i * 115} y="190" width="80" height="3" rx="1" fill="var(--text-muted)" fillOpacity="0.5" />
              </g>
            ))}
          </motion.g>
        </motion.g>

        {/* Animated Cursor */}
        <motion.g style={{ x: cursorX, y: cursorY, opacity: cursorOpacity }} zIndex={50}>
          <path d="M0 0L16 16L9 16L6 22L4 21L7 15L0 15L0 0Z" fill="white" stroke="black" strokeWidth="1" />
          <motion.circle 
            r="10" 
            fill="var(--accent-blue)" 
            fillOpacity="0.3"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.g>
      </svg>
      
      {/* Bottom Technical Tag */}
      <motion.div 
        style={{ opacity: uiOpacity }}
        className="absolute bottom-4 left-6 flex items-center gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[8px] font-mono text-(--text-muted) uppercase tracking-tighter">
          Production Environment: Stable
        </span>
      </motion.div>
    </div>
  );
};

export default WebsiteBuildAnimation;

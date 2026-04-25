import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Database, Layout, Activity, MousePointer2, Settings, Monitor, Globe } from "lucide-react";

const WebsiteBuildAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Change offset to finish the animation earlier
    // "start end" means animation starts when top of container hits bottom of viewport
    // "center center" means animation finishes when center of container hits center of viewport
    offset: ["start end", "center center"],
  });

  // Smoothing for better performance
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Animating the "Administrative Dashboard" (Source)
  const dashboardX = useTransform(smoothProgress, [0.1, 0.4], [0, -40]);
  const dashboardOpacity = useTransform(smoothProgress, [0.4, 0.6], [1, 0.2]);
  const dashboardBlur = useTransform(smoothProgress, [0.4, 0.6], ["blur(0px)", "blur(10px)"]);

  // Animating the "Website Preview" (Result)
  const websiteX = useTransform(smoothProgress, [0.4, 0.7], [40, 0]);
  const websiteOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
  const websiteScale = useTransform(smoothProgress, [0.4, 0.6], [0.8, 1]);

  // Data flow line animation
  const pathLength = useTransform(smoothProgress, [0.2, 0.5], [0, 1]);
  
  // Status text based on progress
  const statusText = useTransform(smoothProgress, 
    [0.1, 0.3, 0.5, 0.7, 0.9], 
    ["ARCHIVING DATA...", "STRUCTURING SYSTEM...", "MAPPING UI...", "BUILDING INTERFACE...", "SITE DEPLOYED"]
  );

  return (
    <div ref={containerRef} style={{ position: "relative" }} className="relative w-full max-w-2xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]">
      {/* Background Status Info */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 z-50">
        <motion.div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <motion.span className="text-[10px] font-mono font-bold text-blue-500 tracking-widest">
            {statusText}
          </motion.span>
        </motion.div>
        <div className="text-[10px] font-mono text-(--text-muted)">
          v2.4.0-production
        </div>
      </div>

      {/* Layer 1: Administrative Dashboard (The Source) */}
      <motion.div 
        style={{ 
          x: dashboardX, 
          opacity: dashboardOpacity,
          filter: dashboardBlur,
          rotateY: -20
        }}
        className="absolute w-64 md:w-80 h-48 md:h-60 glass-2 rounded-xl p-4 shadow-2xl border-l-4 border-l-blue-500 z-10"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-(--text-primary)">Admin Panel</span>
          </div>
          <Settings className="w-3 h-3 text-(--text-muted) animate-spin-slow" />
        </div>
        <div className="space-y-3">
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div className="h-full bg-blue-500/40 w-[80%]" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 bg-white/5 rounded-md flex items-center justify-center p-2 border border-white/5">
                <Activity className="w-3 h-3 text-blue-400/50" />
              </div>
            ))}
          </div>
          <div className="h-12 w-full bg-blue-500/10 rounded-md border border-blue-500/20 p-2 overflow-hidden">
            <div className="text-[8px] font-mono text-blue-300 opacity-50 space-y-1">
              <p>{">"} sync_records(321)</p>
              <p>{">"} data_integrity: 100%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Connection: Data Flow (Path) */}
      <svg className="absolute w-full h-full pointer-events-none z-20" viewBox="0 0 600 400">
        <motion.path
          d="M250,200 C300,200 300,200 350,200"
          stroke="var(--accent-blue)"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
          style={{ pathLength, opacity: useTransform(smoothProgress, [0.2, 0.6], [0, 1]) }}
        />
        <motion.circle
          r="4"
          fill="var(--accent-blue)"
          style={{ 
            offsetPath: "path('M250,200 C300,200 300,200 350,200')",
            offsetDistance: useTransform(smoothProgress, [0.2, 0.6], ["0%", "100%"]),
            opacity: useTransform(smoothProgress, [0.2, 0.6], [0, 1])
          }}
        />
      </svg>

      {/* Layer 2: Website Preview (The Result) */}
      <motion.div 
        style={{ 
          x: websiteX, 
          opacity: websiteOpacity,
          scale: websiteScale,
          rotateY: 15
        }}
        className="absolute w-72 md:w-96 h-56 md:h-72 glass-2 rounded-xl p-0 shadow-2xl border-t-4 border-t-purple-500 z-30 overflow-hidden"
      >
        {/* Browser Header */}
        <div className="bg-white/5 border-b border-white/10 p-2 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full">
            <Globe className="w-2.5 h-2.5 text-purple-400" />
            <span className="text-[8px] text-(--text-muted) font-mono">my-portfolio-v2.live</span>
          </div>
          <div className="w-10" />
        </div>

        {/* Website Content */}
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="w-20 h-4 bg-white/10 rounded" />
            <div className="flex gap-2">
              <div className="w-10 h-2 bg-white/5 rounded" />
              <div className="w-10 h-2 bg-white/5 rounded" />
            </div>
          </div>
          
          <div className="flex gap-4 items-center">
            <div className="flex-1 space-y-2">
              <motion.div 
                className="h-8 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded" 
                style={{ width: useTransform(smoothProgress, [0.5, 0.8], ["0%", "100%"]) }}
              />
              <motion.div 
                className="h-2 bg-white/10 rounded" 
                style={{ width: useTransform(smoothProgress, [0.6, 0.8], ["0%", "80%"]) }}
              />
              <motion.div 
                className="h-2 bg-white/10 rounded" 
                style={{ width: useTransform(smoothProgress, [0.65, 0.8], ["0%", "60%"]) }}
              />
            </div>
            <motion.div 
              className="w-20 h-20 bg-purple-500/10 rounded-lg border border-purple-500/30 flex items-center justify-center"
              style={{ scale: useTransform(smoothProgress, [0.7, 0.9], [0, 1]) }}
            >
              <Monitor className="w-8 h-8 text-purple-400/50" />
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                className="h-12 bg-white/5 rounded border border-white/5"
                style={{ y: useTransform(smoothProgress, [0.75 + i * 0.05, 0.95], [20, 0]), opacity: useTransform(smoothProgress, [0.75 + i * 0.05, 0.95], [0, 1]) }}
              />
            ))}
          </div>
        </div>

        {/* Floating Mouse Cursor */}
        <motion.div
          style={{
            x: useTransform(smoothProgress, [0.8, 1], [300, 150]),
            y: useTransform(smoothProgress, [0.8, 1], [250, 100]),
            opacity: useTransform(smoothProgress, [0.8, 0.9], [0, 1])
          }}
          className="absolute z-50 pointer-events-none"
        >
          <MousePointer2 className="w-5 h-5 text-white drop-shadow-lg" fill="black" />
        </motion.div>
      </motion.div>

      {/* Decorative Badges */}
      <motion.div 
        style={{ 
          opacity: useTransform(smoothProgress, [0.6, 0.8], [0, 0.5]),
          y: useTransform(smoothProgress, [0.6, 1], [20, -20])
        }}
        className="absolute bottom-10 left-10 p-3 glass-2 rounded-xl flex items-center gap-2"
      >
        <Layout className="w-4 h-4 text-blue-400" />
        <span className="text-[8px] font-black uppercase tracking-widest text-blue-400">Structure</span>
      </motion.div>
    </div>
  );
};

export default WebsiteBuildAnimation;

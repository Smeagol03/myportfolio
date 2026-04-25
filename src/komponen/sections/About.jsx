import {
  useInView,
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  FileText,
  Database,
  Shield,
  Fingerprint,
  Cpu,
  History,
  UserCheck,
  ShieldCheck,
  Zap,
  Lock,
} from "lucide-react";
import Bg from "/image.png";
import GambarHover from "/pasAlpianTabrani.jpg";
import { FadeIn, SwipeCard } from "../animasi";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.8, 1],
    [0, 1, 1, 0],
  );
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const features = [
    {
      icon: Database,
      text: "Database Integrity",
      desc: "Structuring secure & scalable data architectures.",
    },
    {
      icon: FileText,
      text: "Admin Excellence",
      desc: "Optimizing organizational workflows with precision.",
    },
    {
      icon: Shield,
      text: "System Reliability",
      desc: "Ensuring 99.9% uptime for digital assets.",
    },
    {
      icon: Zap,
      text: "Performance First",
      desc: "Building lightning-fast, efficient interfaces.",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      style={{ position: "relative" }}
      className="section-padding relative border-t border-white/5 bg-(--bg-primary) overflow-hidden"
    >
      {/* Background Dossier Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none overflow-hidden">
        <div className="absolute top-10 right-10 text-[15rem] font-black uppercase tracking-tighter">
          PROFILE
        </div>
        <div className="absolute bottom-20 left-10 text-[15rem] font-black uppercase tracking-tighter">
          DOSSIER
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT SIDE: Visual Authentication & Identity */}
          <div className="lg:col-span-5 relative group">
            <FadeIn delay={0.2} direction="right" duration={1}>
              <div className="relative z-10 p-2 glass-2 rounded-2xl bg-white/5 border-t border-white/20 shadow-2xl overflow-hidden">
                {/* ID Header Bar */}
                <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Fingerprint className="w-4 h-4 text-blue-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-(--text-primary)">
                      Identification: Verified
                    </span>
                  </div>
                  <Lock className="w-3 h-3 text-green-500/50" />
                </div>

                <SwipeCard
                  defaultImage={Bg}
                  hoverImage={GambarHover}
                  alt="Alpian Tabrani"
                  className="rounded-xl overflow-hidden aspect-4/5 object-cover"
                />

                {/* System Status Footer */}
                <div className="mt-4 p-4 bg-black rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-(--text-muted) uppercase tracking-widest">
                      Operator Status
                    </span>
                    <span className="text-[10px] font-black text-blue-500 uppercase">
                      Active / Optimized
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-3 bg-blue-500 rounded-full"
                        animate={{ height: [4, 12, 4] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Floating Credentials Badge */}
            <motion.div
              style={{ y: smoothY, opacity }}
              className="absolute -bottom-16 -right-10 lg:-right-20 glass-2 p-8 rounded-2xl shadow-2xl z-20 hidden md:block max-w-60 border-l-4 border-l-blue-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-5 h-5 text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">
                  Core Credentials
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-black font-outfit text-(--text-primary) leading-none mb-1">
                    3+ YEARS
                  </div>
                  <p className="text-[9px] font-bold text-(--text-muted) uppercase tracking-widest">
                    Operational Experience
                  </p>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div>
                  <div className="text-3xl font-black font-outfit text-(--text-primary) leading-none mb-1">
                    PRO-LEVEL
                  </div>
                  <p className="text-[9px] font-bold text-(--text-muted) uppercase tracking-widest">
                    Admin & Dev Hybrid
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Narrative & Operational Pillars */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            <FadeIn
              delay={0}
              direction="left"
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px w-12 bg-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500">
                Statement of Purpose
              </span>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <h2 className="text-5xl md:text-8xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.85] mb-12">
                Merging <span className="text-blue-500">Logic</span> <br />
                <span className="text-(--text-muted) opacity-50">
                  With Precision.
                </span>
              </h2>
            </FadeIn>

            <FadeIn
              delay={0.4}
              direction="up"
              duration={0.8}
              className="space-y-10 text-(--text-secondary) text-lg md:text-2xl font-inter leading-relaxed mb-16 max-w-2xl"
            >
              <p>
                I am{" "}
                <span className="text-(--text-primary) font-black border-b border-blue-500/30">
                  Alpian Tabrani
                </span>
                , a system-oriented professional specializing in the
                intersection of{" "}
                <span className="italic">administrative architecture</span> and{" "}
                <span className="text-blue-500 font-medium">
                  modern web engineering
                </span>
                .
              </p>
              <p className="text-base md:text-lg opacity-80 leading-loose">
                My approach is rooted in the philosophy that great digital
                products require more than just code—they require structured
                data, rigorous integrity, and an unwavering commitment to
                operational excellence. Whether I'm managing a secure database
                or building a reactive UI, my focus remains on{" "}
                <span className="text-(--text-primary) font-bold">
                  absolute precision
                </span>
                .
              </p>
            </FadeIn>

            {/* Operational Pillars (Feature Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {features.map((item, i) => (
                <FadeIn
                  key={i}
                  delay={0.6 + i * 0.1}
                  direction="up"
                  duration={0.6}
                  className="group relative p-6 glass-2 rounded-xl border-l-2 border-l-transparent hover:border-l-blue-500 transition-all duration-500 bg-white/5"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-(--text-primary)">
                      {item.text}
                    </span>
                  </div>
                  <p className="text-[10px] text-(--text-muted) uppercase tracking-widest leading-relaxed">
                    {item.desc}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Verification Footer */}
            <FadeIn
              delay={1}
              direction="up"
              className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-blue-500/50" />
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-lg font-black text-(--text-muted) uppercase tracking-[0.3em] mb-1">
                    Verification Status
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] md:text-sm font-mono text-green-500 font-bold">
                      CERTIFIED OPERATOR
                    </span>
                  </div>
                </div>
              </div>

              {/* Symbolic Signature */}
              <div className="text-center md:text-right flex flex-col items-center md:items-end">
                <span className="text-xs font-mono italic text-(--text-muted)">
                  Authenticated By:
                </span>
                <span className="text-lg md:text-3xl font-outfit font-black text-(--text-primary) tracking-tighter uppercase border-b-2 border-blue-500">
                  ALPIAN T.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

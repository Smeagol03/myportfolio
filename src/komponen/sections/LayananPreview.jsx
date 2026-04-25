import { ArrowRight, Zap, ShieldCheck, Rocket, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "../animasi";
import WebsiteBuildAnimation from "../animasi/WebsiteBuildAnimation";

const LayananPreview = () => {
  const highlights = [
    { icon: Database, text: "Data-Driven Systems", color: "text-blue-500" },
    { icon: Zap, text: "Optimized Performance", color: "text-yellow-500" },
    {
      icon: ShieldCheck,
      text: "Structural Integrity",
      color: "text-green-500",
    },
    { icon: Rocket, text: "Scalable Solutions", color: "text-purple-500" },
  ];

  return (
    <section
      id="layanan"
      className="section-padding relative overflow-hidden bg-(--bg-primary)"
    >
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Visual Hook - Interactive UI Animation */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <FadeIn direction="right" delay={0.2} duration={1}>
              <div className="relative group">
                <WebsiteBuildAnimation />
                {/* Visual Glass Overlay for Depth */}
                <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </FadeIn>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <header className="mb-12">
              <FadeIn
                delay={0}
                direction="left"
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-12 bg-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500">
                  Core Expertise
                </span>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h2 className="text-5xl md:text-7xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.9] mb-8">
                  Where <span className="text-blue-500">Data</span> Meets <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
                    Exceptional Design.
                  </span>
                </h2>
                <p className="text-(--text-secondary) text-base md:text-xl leading-relaxed font-inter mb-10 max-w-xl">
                  Saya menjembatani kesenjangan antara sistem administrasi yang
                  kompleks dan antarmuka pengguna yang intuitif. Memastikan
                  setiap data terkelola dengan presisi sambil memberikan
                  pengalaman visual yang memukau.
                </p>
              </FadeIn>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {highlights.map((item, i) => (
                  <FadeIn
                    key={i}
                    delay={0.4 + i * 0.1}
                    direction="up"
                    className="flex items-center gap-4 p-4 glass-2 rounded-xl border-l-2 border-l-transparent hover:border-l-blue-500 transition-all duration-500"
                  >
                    <div className={`p-2 bg-white/5 rounded-lg ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-(--text-primary)">
                      {item.text}
                    </span>
                  </FadeIn>
                ))}
              </div>

              <FadeIn
                delay={0.8}
                direction="up"
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <Link
                  to="/layanan"
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-4 px-10 py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-500"
                >
                  View Services
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-(--text-muted) hidden sm:block">
                  Optimized for v2.0
                </span>
              </FadeIn>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananPreview;

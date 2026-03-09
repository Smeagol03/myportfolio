import { ArrowRight, Zap, ShieldCheck, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "../animasi";
import WebsiteBuildAnimation from "../animasi/WebsiteBuildAnimation";

const LayananPreview = () => {
  const highlights = [
    { icon: Zap, text: "High Performance" },
    { icon: ShieldCheck, text: "Secure by Design" },
    { icon: Rocket, text: "SEO Optimized" },
  ];

  return (
    <section id="layanan" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Hook - SVG Animation */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="right" delay={0.2}>
              <WebsiteBuildAnimation />
            </FadeIn>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <header className="mb-8">
              <FadeIn delay={0} direction="left" className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-(--accent-blue)" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-(--text-primary) opacity-70">
                  Services
                </span>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-none mb-6">
                  Transforming Ideas into <span className="text-(--accent-blue)">Digital Reality.</span>
                </h2>
                <p className="text-(--text-secondary) text-sm md:text-lg leading-relaxed font-inter mb-8">
                  Saya tidak hanya sekadar membuat kode. Saya membangun aset digital yang membantu bisnis Anda tumbuh, dari konsep desain hingga deployment sistem yang kompleks.
                </p>
              </FadeIn>

              {/* Highlights */}
              <div className="flex flex-wrap gap-6 mb-10">
                {highlights.map((item, i) => (
                  <FadeIn key={i} delay={0.4 + i * 0.1} direction="up" className="flex items-center gap-2">
                    <item.icon size={18} className="text-(--accent-blue)" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-(--text-primary)">
                      {item.text}
                    </span>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.7} direction="up">
                <Link
                  to="/layanan"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-(--text-primary) text-(--bg-primary) font-black text-[10px] uppercase tracking-[0.3em] rounded-sm hover:invert transition-all"
                >
                  Explore Services
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </FadeIn>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananPreview;

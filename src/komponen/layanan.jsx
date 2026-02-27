import { Check, Zap, Rocket, ShieldCheck, ArrowRight } from "lucide-react";
import { FadeIn } from "./animasi";
import { useNavigate } from "react-router-dom";

const PricingCard = ({
  title,
  price,
  description,
  features,
  icon: Icon,
  isPopular,
  ctaText,
  delay = 0,
}) => {
  const navigate = useNavigate();

  return (
    <FadeIn
      delay={delay}
      direction="up"
      className={`relative group flex flex-col p-8 lg:p-10 rounded-sm border contain-layout contain-paint ${
        isPopular
          ? "border-(--accent-blue)/60 bg-(--accent-blue)/5"
          : "border-(--border-color-strong, rgba(0,0,0,0.15)) bg-(--bg-secondary)/10"
      } glass-2 overflow-visible! transition-colors duration-300 md:duration-700 hover:border-(--accent-blue)/60`}
      viewport={{ once: true, amount: 0.2 }}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-(--accent-blue) text-white px-5 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase z-30 shadow-lg shadow-blue-500/20">
          Recommended
        </span>
      )}

      <div className="mb-8">
        <div className="flex flex-col items-center">
          <div
            className={`inline-flex items-center justify-center p-4 rounded-sm mb-4 transition-colors duration-300 md:duration-500 ${
              isPopular
                ? "bg-(--accent-blue) text-white"
                : "bg-(--bg-secondary) border border-(--border-color) text-(--text-primary)"
            } group-hover:scale-110 transition-transform`}
          >
            <Icon size={24} />
          </div>

          <h3 className="text-2xl font-bold text-(--text-primary) font-outfit mb-3 uppercase tracking-tighter">
            {title}
          </h3>

          <div className="flex flex-col items-baseline gap-1 mb-2">
            <span className="text-xs font-bold text-(--text-muted) uppercase tracking-widest">
              Start from
            </span>
            <span className="text-3xl font-black text-(--text-primary) font-outfit uppercase tracking-tighter">
              Rp {price}
            </span>
          </div>

          <p className="text-(--text-secondary) text-sm leading-relaxed font-inter">
            {description}
          </p>
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="text-(--accent-blue) mt-0.5 shrink-0" size={16} />
            <span className="text-(--text-secondary) text-[11px] font-medium leading-normal tracking-tight">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          navigate(`/checkout/${title.toLowerCase().replace(/\s+/g, "-")}`)
        }
        className={`group-btn w-full py-4 px-6 rounded-sm font-bold text-[10px] uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-2 ${
          isPopular
            ? "bg-(--text-primary) text-(--bg-primary) hover:invert"
            : "bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) hover:bg-(--text-primary) hover:text-(--bg-primary)"
        }`}
      >
        {ctaText || "Select Plan"}
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </FadeIn>
  );
};

const Layanan = () => {
  const packages = [
    {
      title: "Essential",
      price: "1 Jt",
      description:
        "Solusi website profesional untuk personal branding, UMKM, atau landing page bisnis Anda.",
      icon: Zap,
      features: [
        "Landing Page / Company Profile",
        "Desain Responsif",
        "Struktur SEO Dasar",
        "Optimasi Dasar",
        "Integrasi WhatsApp / Form Kontak",
      ],
      ctaText: "Click Here",
    },
    {
      title: "Advanced",
      price: "1.5 Jt",
      description:
        "Website dinamis dengan fitur interaktif dan optimasi performa untuk bisnis yang ingin tampil lebih profesional.",
      icon: Rocket,
      isPopular: true,
      features: [
        "3–5 Halaman (Company Profile / UMKM / Organisasi)",
        "Desain Responsif & Modern UI",
        "Fitur Dinamis (Firebase / Supabase Integration)",
        "PWA (Installable seperti aplikasi)",
        "SEO On-Page + Open Graph",
        "Integrasi Google Analytics",
      ],
      ctaText: "Pick Me",
    },
    {
      title: "System",
      price: "Rp 2.500.000",
      description:
        "Solusi website berbasis sistem dengan dashboard admin, autentikasi pengguna, dan data real-time.",
      icon: ShieldCheck,
      features: [
        "Website Dinamis dengan Dashboard Admin",
        "Login & Manajemen Pengguna Dasar",
        "Kelola Data (Tambah, Edit, Hapus)",
        "Integrasi Database (Firebase / Supabase)",
        "Tampilan Data Realtime",
        "Export Data ke Excel / CSV",
        "Setup Hosting & Domain",
        "Support 30 Hari",
      ],
      ctaText: "Choose Me",
    },
  ];

  return (
    <section
      id="layanan"
      className="py-32 relative bg-transparent border-t border-(--border-color) overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <header className="mb-24">
          <FadeIn
            delay={0}
            direction="left"
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-(--accent-blue)" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-(--text-primary) opacity-70">
              Services
            </span>
          </FadeIn>

          <FadeIn
            delay={0.2}
            direction="up"
            className="flex flex-col md:flex-row justify-between items-start gap-10"
          >
            <h2 className="text-4xl md:text-8xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.8]">
              Strategy<span className="text-(--text-muted)">&</span> <br />{" "}
              Solutions<span className="text-(--text-muted)">.</span>
            </h2>
            <p className="text-(--text-secondary) max-w-md text-sm md:text-base leading-relaxed font-inter pb-2">
              Building next-generation digital assets with a focus on
              <span className="text-(--text-primary)">
                {" "}
                technical excellence
              </span>
              , minimalist aesthetics, and seamless user experiences.
            </p>
          </FadeIn>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} delay={0.3 + index * 0.1} />
          ))}
        </div>

        <FadeIn delay={0.6} direction="up" className="mt-20 text-center">
          <p className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest">
            Require a custom architectural scope?{" "}
            <a href="#contact" className="text-(--accent-blue) hover:underline">
              Initialize Consultation
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Layanan;

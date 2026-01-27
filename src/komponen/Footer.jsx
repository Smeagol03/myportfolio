import { motion } from "framer-motion";
import { Github, Instagram, ArrowUp, Mail, MapPin, Globe } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Smeagol03",
    icon: Github,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
    icon: Instagram,
    color: "from-pink-500 to-rose-500",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#030712] overflow-hidden pt-20 pb-10 border-t border-white">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Brand Section */}
          <div className="md:col-span-12 lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-bold text-2xl font-outfit">
                  A
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black font-outfit tracking-wider text-white">
                  ALPIAN TABRANI
                </span>
              </div>
            </div>

            <p className="text-slate-400 font-light leading-relaxed max-w-md text-lg">
              Membangun efisiensi melalui solusi digital kreatif. Berfokus pada
              manajemen data dan pengembangan web modern.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl glass-effect border border-white/5 flex items-center justify-center group transition-all hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5"
                >
                  <link.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-white font-bold font-outfit uppercase tracking-widest text-sm mb-8">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Home",
                "About",
                "Pendidikan",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-light flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Preview */}
          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="text-white font-bold font-outfit uppercase tracking-widest text-sm mb-8">
              Quick Connect
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:atabrani3@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                </div>
                <span className="text-slate-400 font-light text-sm group-hover:text-white transition-colors">
                  atabrani3@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-slate-400 font-light text-sm">
                  Lombok Timur, NTB - ID
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <span>© {currentYear} Alpian Tabrani</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-800" />
            <span>Built with React & Tailwind</span>
          </div>

          <motion.a
            href="#"
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl glass-effect border border-white/5 text-slate-400 hover:text-cyan-400 transition-all cursor-pointer"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              Back to Top
            </span>
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

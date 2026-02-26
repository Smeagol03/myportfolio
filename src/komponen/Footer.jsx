import { motion } from "framer-motion";
import { Github, Instagram, ArrowUp, Mail, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Smeagol03",
    icon: Github,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
    icon: Instagram,
  },
];

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Pendidikan", href: "#pendidikan" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
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
    <footer className="relative bg-transparent overflow-hidden pt-32 pb-16 border-t border-(--border-color)">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <div className="md:col-span-12 lg:col-span-6 space-y-12">
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold font-outfit tracking-tighter text-(--text-primary)">
                Alpian Tabrani
              </span>
            </div>

            <p className="text-(--text-secondary) font-inter leading-relaxed max-w-md text-lg">
              Precision-engineered digital solutions blending administrative
              expertise with modern web development.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-2 flex items-center justify-center group hover:bg-(--accent-blue) hover:text-white transition-all duration-500 rounded-sm"
                >
                  <link.icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-[10px] font-bold font-outfit tracking-[0.5em] text-(--text-muted) mb-10">
              System Map
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-(--text-muted) hover:text-(--accent-blue) transition-colors text-[10px] font-bold tracking-widest uppercase"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-[10px] font-bold font-outfit tracking-[0.5em] text-(--text-muted) mb-10">
              Connection
            </h3>
            <div className="space-y-6">
              <a href="mailto:atabrani3@gmail.com" className="group block">
                <span className="text-(--text-muted) text-[10px] font-bold tracking-widest block mb-2 group-hover:text-(--accent-blue)">
                  Email
                </span>
                <span className="text-(--text-primary) font-bold tracking-tighter group-hover:text-(--accent-blue)">
                  atabrani3@gmail.com
                </span>
              </a>
              <div className="group block cursor-default">
                <span className="text-(--text-muted) text-[10px] font-bold tracking-widest block mb-2">
                  Location
                </span>
                <span className="text-(--text-primary) font-bold tracking-tighter">
                  Lombok Timur, NTB — ID
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-(--border-color) flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-(--text-muted) opacity-50 tracking-[0.4em]">
            &copy; {currentYear} Alpian Tabrani.
          </p>
          <motion.a
            href="#"
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 text-(--text-muted) hover:text-(--text-primary) transition-colors group"
          >
            <span className="text-[10px] font-bold tracking-widest">
              Shift to Top
            </span>
            <div className="w-8 h-8 glass-2 flex items-center justify-center rounded-sm">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

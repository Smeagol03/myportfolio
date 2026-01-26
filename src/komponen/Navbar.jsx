import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import OffcanvasMenu from "./OffcanvasMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Pendidikan", href: "#pendidikan" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .filter(Boolean);

      let currentSection = "";
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(window.scrollY < 100 ? "" : currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-500 px-6 rounded-2xl ${
              scrolled
                ? "h-16 glass-effect shadow-2xl shadow-cyan-950/20"
                : "h-20 bg-transparent"
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-bold text-xl font-outfit">A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold font-outfit tracking-wider text-white">
                  ALPIAN
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-cyan-400">
                  Portfolio
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center bg-slate-800/20 backdrop-blur-sm p-1.5 rounded-xl border border-white/5 mr-4">
                {navLinks.map((link) => {
                  const isActive =
                    activeSection === link.href.replace("#", "") ||
                    (link.href === "#" && activeSection === "");
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="absolute inset-0 bg-white/10 rounded-lg"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all shadow-sm"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <OffcanvasMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;

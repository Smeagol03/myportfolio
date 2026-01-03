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
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .filter(Boolean);

      // Use spread to avoid mutating original array, then reverse to check from bottom to top
      let currentSection = "";
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (top is above threshold)
          if (rect.top <= 150) {
            currentSection = section;
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      } else {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call immediately to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400 tracking-tight">
                ALPIAN
              </span>
              <span className="text-xl md:text-2xl font-bold text-cyan-400 ml-1">
                .
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.replace("#", "") ||
                  (link.href === "#" && activeSection === "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {/* Hover/Active indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                        isActive ? "w-4" : "w-0 group-hover:w-4"
                      }`}
                    />
                  </a>
                );
              })}

              {/* CTA Button */}
              <a
                href="#contact"
                className="ml-4 px-5 py-2 text-sm font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Offcanvas Menu */}
      <OffcanvasMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;

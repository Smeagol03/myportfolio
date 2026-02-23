import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-500 px-6 rounded-2xl ${
              scrolled
                ? "h-16 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 shadow-sm"
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
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <span className="text-white group-hover:text-black font-bold text-xl font-outfit">
                  A
                </span>
              </div>
              <div className="flex flex-col leading-none ml-2">
                <span className="text-lg font-bold font-outfit tracking-wider text-white">
                  ALPIAN
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center space-x-1 mr-4 rounded-xl p-1">
                {navLinks.map((link) => {
                  const isActive =
                    activeSection === link.href.replace("#", "") ||
                    (link.href === "#" && activeSection === "");
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium transition-colors"
                    >
                      {isActive ? (
                        <span className="text-white relative z-10">
                          {link.name}
                        </span>
                      ) : (
                        <span className="text-zinc-400 hover:text-white transition-colors relative z-10">
                          {link.name}
                        </span>
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="absolute inset-0 bg-white/10 rounded-lg"
                          transition={{
                            type: "spring",
                            bounce: 0.1,
                            duration: 0.4,
                          }}
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 text-sm font-semibold text-zinc-950 bg-white rounded-xl hover:bg-zinc-200 transition-colors"
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
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

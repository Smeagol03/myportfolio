import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OffcanvasMenu from "./OffcanvasMenu";
import { useTheme } from "../context/useTheme";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Layanan", href: "#layanan" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .filter(Boolean);

      const elements = sections
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, top: el.getBoundingClientRect().top } : null;
        })
        .filter(Boolean);

      // Urutkan elemen berdasarkan posisinya di halaman saat ini
      elements.sort((a, b) => a.top - b.top);

      let currentSection = "";

      // Ambil titik trigger dinamis: 40% dari tinggi layar
      // Ini lebih akurat dan responsif dibanding angka statis (seperti 150px)
      const triggerPoint = window.innerHeight * 0.4;

      for (const el of [...elements].reverse()) {
        if (el.top <= triggerPoint) {
          currentSection = el.id;
          break;
        }
      }

      // Deteksi jika pengguna sudah melakukan scroll sampai ke paling bawah halaman
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 50
      ) {
        if (elements.length > 0) {
          currentSection = elements[elements.length - 1].id;
        }
      }

      // Jika masih ada di Hero section (Paling Atas)
      setActiveSection(
        window.scrollY < window.innerHeight * 0.2 ? "" : currentSection,
      );
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
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${
          scrolled ? "w-[90%] md:w-[75%] max-w-4xl" : "w-auto min-w-[120px]"
        }`}
      >
        {/* Floating Island Container */}
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.8,
          }}
          className={`
          relative rounded-full overflow-hidden
          backdrop-blur-xl backdrop-saturate-180
          bg-(--bg-primary)/95
          border border-(--border-color)/30
          shadow-lg
        `}
        >
          <div className="relative px-6">
            <div className="flex justify-between items-center h-12 md:h-14 gap-8">
              {/* Logo - Ultra Minimal */}
              <motion.a
                href="#"
                layout
                whileHover={{ scale: 1.05 }}
                className="flex items-center group shrink-0 relative"
              >
                <span className="text-sm font-bold text-(--text-primary) tracking-tighter">
                  ALPIAN
                </span>
              </motion.a>

              {/* Desktop Navigation - Adaptive Pill Dock */}
              <AnimatePresence mode="wait">
                {scrolled && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="hidden md:flex items-center overflow-hidden"
                  >
                    <nav className="flex items-center gap-1">
                      {navLinks.map((link) => {
                        const isActive =
                          activeSection === link.href.replace("#", "") ||
                          (link.href === "#" && activeSection === "");
                        return (
                          <motion.a
                            key={link.name}
                            href={link.href}
                            className="relative px-3 py-1 text-[9px] font-bold uppercase tracking-widest"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {isActive ? (
                              <>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-(--text-primary)" />
                                <span className="text-(--text-primary)">
                                  {link.name}
                                </span>
                              </>
                            ) : (
                              <motion.span
                                className="text-(--text-muted)"
                                whileHover={{ color: "var(--text-primary)" }}
                                transition={{ duration: 0.2 }}
                              >
                                {link.name}
                              </motion.span>
                            )}
                          </motion.a>
                        );
                      })}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Right Side Actions */}
              <motion.div
                layout
                className="flex items-center gap-4 shrink-0 relative"
              >
                <motion.button
                  onClick={toggleTheme}
                  className="text-(--text-muted) hover:text-(--text-primary) transition-colors"
                  aria-label="Toggle theme"
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                </motion.button>

                <motion.a
                  href="#contact"
                  className="hidden sm:block text-[9px] font-black uppercase tracking-[0.2em] text-(--text-primary)"
                  whileHover={{ scale: 1.05, textDecoration: "underline" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire
                </motion.a>

                <motion.button
                  onClick={() => setIsOpen(true)}
                  className="text-(--text-primary) md:hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, rotate: 90 }}
                >
                  <Menu size={18} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
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

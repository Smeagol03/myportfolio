import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OffcanvasMenu from "./OffcanvasMenu";
import { useTheme } from "../../context/useTheme";
import { navLinks } from "../../data/navigation";

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

      elements.sort((a, b) => a.top - b.top);

      let currentSection = "";

      const triggerPoint = window.innerHeight * 0.4;

      for (const el of [...elements].reverse()) {
        if (el.top <= triggerPoint) {
          currentSection = el.id;
          break;
        }
      }

      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 50
      ) {
        if (elements.length > 0) {
          currentSection = elements[elements.length - 1].id;
        }
      }

      setActiveSection(
        currentSection || (window.scrollY < window.innerHeight * 0.2 ? "" : ""),
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = navLinks.filter(
    (link) => !["Blog"].includes(link.name) && link.href.startsWith("#"),
  );

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
          scrolled ? "w-[95%] md:w-[85%] max-w-5xl" : "w-auto min-w-[120px]"
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
          <div className="relative px-4 md:px-6">
            <div className="flex justify-between items-center h-12 md:h-14 gap-4 md:gap-8">
              {/* Logo - Ultra Minimal */}
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center group shrink-0 relative"
              >
                <span className="text-sm font-bold text-(--text-primary) tracking-tighter">
                  ALPIAN
                </span>
              </Link>

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
                    className="hidden lg:flex items-center overflow-hidden"
                  >
                    <nav className="flex items-center gap-1">
                      {mainNavLinks.map((link) => {
                        const isHome = link.href === "#";
                        const isActive = isHome
                          ? activeSection === "" || activeSection === "home"
                          : activeSection === link.href.replace("#", "");

                        const isExternal = link.href.startsWith("/") && !link.href.startsWith("/#");

                        return (
                          <motion.div
                            key={link.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-3 py-1 text-[9px] font-bold uppercase tracking-widest cursor-pointer"
                          >
                            {isExternal ? (
                              <Link
                                to={link.href}
                                className={
                                  isActive
                                    ? "text-(--text-primary)"
                                    : "text-(--text-muted) hover:text-(--text-primary)"
                                }
                              >
                                {isActive && (
                                  <motion.span
                                    layoutId="nav-underline"
                                    className="absolute inset-x-0 bottom-0 h-0.5 bg-(--text-primary)"
                                  />
                                )}
                                {link.name}
                              </Link>
                            ) : (
                              <a
                                href={link.href}
                                className={
                                  isActive
                                    ? "text-(--text-primary)"
                                    : "text-(--text-muted) hover:text-(--text-primary)"
                                }
                              >
                                {isActive && (
                                  <motion.span
                                    layoutId="nav-underline"
                                    className="absolute inset-x-0 bottom-0 h-0.5 bg-(--text-primary)"
                                  />
                                )}
                                {link.name}
                              </a>
                            )}
                          </motion.div>
                        );
                      })}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Right Side Actions */}
              <motion.div
                layout
                className="flex items-center gap-2 md:gap-4 shrink-0 relative"
              >
                <div className="hidden md:flex items-center gap-2 mr-2">
                  <Link
                    to="/layanan"
                    className="px-4 py-1.5 rounded-full border border-(--border-color) text-[10px] font-bold uppercase tracking-wider text-(--text-secondary) hover:text-(--text-primary) hover:border-(--text-primary) transition-all"
                  >
                    Layanan
                  </Link>
                  <Link
                    to="/blog"
                    className="px-4 py-1.5 rounded-full bg-(--text-primary) text-(--bg-primary) text-[10px] font-black uppercase tracking-wider hover:opacity-90 transition-all shadow-md shadow-black/10"
                  >
                    Blog
                  </Link>
                </div>

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
                  className="text-(--text-primary) lg:hidden"
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

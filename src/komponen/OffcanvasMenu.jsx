import { X } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OffcanvasMenu = ({ isOpen, setIsOpen, navLinks }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 },
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-(--bg-primary) border-l border-(--border-color) shadow-2xl z-50 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-(--border-color)">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-(--accent-blue) flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-outfit">
                    A
                  </span>
                </div>
                <span className="text-lg font-bold font-outfit tracking-wider text-(--text-primary)">
                  ALPIAN
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-(--text-muted) hover:text-(--accent-blue) hover:bg-(--bg-secondary) transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 px-4 py-8 overflow-y-auto">
              <ul className="space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center justify-between px-5 py-4 rounded-xl text-(--text-secondary) hover:text-(--accent-blue) hover:bg-(--bg-secondary) transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium tracking-wide">
                        {link.name}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-(--border-color) group-hover:bg-(--accent-blue) transition-colors" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="p-6 mt-auto border-t border-(--border-color)">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-4 text-base font-bold text-(--bg-primary) bg-(--text-primary) hover:opacity-90 rounded-xl transition-all mb-4 shadow-lg shadow-blue-500/10"
              >
                Hire Me
              </a>
              <p className="text-center text-(--text-muted) text-xs font-medium uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} Alpian Tabrani
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OffcanvasMenu;

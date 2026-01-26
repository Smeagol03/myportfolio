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
    closed: { x: "100%" }, // Slide from right for better UX
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
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Offcanvas Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-slate-950 border-l border-white/5 shadow-2xl z-50 md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <span className="text-white font-bold text-sm font-outfit">A</span>
                </div>
                <span className="text-lg font-bold font-outfit tracking-wider text-white">
                  ALPIAN
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-8 overflow-y-auto">
              <ul className="space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: idx * 0.05 + 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center justify-between px-5 py-4 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-outfit text-lg font-medium tracking-wide">
                        {link.name}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors shadow-[0_0_8px_rgba(34,211,238,0)] group-hover:shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer / CTA */}
            <div className="p-6 mt-auto">
              <div className="p-1 rounded-2xl bg-linear-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/10 mb-6">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-4 py-4 text-base font-bold text-white bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all"
                >
                  Hire Me
                </a>
              </div>
              <p className="text-center text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">
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

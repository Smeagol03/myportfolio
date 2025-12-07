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
    closed: { x: "-100%" },
    open: { x: 0 },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Offcanvas Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-72 bg-slate-900 border-r border-slate-800 shadow-2xl z-50 md:hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-slate-800">
              <a
                href="#"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400">
                  ALPIAN
                </span>
                <span className="text-xl font-bold text-cyan-400 ml-1">.</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-all"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4">
              <ul className="space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="px-4 mt-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OffcanvasMenu;

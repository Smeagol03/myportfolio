import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, ArrowUp, Heart, BookOpen } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Smeagol03",
    icon: <Github className="w-5 h-5" />,
    color: "hover:text-purple-400",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/npc_alpiant?igsh=ZjZrNjV5dHU3bzh6",
    icon: <Instagram className="w-5 h-5" />,
    color: "hover:text-blue-400",
  },
];

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Pendidikan", href: "#education" },
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
    <footer className="relative bg-slate-900 border-t border-slate-800 text-slate-300 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              onClick={scrollToTop}
              className="inline-block text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400 font-display tracking-tight"
            >
              ALPIAN TABRANI
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Saya membuat pengalaman digital yang menarik dan berfungsi. Fokus
              saya adalah mengembangkan web yang responsif dan cepat.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-indigo-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Action Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Tertarik Kolaborasi?
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Mari bicarakan ide proyek Anda dan ciptakan sesuatu yang luar
              biasa bersama.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white transition-all duration-200 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900"
            >
              Mulai Diskusi
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-slate-700 to-transparent my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p className="flex items-center gap-1">
            &copy; {currentYear} Alpian Tabrani. Built with
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            using React & Tailwind.
          </p>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-slate-600 hover:bg-slate-750 text-slate-300 transition-all text-xs font-medium"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

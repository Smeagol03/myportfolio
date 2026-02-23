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
    <footer className="relative bg-(--bg-primary) overflow-hidden pt-20 pb-10 border-t border-(--border-color) transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="md:col-span-12 lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-2xl font-outfit">
                  A
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black font-outfit tracking-wider text-(--text-primary)">
                  ALPIAN TABRANI
                </span>
              </div>
            </div>

            <p className="text-(--text-secondary) font-light leading-relaxed max-w-md text-lg">
              Membangun efisiensi melalui solusi digital kreatif. Berfokus pada
              manajemen data dan pengembangan web modern.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-(--bg-secondary) border-(--border-color) flex items-center justify-center group transition-colors hover:bg-blue-600 dark:hover:bg-zinc-800"
                >
                  <link.icon className="w-5 h-5 text-(--text-muted) group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-(--text-muted)-bold font-outfit uppercase tracking-widest text-sm mb-8">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Home",
                "About",
                "Pendidikan",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    className="text-(--text-secondary) hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="text-(--text-muted) font-bold font-outfit uppercase tracking-widest text-sm mb-8">
              Quick Connect
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:atabrani3@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-(--bg-secondary) border-(--border-color) flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-zinc-800 transition-colors">
                  <Mail className="w-4 h-4 text-(--text-muted) group-hover:text-white" />
                </div>
                <span className="text-(--text-secondary) font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                  atabrani3@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-(--bg-secondary) border-(--border-color) flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-(--text-muted)" />
                </div>
                <span className="text-(--text-secondary) font-medium text-sm">
                  Lombok Timur, NTB - ID
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-(--border-color) flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.a
            href="#"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-(--text-muted) hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              Back to Top
            </span>
            <ArrowUp className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

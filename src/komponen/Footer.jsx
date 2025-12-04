import React from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.88-.013-1.724-2.782.605-3.374-1.341-3.374-1.341-.454-1.157-1.107-1.465-1.107-1.465-.905-.619.068-.607.068-.607 1.002.071 1.531 1.032 1.531 1.032.891 1.529 2.341 1.087 2.91.83.091-.645.352-1.087.643-1.333-2.228-.252-4.566-1.114-4.566-4.938 0-1.091.39-1.984 1.029-2.688-.103-.252-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.023A9.57 9.57 0 0112 6.844c.85.004 1.7.11 2.502.329 1.909-1.293 2.748-1.023 2.748-1.023.546 1.378.202 2.398.099 2.65.64.704 1.028 1.597 1.028 2.688 0 3.834-2.333 4.68-4.574 4.931.359.309.678.92.678 1.855 0 1.333-.012 2.41-.012 2.73 0 .267.18.583.688.484C19.138 20.2 22 16.444 22 12.017 22 6.484 17.523 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zM4.5 8H.5v16h4V8zm7.5 0H8v16h4v-7.2c0-4 1.6-4 4.5 0v7.2h4V12.8c0-5.4-3.56-6.8-6-6.8-2.5 0-4 1.2-4 3.2v3.6z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/yourhandle",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.684l-8.026 9.389L24 22.846h-6.726l-5.694-7.468L6.4 22.846H.322l8.286-9.69L0 1.153h7.042l4.8 6.27L18.901 1.153zm-2.183 18.006h2.464L6.96 4.986H4.354l12.364 14.173z" />
      </svg>
    ),
  },
];

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Pendidikan", href: "#pendidikan" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const nama = "ALPIAN TABRANI";

// Pastikan socialLinks, navLinks dan import React ada di bagian atas file
// ... (socialLinks, navLinks arrays and import React)

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-400 border-t border-slate-700">
      <div className="container mx-auto px-6 md:px-12 py-10">
        {/* --- Top Section: Logo, Navigation, Social --- */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* 1. Logo/Branding (Tautan ke atas) */}
          <a
            href="#"
            className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
          >
            {nama}
          </a>

          {/* 2. Quick Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* 3. Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          {/* Copyright */}
          <p className="text-sm">
            &copy; {currentYear} {nama}. All rights reserved.
          </p>

          {/* Credit (Opsi Tambahan) */}
          <p className="text-xs mt-2 text-slate-500">
            Built with <span className="text-indigo-400">React</span> &{" "}
            <span className="text-indigo-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Menu } from "lucide-react";
import OffcanvasMenu from "./OffcanvasMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Pendidikan", href: "#pendidikan" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0">
              <a
                href="#"
                className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                AlPIAN TABRANI
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex space-x-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

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

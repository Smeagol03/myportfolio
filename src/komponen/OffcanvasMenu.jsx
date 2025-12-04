import { X } from "lucide-react";
import { useEffect } from "react";

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

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-2 py-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default OffcanvasMenu;

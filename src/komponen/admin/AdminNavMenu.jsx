import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AdminNavMenu = ({ items, mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation();

  return (
    <nav className="flex-1 p-2 sm:p-4 space-y-1 overflow-y-auto">
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all ${
              isActive
                ? "bg-(--accent-blue)/10 text-(--accent-blue) border border-(--accent-blue)/20"
                : "text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-secondary)"
            }`}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <span className="truncate">{item.name}</span>
            {isActive && (
              <ChevronRight className="w-4 h-4 ml-auto shrink-0" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default AdminNavMenu;

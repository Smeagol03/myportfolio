import { Link } from "react-router-dom";
import { X } from "lucide-react";

const AdminSidebarHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div className="h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6 border-b border-(--border-color)">
      <Link
        to="/admin/dashboard"
        className="text-base sm:text-lg font-outfit font-bold text-(--text-primary) uppercase tracking-tighter"
      >
        <span className="hidden sm:inline">Admin Panel</span>
        <span className="sm:hidden">Admin</span>
      </Link>
      <button
        onClick={() => setMobileMenuOpen(false)}
        className="lg:hidden p-2 -mr-2 text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-secondary) rounded-lg transition-colors"
        aria-label="Close menu"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default AdminSidebarHeader;

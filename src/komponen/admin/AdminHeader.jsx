import { Menu } from "lucide-react";

const AdminHeader = ({ onMenuClick }) => {
  return (
    <header className="h-14 sm:h-16 bg-(--bg-primary) border-b border-(--border-color) flex items-center justify-between px-3 sm:px-4 lg:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-secondary) rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--text-muted) hover:text-(--text-primary) transition-colors"
        >
          View Site →
        </a>
      </div>
    </header>
  );
};

export default AdminHeader;

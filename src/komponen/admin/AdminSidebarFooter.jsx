import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminSidebarFooter = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="p-2 sm:p-4 border-t border-(--border-color)">
      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all"
      >
        <LogOut className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline">Keluar</span>
        <span className="sm:hidden">Keluar</span>
      </button>
    </div>
  );
};

export default AdminSidebarFooter;

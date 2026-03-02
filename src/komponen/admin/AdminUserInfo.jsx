import { useAuth } from "../../context/AuthContext";

const AdminUserInfo = () => {
  const { user } = useAuth();

  return (
    <div className="p-3 sm:p-4 border-b border-(--border-color)">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-(--accent-blue) flex items-center justify-center shrink-0">
          <span className="text-(--bg-primary) font-bold text-sm">
            {user?.email?.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-(--text-primary) truncate">
            Admin
          </p>
          <p className="text-xs text-(--text-muted) truncate hidden sm:block">
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminUserInfo;

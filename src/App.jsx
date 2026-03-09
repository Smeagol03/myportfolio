import { Routes, Route } from "react-router-dom";

// Layout
import PublicLayout from "./komponen/layout/PublicLayout";
import AdminLayout from "./komponen/admin/AdminLayout";
import ProtectedRoute from "./komponen/admin/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import Checkout from "./pages/Checkout";
import BlogList from "./pages/blog/BlogList";
import BlogDetail from "./pages/blog/BlogDetail";

// Admin Pages
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import BlogManager from "./pages/admin/BlogManager";
import BlogEditor from "./pages/admin/BlogEditor";

const App = () => {
  return (
    <Routes>
      {/* Public Routes — Navbar & Footer otomatis dari PublicLayout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/checkout/:paket" element={<Checkout />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Route>

      {/* Admin Routes (tanpa Navbar/Footer) */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="blog" element={<BlogManager />} />
        <Route path="blog/new" element={<BlogEditor />} />
        <Route path="blog/edit/:id" element={<BlogEditor />} />
      </Route>
    </Routes>
  );
};

export default App;

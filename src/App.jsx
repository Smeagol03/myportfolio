import Navbar from "./komponen/Navbar";
import Hero from "./komponen/Hero";
import About from "./komponen/About";
import Pendidikan from "./komponen/Pendidikan";
import Skills from "./komponen/Skills";
import Projects from "./komponen/Projects";
import Experience from "./komponen/Experience";
import Layanan from "./komponen/layanan";
import Contact from "./komponen/Contact";
import Footer from "./komponen/Footer";
import BlogSection from "./komponen/blog/BlogSection";

import { Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./komponen/Checkout";
import ScrollToTop from "./komponen/ScrollToTop";

// Admin imports
import AdminLogin from "./komponen/admin/AdminLogin";
import AdminLayout from "./komponen/admin/AdminLayout";
import Dashboard from "./komponen/admin/Dashboard";
import BlogManager from "./komponen/admin/BlogManager";
import BlogEditor from "./komponen/admin/BlogEditor";
import ProtectedRoute from "./komponen/admin/ProtectedRoute";

// Blog imports
import BlogList from "./komponen/blog/BlogList";
import BlogDetail from "./komponen/blog/BlogDetail";

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Layanan />
      <Pendidikan />
      <Skills />
      <Projects />
      <Experience />
      <BlogSection />
      <Contact />
    </main>
  </>
);

const AppContent = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="relative">
      <ScrollToTop />
      <Routes>
        {/* Public Routes with Footer */}
        <Route path="/" element={<Home />} />
        <Route path="/checkout/:paket" element={<Checkout />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />

        {/* Admin Routes (no Footer) */}
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
      {/* Footer only on non-admin pages */}
      {!isAdminPage && <Footer />}
    </div>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;

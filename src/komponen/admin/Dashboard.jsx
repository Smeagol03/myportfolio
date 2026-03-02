import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Eye, TrendingUp, Clock, PlusCircle, Edit2, Trash2 } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalViews: 0,
  });
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch all posts
      const { data: posts, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Calculate stats
      const totalPosts = posts?.length || 0;
      const publishedPosts = posts?.filter((p) => p.status === "published").length || 0;
      const draftPosts = posts?.filter((p) => p.status === "draft").length || 0;
      const totalViews = posts?.reduce((sum, p) => sum + (p.view_count || 0), 0) || 0;

      setStats({ totalPosts, publishedPosts, draftPosts, totalViews });
      setRecentPosts(posts?.slice(0, 5) || []);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus blog ini?")) return;

    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;

      setRecentPosts(recentPosts.filter((p) => p.id !== id));
      setStats((prev) => ({ ...prev, totalPosts: prev.totalPosts - 1 }));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Gagal menghapus blog");
    }
  };

  const statCards = [
    {
      title: "Total Blog",
      value: stats.totalPosts,
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Published",
      value: stats.publishedPosts,
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Drafts",
      value: stats.draftPosts,
      icon: Clock,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Total Views",
      value: stats.totalViews.toLocaleString(),
      icon: Eye,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-(--text-muted)">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-outfit font-bold text-(--text-primary) uppercase tracking-tighter">
            Dashboard
          </h1>
          <p className="text-(--text-muted) mt-1">
            Selamat datang, {user?.email}
          </p>
        </div>
        <Link
          to="/admin/blog/new"
          className="flex items-center gap-2 px-6 py-3 bg-(--text-primary) text-(--bg-primary) font-bold uppercase text-xs tracking-widest rounded-lg hover:opacity-90 transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          Tulis Blog
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-2 rounded-lg p-6 border border-(--border-color)"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <p className="text-3xl font-outfit font-bold text-(--text-primary)">
              {stat.value}
            </p>
            <p className="text-(--text-muted) text-sm mt-1">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="glass-2 rounded-lg border border-(--border-color)">
        <div className="p-6 border-b border-(--border-color)">
          <h2 className="text-xl font-outfit font-bold text-(--text-primary) uppercase tracking-tighter">
            Blog Terbaru
          </h2>
        </div>
        <div className="divide-y divide-(--border-color)">
          {recentPosts.length === 0 ? (
            <div className="p-8 text-center text-(--text-muted)">
              Belum ada blog.{" "}
              <Link to="/admin/blog/new" className="text-(--accent-blue) hover:underline">
                Tulis blog pertama Anda
              </Link>
            </div>
          ) : (
            recentPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 flex items-center gap-4 hover:bg-(--bg-secondary) transition-all"
              >
                {/* Thumbnail */}
                <div className="w-20 h-14 rounded overflow-hidden shrink-0 bg-(--bg-secondary)">
                  {post.cover_image ? (
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-(--text-muted)" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-(--text-primary) font-medium truncate">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        post.status === "published"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {post.status}
                    </span>
                    <span className="text-xs text-(--text-muted)">
                      {new Date(post.created_at).toLocaleDateString("id-ID")}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    to={`/admin/blog/edit/${post.id}`}
                    className="p-2 text-(--text-muted) hover:text-(--accent-blue) transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 text-(--text-muted) hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

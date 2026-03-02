import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlusCircle, Edit2, Trash2, Search, Filter } from "lucide-react";
import { supabase } from "../../lib/supabase";

const BlogManager = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus blog ini?")) return;

    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;

      setPosts(posts.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Gagal menghapus blog");
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || post.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-outfit font-bold text-(--text-primary) uppercase tracking-tighter">
            Kelola Blog
          </h1>
          <p className="text-(--text-muted) mt-1">
            {posts.length} blog ditemukan
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

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-muted)" />
          <input
            type="text"
            placeholder="Cari blog..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-(--bg-primary) border border-(--border-color) rounded-lg text-(--text-primary) placeholder-(--text-muted) focus:outline-none focus:border-(--accent-blue) transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-(--text-muted)" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 bg-(--bg-primary) border border-(--border-color) rounded-lg text-(--text-primary) focus:outline-none focus:border-(--accent-blue) transition-all"
          >
            <option value="all">Semua Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Posts Table */}
      <div className="glass-2 rounded-lg border border-(--border-color) overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-64 text-(--text-muted)">
            Loading...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-(--text-muted)">
            {searchTerm || filterStatus !== "all"
              ? "Tidak ada blog yang cocok"
              : "Belum ada blog. Mulai tulis blog pertama Anda!"}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-(--bg-primary) border-b border-(--border-color)">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-(--text-muted)">
                    Blog
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-(--text-muted) hidden md:table-cell">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-(--text-muted) hidden lg:table-cell">
                    Views
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-(--text-muted) hidden sm:table-cell">
                    Tanggal
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-bold uppercase tracking-widest text-(--text-muted)">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--border-color)">
                {filteredPosts.map((post) => (
                  <motion.tr
                    key={post.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-(--bg-secondary) transition-all"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 rounded overflow-hidden shrink-0 bg-(--bg-secondary)">
                          {post.cover_image ? (
                            <img
                              src={post.cover_image}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-(--text-muted) text-xs">No img</span>
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-(--text-primary) font-medium truncate max-w-xs">
                            {post.title}
                          </p>
                          <p className="text-(--text-muted) text-sm truncate max-w-xs">
                            {post.excerpt || "Tidak ada deskripsi"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          post.status === "published"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-(--text-muted) hidden lg:table-cell">
                      {post.view_count?.toLocaleString() || 0}
                    </td>
                    <td className="px-6 py-4 text-(--text-muted) text-sm hidden sm:table-cell">
                      {new Date(post.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
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
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogManager;

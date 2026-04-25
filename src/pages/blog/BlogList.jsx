import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { supabase } from "../../lib/supabase";
import BlogCard from "../../komponen/ui/BlogCard";
import SEO from "../../komponen/ui/SEO";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("status", "published")
        .order("is_pinned", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPost = filteredPosts.find((p) => p.is_pinned) || filteredPosts[0];
  const regularPosts = featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  return (
    <div className="min-h-screen bg-(--bg-primary)">
      <SEO 
        title="Blog & Articles - Alpian"
        description="Artikel tentang web development, tips teknologi, dan insights dari pengalaman membangun aplikasi modern oleh Alpian."
        url={window.location.href}
        keywords="Blog Web Development Lombok, Tutorial React Indonesia, Tips Programming Lombok, Blog Teknologi Lombok, Artikel Coding Indonesia"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-blue-500/50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-(--text-muted)">
                Blog & Articles
              </span>
              <div className="h-px w-12 bg-blue-500/50" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-bold text-(--text-primary) uppercase tracking-tighter mb-6">
              Blog<span className="text-(--text-muted)">.</span>
            </h1>
            <p className="text-(--text-secondary) text-lg md:text-xl max-w-2xl mx-auto">
              Artikel tentang web development, tips teknologi, dan insights dari pengalaman membangun aplikasi modern.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-muted)" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-(--bg-secondary) border border-(--border-color) rounded-lg text-(--text-primary) placeholder-(--text-muted) focus:outline-none focus:border-(--accent-blue) transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !searchTerm && (
        <section className="py-12 px-6 border-t border-(--border-color)">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BlogCard post={featuredPost} featured />
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 px-6 border-t border-(--border-color)">
        <div className="container mx-auto max-w-7xl">
          {loading ? (
            <div className="flex items-center justify-center h-64 text-(--text-muted)">
              Loading...
            </div>
          ) : posts.length === 0 && !searchTerm ? (
            <div className="text-center py-20 text-(--text-muted)">
              <p>Belum ada artikel yang dipublikasikan.</p>
            </div>
          ) : filteredPosts.length === 0 && searchTerm ? (
            <div className="text-center py-20 text-(--text-muted)">
              <p>Tidak ditemukan artikel yang cocok dengan "{searchTerm}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(searchTerm ? filteredPosts : regularPosts).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default BlogList;

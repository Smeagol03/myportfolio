import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { supabase } from "../../lib/supabase";
import BlogCard from "../ui/BlogCard";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Get pinned posts first, then latest posts, total 4
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("status", "published")
        .order("is_pinned", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(4);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blog" className="py-32 relative border-t border-white/5 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-blue-500/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-(--text-muted)">
              Latest Articles
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <h2 className="text-4xl md:text-7xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.8]">
              Blog<span className="text-(--text-muted)">.</span>
            </h2>

            <Link
              to="/blog"
              className="text-xs font-bold uppercase tracking-widest text-(--text-muted) hover:text-(--text-primary) flex items-center gap-2 transition-colors duration-500 group"
            >
              Lihat Semua Artikel
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center h-64 text-(--text-muted)">
            Loading...
          </div>
        )}

        {/* Empty State */}
        {!loading && posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-20 glass-2 rounded-lg border border-(--border-color)"
          >
            <div className="text-(--text-muted) mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-lg font-medium mb-2">Belum ada artikel</p>
              <p className="text-sm">Artikel blog akan muncul di sini setelah dipublikasikan.</p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-(--text-primary) text-(--bg-primary) font-bold uppercase text-xs tracking-widest rounded-lg hover:opacity-90 transition-all mt-4"
            >
              Lihat Blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}

        {/* Blog Grid - Show when posts exist */}
        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.slice(0, 4).map((post, index) => (
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
  );
};

export default BlogSection;

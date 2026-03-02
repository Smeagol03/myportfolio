import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Eye, Share2, Tag } from "lucide-react";
import { supabase } from "../../lib/supabase";
import Navbar from "../Navbar";
import Footer from "../Footer";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      // Fetch post by slug
      const { data: postData, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

      if (error) throw error;
      if (!postData) {
        navigate("/blog");
        return;
      }

      setPost(postData);

      // Increment view count
      await supabase
        .from("posts")
        .update({ view_count: (postData.view_count || 0) + 1 })
        .eq("id", postData.id);

      // Fetch related posts
      const { data: related } = await supabase
        .from("posts")
        .select("*")
        .eq("status", "published")
        .neq("id", postData.id)
        .order("is_pinned", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(3);

      setRelatedPosts(related || []);
    } catch (error) {
      console.error("Error fetching post:", error);
      navigate("/blog");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link disalin ke clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-(--bg-primary)">
        <Navbar />
        <div className="flex items-center justify-center h-screen text-(--text-muted)">
          Loading...
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-(--bg-primary)">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-(--text-muted) hover:text-(--text-primary) transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">Kembali</span>
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Meta */}
            <div className="flex items-center gap-6 mb-6 text-sm text-(--text-muted)">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.created_at)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.read_time || 5} min baca
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {post.view_count?.toLocaleString() || 0} views
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-(--text-primary) uppercase tracking-tighter mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-(--text-secondary) mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-4 pb-8 border-b border-(--border-color)">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-(--bg-secondary) border border-(--border-color) rounded-lg text-(--text-primary) hover:border-(--accent-blue) transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-widest">Share</span>
              </button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Cover Image */}
      {post.cover_image && (
        <section className="px-6 mb-16">
          <div className="container mx-auto max-w-4xl">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              src={post.cover_image}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-lg glass-2"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 pb-20 border-t border-(--border-color)">
          <div className="container mx-auto max-w-6xl py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-outfit font-bold text-(--text-primary) uppercase tracking-tighter mb-8">
                Artikel Terkait
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                    <article className="group glass-2 rounded-lg overflow-hidden border border-(--border-color) hover:border-(--accent-blue)/50 transition-all duration-500">
                      <div className="aspect-video overflow-hidden">
                        {relatedPost.cover_image ? (
                          <img
                            src={relatedPost.cover_image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-outfit font-bold text-(--text-primary) uppercase tracking-tighter line-clamp-2 group-hover:text-(--accent-blue) transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-(--text-secondary) text-sm line-clamp-2 mt-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogDetail;

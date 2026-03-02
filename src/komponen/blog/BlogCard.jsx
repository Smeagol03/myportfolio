import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogCard = ({ post, featured = false }) => {
  const { title, slug, excerpt, cover_image, created_at, read_time } = post;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative glass-2 rounded-lg overflow-hidden border border-(--border-color) hover:border-(--accent-blue)/50 transition-all duration-500"
      >
        <Link to={`/blog/${slug}`} className="block">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            {cover_image ? (
              <img
                src={cover_image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-(--text-muted)">No Cover</span>
              </div>
            )}
            <div className="absolute inset-0 bg-linear-to-t from-(--bg-primary) via-transparent to-transparent opacity-60" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-white border-black border-t-2">
            <div className="flex items-center gap-4 mb-3 text-xs text-(--text-muted)">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(created_at)}
              </span>
              {read_time && (
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {read_time} min
                </span>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-outfit font-bold text-(--text-primary) uppercase tracking-tighter mb-2 group-hover:text-(--accent-blue) transition-colors">
              {title}
            </h2>
            <p className="text-(--text-secondary) line-clamp-2 mb-4">{excerpt}</p>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--accent-blue)">
              Baca Selengkapnya <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group glass-2 rounded-lg overflow-hidden border border-(--border-color) hover:border-(--accent-blue)/50 transition-all duration-500 flex flex-col"
    >
      <Link to={`/blog/${slug}`} className="flex flex-col flex-1">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          {cover_image ? (
            <img
              src={cover_image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-blue-500/20 to-purple-500/20" />
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3 text-xs text-(--text-muted)">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(created_at)}
            </span>
            {read_time && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {read_time} min
              </span>
            )}
          </div>
          <h3 className="text-lg font-outfit font-bold text-(--text-primary) uppercase tracking-tighter mb-2 line-clamp-2 group-hover:text-(--accent-blue) transition-colors">
            {title}
          </h3>
          <p className="text-(--text-secondary) text-sm line-clamp-2 mb-4 flex-1">{excerpt}</p>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--accent-blue)">
            Baca <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;

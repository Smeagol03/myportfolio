import { motion } from "framer-motion";
import { useState } from "react";

const SwipeCard = ({ defaultImage, hoverImage, alt, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative z-10 aspect-4/5 rounded-sm border border-white/10 shadow-2xl bg-gray-900 overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Default Image */}
      <motion.img
        src={defaultImage}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover rounded-sm"
        initial={{ x: 0 }}
        animate={{ x: isHovered ? "-100%" : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Hover Image */}
      <motion.img
        src={hoverImage}
        alt={`${alt} Hover`}
        className="absolute inset-0 w-full h-full object-cover rounded-sm"
        initial={{ x: "100%" }}
        animate={{ x: isHovered ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Optional overlay effect */}
      <motion.div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-sm"
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
  );
};

export default SwipeCard;

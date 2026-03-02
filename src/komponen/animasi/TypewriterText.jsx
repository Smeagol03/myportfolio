import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypewriterText = ({ text, className = "", delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        if (index > text.length) {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1em] bg-(--accent-blue) ml-1 align-middle"
      />
    </motion.span>
  );
};

export default TypewriterText;

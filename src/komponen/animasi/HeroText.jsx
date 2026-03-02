import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroText = ({ text, className = "" }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateX: -90,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-1"
      variants={containerVariants}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="flex whitespace-nowrap"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              variants={childVariants}
              className={`inline-block ${className}`}
              style={{
                transformOrigin: "bottom center",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="w-3 md:w-5">&nbsp;</span>
          )}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HeroText;

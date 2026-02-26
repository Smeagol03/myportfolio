import { motion } from "framer-motion";

/**
 * A reusable component to animate text character by character (staggered reveal).
 *
 * @param {string} text - The text string to animate.
 * @param {number} delay - Base delay before animation starts.
 * @param {number} staggerDelay - Delay between each letter appearing.
 * @param {string} className - Classes to apply to the wrapping span of each character.
 */
const StaggerText = ({
  text = "",
  delay = 0,
  staggerDelay = 0.03,
  className = "",
}) => {
  const words = text.split(" ");
  let charIndex = 0; // Keep track of global char index for smooth staggering

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className="inline-flex flex-wrap"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {word.split("").map((char) => {
            const index = charIndex++;
            return (
              <motion.span
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                className={`inline-block ${className}`}
              >
                {char}
              </motion.span>
            );
          })}
          {/* Add space after words, except the last one */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block w-[0.25em]">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.div>
  );
};

export default StaggerText;

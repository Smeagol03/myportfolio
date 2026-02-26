import { motion } from "framer-motion";

/**
 * A reusable wrapper component that applies a fade-in animation as it scrolls into view.
 *
 * @param {React.ReactNode} children - The content to animate.
 * @param {number} delay - Animation delay in seconds.
 * @param {'up' | 'down' | 'left' | 'right' | 'none'} direction - Direction the element moves in from.
 * @param {number} duration - Animation duration in seconds.
 * @param {string} className - Optional tailwind classes.
 * @param {boolean} once - Whether it should only animate once when scrolled into view.
 */
const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
  once = true,
  ...props
}) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Smooth custom easing (Swiss style)
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

# Framer Motion

Framer Motion is a production-ready motion library for React that powers animations in Framer. It provides a declarative API for creating animations, gestures, and layout transitions with minimal code. The library supports spring and tween animations, drag gestures, scroll-linked animations, and exit animations through the AnimatePresence component.

The core of Framer Motion revolves around the `motion` component - a drop-in replacement for any HTML or SVG element that accepts animation props like `animate`, `initial`, `exit`, `whileHover`, `whileTap`, and `drag`. Motion values provide fine-grained control over animations, allowing you to create reactive animations that respond to user input, scroll position, or other motion values through transforms and springs.

## motion Component

The `motion` component is the foundation of Framer Motion, providing animated versions of every HTML and SVG element. It accepts animation props that define how the element should animate between states, with automatic interpolation for CSS properties, transforms, and SVG attributes.

```jsx
import { motion } from "framer-motion";

function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1, backgroundColor: "#ff0000" }}
      whileTap={{ scale: 0.95 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#3366ff",
        borderRadius: 10,
      }}
    />
  );
}
```

## animate Function

The `animate` function provides imperative animation control for DOM elements, motion values, and complex sequences. It returns playback controls for pausing, resuming, and stopping animations, and works outside of React components for vanilla JavaScript use cases.

```jsx
import { animate, stagger } from "framer-motion";

// Animate DOM elements
const controls = animate(
  ".box",
  { x: 100, opacity: [0, 1], rotate: 360 },
  { duration: 1, delay: stagger(0.1) },
);

// Animate a single value
animate(0, 100, {
  duration: 2,
  onUpdate: (latest) => console.log(latest),
});

// Animate a sequence
animate([
  [".box", { x: 100 }, { duration: 0.5 }],
  [".circle", { scale: 2 }, { at: "-0.3" }],
  [".box", { rotate: 90 }, { at: "<" }],
]);

// Control playback
controls.pause();
controls.play();
controls.stop();
console.log(controls.time); // Current time in seconds
```

## useMotionValue Hook

Creates a `MotionValue` to track the state and velocity of a value. Motion values are optimized for performance and don't trigger React re-renders, making them ideal for high-frequency animations and gesture-driven interactions.

```jsx
import { motion, useMotionValue, useTransform } from "framer-motion";

function DraggableCard() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-45, 45]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      drag="x"
      style={{ x, rotate, opacity }}
      dragConstraints={{ left: -200, right: 200 }}
      onDrag={() => console.log("Current x:", x.get())}
    >
      Drag me
    </motion.div>
  );
}
```

## useTransform Hook

Creates a `MotionValue` that transforms the output of another `MotionValue` by mapping it from one range to another or through a custom function. Supports numbers, colors, and complex values with automatic interpolation.

```jsx
import { motion, useMotionValue, useTransform } from "framer-motion";

function ScrollProgress() {
  const x = useMotionValue(0);

  // Map x position to color
  const backgroundColor = useTransform(
    x,
    [-200, 0, 200],
    ["#ff0000", "#00ff00", "#0000ff"],
  );

  // Custom transform function
  const rounded = useTransform(x, (value) => Math.round(value));

  // Combine multiple motion values
  const y = useMotionValue(0);
  const combined = useTransform(
    [x, y],
    ([latestX, latestY]) => latestX + latestY,
  );

  return (
    <motion.div
      drag
      style={{ x, y, backgroundColor }}
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
    />
  );
}
```

## useSpring Hook

Creates a `MotionValue` that animates to its target value using spring physics. Can track another motion value or be set directly, automatically applying spring dynamics to any value changes.

```jsx
import { motion, useMotionValue, useSpring } from "framer-motion";

function SpringyMouse() {
  const mouse = useMotionValue(0);
  const smoothMouse = useSpring(mouse, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });

  return (
    <motion.div
      style={{
        x: smoothMouse,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#ff6b6b",
      }}
      onMouseMove={(e) => mouse.set(e.clientX - 25)}
    />
  );
}
```

## useScroll Hook

Returns motion values representing scroll position and progress. Can track window scroll, element scroll, or scroll progress of a target element within a container.

```jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ScrollAnimation() {
  const containerRef = useRef(null);

  // Window scroll
  const { scrollY, scrollYProgress } = useScroll();

  // Element scroll progress
  const { scrollYProgress: elementProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(elementProgress, [0, 1], [0.8, 1.2]);

  return (
    <>
      <motion.div style={{ opacity, position: "fixed", top: 0 }}>
        Fades on scroll
      </motion.div>
      <motion.div ref={containerRef} style={{ scale, height: 300 }}>
        Scales based on scroll position
      </motion.div>
    </>
  );
}
```

## AnimatePresence Component

Enables exit animations for components removed from the React tree. Wraps children to defer their unmounting until exit animations complete, essential for page transitions and conditional rendering animations.

```jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function NotificationStack() {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Welcome!" },
    { id: 2, text: "New message" },
  ]);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <AnimatePresence mode="popLayout">
      {notifications.map((notification) => (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          layout
          onClick={() => removeNotification(notification.id)}
        >
          {notification.text}
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
```

## Variants

Variants allow you to define animation states by name and orchestrate animations throughout component trees. They enable complex staggered animations and parent-child animation coordination through a simple declarative API.

```jsx
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300 },
  },
};

function StaggeredList({ items }) {
  return (
    <motion.ul variants={containerVariants} initial="hidden" animate="visible">
      {items.map((item, i) => (
        <motion.li key={i} variants={itemVariants}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

## Drag Gestures

Enable dragging on any motion component with the `drag` prop. Supports constraints, elastic boundaries, momentum, and custom drag controls for building interactive drag-and-drop interfaces.

```jsx
import { motion, useDragControls } from "framer-motion";
import { useRef } from "react";

function DraggableWithConstraints() {
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();

  return (
    <motion.div ref={constraintsRef} style={{ width: 400, height: 400 }}>
      <motion.div
        drag
        dragControls={dragControls}
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        onDragStart={(e, info) => console.log("Started at", info.point)}
        onDragEnd={(e, info) => console.log("Velocity:", info.velocity)}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#8b5cf6",
          borderRadius: 20,
          cursor: "grab",
        }}
      />
    </motion.div>
  );
}
```

## useAnimate Hook

Returns a scoped animation function and ref for imperative animations within a component. Provides full control over animation playback and automatically stops animations on unmount.

```jsx
import { useAnimate, stagger } from "framer-motion";

function AnimatedList() {
  const [scope, animate] = useAnimate();

  const handleEnter = async () => {
    await animate(
      "li",
      { opacity: 1, x: 0 },
      { delay: stagger(0.1), duration: 0.3 },
    );
    await animate("li", { scale: [1, 1.1, 1] }, { duration: 0.2 });
  };

  const handleExit = () => {
    animate(
      "li",
      { opacity: 0, x: -100 },
      { delay: stagger(0.05, { from: "last" }) },
    );
  };

  return (
    <ul ref={scope}>
      <li style={{ opacity: 0, x: 100 }}>Item 1</li>
      <li style={{ opacity: 0, x: 100 }}>Item 2</li>
      <li style={{ opacity: 0, x: 100 }}>Item 3</li>
      <button onClick={handleEnter}>Enter</button>
      <button onClick={handleExit}>Exit</button>
    </ul>
  );
}
```

## LayoutGroup Component

Groups motion components for shared layout animations. Enables smooth transitions when components change position in the DOM, and allows layout animations to be coordinated across separate component trees.

```jsx
import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";

function TabContent() {
  const [selected, setSelected] = useState(0);
  const tabs = ["Home", "About", "Contact"];

  return (
    <LayoutGroup>
      <div style={{ display: "flex", gap: 20 }}>
        {tabs.map((tab, i) => (
          <motion.button
            key={tab}
            onClick={() => setSelected(i)}
            style={{ position: "relative" }}
          >
            {tab}
            {selected === i && (
              <motion.div
                layoutId="underline"
                style={{
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "#3b82f6",
                }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </LayoutGroup>
  );
}
```

## LazyMotion Component

Reduces bundle size by loading motion features asynchronously. Use with the `m` component (a lightweight version of `motion`) for optimal code splitting in production applications.

```jsx
import { LazyMotion, domAnimation, m } from "framer-motion";

// Synchronous loading - includes animation features
function App() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </LazyMotion>
  );
}

// Asynchronous loading - code splits animation features
function AsyncApp() {
  return (
    <LazyMotion
      features={() => import("framer-motion").then((mod) => mod.domMax)}
    >
      <m.div animate={{ scale: 2 }} drag layout />
    </LazyMotion>
  );
}
```

## MotionConfig Component

Sets default animation options for all descendant motion components. Useful for applying consistent transitions, reducing motion preferences, or adjusting timing across an entire component tree.

```jsx
import { motion, MotionConfig } from "framer-motion";

function ConfiguredApp() {
  return (
    <MotionConfig
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      reducedMotion="user"
    >
      <motion.div animate={{ x: 100 }}>Uses spring transition</motion.div>
      <motion.div animate={{ scale: 1.2 }}>Also uses spring</motion.div>

      <MotionConfig transition={{ duration: 2 }}>
        <motion.div animate={{ rotate: 360 }}>
          Overrides to 2s duration
        </motion.div>
      </MotionConfig>
    </MotionConfig>
  );
}
```

## useInView Hook

Tracks whether an element is within the viewport using the Intersection Observer API. Returns a boolean that updates when the element enters or exits the viewport, with configurable thresholds and margins.

```jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function LazyLoadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only trigger once
    amount: 0.5, // 50% visible
    margin: "-100px", // Start 100px before viewport
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h2>Content loads when scrolled into view</h2>
    </motion.section>
  );
}
```

## Scroll-Linked Animations (scroll function)

Creates animations linked to scroll progress using the native ScrollTimeline API with fallback support. Attach any animation to scroll position for performant scroll-driven effects.

```jsx
import { scroll, animate } from "framer-motion";

// Link animation to scroll progress
scroll(animate(".progress-bar", { scaleX: [0, 1] }), { axis: "y" });

// Custom scroll callback
scroll((progress) => {
  console.log("Scroll progress:", progress);
  document.body.style.backgroundColor = `hsl(${progress * 360}, 50%, 50%)`;
});

// Scroll within a specific container
const container = document.querySelector(".scroll-container");
scroll(animate(".item", { opacity: [0, 1, 0] }), {
  source: container,
  axis: "y",
});
```

## Gesture Events (Hover, Tap, Pan)

Motion components support gesture detection with callback props and animation states. These work across mouse, touch, and pointer events with consistent behavior and detailed event information.

```jsx
import { motion } from "framer-motion";

function InteractiveCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      whileFocus={{ borderColor: "#3b82f6" }}
      onHoverStart={(e, info) => console.log("Hover started")}
      onHoverEnd={(e, info) => console.log("Hover ended")}
      onTap={(e, info) => console.log("Tapped at", info.point)}
      onTapStart={(e, info) => console.log("Tap started")}
      onTapCancel={(e, info) => console.log("Tap cancelled")}
      onPan={(e, info) => console.log("Panning", info.delta)}
      onPanStart={(e, info) => console.log("Pan started")}
      onPanEnd={(e, info) =>
        console.log("Pan ended with velocity", info.velocity)
      }
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 10,
        cursor: "pointer",
      }}
    />
  );
}
```

## Summary

Framer Motion excels at creating fluid, physics-based animations in React applications. The primary use cases include page transitions with AnimatePresence, interactive UI elements with gesture support (drag, hover, tap), scroll-linked animations for parallax and reveal effects, and orchestrated animations using variants for staggered lists and complex sequences. The library's motion values system enables reactive animations that respond to user input without triggering React re-renders, making it suitable for high-performance gesture-driven interfaces.

Integration patterns typically involve wrapping the application with MotionConfig for global defaults, using LazyMotion with the `m` component for bundle optimization, and combining useMotionValue with useTransform for derived animations. For complex applications, LayoutGroup coordinates layout animations across component boundaries, while useAnimate provides imperative control when declarative props are insufficient. The library integrates seamlessly with React's component model, supporting refs, context, and hooks while providing escape hatches for vanilla JavaScript use cases through the standalone animate function.

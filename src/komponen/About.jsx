import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, FileText, Database, Shield } from "lucide-react";
import Bg from "/pasAlpianTabrani.jpg";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  const features = [
    { icon: Database, text: "Database Management" },
    { icon: FileText, text: "Administrative Support" },
    { icon: Shield, text: "System Reliability" },
    { icon: CheckCircle2, text: "Detail Optimization" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 bg-(--bg-secondary) border-t border-(--border-color) relative overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative group">
            <motion.div
              style={{ y, rotate }}
              className="relative z-10 aspect-4/5 max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden border-(--border-color) bg-(--bg-primary) shadow-2xl ring-1 ring-slate-900/5"
            >
              <img
                src={Bg}
                alt="Alpian Tabrani"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-60 dark:from-dark-bg-subtle" />
            </motion.div>

            {/* Quick Stat Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="absolute -bottom-6 -right-6 md:right-0 lg:-right-8 max-w-[240px] bg-(--glass-bg) backdrop-blur-xl border-(--border-color) p-6 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
                </div>
                <span className="text-4xl font-outfit font-bold text-(--text-primary)">
                  3+
                </span>
              </div>
              <p className="text-sm font-medium text-(--text-secondary) leading-relaxed">
                Years of cross-functional experience in Web Support &
                Administration.
              </p>
            </motion.div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-200 dark:border-blue-500/30 rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-indigo-200 dark:border-indigo-500/30 rounded-br-3xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-(--text-primary) mb-8">
                Detail-Oriented <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-zinc-400 dark:to-zinc-600">
                  Problem Solver.
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-(--text-secondary) text-lg font-light leading-relaxed mb-10"
            >
              <p>
                Hello! I am Alpian Tabrani, a dedicated professional blending
                administrative precision with full-stack web development
                capabilities.
              </p>
              <p>
                My expertise lies in building efficient digital solutions using{" "}
                <strong className="text-(--text-primary) font-medium">
                  React & Firebase
                </strong>
                , while ensuring data integrity and seamless organizational
                workflows. I thrive in environments where structured data meets
                intuitive user interfaces.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-3 rounded-xl border border-transparent hover:bg-(--bg-primary) hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-(--text-primary) font-medium text-sm">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 sm:hidden">
              <div className="bg-(--bg-primary) backdrop-blur-sm border-(--border-color) p-6 rounded-2xl shadow-sm">
                <p className="text-4xl font-outfit font-bold text-(--text-primary) mb-1">
                  3+
                </p>
                <p className="text-sm font-medium text-(--text-muted)">
                  Years of cross-functional experience.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

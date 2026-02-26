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
      className="py-32 relative border-t border-white/5 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group lg:max-w-md"
          >
            <motion.div
              style={{ y }}
              className="relative z-10 aspect-4/5 rounded-sm overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={Bg}
                alt="Alpian Tabrani"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />
            </motion.div>

            {/* Quick Stat Overlay - Swiss / Glass 2.0 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-20 -right-10 glass-2 p-8 rounded-sm shadow-2xl z-20 hidden md:block max-w-[200px]"
            >
              <div className="text-5xl font-outfit font-bold text-(--text-primary) mb-2 leading-none uppercase tracking-tighter">
                3+
              </div>
              <p className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest leading-loose">
                Years blending Admin & Development Excellence.
              </p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-blue-500 mb-6 block">
                Biography
              </span>
              <h2 className="text-6xl md:text-8xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.8] mb-12">
                Problem <br />
                <span className="text-(--text-muted)">Solver.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8 text-(--text-secondary) text-lg md:text-xl font-inter leading-relaxed mb-12"
            >
              <p>
                Hello! I am{" "}
                <span className="text-(--text-primary) font-semibold">
                  Alpian Tabrani
                </span>
                , a dedicated professional blending administrative precision
                with technical web development.
              </p>
              <p>
                My expertise lies in building efficient digital solutions using{" "}
                <span className="text-(--text-primary)">React & Firebase</span>,
                while ensuring data integrity and seamless organizational
                workflows.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-2 hover:bg-(--accent-blue)/10 transition-all rounded-sm"
                >
                  <item.icon className="w-5 h-5 text-blue-500" />
                  <span className="text-(--text-primary) font-bold text-[10px] uppercase tracking-widest">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

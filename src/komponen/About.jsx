import { motion } from "framer-motion";
import { CheckCircle2, FileText, Database, Shield } from "lucide-react";
import Bg from "/pasAlpianTabrani.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/5 max-w-sm mx-auto lg:mx-0 relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <img
                src={Bg}
                alt="Alpian Tabrani"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] to-transparent opacity-50" />
            </div>

            {/* Quick Stat Overlay */}
            <div className="absolute -bottom-6 -right-6 md:right-0 lg:-right-12 max-w-xs glass-panel p-6 rounded-2xl hidden md:block">
              <p className="text-4xl font-outfit font-bold text-white mb-1">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
                  3+
                </span>
              </p>
              <p className="text-sm font-medium text-zinc-400 leading-relaxed">
                Years of cross-functional experience in Web Support &
                Administration.
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-white mb-8">
              Detail-Oriented <br />
              <span className="text-zinc-500">Problem Solver.</span>
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed mb-10">
              <p>
                Hello! I am Alpian Tabrani, a dedicated professional blending
                administrative precision with full-stack web development
                capabilities.
              </p>
              <p>
                My expertise lies in building efficient digital solutions using{" "}
                <strong className="text-white font-medium">
                  React & Firebase
                </strong>
                , while ensuring data integrity and seamless organizational
                workflows. I thrive in environments where structured data meets
                intuitive user interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {[
                { icon: Database, text: "Database Management" },
                { icon: FileText, text: "Administrative Support" },
                { icon: Shield, text: "System Reliability" },
                { icon: CheckCircle2, text: "Detail Optimization" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-zinc-400" />
                  </div>
                  <span className="text-zinc-300 font-medium text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:hidden">
              <div className="glass-panel p-6 rounded-2xl">
                <p className="text-4xl font-outfit font-bold text-white mb-1">
                  3+
                </p>
                <p className="text-sm font-medium text-zinc-400">
                  Years of cross-functional experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

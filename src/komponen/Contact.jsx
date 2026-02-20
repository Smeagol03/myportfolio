import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Send,
  Loader2,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "atabrani3@gmail.com",
    link: "mailto:atabrani3@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+6287894721726",
    link: "https://wa.me/6287894721726",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Smeagol03",
    link: "https://github.com/Smeagol03",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lombok Timur, NTB",
    link: "https://maps.app.goo.gl/pQuotFgBWLKhZzzv9",
    color: "from-rose-500 to-orange-500",
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const whatsappMessage = `Halo Alpian, saya ${data.name}.\n\nSubjek: ${data.subject}\nEmail: ${data.email}\n\nPesan:\n${data.message}`;
    const waUrl = `https://wa.me/6287894721726?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
      setFormStatus("success");
      formRef.current?.reset();
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-[#030712]"
    >
      {/* Elegant Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent blur-sm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Contact Path
            </span>
            <div className="h-px w-8 bg-cyan-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-outfit text-white mb-6"
          >
            Mari Mulai{" "}
            <span className="cyan-gradient-text">Diskusi Hebat.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-effect p-6 rounded-4xl border border-white/5 flex items-center gap-5 group transition-all hover:border-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/5"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors tracking-wider text-xs sm:text-sm">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-[2.5rem] border border-cyan-500/10 relative overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    Available for Hire
                  </span>
                </div>
                <h4 className="text-xl font-bold font-outfit text-white mb-2">
                  Punya Proyek Menarik?
                </h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Saya selalu terbuka untuk kolaborasi atau peluang freelance
                  baru. Mari diskusikan bagaimana saya bisa membantu Anda.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-effect p-8 md:p-12 rounded-[3.5rem] border border-white/5 relative shadow-2xl">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-white">
                  Direct Message
                </h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jhon Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="hello@mail.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-slate-300 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-light appearance-none cursor-pointer"
                  >
                    <option value="Project Proposal" className="bg-[#030712]">
                      Project Proposal
                    </option>
                    <option value="Collaboration" className="bg-[#030712]">
                      Collaboration
                    </option>
                    <option value="General Inquiry" className="bg-[#030712]">
                      General Inquiry
                    </option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="What's on your mind?"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-light resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] ${
                    formStatus === "success"
                      ? "bg-emerald-500 text-white"
                      : "bg-white text-[#030712] hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {formStatus === "submitting" ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>SENDING...</span>
                      </motion.div>
                    ) : formStatus === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span>SENT SUCCESSFULLY!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>SEND MESSAGE</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

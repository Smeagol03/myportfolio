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
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+6287894721726",
    link: "https://wa.me/6287894721726",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Smeagol03",
    link: "https://github.com/Smeagol03",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lombok Timur, NTB",
    link: "https://maps.app.goo.gl/pQuotFgBWLKhZzzv9",
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
      className="py-24 relative overflow-hidden bg-white dark:bg-[#0A0A0A] border-t border-slate-200 dark:border-zinc-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Let's Start a <span className="text-blue-600 dark:text-zinc-500">Conversation.</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">
            Terbuka untuk peluang baru, diskusi teknologi, atau proyek
            kolaborasi.
          </p>
        </motion.div>

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
                  whileHover={{ x: 5, backgroundColor: "var(--bg-hover)" }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ "--bg-hover": "rgba(59, 130, 246, 0.05)" }}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex items-center gap-5 group transition-all hover:border-blue-200 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-none"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-zinc-800 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 dark:text-zinc-500 tracking-widest uppercase mb-1 group-hover:text-blue-700 dark:group-hover:text-zinc-400">
                      {item.label}
                    </p>
                    <p className="text-slate-700 dark:text-zinc-300 font-medium group-hover:text-blue-900 dark:group-hover:text-white transition-colors text-sm">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-blue-100 dark:border-zinc-800 bg-blue-50/50 dark:bg-zinc-900/30 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    Available for Hire
                  </span>
                </div>
                <h4 className="text-xl font-bold font-outfit text-slate-900 dark:text-white mb-2">
                  Membutuhkan Tenaga Profesional?
                </h4>
                <p className="text-slate-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
                  Saya selalu siap untuk berdiskusi peran purna waktu atau
                  proyek web independen.
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
            <div className="p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 relative shadow-xl dark:shadow-none">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600 dark:text-zinc-300" />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white">
                  Direct Message
                </h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest ml-1">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jhon Doe"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 dark:focus:border-zinc-500 focus:ring-1 focus:ring-blue-500 dark:focus:ring-zinc-500 transition-all font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="hello@mail.com"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 dark:focus:border-zinc-500 focus:ring-1 focus:ring-blue-500 dark:focus:ring-zinc-500 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest ml-1">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-300 focus:outline-none focus:border-blue-500 dark:focus:border-zinc-500 focus:ring-1 focus:ring-blue-500 dark:focus:ring-zinc-500 transition-all font-light appearance-none cursor-pointer"
                    >
                      <option value="Project Proposal">Project Proposal</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest ml-1">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Sampaikan pesan Anda di sini..."
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 dark:focus:border-zinc-500 focus:ring-1 focus:ring-blue-500 dark:focus:ring-zinc-500 transition-all font-light resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus !== "idle"}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg ${
                    formStatus === "success"
                      ? "bg-emerald-600 text-white shadow-emerald-500/20"
                      : "bg-blue-600 dark:bg-white text-white dark:text-zinc-950 hover:bg-blue-700 dark:hover:bg-zinc-200 shadow-blue-500/20 dark:shadow-white/10"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {formStatus === "submitting" ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>MENGIRIM...</span>
                      </motion.div>
                    ) : formStatus === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span>BERHASIL TERKIRIM</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>KIRIM PESAN</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

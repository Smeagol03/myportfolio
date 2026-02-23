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
      className="py-24 relative overflow-hidden bg-[#0A0A0A] border-t border-zinc-900"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-white mb-4">
            Let's Start a <span className="text-zinc-500">Conversation.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Terbuka untuk peluang baru, diskusi teknologi, atau proyek
            kolaborasi.
          </p>
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
                  className="glass-card p-6 rounded-2xl border border-zinc-800 flex items-center gap-5 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 tracking-widest uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-zinc-300 font-medium group-hover:text-white transition-colors text-sm">
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
              className="glass-panel p-8 rounded-2xl border border-zinc-800 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Available for Hire
                  </span>
                </div>
                <h4 className="text-xl font-bold font-outfit text-white mb-2">
                  Membutuhkan Tenaga Profesional?
                </h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
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
            <div className="glass-panel p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-zinc-800 relative">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-zinc-300" />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-white">
                  Direct Message
                </h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jhon Doe"
                      className="w-full px-5 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="hello@mail.com"
                      className="w-full px-5 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full px-5 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 focus:outline-none focus:border-zinc-500 transition-all font-light appearance-none cursor-pointer"
                  >
                    <option value="Project Proposal" className="bg-[#0A0A0A]">
                      Project Proposal
                    </option>
                    <option value="Job Opportunity" className="bg-[#0A0A0A]">
                      Job Opportunity
                    </option>
                    <option value="General Inquiry" className="bg-[#0A0A0A]">
                      General Inquiry
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Sampaikan pesan Anda di sini..."
                    className="w-full px-5 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all font-light resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] ${
                    formStatus === "success"
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-zinc-950 hover:bg-zinc-200"
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

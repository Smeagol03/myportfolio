import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animasi";
import {
  Mail,
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
      className="py-32 relative border-t border-white/5 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <header className="mb-20">
          <FadeIn
            delay={0}
            direction="left"
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-blue-500/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-(--text-muted)">
              Contact
            </span>
          </FadeIn>
          <FadeIn
            delay={0.2}
            direction="up"
            className="text-4xl md:text-8xl font-outfit font-bold tracking-tighter text-(--text-primary) uppercase leading-[0.8]"
          >
            Let's Talk<span className="text-(--text-muted)">.</span>
          </FadeIn>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((item, idx) => (
                <FadeIn
                  key={idx}
                  delay={idx * 0.1}
                  direction="left"
                  className="group"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-8 glass-2 flex items-center gap-6 hover:border-(--accent-blue)/30 transition-all rounded-sm h-full"
                  >
                    <div className="w-12 h-12 glass-2 flex items-center justify-center rounded-sm group-hover:bg-(--accent-blue) group-hover:text-white transition-all duration-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-(--text-primary) font-bold group-hover:text-(--accent-blue) transition-colors uppercase tracking-tighter">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>

            <FadeIn
              delay={0.3}
              direction="up"
              className="p-10 glass-2 relative overflow-hidden rounded-sm"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em]">
                    Availability
                  </span>
                </div>
                <h4 className="text-2xl font-bold font-outfit text-(--text-primary) mb-4 uppercase tracking-tighter">
                  Open for new <br />
                  Opportunities.
                </h4>
                <p className="text-(--text-secondary) text-sm leading-relaxed mb-6">
                  Available for full-time roles or high-impact freelance
                  projects. Let's build something exceptional.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="up" className="lg:col-span-7">
            <div className="p-10 glass-2 rounded-sm">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 glass-2 flex items-center justify-center rounded-sm">
                  <MessageSquare className="w-5 h-5 text-(--text-primary)" />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-(--text-primary) uppercase tracking-tighter">
                  Send Message
                </h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-(--bg-secondary) border border-(--border-color) p-4 text-(--text-primary) focus:outline-none focus:border-blue-500 transition-all rounded-sm uppercase tracking-widest text-[10px] font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest ml-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-(--bg-secondary) border border-(--border-color) p-4 text-(--text-primary) focus:outline-none focus:border-blue-500 transition-all rounded-sm uppercase tracking-widest text-[10px] font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest ml-1">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full bg-(--bg-secondary) border border-(--border-color) p-4 text-(--text-primary) focus:outline-none focus:border-blue-500 transition-all rounded-sm uppercase tracking-widest text-[10px] font-bold appearance-none cursor-pointer"
                  >
                    <option
                      value="Project Proposal"
                      className="bg-(--bg-primary)"
                    >
                      Project Proposal
                    </option>
                    <option
                      value="Job Opportunity"
                      className="bg-(--bg-primary)"
                    >
                      Job Opportunity
                    </option>
                    <option
                      value="General Inquiry"
                      className="bg-(--bg-primary)"
                    >
                      General Inquiry
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    className="w-full bg-(--bg-secondary) border border-(--border-color) p-4 text-(--text-primary) focus:outline-none focus:border-blue-500 transition-all rounded-sm uppercase tracking-widest text-[10px] font-bold resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formStatus !== "idle"}
                  className={`w-full py-5 rounded-sm font-bold text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 ${
                    formStatus === "success"
                      ? "bg-emerald-600 text-white"
                      : "bg-(--text-primary) text-(--bg-primary) hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {formStatus === "submitting" ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : formStatus === "success" ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Message Sent</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Send</span>
                      </div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;

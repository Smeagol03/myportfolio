import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Mail, Phone, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./animasi";

const Checkout = () => {
  const { paket } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const packageName = paket
    ? paket.charAt(0).toUpperCase() + paket.slice(1).replace("-", " ")
    : "Unknown Package";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateMessageBody = () => {
    return `Halo Alpian,\n\nSaya tertarik untuk memesan layanan pembuatan website paket *${packageName}*.\n\nBerikut detail kontak saya:\nNama: ${formData.name}\nEmail: ${formData.email}\nNo. WhatsApp: ${formData.phone}\n\nDetail Kebutuhan/Pesan Tambahan:\n${formData.message}\n\nTerima kasih.`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Mohon lengkapi Nama dan Nomor WhatsApp terlebih dahulu.");
      return;
    }
    const message = generateMessageBody();
    const waUrl = `https://wa.me/6287894721726?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Mohon lengkapi Nama dan Email terlebih dahulu.");
      return;
    }
    const subject = `Pemesanan Paket Web: ${packageName}`;
    const message = generateMessageBody();
    const mailUrl = `mailto:atabrani3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) flex flex-col pt-24 pb-12 relative overflow-hidden">
      {/* Background decorations matching the theme */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-linear-to-b from-(--accent-blue)/5 to-transparent pointer-events-none" />
      <div className="absolute top-40 -left-40 w-80 h-80 bg-(--accent-blue)/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 flex-1 flex flex-col">
        {/* Navigation Header */}
        <FadeIn delay={0} direction="down" className="mb-12">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-[10px] font-bold text-(--text-muted) uppercase tracking-[0.2em] hover:text-(--text-primary) transition-colors"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </button>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.1} direction="left">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 glass-2 flex items-center justify-center rounded-sm text-(--accent-blue)">
                  <Code2 size={20} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold font-outfit uppercase tracking-tighter text-(--text-primary)">
                    Checkout
                  </h1>
                </div>
              </div>

              <div className="p-8 glass-2 rounded-sm border border-(--border-color)/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-(--accent-blue)/5 to-transparent" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold text-(--text-muted) uppercase tracking-[0.2em] mb-2">
                    Selected Package
                  </p>
                  <h2 className="text-3xl font-black font-outfit uppercase tracking-tighter text-(--accent-blue) mb-6">
                    {packageName}
                  </h2>
                  <p className="text-(--text-secondary) text-sm leading-relaxed font-inter mb-8">
                    Isi formulir di samping untuk melanjutkan proses pemesanan.
                    Setelah itu, pilih metode pengiriman pesanan (WhatsApp atau
                    Email). Kami akan segera merespons Anda!
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-(--text-muted)">
                      <Phone size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        +62 878-9472-1726
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-(--text-muted)">
                      <Mail size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        atabrani3@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn
              delay={0.2}
              direction="up"
              className="p-8 md:p-10 glass-2 rounded-sm border border-(--border-color)/50"
            >
              <h3 className="text-xl font-bold font-outfit uppercase tracking-tighter text-(--text-primary) mb-8">
                Your Details
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest ml-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nama Lengkap"
                      className="w-full bg-(--bg-secondary) border border-(--border-color) p-4 text-(--text-primary) focus:outline-none focus:border-(--accent-blue)/50 transition-all rounded-sm uppercase tracking-wider text-[10px] font-bold placeholder:text-(--text-muted)/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest ml-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="08123456789"
                      className="w-full bg-(--bg-secondary) border border-(--border-color) p-4 text-(--text-primary) focus:outline-none focus:border-(--accent-blue)/50 transition-all rounded-sm uppercase tracking-wider text-[10px] font-bold placeholder:text-(--text-muted)/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className="w-full bg-(--bg-secondary) border border-(--border-color) p-4 text-(--text-primary) focus:outline-none focus:border-(--accent-blue)/50 transition-all rounded-sm tracking-wider text-[10px] font-bold placeholder:text-(--text-muted)/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-(--text-muted) tracking-widest ml-1">
                    Project Details / Messages
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Ceritakan sedikit tentang kebutuhan website Anda..."
                    className="w-full bg-(--bg-secondary) border border-(--border-color) p-4 text-(--text-primary) focus:outline-none focus:border-(--accent-blue)/50 transition-all rounded-sm tracking-wider text-[11px] font-medium placeholder:text-(--text-muted)/50 resize-y"
                  ></textarea>
                </div>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.button
                    type="button"
                    onClick={handleWhatsApp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-green-500 text-white hover:bg-green-600 hover:text-white shadow-lg shadow-green-500/20 border border-green-500"
                  >
                    <Send className="w-4 h-4" />
                    Pesan via WhatsApp
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleEmail}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-(--text-primary) text-(--bg-primary) hover:opacity-90 shadow-lg shadow-white/10"
                  >
                    <Mail className="w-4 h-4" />
                    Pesan via Email
                  </motion.button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

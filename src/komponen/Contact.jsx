import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Data Statis untuk Contact Info Block (Sisi Kiri)
const contactInfo = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-7.5 6L2.25 6.75"
        />
      </svg>
    ),
    label: "Email",
    value: "atabrani3@gmail.com",
    link: "mailto:atabrani3@gmail.com",
  },

  {
    icon: (
      <svg
        className="w-6 h-6 text-rose-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.25c-4.28 0-7.75 3.47-7.75 7.75 0 5.25 7.75 11.75 7.75 11.75s7.75-6.5 7.75-11.75c0-4.28-3.47-7.75-7.75-7.75z"
        />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Lokasi",
    value: "Lombok Timur, NTB, Indonesia",
    link: "https://maps.app.goo.gl/pQuotFgBWLKhZzzv9",
  },

  {
    icon: (
      <svg
        className="w-6 h-6 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.69l1.5 4.49a1 1 0 01-.5 1.21L8.97 10.53a11.03 11.03 0 004.5 4.5l1.14-2.25a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"
        />
      </svg>
    ),
    label: "WhatsApp",
    value: "+62 815-4719-0395",
    link: "https://wa.me/6281547190395",
  },

  {
    icon: (
      <svg
        className="w-6 h-6 text-slate-700 dark:text-slate-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.66.5.5 5.78.5 12.32c0 5.25 3.44 9.69 8.21 11.27.6.12.82-.26.82-.58v-2.05c-3.34.74-4.04-1.66-4.04-1.66-.54-1.43-1.33-1.81-1.33-1.81-1.09-.77.08-.76.08-.76 1.2.09 1.83 1.28 1.83 1.28 1.07 1.9 2.8 1.35 3.49 1.03.11-.8.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.47-2.5 1.24-3.38-.12-.32-.54-1.62.12-3.38 0 0 1.01-.33 3.3 1.29a11.1 11.1 0 016 0c2.3-1.62 3.3-1.29 3.3-1.29.66 1.76.24 3.06.12 3.38.77.88 1.24 2.01 1.24 3.38 0 4.81-2.8 5.88-5.48 6.19.43.38.81 1.12.81 2.26v3.35c0 .32.21.7.82.58A11.85 11.85 0 0023.5 12.32C23.5 5.78 18.34.5 12 .5z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/Smeagol03",
    link: "https://github.com/Smeagol03",
  },
];

// Pastikan contactInfo dan import React ada di bagian atas file
// ... (contactInfo array and import React)

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  // Animasi GSAP
  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Fade In
      gsap.from(".contact-header", {
        scrollTrigger: { trigger: ".contact-header", start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2. Info Card Slide dari Kiri
      gsap.from(".contact-info-card", {
        scrollTrigger: { trigger: ".contact-wrapper", start: "top 75%" },
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // 3. Form Card Slide dari Kanan/Bawah
      gsap.from(".contact-form-card", {
        scrollTrigger: { trigger: ".contact-wrapper", start: "top 75%" },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // 1. Ambil nilai dari input form berdasarkan ID
    const name = e.target.querySelector("#name").value;
    const email = e.target.querySelector("#email").value;
    const subject = e.target.querySelector("#subject").value;
    const message = e.target.querySelector("#message").value;

    // 2. Susun format pesan WhatsApp
    // Gunakan \n untuk baris baru dan *tanda bintang* untuk menebalkan teks di WA
    const whatsappMessage = `Halo, saya ingin berdiskusi mengenai "${subject}".

Detail Pengirim:
Nama: ${name}
Email: ${email}

Pesan:
${message}

Terima kasih.`;

    // 3. Encode pesan agar aman untuk URL (mengubah spasi jadi %20, dst)
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "6281547190395"; // Nomor tujuan
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // 4. Simulasi loading, lalu buka WhatsApp
    setTimeout(() => {
      // Buka WhatsApp di tab baru
      window.open(waUrl, "_blank");

      setFormStatus("success");

      // Reset form
      if (formRef.current) formRef.current.reset();

      // Kembalikan tombol ke status awal
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* --- Background Decorations (Blobs) --- */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* --- Header Section --- */}
        <div className="contact-header text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white leading-tight">
            Mari Mulai Sesuatu yang <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Luar Biasa
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
            Punya ide proyek? Atau sekadar ingin menyapa? Saya siap
            mendengarkan.
          </p>
        </div>

        {/* --- Main Contact Grid --- */}
        <div className="contact-wrapper grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* --- Sisi Kiri: Contact Info (2 Kolom) --- */}
          <div className="contact-info-card lg:col-span-2 bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <p className="text-indigo-100 mb-10 leading-relaxed">
                Saya selalu terbuka untuk berdiskusi tentang pengembangan
                produk, desain, atau peluang kerja sama.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group p-3 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
                  >
                    <div className="p-2 bg-white/20 rounded-lg text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-indigo-200 uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="text-base font-semibold group-hover:text-indigo-100 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Decoration Bottom */}
            <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-indigo-200">
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
            </div>
          </div>

          {/* --- Sisi Kanan: Formulir Kontak (3 Kolom) --- */}
          <div className="contact-form-card lg:col-span-3 bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">
              Kirim Pesan Langsung
            </h3>

            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nama */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Subjek (Optional - Tambahan agar lebih pro) */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Subjek
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                >
                  <option>Tawaran Proyek</option>
                  <option>Kolaborasi</option>
                  <option>Pertanyaan Umum</option>
                </select>
              </div>

              {/* Pesan */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Ceritakan detail proyek Anda..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Tombol Submit dengan Loading State */}
              <button
                type="submit"
                disabled={
                  formStatus === "submitting" || formStatus === "success"
                }
                className={`w-full py-4 px-6 rounded-xl font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 ${
                  formStatus === "success"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                }`}
              >
                {formStatus === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Mengirim...
                  </span>
                ) : formStatus === "success" ? (
                  "Pesan Terkirim! ✅"
                ) : (
                  "Kirim Pesan Sekarang"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

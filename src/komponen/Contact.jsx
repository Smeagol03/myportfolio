import React from "react";

// Data Statis untuk Contact Info Block (Sisi Kiri)
const contactInfo = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26c.72.48 1.63.48 2.35 0L21 8M3 8V19a2 2 0 002 2h14a2 2 0 002-2V8M3 8l-.75-1.5M21 8l.75-1.5"
        />
      </svg>
    ),
    label: "Email Utama",
    value: "halo@namasaya.com",
    link: "mailto:halo@namasaya.com",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Lokasi",
    value: "Jakarta, Indonesia",
    link: "https://maps.app.goo.gl/...",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.033 11.033 0 005.17 5.17l1.128-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-11a2 2 0 01-2-2v-14z"
        />
      </svg>
    ),
    label: "WhatsApp",
    value: "+62 812 XXX XXX",
    link: "https://wa.me/62812xxxxxx",
  },
];

// Pastikan contactInfo dan import React ada di bagian atas file
// ... (contactInfo array and import React)

const Contact = () => {
  // Handler placeholder untuk form submission (Ganti dengan logika Anda)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan Terkirim! (Ini hanya demo)");
    // Di sini Anda dapat menambahkan Fetch API atau Axios
    // untuk mengirim data ke backend/Formspree/Netlify Forms.
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* --- Header Section --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Mari Berkolaborasi!
          </h2>
        </div>

        {/* --- Main Contact Grid (Split Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl dark:shadow-none">
          {/* --- Sisi Kiri: Contact Info & CTA (Accent Color) --- */}
          <div className="p-8 md:p-12 bg-indigo-600 text-white dark:bg-indigo-800/70 space-y-8">
            <h3 className="text-2xl font-bold border-b border-indigo-400 pb-2">
              Informasi Kontak
            </h3>
            <p className="text-indigo-100 dark:text-indigo-300">
              Saya terbuka untuk proyek baru, peluang kolaborasi, atau sekadar
              berdiskusi tentang teknologi. Jangan ragu untuk menghubungi saya
              melalui email atau WhatsApp.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 rounded-full bg-indigo-700 group-hover:bg-white group-hover:text-indigo-700 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-light uppercase">{info.label}</p>
                    <p className="text-lg font-semibold group-hover:underline">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* --- Sisi Kanan: Formulir Kontak --- */}
          <div className="p-8 md:p-12 bg-white dark:bg-slate-800">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Kirim Pesan Langsung
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nama */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Nama Anda"
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="email@example.com"
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Pesan */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Jelaskan kebutuhan Anda di sini..."
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                ></textarea>
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Catatan Penting untuk Fungsionalitas Form */}
        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            *Note: Untuk membuat formulir ini berfungsi, Anda perlu
            mengintegrasikannya dengan layanan backend (seperti Express) atau
            layanan pihak ketiga seperti{" "}
            <a
              href="https://formspree.io/"
              target="_blank"
              className="text-indigo-500 hover:underline"
            >
              Formspree
            </a>
            ,{" "}
            <a
              href="https://www.netlify.com/products/forms/"
              target="_blank"
              className="text-indigo-500 hover:underline"
            >
              Netlify Forms
            </a>
            , atau{" "}
            <a
              href="https://www.getform.io/"
              target="_blank"
              className="text-indigo-500 hover:underline"
            >
              Getform
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

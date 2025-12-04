import React from "react";

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
  // Handler placeholder untuk form submission (Ganti dengan logika Anda)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil nilai dari input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // GANTI dengan nomor WhatsApp kamu (pakai kode negara, tanpa + dan tanpa spasi)
    const phone = "6281547190395";

    // Format pesan
    const waMessage = `
Nama: ${name}
Email: ${email}

${message}
  `;

    // Encode pesan agar aman di URL
    const encodedMessage = encodeURIComponent(waMessage);

    // Buka WhatsApp
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
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
      </div>
    </section>
  );
};

export default Contact;

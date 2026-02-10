# Portfolio Alpian

Sebuah website portfolio personal yang modern dan interaktif yang menampilkan karya, pengalaman, pendidikan, dan keterampilan saya. Dibangun dengan teknologi terkini untuk performa optimal dan user experience yang menarik.

## 🎯 Fitur Utama

- 🎨 **Design Modern** - UI yang clean dan responsif menggunakan Tailwind CSS
- ✨ **Animasi Smooth** - Efek animasi yang memukau dengan Framer Motion
- 📱 **Mobile Friendly** - Optimal di semua ukuran layar
- 🚀 **Fast Performance** - Built dengan Vite untuk development dan production yang cepat
- 🎯 **Interactive Components** - Komponen interaktif yang engaging
- 📊 **Berbagai Section** - Hero, About, Experience, Education, Skills, Projects, Contact

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19.2.0](https://react.dev)
- **Build Tool**: [Vite 7.2.4](https://vitejs.dev)
- **Styling**: [Tailwind CSS 4.1.17](https://tailwindcss.com)
- **Animation**: [Framer Motion 12.23.25](https://www.framer.com/motion)
- **Icons**: [Lucide React 0.555.0](https://lucide.dev)
- **Linting**: [ESLint 9.39.1](https://eslint.org)

## 📋 Requirement

Sebelum memulai, pastikan Anda sudah install:

- [Node.js](https://nodejs.org/) (v16 atau lebih tinggi)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

## 🚀 Instalasi & Setup

1. **Clone atau Download Project**
   ```bash
   git clone <repository-url>
   cd myportfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Development Server**
   ```bash
   npm run dev
   ```
   Website akan berjalan di `http://localhost:5173`

4. **Build untuk Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📦 Available Scripts

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Menjalankan development server dengan HMR |
| `npm run build` | Build project untuk production |
| `npm run lint` | Jalankan ESLint untuk cek kode |
| `npm run preview` | Preview production build secara lokal |

## 📁 Project Structure

```
myportfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Gambar, font, dan media
│   ├── komponen/       # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── DataDiri.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── OffcanvasMenu.jsx
│   │   ├── Pendidikan.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── efek/
│   │       └── RotatingText.jsx
│   ├── App.jsx         # Main component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Project dependencies
└── README.md          # Documentation
```

## ⚙️ Konfigurasi

### Tailwind CSS
Tailwind CSS sudah dikonfigurasi untuk development dan production. Modifikasi `tailwind.config.js` untuk customize tema.

### Vite
Vite configuration sudah disetup di `vite.config.js` dengan React plugin.

### ESLint
ESLint rules sudah dikonfigurasi di `eslint.config.js` untuk maintain code quality.

## 🎨 Customize Portfolio

Untuk menambahkan atau mengubah konten portfolio:

1. **Edit Component Files** di folder `src/komponen/`
2. **Update Content** sesuai dengan informasi pribadi Anda
3. **Add Assets** ke folder `src/assets/`
4. **Modify Styles** menggunakan Tailwind CSS classes

## 🚀 Deployment

Portfolio ini dapat di-deploy ke berbagai platform:

- **Vercel**: Automatic deployment dari Git
- **Netlify**: Connect repository dan auto-deploy
- **GitHub Pages**: Build dan push ke `gh-pages` branch
- **Traditional Hosting**: Build project dan upload file ke server

## 📝 License

Project ini adalah personal portfolio dan dapat digunakan untuk referensi. Silakan modifikasi sesuai kebutuhan Anda.

## 📧 Contact

Jika ada pertanyaan atau saran, jangan ragu untuk menghubungi saya melalui form contact di website.

---

**Happy Coding! 🚀**

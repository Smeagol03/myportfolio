# 📝 Setup Guide - Blog & Admin Dashboard

## 🚀 Setup Supabase

### 1. Buat Project Supabase
1. Kunjungi [https://supabase.com](https://supabase.com)
2. Login/Sign up
3. Klik **"New Project"**
4. Isi detail project:
   - **Name**: `portfolio-blog`
   - **Database Password**: (simpan password ini)
   - **Region**: Pilih yang terdekat (Singapore/Tokyo untuk Indonesia)
5. Klik **"Create new project"**

### 2. Setup Database

Buka **SQL Editor** di Supabase dashboard, lalu jalankan SQL berikut:

```sql
-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  author_id UUID REFERENCES auth.users(id),
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  is_pinned BOOLEAN DEFAULT FALSE,
  view_count INTEGER DEFAULT 0,
  read_time INTEGER DEFAULT 5,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for slug lookup
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);

-- Create index for status filtering
CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);

-- Create index for pinned posts
CREATE INDEX IF NOT EXISTS idx_posts_pinned ON posts(is_pinned);

-- Create index for created_at ordering
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create policies for posts table
-- Allow public to read published posts
CREATE POLICY "Public can view published posts"
  ON posts FOR SELECT
  USING (status = 'published');

-- Allow authenticated users to do everything
CREATE POLICY "Authenticated users can do everything"
  ON posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
```

### 3. Setup Storage untuk Gambar

1. Buka **Storage** di Supabase dashboard
2. Klik **"New bucket"**
3. Buat bucket dengan nama: `blog-images`
4. Set **Public bucket** = ON
5. Klik **"Create bucket"**

Kemudian buka **SQL Editor** dan jalankan:

```sql
-- Allow public to read images
CREATE POLICY "Public Access"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'blog-images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'blog-images');

-- Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'blog-images');
```

### 4. Setup Authentication

1. Buka **Authentication** > **Providers** di Supabase dashboard
2. Pastikan **Email** provider sudah enabled
3. Untuk production, setup **Custom SMTP** atau gunakan Supabase SMTP

### 5. Buat User Admin

1. Buka **Authentication** > **Users** di Supabase dashboard
2. Klik **"Add user"**
3. Masukkan email dan password untuk admin
4. User ini akan digunakan untuk login ke dashboard admin

### 6. Dapatkan API Keys

1. Buka **Settings** > **API** di Supabase dashboard
2. Copy nilai berikut:
   - **Project URL** (misal: `https://xxxxx.supabase.co`)
   - **anon/public key** (string panjang)

---

## 🔧 Setup Environment Variables

1. Buat file `.env` di root folder project (copy dari `.env.example`):

```bash
cp .env.example .env
```

2. Isi file `.env` dengan nilai dari Supabase:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## 🎨 Fitur yang Tersedia

### ✨ Public Features
- **Halaman Blog** (`/blog`) - Daftar semua blog dengan search
- **Blog Detail** (`/blog/:slug`) - Halaman baca blog dengan related posts
- **Blog Section** - Section di homepage menampilkan 4 blog terbaru/pinned

### 🔐 Admin Features
- **Login** (`/admin/login`) - Halaman login admin
- **Dashboard** (`/admin/dashboard`) - Overview statistik blog
- **Blog Manager** (`/admin/blog`) - CRUD blog posts dengan table
- **Blog Editor** (`/admin/blog/new` & `/admin/blog/edit/:id`) - Rich text editor untuk tulis/edit blog

### 🎯 Fitur Blog
- ✅ Rich text editor (Bold, Italic, Heading, List, Quote, Code, Link, Image)
- ✅ Upload gambar cover
- ✅ Auto-generate slug dari judul
- ✅ Draft/Published status
- ✅ Pin blog untuk ditampilkan di homepage
- ✅ View counter
- ✅ Search & filter
- ✅ Related posts
- ✅ Responsive design
- ✅ Dark/Light mode support

---

## 🚀 Menjalankan Aplikasi

```bash
# Development
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

---

## 📱 Akses Halaman

| Halaman | URL | Akses |
|---------|-----|-------|
| Homepage | `/` | Public |
| Blog List | `/blog` | Public |
| Blog Detail | `/blog/:slug` | Public |
| Admin Login | `/admin/login` | Public |
| Admin Dashboard | `/admin/dashboard` | Protected |
| Blog Manager | `/admin/blog` | Protected |
| Blog Editor | `/admin/blog/new` | Protected |

---

## 🛠️ Troubleshooting

### Error: "Invalid API key"
- Pastikan `.env` sudah dibuat dan diisi dengan benar
- Restart development server setelah mengubah `.env`

### Error: "Table does not exist"
- Jalankan SQL script di Supabase SQL Editor
- Pastikan database sudah di-create

### Gambar tidak muncul
- Pastikan bucket `blog-images` sudah dibuat
- Check policy storage sudah di-setup
- Pastikan gambar sudah di-upload

### Tidak bisa login
- Pastikan user sudah dibuat di Supabase Authentication
- Check email dan password benar
- Lihat console browser untuk error detail

---

## 📞 Support

Jika ada masalah, silakan buat issue atau hubungi:
- Email: atabrani3@gmail.com

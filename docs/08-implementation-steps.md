# 📋 Implementation Steps — Urutan Eksekusi dari Awal Sampai Live

## Cara Menggunakan Dokumen Ini
Ikuti langkah-langkah di bawah secara berurutan. Setiap langkah punya checklist yang bisa kamu centang saat selesai.

---

## Step 1: Setup Project Astro

```bash
# 1. Masuk ke folder project
cd /home/rafa/portofolio/myPorto

# 2. Init project Astro
npm create astro@latest ./

# Pilihan saat prompt:
#   Template: Empty
#   TypeScript: Yes (Strict)
#   Install dependencies: Yes

# 3. Tambahkan Tailwind dan Svelte integration
npx astro add tailwind svelte

# 4. Tambahkan sitemap integration
npx astro add sitemap

# 5. Setup shadcn-svelte
npx shadcn-svelte@latest init

# 5. Test jalankan
npm run dev
# Buka http://localhost:4321 di browser
```

### Checklist:
- [ ] Project Astro berhasil di-init
- [ ] Svelte integration terinstall
- [ ] Sitemap integration terinstall
- [ ] `npm run dev` berjalan tanpa error
- [ ] Browser menampilkan halaman default Astro

---

## Step 2: Setup Struktur Folder

```bash
# Buat semua folder yang dibutuhkan
mkdir -p src/components/astro
mkdir -p src/components/svelte
mkdir -p src/content/blog
mkdir -p src/data
mkdir -p src/layouts
mkdir -p src/styles
mkdir -p src/assets/blog
mkdir -p src/assets/certifications
mkdir -p src/assets/projects
mkdir -p public/fonts
```

### Checklist:
- [ ] Semua folder sudah dibuat sesuai arsitektur di `02-architecture.md`

---

## Step 3: Setup Design System (Tailwind + shadcn-svelte)

Migrasi design tokens dari `03-design-system.md` ke dalam Tailwind CSS.

1. Sesuaikan `tailwind.config.mjs` dengan warna `Sage` (#4A9E8E), `Copper` (#B8845C), dan *dark backgrounds* dari spesifikasi.
2. Setup font `Space Grotesk` dan `Inter` (bisa lewat `@font-face` di `src/styles/app.pcss` atau `global.css`).
3. Sesuaikan *spacing* dan *border radius* di Tailwind configuration agar sesuai dengan prototipe.
4. Terapkan kelas utilitas khusus seperti `.glass-panel` atau `.bento-card` di dalam file CSS global agar mudah dipakai ulang.

### Checklist:
- [ ] `tailwind.config.mjs` sudah di-setup dengan token warna kustom
- [ ] Font files sudah di-download dan ditaruh di `public/fonts/` (atau via Fontsource)
- [ ] `@font-face` sudah didefinisikan di `app.css` / `global.css`

---

## Step 4: Buat Layout

1. **`src/layouts/BaseLayout.astro`** — Layout utama:
   - Import semua CSS files
   - `<SEOHead>` component
   - `<Navbar>`
   - `<slot />` untuk konten halaman
   - `<Footer>`

2. **`src/layouts/BlogPostLayout.astro`** — Layout blog:
   - Extends BaseLayout
   - Title, date, tags di header
   - Artikel content area (max-width 720px)
   - Schema markup BlogPosting

### Checklist:
- [ ] BaseLayout.astro berfungsi dengan navbar dan footer
- [ ] BlogPostLayout.astro berfungsi untuk artikel

---

## Step 5: Buat Komponen Global

Urutan pembuatan:

1. **`SEOHead.astro`** — Meta tags, OG tags, schema (lihat `07-seo-checklist.md`)
2. **`Navbar.astro`** — Logo + nav links + mobile menu
3. **`Footer.astro`** — Copyright + social links

### Checklist:
- [ ] SEOHead merender meta tags yang benar
- [ ] Navbar responsive (desktop + mobile)
- [ ] Footer menampilkan social links

---

## Step 6: Buat Homepage — Section by Section

Kerjakan satu section pada satu waktu. Test setiap section sebelum lanjut ke berikutnya.

### 6.1 Hero Section
- Teks decoding "Rafandi Nova Fitra".
- Subtitle dan tag list.
- Background: **Living System V2** SVG network flow (menggunakan komponen Svelte `onMount`).
- Foto Profil dengan masking.

### 6.2 About Section
- Bio text
- Tech stack icon grid

### 6.3 Projects Section
- Buat `src/data/projects.yaml`
- Buat `ProjectCard.astro`
- Bento grid layout
- Glassmorphism card styling

### 6.4 Certifications Section
- Buat `src/data/certifications.yaml`
- Buat `CertCard.astro`
- Grid layout

### 6.5 Skills Section
- Buat `src/data/skills.yaml`
- Buat `SkillBadge.astro`
- Grouped by category

### 6.6 Contact Section
- Social links
- Email link
- (Opsional) Contact form via Formspree

### Checklist:
- [ ] Hero section dengan *Living System* dan text decode berfungsi
- [ ] About section menampilkan bio dan tech stack
- [ ] Projects section menampilkan cards dari YAML data
- [ ] Certifications section menampilkan sertifikat
- [ ] Skills section menampilkan skill badges grouped by category
- [ ] Contact section dengan social links
- [ ] Semua section responsive (mobile + desktop)
- [ ] Smooth scroll navigation berfungsi

---

## Step 7: Buat Blog System

1. Buat `src/content/config.ts` (schema, lihat `05-blog-system.md`)
2. Buat `src/pages/blog/index.astro` (daftar artikel)
3. Buat `src/pages/blog/[...slug].astro` (detail artikel)
4. Buat `BlogPostCard.astro` (card preview di list)
5. Tulis 1 artikel pertama sebagai test

### Checklist:
- [ ] Content collection schema sudah didefinisikan
- [ ] Halaman `/blog` menampilkan daftar artikel
- [ ] Halaman `/blog/[slug]` menampilkan isi artikel
- [ ] Artikel test bisa dibaca dengan formatting yang benar
- [ ] Gambar di artikel ter-render dengan benar

---

## Step 8: Animasi & Polish

1. **Scroll animations** — `ScrollReveal.svelte`:
   - Sections muncul dengan fade-in saat di-scroll
   - Gunakan Intersection Observer API

2. **Hover effects:**
   - Project cards: subtle glow + border accent.
   - Navbar links: color transition.
   - Buttons: opacity transition.

3. **Page Entrance Animation:**
   - Gunakan skrip staggered entrance untuk grid bento (`opacity`, `translateY`, `scale`).
   - Teks hero decode animasi pada 150ms.

4. **Page transitions:**
   - Smooth transition antar halaman (Astro View Transitions).

### Checklist:
- [ ] Staggered grid reveal animation berfungsi
- [ ] Hover effects smooth dan konsisten
- [ ] Living system network animation berjalan normal
- [ ] Semua transisi smooth tanpa janky/lag

---

## Step 9: SEO & Final Checks

Ikuti `07-seo-checklist.md` secara lengkap:

- [ ] robots.txt ada di public/
- [ ] Sitemap auto-generated
- [ ] Semua halaman punya meta tags yang benar
- [ ] Schema markup JSON-LD di homepage dan blog
- [ ] Semua gambar punya alt text
- [ ] Custom 404 page berfungsi
- [ ] Performance: Lighthouse score > 90

### Test Performance:
```bash
npm run build
npm run preview
# Buka di browser → DevTools → Lighthouse → Run audit
```

Target Lighthouse scores:
| Metric | Target |
|---|---|
| Performance | > 95 |
| Accessibility | > 90 |
| Best Practices | > 95 |
| SEO | > 95 |

---

## Step 10: Deploy

Ikuti `06-deployment.md`:

1. Push ke GitHub
2. Connect ke Vercel
3. Klaim domain dari Student Pack
4. Setup DNS
5. Verify HTTPS

### Checklist:
- [ ] Repository di GitHub
- [ ] Vercel build berhasil
- [ ] Custom domain terpasang
- [ ] HTTPS aktif
- [ ] Website accessible dari domain custom

---

## Step 11: Post-Deploy

1. Daftar Google Search Console
2. Submit sitemap
3. Request indexing
4. Update profil GitHub, LinkedIn, dll
5. Tulis artikel blog pertama yang "sungguhan"

### Checklist:
- [ ] Google Search Console terverifikasi
- [ ] Sitemap submitted
- [ ] Profil GitHub updated dengan link portfolio
- [ ] Profil LinkedIn updated dengan link portfolio
- [ ] Minimal 1 artikel blog sudah published

---

## 🎉 DONE!

Setelah semua checklist tercentang, portfolio kamu sudah:
- ✅ Live di internet dengan custom domain
- ✅ Bisa ditemukan di Google
- ✅ Punya blog untuk personal branding
- ✅ Terlihat profesional dan premium
- ✅ Biaya: Rp 0

Selamat! 🚀

# 📄 Pages & Sections — Detail Setiap Halaman

## Struktur Halaman

```
rafa.tech/                  → Homepage (single-page portfolio)
rafa.tech/blog              → Daftar semua artikel blog
rafa.tech/blog/[slug]       → Halaman detail satu artikel
rafa.tech/404               → Custom 404 page
```

---

## 1. Homepage — `/` (Single Page Portfolio)

Homepage adalah halaman utama portfolio. Semua section penting ada di satu halaman dengan smooth scroll navigation.

### Section A: Hero (Living System)

**Isi:**
- Animasi decoding text yang membentuk nama "Rafandi Nova Fitra".
- Subtitle: "BACKEND ARCHITECTURE", "CLOUD INFRASTRUCTURE", dll.
- Foto Profil dengan styling monochromatic premium.
- Background: **Living System V2** SVG Network animation. Animasi SVG node interaktif yang mensimulasikan trafik jaringan sistem ke komponen (Cache, Database, Worker, API, Client).

**Keputusan:** Animasi ini muncul seketika tanpa overlay blocking (*SEO friendly*). Teks melakukan efek decode matrix, disusul dengan kemunculan sistem *blueprint* di background. Hal ini memberi kesan *luxury engineering* tanpa mengorbankan Core Web Vitals.

---

### Section B: About

**Isi:**
- Foto profil (opsional)
- Bio singkat: siapa kamu, apa minatmu, apa yang sedang kamu kerjakan
- Tech stack yang dikuasai (icon grid dengan hover effect)
- Fun fact atau quote personal

**Layout:** Split layout — teks di kiri, tech stack icons di kanan (desktop). Stack vertically di mobile.

---

### Section C: Projects

**Isi:**
- 3-6 project terbaik
- Setiap project ditampilkan sebagai glassmorphism card
- Card berisi: screenshot, judul, deskripsi singkat, tech stack badges, link (demo/github)

**Layout:** Bento grid — card dengan ukuran berbeda-beda untuk visual interest.

**Data dari:** `src/data/projects.yaml`

```yaml
# Contoh format data project
- title: "GoRide Clone"
  description: "Web ojek online dengan real-time tracking menggunakan Leaflet, OSRM, dan WebSocket"
  tech: ["Next.js", "Supabase", "Leaflet", "OSRM", "WebSocket"]
  image: "ojek-online-preview.png"
  github: "https://github.com/rafa/goride-clone"
  demo: ""  # kosongkan jika tidak ada live demo
  featured: true  # tampil lebih besar di bento grid

- title: "Team Workspace"
  description: "Web workspace untuk manajemen tugas kelompok dengan AI task breakdown"
  tech: ["FastAPI", "Python", "Supabase"]
  github: "https://github.com/rafa/team-workspace"
  demo: ""
  featured: false
```

---

### Section D: Certifications

**Isi:**
- Daftar sertifikasi yang pernah didapat
- Setiap sertifikat ditampilkan sebagai card dengan:
  - Nama sertifikasi
  - Issuer (Google, Coursera, TryHackMe, dll)
  - Tanggal
  - Link verifikasi (klik untuk buka credential)
  - Gambar sertifikat (opsional, klik untuk zoom)

**Layout:** Grid 2-3 kolom. Hover effect: card glow.

**Data dari:** `src/data/certifications.yaml`

---

### Section E: Skills

**Isi:**
- Daftar skill/teknologi yang dikuasai
- Dikelompokkan per kategori:
  - **Languages:** Python, JavaScript, TypeScript, SQL
  - **Frontend:** Svelte, Astro, React (basic), HTML/CSS
  - **Backend:** FastAPI, Supabase, PostgreSQL
  - **Tools:** Git, Linux (CachyOS), Docker, VS Code
  - **Learning:** Cybersecurity, Networking

**Layout:** Grid badges/pills dengan icon, grouped by category.

**Data dari:** `src/data/skills.yaml`

---

### Section F: Contact

**Isi:**
- Heading: "Let's Connect" atau "Get In Touch"
- Link ke:
  - Email (mailto:)
  - GitHub
  - LinkedIn
- Opsional: contact form sederhana (bisa pakai Formspree — gratis, tanpa backend)

**Layout:** Centered, minimal, clean.

**Data dari:** `src/data/socials.yaml`

---

## 2. Blog List — `/blog`

**Isi:**
- Heading: "Blog" atau "Articles"
- Daftar semua artikel, sorted by date (terbaru di atas)
- Setiap artikel ditampilkan sebagai card:
  - Judul
  - Tanggal publish
  - Deskripsi singkat
  - Tags/kategori
  - Hero image (jika ada)
- Opsional: filter by tag

**Layout:** Single column list atau 2-column grid.

---

## 3. Blog Detail — `/blog/[slug]`

**Isi:**
- Judul artikel (h1)
- Tanggal publish
- Tags
- Hero image (jika ada)
- Isi artikel (rendered dari Markdown)
- Table of contents (opsional, auto-generated dari headings)
- Tombol kembali ke daftar blog
- Opsional: Giscus comments (komentar via GitHub Discussions)

**Layout:** Centered single column, max-width ~720px untuk readability optimal.

---

## 4. Custom 404 — `/404`

**Isi:**
- Pesan kreatif (contoh: terminal style "404: page not found")
- Link kembali ke homepage
- Sesuai tema terminal

---

## Navbar (Global)

**Isi:**
- Logo/nama "RAFA" di kiri
- Navigation links di kanan: Home / Projects / Blog / Contact
- Mobile: hamburger menu atau slide-in menu
- Scroll behavior: transparent saat di atas, blur glass saat di-scroll

**Keputusan:** Navbar sticky (fixed) di atas supaya navigasi selalu accessible.

---

## Footer (Global)

**Isi:**
- Copyright
- Social links (GitHub, LinkedIn, Email)
- "Built with Astro & Svelte" (opsional)

**Layout:** Minimal, satu baris di desktop.

# 📁 Architecture — Struktur Folder & Arsitektur Project

## Folder Structure

```
rafa-portfolio/
├── public/
│   ├── favicon.svg                    # Favicon website
│   ├── robots.txt                     # Instruksi untuk search engine crawler
│   └── fonts/                         # Custom fonts (jika self-host)
│       ├── Inter-Variable.woff2
│       └── JetBrainsMono-Variable.woff2
│
├── src/
│   ├── assets/                        # Gambar yang perlu dioptimasi oleh Astro
│   │   ├── blog/                      # Gambar untuk artikel blog
│   │   │   └── supabase-setup.png
│   │   ├── certifications/            # Gambar sertifikat
│   │   │   └── google-it-support.png
│   │   ├── projects/                  # Screenshot project
│   │   │   └── ojek-online-preview.png
│   │   └── profile.jpg               # Foto profil
│   │
│   ├── components/                    # Komponen reusable
│   │   ├── astro/                     # Komponen Astro (static, no JS)
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   ├── ProjectCard.astro
│   │   │   ├── CertCard.astro
│   │   │   ├── SkillBadge.astro
│   │   │   ├── BlogPostCard.astro
│   │   │   └── SEOHead.astro
│   │   └── svelte/                    # Komponen Svelte (interaktif, butuh JS)
│   │       ├── Terminal.svelte        # Terminal interaktif di hero
│   │       ├── ScrollReveal.svelte    # Animasi muncul saat scroll
│   │       └── ThemeToggle.svelte     # (opsional) Dark/Light toggle
│   │
│   ├── content/                       # Astro Content Collections
│   │   ├── config.ts                  # Schema definisi untuk blog
│   │   └── blog/                      # File Markdown artikel blog
│   │       ├── cara-setup-supabase.md
│   │       └── belajar-nmap.md
│   │
│   ├── data/                          # Data statis (JSON/YAML)
│   │   ├── projects.yaml              # Daftar project
│   │   ├── certifications.yaml        # Daftar sertifikasi
│   │   ├── skills.yaml                # Daftar skills/tech stack
│   │   └── socials.yaml               # Link sosial media
│   │
│   ├── layouts/                       # Layout halaman
│   │   ├── BaseLayout.astro           # Layout utama (head, navbar, footer)
│   │   └── BlogPostLayout.astro       # Layout khusus artikel blog
│   │
│   ├── pages/                         # Halaman (file-based routing)
│   │   ├── index.astro                # Homepage (single page portfolio)
│   │   ├── blog/
│   │   │   ├── index.astro            # Daftar semua artikel blog
│   │   │   └── [...slug].astro        # Halaman detail artikel (dynamic)
│   │   ├── 404.astro                  # Custom 404 page
│   │   └── rss.xml.ts                 # RSS feed (opsional, bagus untuk SEO)
│   │
│   └── styles/                        # Global styles
│       ├── global.css                 # CSS variables, reset, base styles
│       ├── typography.css             # Font faces, heading styles
│       ├── animations.css             # Keyframes dan animasi
│       └── utilities.css              # Helper classes
│
├── astro.config.mjs                   # Konfigurasi Astro
├── package.json
├── tsconfig.json
└── README.md
```

## Keputusan Arsitektur

### 1. Pemisahan Komponen Astro vs Svelte

| Tipe | Kapan digunakan | Contoh |
|---|---|---|
| **Astro (.astro)** | Komponen statis, tidak butuh interaktivitas client-side | Navbar, Footer, ProjectCard, SEOHead |
| **Svelte (.svelte)** | Komponen yang butuh JavaScript di browser | Terminal interaktif, ScrollReveal, animasi hover |

**Alasan:** Astro mengirimkan **zero JavaScript** untuk komponen `.astro`. JavaScript hanya dikirim untuk komponen Svelte yang di-render sebagai "islands" dengan directive `client:visible` atau `client:load`. Ini membuat website sangat cepat.

### 2. Data di YAML, bukan hardcode

**Keputusan:** Semua data (projects, certifications, skills) disimpan di file YAML terpisah di folder `src/data/`.

**Alasan:**
- Mudah di-update tanpa menyentuh kode komponen
- Bisa di-loop dan di-render secara dinamis
- Jelas dan rapi — data terpisah dari presentasi
- YAML lebih mudah dibaca daripada JSON untuk data sederhana

### 3. Content Collections untuk Blog

**Keputusan:** Blog menggunakan Astro Content Collections dengan schema validation via Zod.

**Alasan:**
- Type-safe: schema memastikan setiap artikel punya field yang benar (title, date, description, dll)
- Auto-generated types: TypeScript tahu field apa saja yang tersedia
- Built-in: tidak perlu install library tambahan

### 4. File-based Routing

**Keputusan:** Menggunakan file-based routing bawaan Astro.

```
src/pages/index.astro       → rafa.tech/
src/pages/blog/index.astro  → rafa.tech/blog
src/pages/blog/[...slug]    → rafa.tech/blog/judul-artikel
```

**Alasan:** Simpel, mudah dipahami, tidak perlu konfigurasi router terpisah.

### 5. Styles: Global CSS Files

**Keputusan:** CSS dibagi menjadi 4 file berdasarkan concern.

| File | Isi |
|---|---|
| `global.css` | CSS variables (design tokens), reset, body defaults |
| `typography.css` | @font-face, heading hierarchy, text utilities |
| `animations.css` | @keyframes, transition classes |
| `utilities.css` | Helper classes (container, flex, grid helpers) |

**Alasan:** Modular tapi tidak over-engineered. Mudah di-maintain dan di-debug karena setiap file punya tanggung jawab yang jelas.

# 🔍 SEO Checklist — Supaya Muncul di Google

## Tujuan
Ketika seseorang mengetik nama kamu di Google (misal: "Rafa backend developer" atau "rafa.tech"), website portfolio-mu muncul di halaman pertama.

---

## Phase 1: Fondasi SEO (Saat Build)

### 1.1 Meta Tags di Setiap Halaman

Buat komponen `SEOHead.astro` yang dipakai di semua halaman:

```html
<!-- Wajib di setiap halaman -->
<title>{title} | Rafa — Backend Developer</title>
<meta name="description" content="{description}" />
<meta name="author" content="Rafa" />

<!-- Open Graph (untuk preview saat di-share di social media) -->
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="{ogImage}" />
<meta property="og:url" content="{canonicalURL}" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="{ogImage}" />

<!-- Canonical URL (mencegah duplicate content) -->
<link rel="canonical" href="{canonicalURL}" />
```

### 1.2 Heading Hierarchy
- Setiap halaman hanya punya **1 buah `<h1>`**
- Urutan heading harus benar: h1 → h2 → h3 (jangan loncat)
- Contoh homepage: `<h1>Rafa</h1>` di hero section

### 1.3 Semantic HTML
```html
<!-- Gunakan elemen semantik -->
<header>  → untuk navbar
<main>    → untuk konten utama
<section> → untuk setiap section di homepage
<article> → untuk setiap blog post
<footer>  → untuk footer
<nav>     → untuk navigasi
```

### 1.4 Sitemap
Install `@astrojs/sitemap`:
```bash
npm install @astrojs/sitemap
```

Di `astro.config.mjs`:
```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rafa.tech',  // ganti dengan domain kamu
  integrations: [sitemap()],
});
```

Astro akan auto-generate `sitemap.xml` saat build.

### 1.5 Robots.txt
File: `public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://rafa.tech/sitemap-index.xml
```

### 1.6 Schema Markup (JSON-LD)
Tambahkan di homepage untuk memberitahu Google bahwa ini portfolio seseorang:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rafa",
  "url": "https://rafa.tech",
  "jobTitle": "Backend Developer",
  "description": "IT Student specializing in backend development with FastAPI, Supabase, and SvelteKit",
  "sameAs": [
    "https://github.com/rafa",
    "https://linkedin.com/in/rafa"
  ],
  "knowsAbout": ["Python", "FastAPI", "Supabase", "SvelteKit", "PostgreSQL"]
}
</script>
```

Untuk halaman blog, gunakan schema `BlogPosting`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{title}",
  "description": "{description}",
  "datePublished": "{pubDate}",
  "author": {
    "@type": "Person",
    "name": "Rafa"
  }
}
</script>
```

---

## Phase 2: Setelah Deploy

### 2.1 Google Search Console
1. Buka [search.google.com/search-console](https://search.google.com/search-console)
2. Klik "Add Property"
3. Pilih "Domain" → masukkan `rafa.tech`
4. Verifikasi via DNS TXT record:
   - Tambahkan TXT record di Cloudflare/Namecheap
   - Value: yang diberikan Google
5. Setelah terverifikasi:
   - Submit sitemap: `https://rafa.tech/sitemap-index.xml`
   - Request indexing untuk homepage

### 2.2 Google Analytics (Opsional)
- Bisa pakai Vercel Analytics (gratis dengan Pro via Student Pack)
- Atau Umami (self-host, open-source, privacy-friendly)
- Atau Google Analytics 4 (paling lengkap tapi heavy)

**Rekomendasi:** Vercel Analytics — sudah built-in, ringan, nggak perlu setup banyak.

---

## Phase 3: Ongoing SEO

### 3.1 Tulis Blog Secara Rutin
- Target: minimal 1-2 artikel per bulan
- Setiap artikel = satu halaman baru yang bisa di-index Google
- Gunakan keyword yang relevan di title dan description

### 3.2 Cross-Linking
| Platform | Aksi |
|---|---|
| GitHub | Profile → Website: `https://rafa.tech` |
| LinkedIn | Contact Info → Website: `https://rafa.tech` |
| WhatsApp | About: `rafa.tech` |
| Instagram Bio | `rafa.tech` |
| Email Signature | Tambahkan link portfolio |

### 3.3 Backlink Building (Advanced)
- Share artikel blog di forum (Dev.to, Reddit r/webdev, Kaskus subforum programming)
- Jawab pertanyaan di StackOverflow dan link ke artikel terkait di blog
- Kontribusi ke open source dan cantumkan portfolio di profil

---

## Checklist SEO

### Saat Build:
- [ ] Setiap halaman punya `<title>` unik dan deskriptif
- [ ] Setiap halaman punya `<meta description>` unik
- [ ] Hanya 1 `<h1>` per halaman
- [ ] Heading hierarchy benar (h1 → h2 → h3)
- [ ] Semantic HTML digunakan (header, main, section, article, footer)
- [ ] Schema markup JSON-LD di homepage (Person)
- [ ] Schema markup JSON-LD di blog posts (BlogPosting)
- [ ] Sitemap.xml auto-generated
- [ ] Robots.txt sudah ada
- [ ] Canonical URL di setiap halaman
- [ ] Open Graph meta tags di setiap halaman
- [ ] Gambar punya alt text yang deskriptif
- [ ] Website responsive (mobile-friendly)
- [ ] Loading time < 3 detik

### Setelah Deploy:
- [ ] Daftar Google Search Console
- [ ] Verifikasi domain
- [ ] Submit sitemap
- [ ] Request indexing homepage
- [ ] Pasang analytics
- [ ] Update profil GitHub, LinkedIn, dll dengan link portfolio
- [ ] Tulis minimal 1 artikel blog pertama

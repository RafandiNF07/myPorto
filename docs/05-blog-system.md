# 📝 Blog System — Cara Kerja, Format, dan Workflow

## Cara Kerja Blog di Astro

Astro Content Collections memungkinkan kamu menulis blog dalam file Markdown biasa. Astro akan:
1. Membaca semua file `.md` di `src/content/blog/`
2. Memvalidasi frontmatter (metadata) sesuai schema yang kamu tentukan
3. Men-generate halaman HTML untuk setiap artikel secara otomatis
4. Mengoptimasi gambar yang direferensikan

---

## Schema Blog (Content Collection Config)

File: `src/content/config.ts`

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),                          // Judul artikel (wajib)
    description: z.string(),                    // Deskripsi singkat untuk SEO (wajib)
    pubDate: z.coerce.date(),                   // Tanggal publish (wajib)
    updatedDate: z.coerce.date().optional(),    // Tanggal update (opsional)
    heroImage: image().optional(),              // Gambar utama artikel (opsional)
    tags: z.array(z.string()).default([]),       // Tags/kategori (opsional)
    draft: z.boolean().default(false),          // Draft mode — tidak di-publish (opsional)
  }),
});

export const collections = { blog };
```

### Alasan Schema
- **Type-safe:** Kalau kamu lupa isi `title` atau typo di field, Astro akan error saat build — mencegah bug sebelum deploy
- **Konsisten:** Semua artikel punya format yang sama
- **`draft` field:** Memungkinkan kamu menulis artikel tapi belum di-publish

---

## Format Artikel Blog

File: `src/content/blog/nama-artikel.md`

```markdown
---
title: "Cara Setup Supabase dengan SvelteKit"
description: "Tutorial lengkap mengintegrasikan Supabase sebagai backend untuk project SvelteKit, dari auth hingga database."
pubDate: 2026-07-05
tags: ["supabase", "sveltekit", "tutorial"]
heroImage: "../../assets/blog/supabase-setup.png"
draft: false
---

# Cara Setup Supabase dengan SvelteKit

## Kenapa Supabase?

Supabase adalah alternatif open-source dari Firebase yang menyediakan...

## Langkah 1: Install Dependencies

\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

## Langkah 2: Konfigurasi Client

\`\`\`typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);
\`\`\`

## Kesimpulan

Dengan setup ini, kamu sudah bisa...

---

*Artikel ini ditulis sebagai dokumentasi pribadi. Jika ada pertanyaan, silakan hubungi saya via [GitHub](https://github.com/rafa).*
```

---

## Cara Menambah Gambar di Blog

### Opsi 1: Gambar di folder assets (dioptimasi Astro)

```
src/assets/blog/supabase-setup.png
```

Di Markdown:
```markdown
heroImage: "../../assets/blog/supabase-setup.png"
```

Atau di dalam artikel:
```markdown
![Diagram arsitektur Supabase](../../assets/blog/supabase-diagram.png)
```

**Keuntungan:** Astro otomatis compress, convert ke WebP, dan generate responsive sizes.

### Opsi 2: Gambar di folder public (tanpa optimasi)

```
public/blog-images/screenshot.png
```

Di Markdown:
```markdown
![Screenshot](/blog-images/screenshot.png)
```

**Keuntungan:** Path lebih simpel. Cocok untuk gambar yang sudah kecil atau SVG.

### Rekomendasi
Gunakan **Opsi 1** (assets) untuk gambar besar (screenshot, diagram). Gunakan **Opsi 2** (public) untuk gambar kecil atau SVG.

---

## Workflow Menulis & Publish Blog

```
1. Buat file baru:
   src/content/blog/judul-artikel.md

2. Tulis frontmatter + konten dalam Markdown

3. (Opsional) Set draft: true jika belum siap publish

4. Test lokal:
   npm run dev → buka localhost → cek artikel

5. Commit & push:
   git add .
   git commit -m "new post: judul artikel"
   git push

6. Vercel auto-deploy → artikel live dalam 30 detik
```

---

## Fitur Blog Tambahan (Opsional, bisa ditambah nanti)

| Fitur | Cara Implementasi | Prioritas |
|---|---|---|
| **RSS Feed** | `src/pages/rss.xml.ts` menggunakan `@astrojs/rss` | Tinggi (bagus untuk SEO) |
| **Table of Contents** | Auto-generate dari headings di artikel | Sedang |
| **Reading Time** | Hitung word count / 200 wpm | Rendah |
| **Komentar** | Giscus (gratis, via GitHub Discussions) | Rendah |
| **Search** | Pagefind (static search, no backend) | Rendah |
| **Related Posts** | Filter by matching tags | Rendah |

---

## Ide Artikel Pertama untuk SEO

| Judul | Target keyword |
|---|---|
| "Cara Setup Supabase dengan SvelteKit" | supabase sveltekit tutorial |
| "Membuat Proxy Server di OpenBSD" | openbsd proxy server |
| "FastAPI Layered Architecture untuk Pemula" | fastapi architecture |
| "Review CachyOS: Linux untuk Developer" | cachyos linux review |
| "Pengalaman Pertama di TryHackMe" | tryhackme beginner |

Setiap artikel = satu pintu masuk baru dari Google ke portfolio kamu.

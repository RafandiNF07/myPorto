# 🛠️ Tech Stack — Keputusan & Alasan

## Framework: Astro + Svelte Components

### Keputusan
Menggunakan **Astro v5** sebagai framework utama dengan **Svelte** sebagai UI framework untuk komponen interaktif.

### Alasan
| Pertimbangan | Astro + Svelte | SvelteKit Murni | HTML/CSS/JS Murni |
|---|---|---|---|
| Blog system | ✅ Content Collections built-in | ❌ Perlu setup mdsvex manual | ❌ Tidak ada |
| SEO | ✅ Static HTML by default | ⚠️ Perlu konfigurasi SSG | ✅ Bagus tapi manual |
| Interaktivitas | ✅ Islands architecture | ✅ Full SPA | ❌ Terbatas |
| Performance | ✅ Zero JS by default, JS hanya di komponen interaktif | ⚠️ JS bundle lebih besar | ✅ Ringan |
| Gambar blog | ✅ `<Image>` component dengan auto-optimization | ❌ Perlu setup manual | ❌ Manual |
| Familiar | ✅ Rafa sudah pernah pakai Astro & Svelte | ✅ Sangat familiar | ✅ Pasti bisa |

### Kesimpulan
Astro unggul karena **Content Collections** untuk blog dan **static-first** untuk SEO. Svelte digunakan untuk bagian yang butuh interaktivitas (terminal, animasi hover, dll) lewat Astro's Islands Architecture — artinya JavaScript hanya di-load untuk komponen yang memang butuh, bukan seluruh halaman.

---

## Styling: Tailwind CSS + shadcn-svelte

### Keputusan
Menggunakan **Tailwind CSS** dipadukan dengan **shadcn-svelte** untuk komponen UI.

### Alasan
- Tailwind CSS sangat cocok untuk *rapid UI development* dan sangat optimal dalam production (bundle size kecil berkat *purge* bawaan).
- shadcn-svelte memberikan komponen *accessible* bergaya premium (terutama untuk tema dark/bento grid) dengan kode yang bisa kita miliki (copy-paste), bukan *npm dependency* yang tertutup.
- Mudah menerjemahkan token desain dari prototipe HTML ke file konfigurasi Tailwind (`tailwind.config.mjs`).
- Astro memiliki integrasi kelas satu dengan Tailwind CSS.

---

## Blog: Markdown (Astro Content Collections)

### Keputusan
Blog ditulis dalam file **Markdown (.md)** dan dikelola oleh **Astro Content Collections**. Tidak menggunakan CMS atau backend.

### Alasan
| Pertimbangan | Markdown di Git | CMS (Directus/Strapi) |
|---|---|---|
| Penulis | Hanya Rafa (1 orang) | Cocok untuk multi-author |
| Biaya | ✅ Gratis | ❌ Perlu hosting CMS |
| Maintenance | ✅ Nol — tidak ada server | ❌ Perlu maintain server CMS |
| Workflow | `git commit` → auto deploy | Login dashboard → publish |
| Version control | ✅ Git tracks semua perubahan | ⚠️ Tergantung CMS |
| Keamanan | ✅ Tidak ada attack surface | ❌ CMS bisa diserang |

### Kesimpulan
Untuk blog personal dengan satu penulis yang nyaman di terminal, Markdown di Git adalah solusi paling efisien, gratis, dan aman.

---

## Hosting: Vercel

### Keputusan
Deploy di **Vercel** (free tier, atau Pro via GitHub Student Pack).

### Alasan
- Auto deploy dari GitHub push
- HTTPS otomatis
- Preview deployments untuk setiap branch/PR
- Analytics built-in (Pro via Student Pack)
- Edge network global — website cepat diakses dari mana saja
- Integrasi sempurna dengan Astro

### Alternatif Cadangan
- Cloudflare Pages (jika Vercel ada masalah)
- GitHub Pages (paling simpel tapi fitur terbatas)

---

## Domain: `.me` atau `.tech` (GitHub Student Pack)

### Keputusan
Menggunakan domain gratis dari GitHub Student Developer Pack.

### Opsi
| Domain | Provider | Gratis via Student Pack |
|---|---|---|
| `rafa.me` | Namecheap | ✅ 1 tahun gratis |
| `rafa.tech` | get.tech | ✅ 1 tahun gratis |

### Rekomendasi
- `.me` → lebih personal, cocok untuk portfolio
- `.tech` → lebih "developer", cocok untuk tech branding

Pilih salah satu. Setelah 1 tahun gratis habis, bisa direnew atau migrate ke `.my.id` (~Rp 13.000/tahun) sebagai alternatif murah.

---

## Ringkasan Tech Stack Final

```
┌─────────────────────────────────────────┐
│           TECH STACK FINAL              │
├─────────────────────────────────────────┤
│  Framework    : Astro v5 + Svelte       │
│  Styling      : Tailwind CSS + shadcn   │
│  Blog         : Markdown (Content Col.) │
│  Hosting      : Vercel (Free/Pro)       │
│  Domain       : .me / .tech (Student)   │
│  Backend      : ❌ Tidak ada            │
│  CMS          : ❌ Tidak ada            │
│  Database     : ❌ Tidak ada            │
│  Biaya Total  : Rp 0                    │
└─────────────────────────────────────────┘
```

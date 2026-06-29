# 🚀 Deployment — Cara Deploy, Domain, dan Hosting

## Hosting: Vercel

### Langkah Deploy

#### 1. Push project ke GitHub
```bash
cd rafa-portfolio
git init
git add .
git commit -m "initial commit: portfolio website"
git remote add origin https://github.com/rafa/portfolio.git
git push -u origin main
```

#### 2. Connect ke Vercel
1. Buka [vercel.com](https://vercel.com)
2. Sign in dengan GitHub
3. Klik "Add New" → "Project"
4. Pilih repository `portfolio`
5. Framework preset: pilih **Astro**
6. Klik "Deploy"
7. Tunggu build selesai (~1-2 menit)
8. Website live di `portfolio-xxx.vercel.app` ✅

#### 3. Setelah ini, setiap `git push` akan otomatis trigger re-deploy.

---

## Domain Setup

### Langkah Klaim Domain Gratis (GitHub Student Pack)

#### Opsi A: `.me` domain via Namecheap
1. Buka [education.github.com/pack](https://education.github.com/pack)
2. Cari "Namecheap" → Klik "Get access"
3. Login/daftar Namecheap
4. Klaim free `.me` domain (1 tahun)
5. Pilih nama domain: `rafa.me` atau `rafadev.me`

#### Opsi B: `.tech` domain via get.tech
1. Buka [education.github.com/pack](https://education.github.com/pack)
2. Cari "get.tech" → Klik "Get access"
3. Klaim free `.tech` domain (1 tahun)
4. Pilih nama domain: `rafa.tech`

### Connect Domain ke Vercel

#### 1. Di Vercel Dashboard:
1. Buka project → Settings → Domains
2. Tambahkan domain: `rafa.me` (atau `.tech`)
3. Vercel akan memberikan DNS records yang perlu ditambahkan

#### 2. Di Namecheap/get.tech DNS Settings:
Tambahkan record berikut:

| Type | Name | Value |
|---|---|---|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

#### 3. Tunggu DNS propagation (5 menit - 24 jam)

#### 4. Vercel otomatis setup HTTPS (SSL) ✅

---

## Alternatif: Cloudflare sebagai DNS Manager

### Keputusan
Menggunakan Cloudflare sebagai DNS manager (gratis) meskipun domain dari Namecheap.

### Alasan
- DNS propagation lebih cepat
- DDoS protection gratis
- Analytics gratis
- CDN gratis (website lebih cepat diakses global)
- Page rules dan redirect management

### Langkah
1. Daftar Cloudflare (gratis)
2. Tambahkan domain
3. Cloudflare akan memberikan 2 nameserver
4. Di Namecheap → Domain → Nameservers → Custom DNS → masukkan nameserver Cloudflare
5. Di Cloudflare → DNS → tambahkan record A dan CNAME sesuai Vercel
6. Pastikan Proxy status **OFF** (DNS only/grey cloud) untuk Vercel

---

## Environment Variables

Untuk portfolio statis, kemungkinan tidak butuh env vars. Tapi jika nanti menambahkan fitur seperti contact form (Formspree), tambahkan di Vercel:

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Tambahkan key-value pair
3. Di kode, akses via `import.meta.env.VARIABLE_NAME`

---

## Checklist Deployment

- [ ] Project pushed ke GitHub
- [ ] Connected ke Vercel
- [ ] Build berhasil tanpa error
- [ ] Domain diklaim dari Student Pack
- [ ] DNS records ditambahkan
- [ ] HTTPS aktif (otomatis dari Vercel)
- [ ] Website accessible via custom domain
- [ ] `www` redirect ke non-www (atau sebaliknya)
- [ ] 404 page berfungsi
- [ ] Test dari mobile browser

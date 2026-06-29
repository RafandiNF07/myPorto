# RAFA PORTFOLIO — Design Specification v1.0

> **Context:** Single-page portfolio untuk backend engineer yang fokus pada system architecture, Linux, dan distributed systems.
>
> **Target file:** `rafa-portfolio.html` (single HTML file dengan Tailwind CDN)
>
> **Instruksi:** Jangan redesign dari nol. Gunakan prototype yang sudah ada sebagai base. Refine visual language sesuai spesifikasi ini. Pertahankan semua elemen structural yang sudah ada (bento grid, living system, boot sequence). Tambahkan section baru sesuai flow di bawah.

---

## 1. DESIGN DIRECTION

### Target Feel
- Luxury engineering
- Dark premium
- Matte material surfaces
- Subtle, deliberate
- Mature, elegant, minimal
- Timeless

### Reference Brands
- Linear
- Vercel
- Porsche Design
- Bang & Olufsen
- Aesop

### BUKAN Ini
- Cyberpunk / neon hacker
- Apple glassmorphism
- Bright SaaS dashboard
- Flashy animations
- Startup landing page

### Personality Statement
> Visitor harus berpikir: *"This developer designs systems."*
> Bukan: *"This developer likes flashy animations."*

---

## 2. COLOR PALETTE (Opsi B — Deep Neutral + Sage Emerald)

### Backgrounds
```
Page Background:     #09090B     ← near-black, neutral (BUKAN biru)
Surface/Panel:       #131316     ← neutral charcoal
Card:                #1C1C20     ← slightly lifted charcoal
```

### Borders
```
Default:             rgba(255,255,255,0.07)
Hover:               rgba(255,255,255,0.12)
Divider:             rgba(255,255,255,0.05)
```

### Accent Colors
```
Primary (Sage):      #4A9E8E     ← warm desaturated sage-emerald
Primary Hover:       #5CB8A6     ← lighter sage
Secondary (Copper):  #B8845C     ← muted warm copper
Secondary Hover:     #CFA07A     ← lighter copper
```

### Text
```
Heading:             #FFFFFF     ← pure white (hanya h1, h2, h3)
Body:                #E4E4E7     ← cool soft white
Secondary:           #A1A1AA     ← zinc gray (MINIMUM opacity untuk text)
Muted:               #71717A     ← zinc 500 (label, caption, date)
```

### Aturan Penting
- **JANGAN** gunakan opacity text di bawah `#71717A` / `paper/40`. Terlalu gelap = nggak readable.
- **Sage emerald** (`#4A9E8E`) = primary accent. Dipakai untuk: active states, badges, CTA border, link hover, status dot aktif.
- **Copper** (`#B8845C`) = secondary punctuation. Dipakai untuk: secondary badges, divider accents, "exploring" tag, hover border alternatif. HARUS muncul di minimal 4-5 tempat supaya terasa sebagai bagian dari palette.
- Hindari bright cyan, neon green, saturated blue.

---

## 3. MATERIAL SYSTEM

### 3.1 Noise/Grain Texture (WAJIB)
- Tambahkan SVG noise overlay ke `<body>` atau sebagai pseudo-element.
- Opacity: **2-4%** (hampir invisible tapi otak register "ada texture").
- Blend mode: `overlay` atau `soft-light`.
- Ini membuat semua surface terasa "matte ceramic" bukan "plastik digital."

```css
/* Contoh implementasi */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9998;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,..."); /* inline SVG noise */
    mix-blend-mode: overlay;
}
```

### 3.2 Card Surface
- **Background:** Subtle radial gradient dari center — sedikit lebih terang di tengah, gelap di edge.
  ```css
  background: radial-gradient(ellipse at 50% 0%, #222228 0%, #1C1C20 70%);
  ```
- **Top specular line:** `inset 0 1px 0 rgba(255,255,255,0.05)` — simulasi cahaya ambient di edge atas.
- **JANGAN** glossy. JANGAN heavy glassmorphism. Surface harus terasa **matte**.

### 3.3 Border Treatment — "Etched"
Bukan garis outline biasa. Simulasi panel yang di-mill:
- **Top + left edge:** `rgba(255,255,255,0.07)` — light catch
- **Bottom + right edge:** implicitly darker karena box-shadow

Implementasi sederhana: satu border `rgba(255,255,255,0.07)` + `inset 0 1px 0 rgba(255,255,255,0.05)` sudah cukup untuk efek ini.

### 3.4 Elevation System (3 Level)

| Level | Gunakan untuk | Box Shadow |
|---|---|---|
| **Ground** | Page background | Tidak ada |
| **Raised** | Card utama, bento items | `0 8px 32px -8px rgba(0,0,0,0.6)` |
| **Floating** | Navbar, hover state, modal | `0 16px 48px -12px rgba(0,0,0,0.8)` |

### 3.5 Blueprint Grid
- PERTAHANKAN grid pattern di background.
- Opacity: **2-3%** (sekarang terlalu terang di prototype).
- Grid harus terasa sebagai **subtle texture**, bukan elemen visual dominan.
  ```css
  background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  ```

---

## 4. TYPOGRAPHY

### Font Stack (Jangan Ganti)
```
Display:  Space Grotesk (500, 600, 700, 800)
Body:     IBM Plex Sans (400, 500, 600, 700)
Mono:     IBM Plex Mono (400, 500, 600)
```

### Hierarchy

| Element | Font | Weight | Size | Color |
|---|---|---|---|---|
| Hero heading | Space Grotesk | 800 | 4.5rem (desktop) | `#FFFFFF` |
| Section heading | Space Grotesk | 700 | 2rem - 2.5rem | `#FFFFFF` |
| Card title | Space Grotesk | 700 | 1.25rem - 1.875rem | `#FFFFFF` |
| Body text | IBM Plex Sans | 400 | 0.875rem - 1rem | `#E4E4E7` |
| Secondary text | IBM Plex Sans | 400 | 0.875rem | `#A1A1AA` |
| Label/caption | IBM Plex Mono | 500 | 0.625rem (10px) | `#71717A` |
| Tag/badge | IBM Plex Mono | 600 | 0.5625rem (9px) | `#4A9E8E` atau `#B8845C` |

---

## 5. SECTION FLOW & LAYOUT

### Urutan Section (7 total)

```
┌─────────────────────────────────────────────┐
│  1. HERO                          [col 1-12] │
│     Living System background + photo + text  │
├──────────────────────┬──────────────────────┤
│  2. WHO I AM         │  2b. CORE EXPERTISE  │
│     [col 1-5]        │     [col 6-12]       │
│     Paragraf personal│     Tech stack grid   │
├──────────────────────┴──────────────────────┤
│  3. FEATURED PROJECTS               [col 1-12 bento] │
│     2-3 project cards dalam bento grid       │
├──────────────────────┬──────────────────────┤
│  4. TECHNICAL WRITING│  5. PROOF OF         │
│     [col 1-6]        │     KNOWLEDGE        │
│     Blog/notes       │     [col 7-12]       │
│                      │     Certs + badges    │
├──────────────────────┴──────────────────────┤
│  6. CONNECT / CTA                 [col 1-12] │
│     Email + social links + CTA button        │
├─────────────────────────────────────────────┤
│  7. FOOTER                        [col 1-12] │
│     Copyright + nav secondary + social icons │
└─────────────────────────────────────────────┘
```

### Section Details

#### 1. HERO (Sudah ada — refine saja)
- Living System sebagai background (opacity diturunkan).
- Kiri: label `FIG. 01` + heading + subheading.
- Kanan: foto (gunakan placeholder Unsplash untuk prototype).
- **Tambahkan:** satu baris kecil di bawah heading sebagai tagline ringkas.
- Boot sequence intro animation tetap dipertahankan.

#### 2. WHO I AM + CORE EXPERTISE (BARU)
**Kiri — Who I Am (col 1-5):**
- Label mono: `FIG. 02 — ABOUT`
- 1-2 paragraf singkat tentang siapa Rafa: background, passion, approach.
- Tone: manusia, bukan corporate. Tapi tetap profesional.
- Contoh placeholder:
  > *"I'm a backend-focused engineer who treats infrastructure like architecture — every endpoint has a reason, every service has a boundary. I study how systems fail so I can build ones that don't."*

**Kanan — Core Expertise (col 6-12):**
- Grid/list tech stack yang dikuasai.
- Kelompokkan per kategori:
  - **Languages:** Go, Python, JavaScript/TypeScript
  - **Infrastructure:** Docker, Linux, Nginx, Redis
  - **Cloud:** AWS, Azure (basics)
  - **Database:** PostgreSQL, Redis, Supabase
  - **Security:** CTF, Penetration Testing (learning)
- Di bawah grid, satu baris muted:
  `↳ Currently exploring: Rust, Kubernetes`
- Tampilkan sebagai small chips/tags dalam grid, BUKAN list panjang.

#### 3. FEATURED PROJECTS (Refine dari yang ada)
- Bento grid untuk 2-3 project.
- Layout saran:
  - 1 project besar (col 1-7)
  - 1 project medium (col 8-12)
  - Atau: 1 besar (col 1-12) + 2 kecil side by side (col 1-6, col 7-12)
- Setiap project card berisi:
  - Label `FIG. 0X`
  - Judul project
  - 1-2 kalimat deskripsi
  - Tech tags (chips)
  - CTA button: "Case Study →"
  - Background: subtle architectural SVG hint (sudah ada di prototype)
- **Konten placeholder project (untuk prototype):**
  1. Supabase Auth Gateway (sudah ada)
  2. Distributed Task Queue — *"Event-driven job processing system with Redis Streams, built to handle async workloads across multiple workers."* Tags: Go, Redis Streams, Docker
  3. (Opsional) API Monitoring Dashboard — *"Real-time health monitoring for microservices with custom alerting and Prometheus integration."* Tags: Python, FastAPI, Prometheus

#### 4. TECHNICAL WRITING (Refine dari Blog section)
- Label: `LATEST NOTE` atau `TECHNICAL WRITING`
- Featured article dengan judul + excerpt.
- Archive list di bawah (2-3 item).
- Semua text color mengikuti palette baru (bukan `text-ink` — itu untuk light cards yang sudah dihapus).

#### 5. PROOF OF KNOWLEDGE (Refine dari Certifications)
- Judul tetap "Proof of Knowledge"
- Card cert items dengan logo, nama, issuer, status badge.
- Badge styles:
  - Verified: `tag-primary` (sage accent)
  - In Progress: `tag-secondary` (copper accent)
- Bisa tambah achievement lain sebagai placeholder: ranking, badge, dsb.

#### 6. CONNECT / CTA (Refine)
- Heading: "Have an idea? Let's talk."
- **CTA button lebih kuat:**
  ```
  Background: bg-sage/15, border sage/30
  Hover: bg-sage filled, text menjadi dark
  ```
  Harus clearly berbeda dari elemen lain.
- **Tambahkan social links row** di bawah CTA:
  GitHub, LinkedIn, Twitter/X — sebagai icon kecil dengan hover state.
- Email address tetap ditampilkan.

#### 7. FOOTER (BARU)
- Simple, single row.
- Kiri: `© 2025 Rafa. Engineered, not just designed.` (atau copy serupa)
- Kanan: Secondary nav links (Work, Blog, Contact) + social icons kecil.
- Border top: `rgba(255,255,255,0.05)`
- Font: mono, size kecil, warna `#71717A`

---

## 6. HOVER & INTERACTION

### Card Hover
```css
/* Resting */
transform: translateY(0);
border-color: rgba(255,255,255,0.07);
box-shadow: 0 8px 32px -8px rgba(0,0,0,0.6);

/* Hover */
transform: translateY(-2px);                    /* subtle 2px lift */
border-color: rgba(255,255,255,0.12);           /* border brighten */
box-shadow:
    0 16px 48px -12px rgba(0,0,0,0.8),          /* deeper shadow */
    inset 0 1px 0 rgba(255,255,255,0.08);       /* inner glow top edge */
```

### Transition Timing
```css
transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
```
- Semua animasi: **intentional, slow, mechanical.**
- Jangan gunakan `0.2s` atau `0.15s` — terlalu cepat.
- Minimum `0.3s`, ideal `0.4s-0.6s`.

### Link Hover
- Text links: color transition ke `#4A9E8E` (sage).
- Duration: `0.3s ease`.
- Tidak ada underline animation yang fancy.

### CTA Button Hover
- Border + background fill transition.
- Duration: `0.5s`.

### Nav Item Hover
- Background: `rgba(74, 158, 142, 0.06)` (sage sangat tipis).
- Text color: sage.
- Duration: `0.3s`.

### Light Sweep (Opsional — keep dari prototype)
- Pseudo-element `::before` yang slide dari kiri ke kanan on hover.
- Gradient: `transparent → rgba(255,255,255,0.015) → transparent`
- Ini memberikan kesan "brushed metal reflection."

---

## 7. ANIMATION

### Boot Sequence (Sudah ada — pertahankan)
1. Screen gelap total.
2. RNF07 logo SVG muncul di center.
3. Frame kotak digambar via `stroke-dashoffset`.
4. Cross-hair lines tergambar.
5. Text "RNF07" + "SYS_INIT" fade in.
6. Corner nodes muncul satu per satu.
7. Connection lines muncul.
8. Overlay fade out → navbar slide down → hero text fade up → photo fade in.

- Total durasi: **1000-1200ms**.
- Hanya sekali per page load.
- Easing: `cubic-bezier(0.23, 1, 0.32, 1)` untuk semua step.

### Living System (Sudah ada — refine)
- Lines: `stroke-width: 0.5` (tipis).
- Resting line color: `rgba(255,255,255,0.04)`.
- Active line color: `#4A9E8E` (sage) atau `#B8845C` (copper), bergantian.
- Packet dot: `r=1.5`, opacity `0.5`.
- Packet glow: `drop-shadow(0 0 3px [color])` — halus.
- Movement duration: `1400-2000ms` per packet.
- Easing: cubic ease-in-out.
- Packet fade out di 80% perjalanan (bukan menghilang tiba-tiba).
- Fire rate: `1200ms` dan `1800ms` staggered.
- Status text update: setiap `3000ms` (lebih lambat dari prototype awal).

### General Motion Rules
- **JANGAN** gunakan bounce easing.
- **JANGAN** gunakan animasi lebih cepat dari `0.3s`.
- **JANGAN** gunakan scale animation di atas `1.02`.
- Semua motion harus terasa: **deliberate, mechanical, engineered.**

---

## 8. RESPONSIVE

### Breakpoints
- Mobile: `< 768px` — single column, stack semua section.
- Tablet: `768px - 1024px` — 2 column grid dimana applicable.
- Desktop: `> 1024px` — full 12-column bento grid.

### Mobile Adjustments
- Hero: stack vertically (text di atas, foto di bawah).
- Who I Am + Core Expertise: stack vertically.
- Nav pill: centered, font size lebih kecil.
- Boot sequence: tetap jalan tapi bisa dipercepat sedikit (800ms).
- Living System: opacity lebih rendah di mobile untuk performance.

---

## 9. NAVBAR CTA — "Connect" Button

Harus **clearly berbeda** dari nav items lain:

```css
/* Nav items biasa */
color: #A1A1AA;
background: transparent;

/* Connect CTA */
background: rgba(74, 158, 142, 0.12);
border: 1px solid rgba(74, 158, 142, 0.25);
color: #4A9E8E;
font-weight: 700;

/* Connect CTA Hover */
background: #4A9E8E;
color: #09090B;
```

---

## 10. COMPONENT REFERENCE

### Tag/Badge Styles
```css
/* Primary tag (sage) */
.tag-primary {
    background: rgba(74, 158, 142, 0.08);
    border: 1px solid rgba(74, 158, 142, 0.20);
    color: #4A9E8E;
    font-family: 'IBM Plex Mono';
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

/* Secondary tag (copper) */
.tag-secondary {
    background: rgba(184, 132, 92, 0.08);
    border: 1px solid rgba(184, 132, 92, 0.20);
    color: #B8845C;
}

/* Neutral tag (tech chips) */
.tag-neutral {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    color: #A1A1AA;
}
```

### Status Dot
```css
.dot-active   { background: #4A9E8E; }  /* sage */
.dot-learning { background: #B8845C; }  /* copper */
.dot-idle     { background: #71717A; }  /* muted */
```

### Section Label
```
Format: "FIG. 0X — SECTION NAME"
Font: IBM Plex Mono, 10-11px, uppercase, tracking widest
Color: #4A9E8E (sage)
```

---

## 11. CHECKLIST SEBELUM DELIVERY

- [ ] Semua background BUKAN biru — harus neutral (#09090B, #131316, #1C1C20)
- [ ] Noise grain texture ada di body
- [ ] Card punya top specular line (inset shadow)
- [ ] Card hover: 2px lift + border brighten + inner glow
- [ ] Semua transition minimum 0.3s
- [ ] Text secondary minimum #71717A (nggak lebih gelap)
- [ ] Copper accent muncul di minimal 4-5 tempat
- [ ] Blueprint grid opacity 2-3%
- [ ] Boot sequence berjalan 1x per load
- [ ] Living system: thin lines, soft glow, slow packets
- [ ] Footer ada
- [ ] Social links ada (GitHub, LinkedIn)
- [ ] CTA "Connect" clearly standout dari nav items
- [ ] Who I Am + Core Expertise section ada
- [ ] Minimal 2 featured projects
- [ ] Mobile responsive
- [ ] Nggak ada bright cyan, neon green, atau saturated colors

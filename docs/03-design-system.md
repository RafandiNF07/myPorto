# 🎨 Design System — Warna, Font, Spacing, dan Design Tokens

## Konsep Visual: "Terminal Meets Modern Web"

Perpaduan antara estetika terminal/developer yang familiar dengan desain web modern yang premium dan profesional.

---

## Color Palette

### Keputusan
Dark theme sebagai default dengan accent warna cyan/teal yang terinspirasi dari terminal.

### Token Warna

```css
:root {
  /* === Background === */
  --bg-primary: #0a0a0f;          /* Latar utama — hampir hitam dengan hint biru */
  --bg-secondary: #111118;        /* Card backgrounds, section bergantian */
  --bg-tertiary: #1a1a24;         /* Hover states, elevated surfaces */
  --bg-glass: rgba(17, 17, 24, 0.7); /* Glassmorphism cards */

  /* === Text === */
  --text-primary: #e4e4e7;        /* Teks utama — putih lembut, bukan pure white */
  --text-secondary: #a1a1aa;      /* Teks sekunder — abu-abu */
  --text-muted: #52525b;          /* Teks sangat redup — hint, placeholder */

  /* === Accent === */
  --accent-primary: #00d4aa;      /* Cyan/teal utama — terminal green modern */
  --accent-primary-dim: rgba(0, 212, 170, 0.15); /* Background glow */
  --accent-secondary: #8b5cf6;    /* Purple — untuk variasi, tag, badge */
  --accent-secondary-dim: rgba(139, 92, 246, 0.15);

  /* === Borders === */
  --border-default: rgba(255, 255, 255, 0.06);  /* Border sangat halus */
  --border-hover: rgba(255, 255, 255, 0.12);    /* Border saat hover */
  --border-accent: rgba(0, 212, 170, 0.3);      /* Border dengan accent */

  /* === Status === */
  --status-success: #22c55e;
  --status-warning: #eab308;
  --status-error: #ef4444;
}
```

### Alasan Pemilihan Warna
| Warna | Alasan |
|---|---|
| `#0a0a0f` (bg) | Lebih "dalam" dari pure black, memberikan kesan premium dan modern |
| `#00d4aa` (accent) | Terinspirasi warna terminal hijau, tapi di-modernisasi jadi teal/cyan |
| `#8b5cf6` (secondary) | Kontras yang bagus dengan cyan, memberikan variasi tanpa clash |
| `#e4e4e7` (text) | Putih lembut, mengurangi eye strain dibanding pure white (#fff) |

---

## Typography

### Font Choices

| Penggunaan | Font | Alasan |
|---|---|---|
| **Heading & Body** | Inter | Clean, modern, sangat readable, standar industri tech |
| **Code & Terminal** | JetBrains Mono | Dirancang khusus untuk coding, ligatures yang bagus |

### Keputusan: Self-host Fonts

**Alasan:** Tidak bergantung pada Google Fonts CDN. Lebih cepat loading, lebih privasi-friendly, dan dijamin available.

Download font files `.woff2` dan taruh di `public/fonts/`.

### Font Scale

```css
:root {
  /* === Font Sizes (fluid, responsive) === */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);     /* 12-14px */
  --text-sm: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);          /* 14-16px */
  --text-base: clamp(1rem, 0.9rem + 0.4vw, 1.125rem);        /* 16-18px */
  --text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.25rem);         /* 18-20px */
  --text-xl: clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem);         /* 20-24px */
  --text-2xl: clamp(1.5rem, 1.2rem + 1.2vw, 2rem);           /* 24-32px */
  --text-3xl: clamp(2rem, 1.5rem + 2vw, 3rem);               /* 32-48px */
  --text-hero: clamp(3rem, 2rem + 4vw, 6rem);                /* 48-96px — untuk nama di hero */

  /* === Font Weights === */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;

  /* === Line Heights === */
  --leading-tight: 1.1;    /* Headings */
  --leading-normal: 1.5;   /* Body text */
  --leading-relaxed: 1.75; /* Blog content */
}
```

### Alasan: Fluid Typography dengan `clamp()`
- Responsive tanpa perlu media queries untuk setiap breakpoint
- Smooth scaling antara mobile dan desktop
- Minimum dan maximum size terjaga

---

## Spacing

```css
:root {
  /* === Spacing Scale (8px base) === */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */

  /* === Section Spacing === */
  --section-gap: clamp(4rem, 3rem + 4vw, 8rem); /* Jarak antar section di homepage */

  /* === Container === */
  --container-max: 1200px;
  --container-padding: clamp(1rem, 0.5rem + 2vw, 2rem);
}
```

### Alasan: 8px Grid System
Standar industri UI design. Semua spacing kelipatan 8px memberikan visual rhythm yang konsisten dan harmonis.

---

## Border Radius

```css
:root {
  --radius-sm: 0.375rem;   /* 6px — small elements */
  --radius-md: 0.75rem;    /* 12px — cards, buttons */
  --radius-lg: 1rem;       /* 16px — larger cards */
  --radius-xl: 1.5rem;     /* 24px — hero elements */
  --radius-full: 9999px;   /* pill shape — badges, tags */
}
```

---

## Shadows & Effects

```css
:root {
  /* === Glassmorphism === */
  --glass-bg: rgba(17, 17, 24, 0.7);
  --glass-blur: blur(12px);
  --glass-border: 1px solid rgba(255, 255, 255, 0.06);

  /* === Glow Effects === */
  --glow-accent: 0 0 20px rgba(0, 212, 170, 0.15);
  --glow-accent-strong: 0 0 40px rgba(0, 212, 170, 0.25);

  /* === Shadows === */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
}
```

---

## Transitions

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
  --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Alasan Timing Functions
- `ease` untuk transisi standar (hover, color changes)
- `cubic-bezier(0.34, 1.56, 0.64, 1)` untuk efek "spring/bounce" pada animasi yang lebih playful

---

## Breakpoints

```css
/* Mobile first approach */
/* Default: mobile (< 640px) */
@media (min-width: 640px)  { /* sm: tablet portrait */ }
@media (min-width: 768px)  { /* md: tablet landscape */ }
@media (min-width: 1024px) { /* lg: desktop */ }
@media (min-width: 1280px) { /* xl: large desktop */ }
```

### Alasan: Mobile First
- Mayoritas traffic web sekarang dari mobile
- Lebih mudah "menambah" layout ke layar besar daripada "mengurangi" untuk layar kecil

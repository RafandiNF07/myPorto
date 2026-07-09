# Template Halaman Project

Panduan struktur untuk menulis body markdown di `src/content/projects/*.md`.
File ini **tidak** disajikan ke web (di luar `src/content/`), jadi aman untuk
catatan pribadi.

Tujuan format ini: membuat pengunjung (terutama recruiter/engineer backend)
berkata *"orang ini paham sistem"* — lewat **substansi**, bukan animasi.

## Aturan main (jangan dilanggar)

1. **Tulis hanya yang bisa kamu PERTAHANKAN saat interview.** Setiap klaim
   arsitektur, keputusan, dan angka bisa ditanya balik. Kalau tidak bisa
   membelanya, jangan tulis.
2. **Angka tanpa konteks menurunkan kredibilitas.** Metrik wajib disertai
   beban, persentil (p50/p95/p99), dan alat ukur. Kalau belum benchmark,
   hilangkan bagian Results.
3. **Kosong lebih baik daripada mengarang.** Lebih baik 3 bagian jujur
   daripada 6 bagian yang setengahnya karangan.

## Urutan bagian yang disarankan

Sudah selesai & jujur → tampilkan. Belum ada datanya → lewati dulu.

### 1. Overview  *(wajib)*
Satu paragraf: ini apa, dibangun dengan apa, menyelesaikan masalah apa.

### 2. Architecture  *(sangat disarankan)*
Diagram ASCII dalam fenced code block ```text — sudah tampil rapi dengan
gaya code-block situs. Contoh (lihat `supabase-auth-gateway.md` yang sudah
jadi). Lalu 1–2 kalimat menjelaskan alur request.

### 3. Design Decisions
Format: **pertanyaan → jawaban nyatamu**.
- *"Why token-bucket instead of fixed-window?"*
  Arah umum yang bisa diadaptasi: fixed-window rawan burst di pergantian
  window; token-bucket memberi laju rata + izin burst terbatas. Sebutkan
  kenapa itu cocok untuk kasus spesifikmu.
- *"Why a separate gateway (bukan fitur bawaan)?"*
  Apa yang tidak kamu dapat dari platform langsung sehingga perlu lapisan
  sendiri? (kontrol per-client, logging terpusat, routing).

### 4. Trade-offs
Satu keputusan = satu konsekuensi jujur, termasuk yang kurang ideal.
Contoh bentuk kalimat:
> Menyimpan counter di Redis menambah 1 network hop per request (+X ms),
> ditukar dengan proteksi backend dari lonjakan trafik.

### 5. Results  *(hanya jika ada data nyata)*
Contoh format jujur:
- Load test: 500 req/s selama 60s (alat: k6)
- Latency p50 / p95: __ ms / __ ms
- Rate limiter menolak __% request saat burst

Kalau belum sempat benchmark, **hapus bagian ini** — jangan diisi tebakan.

### 6. Stack  *(wajib)*
Daftar teknologi + peran singkat tiap teknologi (bukan sekadar nama).

---

## Status pengisian

- [x] `supabase-auth-gateway.md` — Overview, Architecture, Stack (faktual).
      Belum: Design Decisions, Trade-offs, Results (butuh datamu).
- [ ] `team-workspace.md` — masih 1 kalimat, belum dirombak.

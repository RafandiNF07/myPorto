---
title: "Cara Setup Supabase dengan SvelteKit"
description: "Tutorial lengkap mengintegrasikan Supabase sebagai backend untuk project SvelteKit, dari auth hingga database."
pubDate: 2026-06-30
tags: ["supabase", "sveltekit", "tutorial"]
draft: false
---

## Kenapa Supabase?

Supabase adalah alternatif open-source dari Firebase yang menyediakan database PostgreSQL, otentikasi, storage, dan real-time subscriptions secara out-of-the-box. Bagi developer yang suka bekerja langsung dengan database relasional (SQL) daripada NoSQL, Supabase adalah pilihan yang sangat solid. 

Di artikel ini, kita akan membahas cara setup awal Supabase di dalam environment SvelteKit.

## Langkah 1: Install Dependencies

Hal pertama yang harus kita lakukan adalah menginstal Supabase client SDK:

```bash
npm install @supabase/supabase-js
```

## Langkah 2: Konfigurasi Client

Buat sebuah file `src/lib/supabase.ts` (atau `.js`) untuk menginisialisasi client Supabase. Pastikan kamu sudah menyiapkan environment variables di file `.env`.

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

## Langkah 3: Mengambil Data (Fetch)

Sekarang kita bisa mulai mengambil data dari database. Di SvelteKit, biasanya kita melakukan fetching data di `+page.server.ts` atau `+page.ts`.

```typescript
import { supabase } from '$lib/supabase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching data: ", error);
        return { posts: [] };
    }

    return { posts };
};
```

## Kesimpulan

Integrasi Supabase dengan SvelteKit sangat straightforward berkat `supabase-js` SDK. Kamu sekarang punya fondasi yang solid untuk membangun fitur backend lainnya seperti Authentication dan Row Level Security (RLS).

---

*Log entry ini ditulis sebagai referensi pribadi. Jika ada diskusi lebih lanjut terkait arsitektur ini, jangan ragu untuk kontak saya.*

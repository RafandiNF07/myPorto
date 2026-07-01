---
title: "Eksplorasi Privilege Escalation Dasar pada Linux"
description: "Membahas teknik-teknik umum yang sering digunakan dalam CTF untuk mendapatkan akses root melalui SUID dan Misconfigured Sudo."
pubDate: "2024-03-15"
tags: ["linux", "cybersec", "ctf"]
---

# Eksplorasi Privilege Escalation Dasar pada Linux

Dalam dunia _Cybersecurity_, khususnya saat bermain CTF (Capture The Flag) atau melakukan penetrasi dasar, salah satu tahap krusial setelah mendapatkan _foothold_ awal adalah melakukan **Privilege Escalation** (meningkatkan hak akses) menjadi `root`.

Pada artikel ini, kita akan membahas dua metode paling umum yang sering saya temui di mesin-mesin _boot2root_.

## 1. Misconfigured SUID Binaries

SUID (Set owner User ID up on execution) adalah mekanisme permission khusus di Linux. Jika sebuah executable memiliki bit SUID, file tersebut akan dieksekusi dengan *privilege* milik pemilik file (biasanya `root`), bukan *privilege* user yang menjalankannya.

Cara mencari binary SUID di server:
```bash
find / -perm -u=s -type f 2>/dev/null
```

Jika kamu menemukan program seperti `find`, `nmap`, atau `vim` dalam daftar tersebut, kamu bisa memanfaatkannya untuk mendapatkan shell `root`. Misalnya, menggunakan `find`:
```bash
find . -exec /bin/sh -p \; -quit
```

## 2. Sudo Rights (Misconfigured)

Kadang-kadang, administrator sistem memberikan izin `sudo` kepada user biasa untuk menjalankan satu atau dua perintah tanpa password. 

Cek izin sudo yang kita miliki:
```bash
sudo -l
```

Jika hasilnya menunjukkan kita bisa menjalankan `/usr/bin/less` atau `/usr/bin/awk` sebagai root tanpa password, kita bisa mem-bypass ini.
Contoh menggunakan `less`:
```bash
sudo less /etc/profile
# Di dalam less prompt, ketik:
!/bin/sh
```

## Kesimpulan

Selalu perhatikan baik-baik konfigurasi permission di Linux. Kesalahan kecil pada konfigurasi `sudoers` atau file SUID dapat menyebabkan kompromi pada seluruh server.

_Happy hacking!_

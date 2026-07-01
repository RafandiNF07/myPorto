---
title: "Membangun Reverse Proxy Sederhana dengan Go"
description: "Bagaimana cara kerja Reverse Proxy? Mari kita bedah konsepnya dengan menulis reverse proxy kita sendiri menggunakan bahasa Go (Golang)."
pubDate: "2024-04-02"
tags: ["backend", "golang", "architecture"]
---

# Membangun Reverse Proxy Sederhana dengan Go

_Reverse proxy_ adalah server yang berada di depan server backend dan meneruskan permintaan klien (client requests) ke server-server tersebut. Alat seperti Nginx atau HAProxy sangat populer untuk tugas ini.

Namun, untuk memahami cara kerjanya secara mendalam, tidak ada cara yang lebih baik selain membangunnya sendiri dari awal. Di artikel ini, kita akan menggunakan **Go** karena standar _library_-nya (`net/http` dan `net/http/httputil`) sangat _powerful_ untuk urusan networking.

## Konsep Dasar

1. Client mengirim request ke Reverse Proxy (misal: port 8080).
2. Proxy membaca request, lalu memutuskan ke mana request ini harus diteruskan (misal: port 9001).
3. Proxy meneruskan request ke backend.
4. Backend merespon proxy.
5. Proxy mengembalikan respon backend ke client.

## Kode Implementasi

Berkat `httputil.NewSingleHostReverseProxy`, membuat reverse proxy di Go sangatlah mudah:

```go
package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func main() {
	// 1. Tentukan URL backend
	targetURL, err := url.Parse("http://localhost:9001")
	if err != nil {
		log.Fatal(err)
	}

	// 2. Buat Reverse Proxy handler
	proxy := httputil.NewSingleHostReverseProxy(targetURL)

	// 3. Handle semua request menggunakan proxy
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Menerima request: %s %s\n", r.Method, r.URL.Path)
		proxy.ServeHTTP(w, r)
	})

	// 4. Jalankan server di port 8080
	log.Println("Reverse Proxy berjalan di port :8080")
	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
```

## Menjalankan dan Menguji

Untuk mengujinya, jalankan aplikasi backend apa saja di port `9001` (misalnya web server python dengan `python3 -m http.server 9001`), lalu jalankan program Go kita.

Ketika kita mengakses `http://localhost:8080`, proxy kita akan meneruskan trafik secara transparan ke server Python di `9001`.

## Langkah Selanjutnya

Implementasi di atas masih sangat sederhana. Di _production_, kita harus memikirkan tentang:
- **Load Balancing**: Mendistribusikan trafik ke banyak backend (Round Robin, Least Connections).
- **Rate Limiting**: Membatasi jumlah request dari satu IP.
- **SSL Termination**: Menangani sertifikat HTTPS.

Go memberikan kita kebebasan penuh untuk merangkai fitur-fitur tersebut!

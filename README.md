# Dianissa Salsabila — Premium Personal CV & Website Portfolio

Website portfolio personal premium, responsif, dan elegan yang dirancang khusus untuk **Dianissa Salsabila**, seorang profesional berpengalaman di bidang **Operasional, Quality Assurance (QA), dan Komunikasi**.

Website ini sepenuhnya statis, ramah aksesibilitas (A9y), dioptimalkan untuk SEO, dan siap untuk langsung di-host di GitHub Pages.

---

## 🌟 Fitur Utama

- **Desain Premium & Modern**: Gaya visual minimalis yang feminin namun profesional menggunakan kombinasi tipografi serif klasik untuk judul (*Playfair Display*) dan sans-serif modern untuk keterbacaan tinggi (*Inter*).
- **Palet Warna Harmonis**: Mengikuti skema warna khusus:
  - `Cream` (`#F8F3EA`) sebagai latar belakang utama yang lembut dan ramah di mata.
  - `Navy Blue` (`#0B1957`) sebagai warna teks utama untuk kesan kokoh, formal, dan profesional.
  - `Sky Blue` (`#9ECCFA`) sebagai aksen modern untuk menyorot interaksi, lencana, dan elemen interaktif.
  - `Sand` (`#E6D8C7`) sebagai warna aksen sekunder untuk memberikan sentuhan kehangatan yang elegan.
- **Sistem Timeline Dinamis**: Menyajikan riwayat karir secara visual di desktop dan dioptimalkan secara rapi untuk tampilan mobile.
- **Kartu Statistik Interaktif**: Menyorot pencapaian penting secara langsung seperti peningkatan pass-rate QA dari **30% ke 98%**, manajemen **150+ staf**, dan publikasi **300 artikel**.
- **Animasi AOS (Animate On Scroll)**: Menghadirkan transisi halus dan interaktif saat pengguna menggulir halaman.
- **Responsivitas Sempurna**: Dioptimalkan secara menyeluruh dari ukuran layar ponsel pintar terkecil hingga monitor desktop ultra-lebar.
- **Lighthouse Score Tinggi (95+)**: Menggunakan aset lokal teroptimasi, HTML semantik, pemuatan gambar malas (*lazy loading*), serta optimasi SEO yang lengkap dengan data terstruktur JSON-LD Person.
- **Bebas Ketergantungan Eksternal Berat**: Dibangun menggunakan Tailwind CSS CDN, Vanilla JavaScript ES6 murni, serta Remix Icon CDN yang sangat ringan.

---

## 📂 Struktur Proyek

```text
/
├── index.html                  # Halaman utama website dengan meta tag SEO & JSON-LD
├── assets/
│   ├── css/
│   │   └── style.css           # Kustomisasi CSS, variabel warna, & fallback aksesibilitas
│   ├── js/
│   │   └── main.js            # Logika menu interaktif, scroll-spy, form, & inisialisasi AOS
│   ├── images/
│   │   └── profile.jpg         # Foto profil (mendukung fallback otomatis jika gambar kosong)
│   ├── favicon/
│   │   └── favicon.svg         # Desain ikon SVG monogram inisial "DS"
│   └── documents/
│       └── cv.pdf              # Dokumen CV asli Dianissa Salsabila (format PDF)
└── README.md                   # Dokumentasi proyek (berkas ini)
```

---

## 🛠️ Panduan Penggunaan & Kustomisasi

### 1. Mengunggah CV & Foto Profil Anda
- Letakkan file CV terbaru Anda di dalam folder `/assets/documents/` dengan nama berkas `cv.pdf`.
- Simpan foto profil profesional Anda di dalam folder `/assets/images/` dengan nama berkas `profile.jpg`. Jika gambar tidak ditemukan, sistem secara otomatis akan menampilkan inisial monogram **"DS"** yang elegan sebagai pengganti.

### 2. Menambahkan atau Mengubah Proyek Portfolio
Untuk memperbarui bagian portfolio pada berkas `index.html`, temukan baris `<div class="port-grid">` dan edit atau duplikat komponen kartu berikut:
```html
<div class="port-card">
  <div class="port-img-wrap">
    <!-- Pilih variasi background placeholder: navy-grad, sky-grad, atau sand-grad -->
    <div class="port-placeholder navy-grad">
      <i class="ri-shield-star-line" aria-hidden="true"></i>
    </div>
    <div class="port-overlay"><span>Lihat Detail</span></div>
  </div>
  <div class="port-body">
    <span class="port-cat">KATEGORI</span>
    <h3 class="port-title">NAMA PROYEK</h3>
    <p class="port-desc">Deskripsi singkat mengenai pencapaian dan pekerjaan proyek...</p>
    <div class="port-tags">
      <span class="exp-tag-sm">TEKNOLOGI/ALAT</span>
    </div>
  </div>
</div>
```

---

## 🌐 Hosting di GitHub Pages

Website ini siap di-host langsung tanpa memerlukan proses build:
1. Buat repositori baru di GitHub dengan nama `username.github.io` atau nama lainnya.
2. Unggah seluruh struktur file ini ke repositori tersebut.
3. Masuk ke tab **Settings** > **Pages** di repositori GitHub Anda.
4. Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch** dan pilih cabang `main` (atau `master`), lalu simpan.
5. Website portfolio Anda akan aktif dalam beberapa saat di URL `https://username.github.io/`!

---

*Dirancang dengan penuh dedikasi sebagai Representasi Profesional Dianissa Salsabila.*

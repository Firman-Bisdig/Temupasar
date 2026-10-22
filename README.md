# Temu Pasar Digital

Website resmi **Temu Pasar Digital** — Digital Marketing Agency untuk UMKM.

## Fitur Website
- **Beranda Interaktif**: Pengenalan nilai, layanan, alur kerja, portofolio, dan testimoni.
- **Dark / Light Mode**: Penggantian tema tampilan secara dinamis.
- **Halaman Layanan**: Rincian 3 tahap layanan (Rintis, Tumbuh, Berkembang).
- **Halaman Detail Proyek**: Showcase portofolio dinamis (Lembar Bumi, Karya Guna, Bitezy Eco).
- **Integrasi Kontak WhatsApp**: Form kontak otomatis terhubung ke WhatsApp.

## Struktur Proyek
```text
temu-pasar-digital/
├── assets/         # Aset gambar & logo
├── css/
│   └── style.css   # Stylesheet utama & variabel tema
├── js/
│   ├── main.js     # Navigasi, tema, animasi reveal & form
│   ├── home.js     # Slider testimoni di beranda
│   └── proyek.js   # Render detail proyek dinamis
├── index.html      # Halaman utama
├── layanan.html    # Halaman layanan
└── proyek.html     # Halaman detail portofolio
```

## Menjalankan Secara Lokal
Buka file `index.html` langsung di browser, atau jalankan menggunakan local server:
```bash
python -m http.server 8000
```
Lalu buka `http://localhost:8000` pada browser.

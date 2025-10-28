# Aplikasi Catatan SPA - React Router & Local Data

Sebuah *Single Page Application* (SPA) untuk mengelola catatan pribadi, dibangun menggunakan React (dengan Class Components) dan React Router untuk navigasi antar halaman. Aplikasi ini menyimpan data catatan secara lokal di dalam kode aplikasi (bukan Local Storage).

## Fitur

* **Navigasi SPA:** Berpindah antar halaman (Beranda, Arsip, Tambah Catatan, Detail Catatan) tanpa *reload* halaman penuh, menggunakan React Router.
* **CRUD Catatan:**
    * **Create:** Menambah catatan baru melalui halaman tambah.
    * **Read:** Menampilkan daftar catatan aktif di Beranda, catatan arsip di halaman Arsip, dan detail catatan di halaman Detail.
    * **Update (Archive/Unarchive):** Memindahkan catatan antara status aktif dan arsip.
    * **Delete:** Menghapus catatan.
* **Pencarian:** Mencari catatan berdasarkan judul di halaman Beranda dan Arsip.
* **Detail Catatan:** Melihat judul, tanggal pembuatan, dan isi lengkap catatan pada halaman detail.
* **Halaman 404:** Menampilkan halaman khusus jika URL tidak ditemukan.
* **Data Lokal:** Data catatan diinisialisasi dan dikelola dalam memori aplikasi (menggunakan modul `local-data.js`).

## Teknologi

* React (Class Components)
* React Router DOM
* Vite
* CSS
* JavaScript (ES6+)

## Prasyarat

* Node.js (disarankan versi LTS)
* npm (biasanya terinstal bersama Node.js)

## Struktur Proyek

```bash
.
├── index.html                # Entry point HTML
├── package.json              # Metadata proyek dan dependensi
├── vite.config.js            # Konfigurasi Vite
├── README.md                 # Dokumentasi proyek
├── .gitignore                # File/folder yang diabaikan Git
├── public/
│   └── icons/                # Ikon-ikon SVG
│       ├── archive.svg
│       ├── delete.svg
│       ├── save.svg
│       └── unarchive.svg
└── src/
    ├── components/           # Komponen React UI
    │   ├── Navigation.jsx
    │   ├── NoteInput.jsx
    │   ├── NoteItem.jsx
    │   ├── NoteList.jsx
    │   └── SearchBar.jsx
    ├── pages/                # Komponen halaman (routing)
    │   ├── AddPage.jsx
    │   ├── ArchivePage.jsx
    │   ├── DetailPage.jsx
    │   ├── HomePage.jsx
    │   └── NotFoundPage.jsx
    ├── styles/
    │   └── style.css         # Styling global
    ├── utils/
    │   ├── index.js          # Fungsi utilitas (showFormattedDate)
    │   └── local-data.js     # Manajemen data lokal
    ├── App.jsx               # Komponen utama (routing logic)
    └── index.jsx             # Entry point aplikasi React
```

## Cara Menjalankan

1.  *Clone* repositori ini:
    ```bash
    git clone <URL_REPOSITORY>
    cd react-notes-spa-router
    ```
2.  Instal dependensi:
    ```bash
    npm install
    ```
3.  Jalankan aplikasi dalam mode pengembangan:
    ```bash
    npm run dev
    ```
4.  Buka browser dan akses `http://localhost:<PORT>` (port akan ditampilkan di terminal).

## Struktur Halaman (Routes)

* `/`: Beranda (Menampilkan catatan aktif)
* `/archives`: Halaman Arsip (Menampilkan catatan yang diarsipkan)
* `/notes/new`: Halaman Tambah Catatan
* `/notes/:id`: Halaman Detail Catatan
* `*`: Halaman Tidak Ditemukan (404)

---
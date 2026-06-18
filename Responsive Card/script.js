// Inisialisasi Swiper pada elemen dengan class .card-wrapper
new Swiper('.card-wrapper', {
  // Arah scroll: 'horizontal' (default) atau 'vertical'
  // Karena ada navigation prev/next kiri-kanan, sebaiknya horizontal
  // Kamu pakai 'vertical' — pastikan tinggi container sudah diset jika ingin vertikal
  direction: 'horizontal', // ← ubah ke 'horizontal' agar prev/next bekerja normal

  loop: true,         // Slide akan berulang (setelah slide terakhir, kembali ke awal)
  spaceBetween: 30,   // Jarak antar slide dalam piksel

  // Konfigurasi pagination (titik-titik indikator slide)
  pagination: {
    el: '.swiper-pagination',  // Elemen HTML yang dijadikan pagination
    clickable: true,           // Pagination bisa diklik untuk pindah slide
    dynamicBullets: true       // Ukuran bullet berubah dinamis (yang aktif lebih besar)
  },

  // Konfigurasi tombol navigasi (panah prev & next)
  navigation: {
    nextEl: '.swiper-button-next', // Tombol untuk ke slide berikutnya
    prevEl: '.swiper-button-prev', // Tombol untuk ke slide sebelumnya
  },

  // ✅ PERBAIKAN: Sebelumnya breakpoints ditulis salah (slidesPerView di dalam breakpoints
  // langsung, dan 768/1024 di luar objek Swiper). Struktur yang benar adalah objek
  // dengan key = lebar layar minimum (dalam px)
  slidesPerView: 1, // Default: tampilkan 1 slide (untuk layar kecil/mobile)
  breakpoints: {
    768: {
      slidesPerView: 2  // Layar ≥ 768px: tampilkan 2 slide sekaligus
    },
    1024: {
      slidesPerView: 3  // Layar ≥ 1024px: tampilkan 3 slide sekaligus
    }
  }
});
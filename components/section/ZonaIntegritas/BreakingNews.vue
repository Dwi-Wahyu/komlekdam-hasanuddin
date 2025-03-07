<template>
  <div class="p-5 sm:px-32 pb-12">
    <WidgetsJudulSection text="Breaking News!" />

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div v-for="(temp, tempIdx) in news" :key="tempIdx" class="flex gap-3">
        <img :src="temp.thumbnail" class="max-w-44" alt="" />
        <div>
          <h1 class="font-semibold mb-1">{{ temp.title }}</h1>
          <p class="text-sm">{{ temp.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const news = [
  {
    title: "KEGIATAN REVIU LAPORAN KEUANGAN TAHUN 2024",
    desc: `Pada hari Rabu, tanggal 15 Januari 2025, Hubdam XIV/Hsn melaksanakan kegiatan yaitu Reviu Laporan Keuangan (LK) Tahun Anggaran 2024. Kegiatan ini berlangsung di Ruang ...`,
    thumbnail: "/image/breaking-news/1.jpeg",
  },
  {
    title:
      "Pelaksanaan Current Audit Ta 2024 Di Hubdam XIV/Hsn Untuk Tingkatkan Akuntabilitas Dan Transparansi",
    desc: `Senin, 9 Desember 2024 – Bertempat di ruang data Hubdam XIV/Hsn, Tim Current Audit Itdam XIV/Hsn melaksanakan kegiatan audit untuk mengevaluasi kinerja ....`,
    thumbnail: "/image/breaking-news/2.png",
  },
  {
    title:
      "Kegiatan Penilaian WTRB/ZI di Hubdam XIV/Hsn OLEH Tim Penilai Internal Kodam XIV/HSN",
    desc: `Kamis, 23/1/2025 Hubdam XIV/Hsn menerima kunjungan Tim Penilai Internal (TPI) Kodam XIV/Hsn untuk melaksanakan penilaian Zona Integritas (ZI) di satuan Hubdam XIV/Hsn ...`,
    thumbnail: "/image/breaking-news/3.png",
  },
];
</script>

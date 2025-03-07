<template>
  <div
    class="w-full h-screen min-h-screen bg-center bg-cover bg-[url('/backgrounds/berita-bg1.jpeg')]"
  >
    <div
      class="bg-black/50 h-full p-20 flex flex-col gap-7 items-center justify-center w-full"
    >
      <WidgetsJudulSection text="Kegiatan Pembinaan Fisik (Binsik)" />
      <div class="relative">
        <img src="/image/program/1.png" alt="" />
        <div
          class="absolute left-0 top-0 w-full h-full flex items-center justify-center"
        >
          <IconsYoutube />
        </div>
      </div>
    </div>
  </div>
  <div class="p-5 sm:p-10 pb-16">
    <h1 class="">
      Sesuai program yang sudah dijadwalkan oleh Staf Latihan Hubdam
      XIV/Hasanuddin terus melaksanakan program Pembinaan fisik bagi prajurit
      yang akan melaksanakan UKP dan juga prajurit yang memiliki berat badan
      kategori Limit Atas (LA) dan Luar Limit atas (LLA). Pada hari Senin 3
      Pebruari 2025 mulai pukul 14.00 s/d 15.00 Wita personel Hubdam
      XIV/Hasanuddin melaksanakan program Pembinaan Fisik (Binsik) yang diawasi
      langsung oleh Paurlat Hubdam XIV/Hsn, Letnan Satu Cke Romy Herman.
      Kegiatan diawali dengan pemanasan kemudian lari dan jalan selama 45 menit
      dan di akhiri dengan peregangan. Giat berjalan dengan aman dan lancar.
      #Jiwa Kapotha selalu terpatri
    </h1>

    <div class="mt-10">
      <WidgetsJudulSection text="Dokumentasi" />

      <div class="flex flex-wrap items-center justify-center gap-5">
        <img src="/image/program/dokumentasi/1.jpeg" class="w-[30vw]" alt="" />
        <img src="/image/program/dokumentasi/2.jpeg" class="w-[30vw]" alt="" />
        <img src="/image/program/dokumentasi/3.jpeg" class="w-[30vw]" alt="" />
        <img src="/image/program/dokumentasi/4.jpeg" class="w-[30vw]" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing",
});
</script>

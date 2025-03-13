<script setup>
definePageMeta({
  layout: "landing",
});

const dataBrevet = [
  {
    label:
      "BREVET KAPOTA YUDHA, DIBERIKAN KEPADA PRAJURIT TNI AD YANG TELAH MENYELESAIKAN PENDIDIKAN DASAR KECABANGAN KOMUNIKASI DAN ELEKTRONIKA TNI AD DI PUSAT PENDIDIKAN KOMLEK TNI AD.",
    imgUrl: "/image/denkomlekdam/brevet/1.jpeg",
  },
  {
    label:
      "BREVET KOMUNIKASI DAN ELEKTRONIKA DIBERIKAN KEPADA PRAJURIT YANG TELAH MENYELESAIKAN PENDIDIKAN SPESIALISASI KOMUNIKASI DI PUSDIK KOMLEK TNI AD.",
    imgUrl: "/image/denkomlekdam/brevet/2.jpeg",
  },
  {
    label:
      "BREVET KONBEKHARSTAL DIBERIKAN KEPADA PRAJURIT TNI AD YANG TELAH MENYELESAIKAN KURSUS SPESIALISASI DI BIDANG PEMBEKALAN DAN PEMELIHARAAN SERTA KONSTRUKSI ALAT KOMUNIKASI TNI AD.",
    imgUrl: "/image/denkomlekdam/brevet/3.jpeg",
  },
  {
    label:
      "BREVET PERNIKA DIBERIKAN KEPADA PRAJURIT TNI AD YANG TELAH MENYELESAIKAN PENDIDIKAN SPESIALISASI DI BIDANG PERANG ELEKTRONIKA TERUTAMA PADA PERALATAN DAN SISTEM ELEKTRONIKA.",
    imgUrl: "/image/denkomlekdam/brevet/4.jpeg",
  },
  {
    label:
      "BREVET SIBER DIBERIKAN KEPADA PRAJURIT TNI AD YANG TELAH SELESAI MELAKSANAKAN PENDIDIKAN SPESIALISASI YANG MENUNJUKKAN KEMAMPUAN DAN PENGETAHUAN YANG MEMADAI DALAM BIDANG KEAMANAN SIBER.",
    imgUrl: "/image/denkomlekdam/brevet/5.jpeg",
  },
  {
    label:
      "BREVET JARINGAN DIBERIKAN KEPADA PRAJURIT TNI AD YANG TELAH SELESAI MELAKSANAKAN PENDIDIKAN SPESIALISASI YANG MENGUJI KEMAMPUAN DAN PENGETAHUAN PRAJURIT DALAM MENGELOLA DAN MENGATUR JARINGAN KOMPUTER MENGGUNAKAN MIKROTIK.",
    imgUrl: "/image/denkomlekdam/brevet/6.jpeg",
  },
];
</script>

<template>
  <div
    class="w-full h-screen relative flex flex-col text-yellow bg-[url('/public/backgrounds/landing-background.png')] bg-center bg-cover"
  >
    <div
      class="flex mt-10 gap-7 flex-col items-center justify-center w-full h-full"
    >
      <img
        src="/image/tentang-kami/struktur-komlekdam.png"
        class="w-full sm:w-[65vw]"
        alt=""
      />
    </div>
  </div>

  <div class="p-5 sm:p-10 sm:px-40">
    <h1 class="text-xl mb-3 text-center">BREVET</h1>
    <h1>
      Selama pendidikan Kecabangan KOMLEK, Prajurit akan mendapatkan pelatihan
      dasar Komunikasi, termasuk teknik Perang Elektronika, dan prosedur
      Instalasi, untuk memastikan prajurit dapat melakukan/menggelar Komunikasi
      dengan cepat, aman dan efektif.
    </h1>

    <ol class="mt-3 list-decimal flex flex-col gap-5">
      <li
        v-for="(brevet, brevetIdx) in dataBrevet"
        :key="brevetIdx"
        class="flex gap-2 items-center"
      >
        <div class="flex gap-2">
          <span>{{ brevetIdx + 1 }}.</span>
          {{ brevet.label }}
        </div>
        <img :src="brevet.imgUrl" class="w-[5rem]" alt="" />
      </li>
    </ol>
  </div>

  <div class="p-5 sm:p-10 sm:px-40">
    <h1 class="text-xl mb-3 text-center">EMBLEM BARET</h1>

    <div class="justify-center w-full flex my-5">
      <img src="/image/denkomlekdam/1.jpeg" class="w-[40rem]" alt="" />
    </div>

    <!-- TODO: Fix This -->

    <h1>
      <strong>KAPOTA</strong> : Emblem yang digunakan berbentuk “kapota Yudha”
      yang berarti Merpati Perang dengan makna sebagai berikut :
    </h1>

    <ul class="list-disc ml-5">
      <li>
        <strong>BINTANG BERSUDUT LIMA</strong> melambangkan komando dan sifat
        sifat kepemimpinan yang baik.
      </li>
      <li><strong>MERPATI MENDUKUNG BINTANG:</strong></li>
      <ol type="A">
        <li>
          Merpati merupakan caraka udara yang tercepat pada zamannya yang
          memiliki sifat setya untuk kembali ke tempat asalnya.
        </li>
        <li>
          Merpati mendukung bintang menggambarkan status KOMUNIKASI DAN
          ELEKTRONIKA sebagai unsur komando.
        </li>
        <li>
          Bliu sayap tersusun dengan angka 2, 3 dan 11 merupakan hari jadi Korps
          KOMUNIKASI DAN eLEKTRONIKA Angkatan Darat yaitu 23 November 1945.
        </li>
        <li>
          Ekor yang terdiri dari 7 helai bulu melambangkan Sapta Marga sebagai
          jiwa kejuangan prajurit KOMUNIKASI DAN ELEKTRONIKA Angkatan Darat.
        </li>
      </ol>
    </ul>

    <h1 class="my-1">
      <strong> KESIMPULAN </strong>
    </h1>
    <p>
      Arti dan makna keseluruhan dari baret kecabangan KOMUNIKAS DAN ELEKTRONIKA
      Angkatan Darat adalah sebagai unsur pelayan terpadu terhadap tugas pokok
      Angkatan Darat, prajurit kecabangan KOMUNIKASI DAN ELEKTRONIKA Angkatan
      Darat dalam menjalankan tugas dan kewajibannya senantiasa berpegang pada
      Sapta Marga dan Sumpah Prajurit dilandasi sesanti ‘CigHra Apta NirbHaya”
      keberanian dan keteguhan serta kesetyaan terhadap kejayaan dan keutuhan
      NKRI.
    </p>
  </div>
</template>

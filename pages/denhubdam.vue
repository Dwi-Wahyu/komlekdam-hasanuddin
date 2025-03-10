<template>
  <div
    class="w-full h-screen relative flex flex-col text-yellow bg-[url('/public/backgrounds/landing-background.png')] bg-center bg-cover"
  >
    <div
      class="flex mt-16 gap-7 flex-col items-center justify-center w-full h-full"
    >
      <img src="/image/struktur-denhubdam.png" class="w-[55rem]" alt="" />
    </div>
  </div>

  <div class="p-5 sm:p-10 sm:px-32">
    <h1 class="text-center text-xl mb-3 text-yellow">
      Tugas Pokok Staf Komunikasi dan Elektronika
    </h1>

    <p>
      DENHUBDAM XIV/HASANUDDIN SEBAGAI SATUAN BADAN PELAKSANA HUBDAM
      XIV/HASANUDDIN YANG BERKEDUDUKAN DI JL. OPU DG RISADJU NO. 420 KOTA
      MAKASSAR PROVINSI SULAWESI SELATAN, DENHUBDAM XIV/HSN BERTANGGUNG JAWAB
      MENYELENGGARAKAN KEGIATAN DI BIDANG GELAR KOMUNIKASI DI MAKODAM DENGAN
      TUGAS DAN KEWAJIBAN SEBAGAI BERIKUT:
    </p>
    <ol class="text-lg flex flex-col gap-3">
      <li>
        A. MENYELENGGARAKAN GELAR KOMUNIKASI ANTARA MAKODAM DENGAN SATUAN
        JAJARANNYA DI WILAYAH KODAM;
      </li>

      <li>
        B. MELAKSANAKAN INSTALASI TERBATAS BAGI SARANA PERHUBUNGAN YANG
        DIGUNAKAN DI WILAYAH KODAM;
      </li>

      <li>
        C. MELAKSANAKAN DUKUNGAN KOMUNIKASI DALAM RANGKA LATIHAN DAN OPERASI DI
        TINGKAT KODAM;
      </li>

      <li>
        D. MELAKSANAKAN MONITORING DALAM RANGKA PENGAWASAN SERTA PENGENDALIAN
        PROSEDUR KOMUNIKASI DAN PENGGUNAAN FREKUENSI SERTA OBSERVASI TERHADAP
        SELURUH PANCARAN GELOMBANG ELEKTRO MAGNETIK YANG ADA DI WILAYAHNYA UNTUK
        PENGUMPULAN DAN PENGUJIAN DATA PERNIKA DALAM RANGKA PENYELENGGARAAN
        PERNIKA;
      </li>

      <li>
        E. MELAKSANAKAN KEGIATAN PENCARIAN ARAH PANCARAN/PENENTUAN LOKASI
        PEMANCAR YANG TIDAK DIKENAL;  
      </li>

      <li>F. MELAKSANAKAN KEGIATAN JAMMING DAN DECEPTION; DAN</li>

      <li>G. MELAKSANAKAN KEGIATAN FOTO FILM MILITER.</li>
    </ol>
  </div>

  <div class="p-5 sm:p-10 sm:px-12 gap-4 grid sm:grid-cols-2 grid-cols-1">
    <div class="flex gap-4">
      <img
        class="max-w-48 object-cover"
        src="/image/denkomlekdam/1.png"
        alt=""
      />
      <div>
        <h1 class="font-semibold">PENDISTRIUSIAN HT DAN JARING KOMUNIKASI</h1>
        <p class="mt-2">
          PADA TANGGAL 05 SEPTEMBER 2024 PERSONEL SIKOMLEK HUBDAM XIV/HSN PRATU
          DICKY WAHYUDI BERSAMA PERSONEL GUDANG MELAKSANAKAN PENDISTRIBUSIAN HT
          DAN JARING KOMUNIKASI DALAM RANGKA MENDUKUNG PAM VVIP KUNKER PRESIDEN
          RI DI WIL SULAWESI SELATAN.
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <img
        class="max-w-48 object-cover"
        src="/image/denkomlekdam/2.png"
        alt=""
      />
      <div>
        <h1 class="font-semibold">GELAR ALKOM DAN KENDARAAN SOTM</h1>
        <p class="mt-2">
          PERSONEL SIKOMLEK HUBDAM XIV/HSN SERDA GUNAWAN DAN PRATU DICKY BERSAMA
          PERSONEL BENGKEL PADA TANGGAL 20 OKTOBER 2024 MELAKSANAKAN GELAR ALKOM
          DAN KENDARAN STELIT ON THE MOVE (SOTM) DI YONKAV 10/MG DALAM RANGKA
          APEL GELAR PASUKAN LATIHAN PENANGGULANGAN BENCANA TAHUN 2024.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
</script>

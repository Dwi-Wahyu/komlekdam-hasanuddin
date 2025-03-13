<template>
  <div class="w-full min-h-screen">
    <div
      class="bg-black/50 p-5 sm:p-20 flex pt-24 pb-10 flex-col gap-7 items-center justify-center w-full h-full"
    >
      <WidgetsJudulSection text="Kegiatan Non Program" :with-out-line="true" />
      <div
        class="grid grid-cols-1 gap-10 md:px-64 items-center justify-center md:grid-cols-2"
      >
        <div
          @click="navigateTo('/nonprogram/1')"
          class="relative w-full sm:aspect-[359/461] cursor-pointer border-2 border-yellow"
        >
          <img
            src="/public/image/nonprogram/1.jpeg"
            class="w-full h-full object-cover"
            alt=""
          />
          <div
            class="absolute bottom-0 bg-gradient-to-t pt-20 w-full from-black via-black to-transparent left-0 p-5"
          >
            <h1 class="font-semibold mb-1">Kegiatan Bazar Sembako</h1>
            <p class="text-xs hidden sm:block">
              Makassar, Rabu tanggal 26 Februari 2025 di Pelataran Masjid
              Baiturrahim Hubdam XIV/Hasanuddin telah dilaksanakan kegiatan
              Bazar sembako dalam rangka menyambut Bulan Suci Ramdhan 1446 H.
            </p>
          </div>
        </div>
        <div
          @click="navigateTo('/nonprogram/2')"
          class="relative w-full sm:aspect-[359/461] cursor-pointer border-2 border-yellow"
        >
          <img
            src="/public/image/nonprogram/2.jpeg"
            class="w-full h-full object-cover"
            alt=""
          />
          <div
            class="absolute bottom-0 bg-gradient-to-t pt-20 w-full from-black via-black to-transparent left-0 p-5"
          >
            <h1 class="font-semibold mb-1">
              Kegiatan Sosialisasi BPR Hasamitra
            </h1>
            <p class="text-xs hidden sm:block">
              Sosisalisasi dalam rangka meningkatkan kesejahteraan Prajurit
              dengan tema “Pelayanan Kredit Serba Guna kepada Prajurit, PNS dan
              Prapensiun” dilaksanakan oleh BPR Hasamitra. Kegiatan dilaksanakan
              di Gedung Apta Hubdam XIV/Hasanuddin pada Jumat, 28 Feb 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

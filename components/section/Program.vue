<template>
  <div
    class="w-full min-h-screen bg-center bg-cover bg-[url('/backgrounds/program-bg1.jpeg')]"
  >
    <div
      class="bg-black/50 p-5 sm:p-20 flex pt-24 pb-10 flex-col gap-7 items-center justify-center w-full h-full"
    >
      <WidgetsJudulSection text="Kegiatan Program" :with-out-line="true" />
      <div
        class="grid grid-cols-1 gap-10 md:px-64 items-center justify-center md:grid-cols-2"
      >
        <div class="relative w-full sm:aspect-[359/461] border-2 border-yellow">
          <img
            src="/public/image/program/1.jpeg"
            class="w-full h-full object-cover"
            alt=""
          />
          <div
            class="absolute bottom-0 bg-gradient-to-t pt-20 w-full from-black via-black to-transparent left-0 p-5"
          >
            <h1 class="font-semibold mb-1">Uji Terampil Perorangan Umum</h1>
            <p class="text-xs hidden sm:block">
              Latihan sangat berperan signifikan dalam upaya peningkatan
              profesionalisme Prajurit dan menunjukkan kemampuan terbaik
              prajurit. Untuk mewujudkan hal tersebut Hubdam XIV/Hasanuddin
              melaksanakan kegiatan Uji Terampil Perorangan (UTP) Umum yang
              terdiri dari ...
            </p>
          </div>
        </div>
        <div class="relative w-full sm:aspect-[359/461] border-2 border-yellow">
          <img
            src="/public/image/program/2.jpeg"
            class="w-full h-full object-cover"
            alt=""
          />
          <div
            class="absolute bottom-0 bg-gradient-to-t pt-20 w-full from-black via-black to-transparent left-0 p-5"
          >
            <h1 class="font-semibold mb-1">Latihan Perorangan Dasar Umum</h1>
            <p class="text-xs hidden sm:block">
              Selain sebagai media untuk mengingatkan kepada prajurit, kegiatan
              latihan juga bertujuan untuk meningkatkan kemampuan dan
              ketrampilan prajurit dalam ilmu kemiliteran dasar prajurit.
              Memasuki hari kedua Latihan Perorangan Umum Bintara dan ...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

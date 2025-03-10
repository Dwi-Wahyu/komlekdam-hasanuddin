<template>
  <div
    class="w-full h-fit md:h-screen bg-center bg-cover bg-[url('/public/backgrounds/profil-bg1.jpeg')]"
  >
    <div
      class="w-full h-full bg-black/70 pt-20 p-5 flex-col text-center md:pt-10 flex items-center justify-center"
    >
      <WidgetsJudulSection text="PEJABAT KOMLEKDAM XIV/HASANUDDIN" />

      <p class="text-sm mt-2 md:w-[50vw]">
        Di bawah kepemimpinan Kahubdam dan Wakahubdam, Hubdam XIV/Hasanuddin
        berperan dalam memastikan kelancaran komunikasi militer, menjaga
        keamanan informasi, dan mendukung efektivitas komando serta pengendalian
        satuan. Dengan inovasi dan profesionalisme, Hubdam terus mengembangkan
        teknologi komunikasi guna memperkuat pertahanan negara.
      </p>
      <div class="flex gap-10 md:gap-20 mt-3">
        <div class="flex flex-col items-center">
          <img src="/image/profil/1.png" alt="" class="w-[15rem]" />
          <div class="shadow px-3 flex flex-col items-center shadow-yellow">
            <h1>Kolonel Cke I Gusti Ngurah S, S.E</h1>
            <h1 class="text-yellow text-sm">Kakomlekdam XIV/ Hasanuddin</h1>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img src="/image/profil/2.png" alt="" class="w-[15rem]" />
          <div class="shadow px-3 flex flex-col items-center shadow-yellow">
            <h1>Letkol Cke Jupri, S.T</h1>
            <h1 class="text-yellow text-sm">Wakakomlekdam XIV/ Hasanuddin</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid sm:hidden p-10 grid-cols-1 md:grid-cols-4 gap-8">
    <div v-for="(pejabat, pejabatIdx) in range(0, 9)" :key="pejabatIdx">
      <img :src="profilPejabat[pejabat].imageUrl" alt="" class="w-full" />
      <div class="shadow shadow-yellow flex flex-col items-center w-full px-3">
        <h1>{{ profilPejabat[pejabat].nama }}</h1>
        <h1 class="text-yellow text-sm">
          {{ profilPejabat[pejabat].jabatan }}
        </h1>
      </div>
    </div>
  </div>

  <div class="sm:grid hidden p-10 grid-cols-1 md:grid-cols-4 gap-8">
    <div v-for="(pejabat, pejabatIdx) in range(0, 7)" :key="pejabatIdx">
      <img :src="profilPejabat[pejabat].imageUrl" alt="" class="w-full" />
      <div class="shadow shadow-yellow flex flex-col items-center w-full px-3">
        <h1>{{ profilPejabat[pejabat].nama }}</h1>
        <h1 class="text-yellow text-sm">
          {{ profilPejabat[pejabat].jabatan }}
        </h1>
      </div>
    </div>

    <div class="col-start-2">
      <img :src="profilPejabat[8].imageUrl" alt="" class="w-full" />
      <div class="shadow shadow-yellow flex flex-col items-center w-full px-3">
        <h1>{{ profilPejabat[8].nama }}</h1>
        <h1 class="text-yellow text-sm">
          {{ profilPejabat[8].jabatan }}
        </h1>
      </div>
    </div>

    <div>
      <img :src="profilPejabat[9].imageUrl" alt="" class="w-full" />
      <div class="shadow shadow-yellow flex flex-col items-center w-full px-3">
        <h1>{{ profilPejabat[9].nama }}</h1>
        <h1 class="text-yellow text-sm">
          {{ profilPejabat[9].jabatan }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type ProfilPejabat = {
  nama: string;
  jabatan: string;
  imageUrl: string;
  colStart?: boolean;
};

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const profilPejabat: ProfilPejabat[] = [
  {
    nama: "Letkol Cke Moh. Anwar, S.H., M.M",
    jabatan: "Dandenkomlekdam XIV/Hasanuddin",
    imageUrl: "/image/profil/3.png",
  },
  {
    nama: "Letkol Cke Marlinus Pasudi, S.T.",
    jabatan: "Dandenkomlekrem 141",
    imageUrl: "/image/profil/4.png",
  },
  {
    nama: "Letkol Cke Muh. Aris, S.Sos.",
    jabatan: "Dandenkomlekrem 142",
    imageUrl: "/image/profil/5.png",
  },
  {
    nama: "Letkol Cke Sudirman, S.Sos.",
    jabatan: "Dandenkomlekrem 143",
    imageUrl: "/image/profil/6.png",
  },
  {
    nama: "Mayor Cke Eko Ermawanto",
    jabatan: "Kasikomlek",
    imageUrl: "/image/profil/7.png",
  },
  {
    nama: "Mayor Cke Sopyan Dima",
    jabatan: "Kasipernika Fotfilmil",
    imageUrl: "/image/profil/8.png",
  },
  {
    nama: "Mayor Cke Sugeng Nurhadi",
    jabatan: "Kasikonbekharstal",
    imageUrl: "/image/profil/9.png",
  },
  {
    nama: "Kapten Cke Ilyas",
    jabatan: "Kasituud",
    imageUrl: "/image/profil/10.png",
  },
  {
    nama: "Mayor Cke Dolfie Lampah",
    jabatan: "Kabenghub",
    imageUrl: "/image/profil/11.png",
    colStart: true,
  },
  {
    nama: "Lettu Cke Frans Rante",
    jabatan: "Kagudmathub",
    imageUrl: "/image/profil/12.png",
  },
];
</script>

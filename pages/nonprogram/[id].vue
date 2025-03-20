<template>
  <div
    class="w-full h-screen min-h-screen bg-center bg-cover bg-[url('/backgrounds/berita-bg1.jpeg')]"
  >
    <div
      class="bg-black/50 h-full p-20 flex flex-col gap-7 items-center justify-center w-full"
    >
      <WidgetsJudulSection :text="detailNonProgram.title" />
      <div class="relative">
        <img
          :src="detailNonProgram.thumbnail"
          class="w-full md:w-[40vw] h-72 object-cover"
          alt=""
        />
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
      {{ detailNonProgram.deskripsi }}
    </h1>

    <div class="mt-10">
      <WidgetsJudulSection text="Dokumentasi" />

      <div class="flex flex-wrap items-center justify-center gap-5">
        <img
          v-for="dokumentasi in detailNonProgram.dokumentasi"
          :src="dokumentasi"
          class="md:w-[30vw] w-full"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing",
});

const route = useRoute();
const { id } = route.params;

const intId = parseInt(id as string);

const dataNonProgram = [
  {
    title: "Kegiatan Bazar Sembako",
    thumbnail: "/image/nonprogram/dokumentasi/1/thumbnail.png",
    deskripsi: `Makassar, Rabu tanggal 26 Februari 2025 di Pelataran Masjid Baiturrahim Hubdam XIV/Hasanuddin telah dilaksanakan kegiatan Bazar sembako dalam rangka menyambut Bulan Suci Ramdhan 1446 H. Kegiatan yang di selenggarakan oleh Persit KCK Ranting 3 Hub dan bekerja sama dengan Prima freshmart penyedia Bhan makanan beku seperti Sosis, NuGet dan ayam beku. Dan menyediakan beberapa barang sembako dengan harga murah. Kegiatan dihadiri oleh Ketua Persit KCK Ranting 3 Hub Ny. Enggar I Gusti Ngurah, S dan seluruh anggota Persit KCK serta warga sekitaran Asrama Hubdam XIV/.  #kapothatetapjaya#`,
    dokumentasi: [
      "/image/nonprogram/dokumentasi/1/1.png",
      "/image/nonprogram/dokumentasi/1/2.jpeg",
    ],
  },
  {
    title: "Kegiatan Sosialisasi BPR Hasamitra",
    thumbnail: "/image/nonprogram/dokumentasi/2/thumbnail.png",
    deskripsi: `Makassar, 28/02/2025
Sosisalisasi dalam rangka meningkatkan kesejahteraan Prajurit dengan tema “Pelayanan Kredit Serba Guna kepada Prajurit, PNS dan Prapensiun” dilaksanakan oleh BPR Hasamitra. Kegiatan dilaksanakan di Gedung Apta Hubdam XIV/Hasanuddin pada Jumat, 28 Feb 2025. Pada kesempatan itu, Pimpinan Bank Hasamitra yang diwakili oleh Wakil Pimpinan Bank Hasamitra Bpk Rahmat Hidayat hadir bersama staf memaparkan program dan keuntungan yang didapat dari pelayanan tersebut. Wakahubdam XIV/Hasanuddin Letkol Cke Jupri S.T, mewakili Kahubdam XIV/Hasanuddin beserta seluruh prajurit dan PNS sangat antusias mengikuti rangkaian kegiatannya hingga selesai. Kegiatan berjalan dengan aman dan lancar. #kapotatetapjaya#`,
    dokumentasi: [
      "/image/nonprogram/dokumentasi/2/1.png",
      "/image/nonprogram/dokumentasi/2/2.jpeg",
      "/image/nonprogram/dokumentasi/2/3.png",
    ],
  },
];

const detailNonProgram = dataNonProgram[intId - 1];
</script>

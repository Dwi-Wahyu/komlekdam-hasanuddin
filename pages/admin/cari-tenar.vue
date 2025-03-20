<template>
  <div>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div
        v-for="data in cardData"
        class="flex flex-col justify-between shadow-[7px_7px_0px_0px_rgba(0,0,0,0.2)] p-4 bg-[#303949]"
      >
        <div>
          <h1 class="text-yellow font-semibold">{{ data.title }}</h1>
          <p class="font-thin">{{ data.description }}</p>
        </div>
        <div class="flex justify-end">
          <WidgetsButtonBaseButton variant="outline" @click="navigateTo(data)">
            Buka
          </WidgetsButtonBaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

const cardData = [
  {
    title: "Jadwal Lagu",
    bukaLink: "/admin/ketua-dan-wakil",
    description: "Menu untuk menjadwalkan lagu yang diputar",
  },
  {
    title: "Live Youtube",
    bukaLink: "/admin/pejabat-satuan",
    description: "Menu Edit Live Youtube",
  },
  {
    title: "Cerita Inspiratif",
    bukaLink: "/admin/sejarah-kepala-satuan",
    description:
      "Menu Menambahkan Cerita Inspiratif dari keluarga Satuan Komlekdam",
  },
];
</script>

<script setup>
const audioElement = ref(null);

const isPlayed = ref(false);

const togglePlay = () => {
  isPlayed.value = !isPlayed.value;

  console.log(isPlayed.value);

  if (isPlayed.value) {
    audioElement.value.pause();
  } else {
    audioElement.value.play();
  }
};
</script>

<template>
  <audio ref="audioElement" src="/lagu/indonesia raya.mp3"></audio>
  <div
    class="bg-[url('/backgrounds/profil-cari-tenar1.jpeg')] md:hidden bg-center bg-cover w-full h-full"
  >
    <div
      class="flex p-5 gap-10 flex-col h-full md:flex-row pt-20 bg-black/70 w-full"
    >
      <div class="flex gap-2 flex-col">
        <h1 class="text-xl text-yellow text-center font-bold">Cari Tenar</h1>
        <h1>
          Cari Tenar merupakan platform streaming sekaligus wadah untuk
          cerita-cerita inspiratif bagi keluarga besar prajurit Komlekdam XIV/
          Hasanuddin.
        </h1>
        <div class="relative">
          <img
            src="/public/image/cari-tenar/1.jpeg"
            class="object-cover"
            alt=""
          />
          <div
            class="absolute left-0 top-0 w-full h-full flex items-center justify-center"
          >
            <IconsYoutube />
          </div>
        </div>
      </div>

      <div class="flex items-end relative">
        <button @click="togglePlay" class="absolute">
          <IconsPlay v-if="isPlayed" />
          <IconsStop v-else />
        </button>

        <img src="/image/cari-tenar/2.png" alt="" />
      </div>
    </div>
  </div>
  <div
    class="bg-[url('/backgrounds/profil-cari-tenar1.jpeg')] md:block hidden bg-center bg-cover w-full h-screen"
  >
    <div
      class="flex p-5 px-32 py-28 gap-10 items-end flex-col h-full md:flex-row justify-center bg-black/70 w-full"
    >
      <div class="flex gap-2 flex-col">
        <h1 class="text-xl text-yellow text-center font-bold">Cari Tenar</h1>
        <h1>
          Cari Tenar merupakan platform streaming sekaligus wadah untuk
          cerita-cerita inspiratif bagi keluarga besar prajurit Komlekdam XIV/
          Hasanuddin.
        </h1>
        <div class="relative">
          <img
            src="/public/image/cari-tenar/1.jpeg"
            class="w-[50vw] h-80 object-cover"
            alt=""
          />
          <div
            class="absolute left-0 top-0 w-full h-full flex items-center justify-center"
          >
            <IconsYoutube />
          </div>
        </div>
      </div>
      <div class="flex items-end relative">
        <button @click="togglePlay" class="absolute">
          <IconsPlay v-if="!isPlayed" />
          <IconsStop v-else />
        </button>

        <img src="/image/cari-tenar/2.png" alt="" />
      </div>
    </div>
  </div>

  <div class="p-5 md:p-10">
    <WidgetsJudulSection
      :with-out-line="true"
      text="Cerita Inspiratif Komlekdam XIV/Hasanuddin"
    />

    <div
      class="grid grid-cols-1 gap-10 items-center justify-center md:grid-cols-3"
    >
      <div
        @click="navigateTo('/cari-tenar/cerita-inspiratif/1')"
        class="relative cursor-pointer w-full sm:aspect-[359/461] border-2 border-yellow"
      >
        <img
          src="/image/litbang/1.jpeg"
          class="w-full h-full object-cover"
          alt=""
        />
        <div
          class="absolute bottom-0 bg-gradient-to-t pt-20 w-full from-black via-black to-transparent left-0 p-5"
        >
          <h1 class="font-semibold mb-1">Judul Cerita 1</h1>
          <p class="text-xs gap-2 flex items-center">
            Selengkapnya <IconsTriangle />
          </p>
        </div>
      </div>

      <div
        @click="navigateTo('/cari-tenar/cerita-inspiratif/2')"
        class="relative cursor-pointer w-full sm:aspect-[359/461] border-2 border-yellow"
      >
        <img
          src="/image/litbang/1.jpeg"
          class="w-full h-full object-cover"
          alt=""
        />
        <div
          class="absolute bottom-0 bg-gradient-to-t pt-20 w-full from-black via-black to-transparent left-0 p-5"
        >
          <h1 class="font-semibold mb-1">Judul Cerita 2</h1>
          <p class="text-xs gap-2 flex items-center">
            Selengkapnya <IconsTriangle />
          </p>
        </div>
      </div>

      <div
        @click="navigateTo('/cari-tenar/cerita-inspiratif/3')"
        class="relative cursor-pointer w-full sm:aspect-[359/461] border-2 border-yellow"
      >
        <img
          src="/image/litbang/1.jpeg"
          class="w-full h-full object-cover"
          alt=""
        />
        <div
          class="absolute bottom-0 bg-gradient-to-t pt-20 w-full from-black via-black to-transparent left-0 p-5"
        >
          <h1 class="font-semibold mb-1">Judul Cerita 3</h1>
          <p class="text-xs gap-2 flex items-center">
            Selengkapnya <IconsTriangle />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

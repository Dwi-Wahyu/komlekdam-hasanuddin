<template>
  <div
    class="w-full h-screen min-h-screen bg-center bg-cover bg-[url('/backgrounds/berita-bg1.jpeg')]"
  >
    <div
      class="bg-black/50 h-full p-20 flex flex-col gap-7 items-center justify-center w-full"
    >
      <WidgetsJudulSection :text="`Judul Cerita ${id}`" />
      <div class="relative">
        <img
          src="/image/litbang/dokumentasi/1.png"
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
  </div>
  <div class="p-5 sm:p-10 pb-16">
    <h1 class="">Deskripsi Cerita</h1>

    <div class="mt-10">
      <WidgetsJudulSection text="Dokumentasi" />

      <div class="flex flex-wrap items-center justify-center gap-5">
        <img
          src="/image/litbang/dokumentasi/2.jpeg"
          class="w-[30vw] max-h-56 object-cover"
          alt=""
        />
        <img
          src="/image/litbang/dokumentasi/3.jpeg"
          class="w-[30vw] max-h-56 object-cover"
          alt=""
        />
        <img
          src="/image/litbang/dokumentasi/4.jpeg"
          class="w-[30vw] max-h-56 object-cover"
          alt=""
        />
        <img
          src="/image/litbang/dokumentasi/5.jpeg"
          class="w-[30vw] max-h-56 object-cover"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});

const route = useRoute();
const { id } = route.params;
</script>

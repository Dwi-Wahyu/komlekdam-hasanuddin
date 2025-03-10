<script setup lang="ts">
import {
  artikel,
  beritaEksternal,
  beritaInternal,
} from "~/data/landing/berita";

const jenisBerita = ref("internal");

const berita = computed(() => {
  switch (jenisBerita.value) {
    case "internal":
      return beritaInternal;
    case "eksternal":
      return beritaEksternal;
    case "artikel":
      return artikel;
    default:
      return beritaInternal;
  }
});

function handleChangeJenis(jenis: string) {
  jenisBerita.value = jenis;
}
</script>

<template>
  <div class="md:block hidden">
    <div
      class="w-full h-screen bg-center bg-cover bg-[url('/backgrounds/berita-bg1.jpeg')]"
    >
      <div class="w-full h-full px-5 md:px-16 pt-24 bg-black/80">
        <div class="flex gap-3 items-center">
          <h1 class="text-yellow text-2xl font-bold">Berita Terbaru</h1>
          <div class="flex-grow border border-yellow"></div>
        </div>
        <div class="flex justify-center gap-3 my-3 mb-5">
          <WidgetsButtonBaseButton
            @click="handleChangeJenis('artikel')"
            class="rounded-lg"
            :variant="jenisBerita === 'artikel' ? 'primary' : 'outline'"
          >
            Artikel
          </WidgetsButtonBaseButton>
          <WidgetsButtonBaseButton
            @click="handleChangeJenis('eksternal')"
            class="rounded-lg"
            :variant="jenisBerita === 'eksternal' ? 'primary' : 'outline'"
          >
            External
          </WidgetsButtonBaseButton>
          <WidgetsButtonBaseButton
            @click="handleChangeJenis('internal')"
            class="rounded-lg"
            :variant="jenisBerita === 'internal' ? 'primary' : 'outline'"
          >
            Internal
          </WidgetsButtonBaseButton>
        </div>
        <div class="flex gap-5 flex-col md:flex-row">
          <div>
            <h1 class="font-semibold text-lg mb-2">
              {{ berita[0].judul }}
            </h1>
            <p>
              {{ berita[0].content }}
            </p>
          </div>
          <img :src="berita[0].imgUrl" class="sm:max-w-[30rem]" alt="" />
        </div>
      </div>
    </div>
    <div class="px-5 md:px-16 py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="flex gap-3">
          <img :src="berita[1].imgUrl" class="max-w-40" alt="" />
          <div>
            <h1 class="mb-2 font-semibold text-lg">
              {{ berita[1].judul }}
            </h1>
            <p class="text-sm">
              {{ berita[1].content }}
            </p>
          </div>
        </div>
        <div class="flex gap-3">
          <img :src="berita[2].imgUrl" class="max-w-40" alt="" />
          <div>
            <h1 class="mb-2 font-semibold text-lg">
              {{ berita[2].judul }}
            </h1>
            <p class="text-sm">
              {{ berita[2].content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="md:hidden">
    <div
      class="w-full h-full bg-center bg-cover bg-[url('/backgrounds/berita-bg1.jpeg')]"
    >
      <div class="w-full h-full px-5 pb-7 md:px-16 pt-24 bg-black/80">
        <div class="flex gap-3 items-center">
          <h1 class="text-yellow text-xl font-bold">Berita Terbaru</h1>
          <div class="flex-grow border border-yellow"></div>
        </div>
        <div class="flex justify-center gap-3 my-4 mb-5">
          <WidgetsButtonBaseButton
            @click="handleChangeJenis('artikel')"
            class="rounded-lg"
            :variant="jenisBerita === 'artikel' ? 'primary' : 'outline'"
          >
            Artikel
          </WidgetsButtonBaseButton>
          <WidgetsButtonBaseButton
            @click="handleChangeJenis('eksternal')"
            class="rounded-lg"
            :variant="jenisBerita === 'eksternal' ? 'primary' : 'outline'"
          >
            External
          </WidgetsButtonBaseButton>
          <WidgetsButtonBaseButton
            @click="handleChangeJenis('internal')"
            class="rounded-lg"
            :variant="jenisBerita === 'internal' ? 'primary' : 'outline'"
          >
            Internal
          </WidgetsButtonBaseButton>
        </div>

        <div class="relative mb-4 cursor-pointer">
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"
          ></div>

          <div class="absolute bottom-0 left-0 p-5 text-wrap z-30">
            <h1 class="text-white font-semibold">
              {{ berita[0].judul }}
            </h1>
          </div>

          <img :src="berita[0].imgUrl" alt="" class="w-full shadow" />
        </div>

        <div class="relative mb-4 cursor-pointer">
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"
          ></div>

          <div class="absolute bottom-0 left-0 p-5 text-wrap z-30">
            <h1 class="text-white font-semibold">
              {{ berita[1].judul }}
            </h1>
          </div>

          <img :src="berita[1].imgUrl" alt="" class="w-full shadow" />
        </div>

        <div class="relative mb-4 cursor-pointer">
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"
          ></div>

          <div class="absolute bottom-0 left-0 p-5 text-wrap z-30">
            <h1 class="text-white font-semibold">
              {{ berita[2].judul }}
            </h1>
          </div>

          <img :src="berita[2].imgUrl" alt="" class="w-full shadow" />
        </div>
      </div>
    </div>
  </div>
</template>

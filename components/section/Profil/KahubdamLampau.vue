<template>
  <div class="bg-[#303949] p-5 sm:p-10 sm:px-20 w-full">
    <WidgetsJudulSection text="Kahubdam Dari Masa Ke Masa" />

    <div class="relative">
      <img
        src="/public/image/profil/15.png"
        class="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        alt=""
      />

      <div v-if="seeMore">
        <div class="relative mt-4 z-30">
          <div
            v-for="(row, rowIdx) in range(1, 6)"
            class="grid mb-8 grid-cols-1 sm:grid-cols-4 gap-5 md:grid-cols-5"
            :key="rowIdx"
          >
            <div
              v-if="row != 6"
              v-for="(temp, tempIdx) in range(8, 12)"
              :key="tempIdx"
            >
              <img
                :src="`/image/profil/sejarah_kahubdam/${row}/Rectangle ${temp}.png`"
                alt=""
              />
            </div>
            <div v-else class="col-start-3">
              <img
                :src="`/image/profil/sejarah_kahubdam/${row}/Rectangle 8.png`"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="relative z-30">
          <div
            v-for="(row, rowIdx) in range(1, 2)"
            class="grid mb-8 grid-cols-1 sm:grid-cols-4 gap-5 md:grid-cols-5"
            :key="rowIdx"
          >
            <div v-for="(temp, tempIdx) in range(8, 12)" :key="tempIdx">
              <img
                :src="`/image/profil/sejarah_kahubdam/${row}/Rectangle ${temp}.png`"
                alt=""
              />
            </div>
          </div>
          <div
            v-if="!seeMore"
            @click="handleSeeMore"
            class="w-full flex items-center cursor-pointer justify-center h-48 bg-gradient-to-t from-[#303949] via-[#303949] absolute bottom-0 to-transparent"
          >
            <h1>Lihat Lebih Banyak</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const seeMore = ref(false);

function handleSeeMore() {
  seeMore.value = !seeMore.value;
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
</script>

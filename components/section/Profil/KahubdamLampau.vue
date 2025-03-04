<template>
  <div class="bg-[#303949] p-10 px-20 w-full">
    <WidgetsJudulSection text="Kahubdam Dari Masa Ke Masa" />

    <div class="relative">
      <img
        src="/public/image/profil/15.png"
        class="opacity-50 absolute z-20"
        alt=""
      />

      <div class="relative z-30">
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
  </div>
</template>

<script setup lang="ts">
const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
</script>

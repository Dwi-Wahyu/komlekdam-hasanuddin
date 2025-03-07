<template>
  <div class="p-5 sm:p-10 sm:px-20">
    <WidgetsJudulSection text="MITRA" />

    <div class="grid grid-cols-1 gap-5 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="(temp, tempIdx) in range(1, 9)"
        class="shadow-yellow py-5 flex justify-center shadow"
        :key="tempIdx"
      >
        <img
          :src="`/image/profil/mitra/${temp}.png`"
          class="max-w-40 max-h-40"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
</script>

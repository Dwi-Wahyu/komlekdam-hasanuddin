<template>
  <div class="p-10">
    <WidgetsJudulSection text="MITRA" />

    <div class="grid grid-cols-1 sm:gap-5 sm:grid-cols-3">
      <div v-for="(temp, tempIdx) in range(1, 9)" :key="tempIdx">
        <img :src="`/image/profil/mitra/${temp}.png`" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
</script>

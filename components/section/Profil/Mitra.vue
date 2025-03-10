<template>
  <div class="px-5 sm:p-10 pb-14 sm:px-20">
    <WidgetsJudulSection text="MITRA" />

    <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div
        v-for="(temp, tempIdx) in range(1, 9)"
        @click="
          navigateTo(`/image/profil/dokumentasi/${temp}.jpeg`, {
            external: true,
          })
        "
        class="shadow-yellow cursor-pointer py-5 flex justify-center shadow hover:shadow-lg hover:shadow-yellow transition-all ease-in-out duration-300"
        :key="tempIdx"
      >
        <img
          :src="`/image/profil/mitra/${temp}.png`"
          class="max-w-40 max-h-40"
          alt=""
        />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3">
      <div
        @click="
          navigateTo(`/image/profil/dokumentasi/10.jpeg`, {
            external: true,
          })
        "
        class="md:col-start-2 shadow-yellow cursor-pointer py-5 flex justify-center shadow hover:shadow-lg hover:shadow-yellow transition-all ease-in-out duration-300"
      >
        <img
          :src="`/image/profil/mitra/10.png`"
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

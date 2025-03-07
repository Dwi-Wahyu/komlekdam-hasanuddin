<template>
  <div class="w-full relative h-fit min-h-screen">
    <div
      class="fixed w-full h-screen bg-center z-20 bg-cover bg-[url('/backgrounds/ppid-bg1.jpeg')]"
    ></div>
    <div
      class="relative z-30 bg-black/50 p-5 pb-20 flex flex-col items-center w-full md:pt-0 h-full justify-center"
    >
      <SectionPPIDProfil />

      <SectionPPIDStrukturOrganisasi />

      <SectionPPIDTugas />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing",
});
</script>

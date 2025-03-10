<template>
  <div class="w-full relative h-fit min-h-screen">
    <div
      class="relative z-30 p-5 pb-20 flex flex-col items-center w-full md:pt-0 h-full justify-center"
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

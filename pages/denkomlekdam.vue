<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <div
    class="w-full h-screen relative flex flex-col text-yellow bg-[url('/public/backgrounds/landing-background.png')] bg-center bg-cover"
  >
    <div
      class="flex mt-10 gap-7 flex-col items-center justify-center w-full h-full"
    >
      <img
        src="/image/tentang-kami/struktur-denkomlekdam.png"
        class="w-full sm:w-[65vw]"
        alt=""
      />
    </div>
  </div>

  <div class="flex justify-center items-center p-5 sm:p-0 sm:my-10">
    <img
      src="/image/tentang-kami/tupok-denhubdam.png"
      class="w-full sm:w-[65vw]"
      alt=""
    />
  </div>
</template>

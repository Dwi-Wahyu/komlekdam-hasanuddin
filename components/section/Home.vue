<template>
  <div
    class="w-full h-screen relative flex flex-col text-yellow bg-[url('/public/backgrounds/landing-background.png')] bg-center bg-cover"
  >
    <div
      class="flex mb-16 gap-7 flex-col items-center justify-center w-full h-full"
    >
      <h1 class="font-semibold text-2xl">Komlekdam XIV/Hasanuddin</h1>
      <h1 class="font-bold text-5xl">
        Profesional, Adaptif dan Dicintai Rakyat
      </h1>
      <div class="flex gap-3">
        <WidgetsButtonBaseButton> Selengkapnya </WidgetsButtonBaseButton>
        <WidgetsButtonBaseButton class="text-white" variant="outline">
          Hubungi Kami
        </WidgetsButtonBaseButton>
      </div>
    </div>
    <div class="absolute bottom-5 right-5">
      <img src="/icons/HomeBottomText.svg" alt="" />
    </div>
  </div>
</template>

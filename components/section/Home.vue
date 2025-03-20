<template>
  <div
    class="w-full h-screen relative flex flex-col text-yellow bg-[url('/public/backgrounds/landing-background.png')] bg-center bg-cover"
  >
    <div class="flex flex-col gap-5 items-center justify-center w-full h-full">
      <h1 class="font-semibold text-lg md:text-2xl">
        Komlekdam XIV/Hasanuddin
      </h1>
      <h1 class="font-bold text-xl text-center sm:text-3xl md:text-5xl">
        Profesional, Adaptif dan Dicintai Rakyat
      </h1>

      <div class="flex gap-3 mt-3">
        <WidgetsButtonBaseButton> Selengkapnya </WidgetsButtonBaseButton>
        <WidgetsButtonBaseButton
          @click="
            navigateTo('https://wa.link/ygcx7l', {
              external: true,
            })
          "
          class="text-white"
          variant="outline"
        >
          Hubungi Kami
        </WidgetsButtonBaseButton>
      </div>
      <div class="pr-9 sm:pr-10 md:pr-[14.6rem]">
        <img src="/image/home_bottom_text.svg" alt="" />
      </div>
    </div>
  </div>
</template>

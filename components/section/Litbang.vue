<template>
  <div
    class="w-full bg-center bg-cover bg-[url('/backgrounds/program-bg1.jpeg')]"
  >
    <div
      class="bg-black/50 p-5 sm:p-20 flex pt-24 pb-10 flex-col gap-7 items-center justify-center w-full h-full"
    >
      <WidgetsJudulSection
        text="Program Penelitian dan Pengembangan"
        :with-out-line="true"
      />
      <div
        class="grid grid-cols-1 gap-10 items-center justify-center md:grid-cols-3"
      >
        <div
          @click="navigateTo('/litbang/1')"
          class="relative w-full md:col-start-2 cursor-pointer sm:aspect-[359/461] border-2 border-yellow"
        >
          <img
            src="/image/litbang/1.jpeg"
            class="w-full h-full object-cover"
            alt=""
          />
          <div
            class="absolute bottom-0 bg-gradient-to-t pt-20 w-full from-black via-black to-transparent left-0 p-5"
          >
            <h1 class="font-semibold mb-1">Rekayasa Fast Charging HT</h1>
            <p class="text-xs gap-2 flex items-center">
              Selengkapnya <IconsTriangle />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

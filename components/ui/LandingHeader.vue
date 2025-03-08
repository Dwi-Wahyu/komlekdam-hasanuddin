<template>
  <div
    class="w-full px-5 py-6 fixed z-40 top-0 left-0 flex items-center justify-between"
  >
    <div class="flex items-center gap-2">
      <img src="/logo/logo.png" alt="" />
      <h1 class="font-bold text-lg md:text-xl">KOMLEKDAM XIV/Hasanuddin</h1>
    </div>
    <button class="md:hidden" @click="toggleIsOpen">
      <IconsBurger />
    </button>
    <div class="hidden gap-4 items-center md:flex">
      <button
        class="text-sm text-yellow hover:underline underline-offset-4"
        v-for="(nav, navIdx) in navigationMenu"
        @click="navigate(nav.path)"
        :class="[{ underline: link == nav.path }]"
        :key="navIdx"
      >
        {{ nav.label }}
      </button>
    </div>
  </div>

  <div
    class="transition-all duration-300 left-0 bg-[#1B1B1B] fixed z-50 ease-in-out p-5 w-full h-screen md:hidden"
    :class="[{ 'bottom-0': isOpen }, { 'bottom-[100vh]': !isOpen }]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img src="/logo/logo.png" class="max-w-[7vw]" alt="" />
        <h1 class="font-semibold">KOMLEKDAM XIV/Hasanuddin</h1>
      </div>
      <button @click="toggleIsOpen">
        <IconsChevronCircle />
      </button>
    </div>

    <div class="flex flex-col items-center gap-7 mt-10">
      <button
        class="text-yellow"
        v-for="(nav, navIdx) in navigationMenu"
        :href="nav.path"
        :key="navIdx"
        @click="navigate(nav.path)"
      >
        {{ nav.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMyLandingPageStore } from "~/store/landing-page-store";

type Navigation = {
  label: string;
  path: string;
};

const landingPageStore = useMyLandingPageStore();

const { link } = storeToRefs(landingPageStore);

const isOpen = ref(false);

function toggleIsOpen() {
  isOpen.value = !isOpen.value;
}

function navigate(route: string) {
  landingPageStore.changeLink(route);
  toggleIsOpen();
  navigateTo(route);
}

const navigationMenu: Navigation[] = [
  { label: "Home", path: "/" },
  { label: "Profil", path: "/profil" },
  { label: "Berita", path: "/berita" },
  { label: "Zona Integritas", path: "/zona-integritas" },
  { label: "PPID", path: "/ppid" },
  { label: "Program", path: "/program" },
  { label: "Litbang", path: "/litbang" },
  { label: "Cari Tenar", path: "/cari-tenar" },
  { label: "Lapor!", path: "/lapor" },
];
</script>

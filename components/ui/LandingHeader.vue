<template>
  <div
    class="w-full px-5 py-6 fixed z-40 top-0 left-0 flex items-center justify-between"
  >
    <div class="flex items-center gap-2">
      <img src="/logo/logo.png" alt="" />
      <h1 class="font-bold text-xl">KOMLEKDAM XIV/Hasanuddin</h1>
    </div>
    <div class="flex gap-4 items-center">
      <a
        class="text-sm text-yellow"
        v-for="(nav, navIdx) in navigationMenu"
        :href="nav.path"
        :key="navIdx"
      >
        {{ nav.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
type Navigation = {
  label: string;
  path: string;
};

const navigationMenu: Navigation[] = [
  { label: "Home", path: "#" },
  { label: "Profil", path: "#profil" },
  { label: "Berita", path: "#berita" },
  { label: "Zona Integritas", path: "#zona-integritas" },
  { label: "PPID", path: "#ppid" },
  { label: "Program", path: "#program" },
  { label: "Litbang", path: "#litbang" },
  { label: "Cari Tenar", path: "#cari-tenar" },
  { label: "Lapor!", path: "#lapor" },
];
</script>

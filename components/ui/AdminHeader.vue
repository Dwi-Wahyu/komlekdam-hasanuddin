<template>
  <div
    class="absolute flex justify-between w-full transition-all duration-300 ease-in-out top-0 left-0 p-4"
    :class="sidebarStore.sidebarActive ? 'pl-[20.5rem]' : 'pl-20'"
  >
    <div></div>

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-3">
        <IconsUser />
        <h1>{{ authStore.user.username }}</h1>
      </div>

      <IconsGear />
      <IconsBell />
    </div>
  </div>
</template>

<script setup>
import { useMyAuthStore } from "~/store/auth";
import { useMySidebarStore } from "~/store/sidebar";

const sidebarStore = useMySidebarStore();
const authStore = useMyAuthStore();
</script>

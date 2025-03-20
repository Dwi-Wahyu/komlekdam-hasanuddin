<template>
  <div class="bg-[#172b4c] p-5 w-full md:px-7 md:py-6 min-h-screen h-full">
    <div class="flex mt-2 text-white relative float-end items-center gap-6">
      <div class="flex items-center gap-3">
        <IconsUser />
        <h1>{{ authStore.user?.username }}</h1>
      </div>

      <IconsGear />
      <IconsBell />
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { useMyAuthStore } from "~/store/auth";

const authStore = useMyAuthStore();
</script>

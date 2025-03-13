<template>
  <div
    class="absolute flex justify-between w-full transition-all duration-300 ease-in-out top-0 left-0 p-4"
    :class="sidebarStore.sidebarActive ? 'pl-[20.5rem]' : 'pl-20'"
  >
    <h1 class="font-semibold text-lg">{{ pageName }}</h1>

    <div>
      <IconsUser />
    </div>
  </div>
</template>

<script setup>
import { useMySidebarStore } from "~/store/sidebar";

const route = useRoute();
const sidebarStore = useMySidebarStore();

const { path } = route;

const splitPath = path.split("/");

const pageName = splitPath[2][0].toUpperCase() + splitPath[2].substring(1);
</script>

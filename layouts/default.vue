<template>
  <div class="w-full min-h-screen bg-[#1C2940] text-white py-4 pr-4">
    <UiAdminHeader />

    <div
      class="p-4 transition-all ease-in-out duration-300 h-screen fixed left-0 top-0"
      :class="sidebarStore.sidebarActive ? 'w-[20rem]' : 'w-[5rem]'"
    >
      <Sidebar />
    </div>
    <div
      class="transition-all ease-in-out duration-300 mt-10"
      :class="sidebarStore.sidebarActive ? 'ml-[20.5rem]' : 'ml-20'"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "@/components/dashboard/layouts/Sidebar.vue";
import { useMySidebarStore } from "~/store/sidebar";
import { useMyAuthStore } from "~/store/auth";
const sidebarStore = useMySidebarStore();
const authStore = useMyAuthStore();
const router = useRouter();
onBeforeMount(async () => {});
</script>

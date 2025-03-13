<template>
  <span class="text-sm text-red-500 mt-1 block font-semibold">
    {{ error }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  error: string | undefined;
}>();
</script>

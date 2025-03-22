<template>
  <h1 class="text-yellow text-lg">
    {{ title }}
  </h1>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <h1 class="text-yellow font-bold mb-9 text-xl flex items-center flex-col">
    {{ text }}
    <div class="w-[354px] border-b border-yellow"></div>
  </h1>
</template>

<script setup>
defineProps({
  text: String,
});
</script>

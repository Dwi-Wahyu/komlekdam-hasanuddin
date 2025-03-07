<template>
  <div class="flex items-center justify-center flex-col">
    <div class="mb-2 text-center">
      <h1 class="text-yellow font-bold mt-1 text-xl flex items-center flex-col">
        {{ text }}
      </h1>
      <h1 class="text-yellow">{{ subtext }}</h1>
    </div>
    <div
      v-if="!withOutLine"
      class="w-[30vw] border-b border-yellow"
      :class="[margin]"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  subtext: String,
  margin: {
    type: String,
    default: "mb-7",
  },
  withOutLine: {
    type: Boolean,
    default: false,
  },
});
</script>

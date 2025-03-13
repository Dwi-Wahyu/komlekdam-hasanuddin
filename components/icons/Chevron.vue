<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="none" />
    <path
      fill="none"
      stroke="currentColor"
      stroke-dasharray="12"
      stroke-dashoffset="12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 8l-7 7M12 8l7 7"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.3s"
        values="12;0"
      />
    </path>
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: "90",
  },
  height: {
    type: String,
    default: "90",
  },
});
</script>

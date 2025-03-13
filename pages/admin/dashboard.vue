<template>
  <div>
    <a href="/masuk"> Kembali </a>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

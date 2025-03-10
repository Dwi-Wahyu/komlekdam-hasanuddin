<template>
  <div id="editor"></div>
</template>

<script setup>
import { onMounted } from "vue";
import "quill/dist/quill.snow.css";

onMounted(async () => {
  if (process.client) {
    const Quill = (await import("quill")).default;
    const quill = new Quill("#editor", {
      theme: "snow",
      modules: {
        toolbar: {
          container: [
            ["image"],
            ["link", "video"],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ],
        },
      },
    });
  }
});
</script>

<style scoped>
#editor {
  height: 400px;
}
</style>

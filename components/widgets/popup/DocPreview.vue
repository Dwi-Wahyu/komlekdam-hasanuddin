<template>
  <div
    class="w-full flex items-center flex-col justify-center top-0 left-0 fixed bg-black/50 min-h-screen z-50"
  >
    <div
      class="min-w-96 transition-all duration-300 ease-in-out"
      :class="startAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <div class="md:w-[60vw] w-full text-black p-4 shadow bg-white rounded-lg">
        <div class="flex items-center justify-between mb-2">
          <h1 class="font-semibold">Preview Dokumen</h1>
          <button @click="toggleModal">
            <IconsClose />
          </button>
        </div>

        <iframe :src="docUrl" class="w-full h-[85vh]" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);

defineProps({
  title: {
    type: String,
    default: "Modal Box",
  },
  docUrl: {
    type: String,
    default: "",
  },
});

const startAnimation = ref(false);

function toggleModal() {
  emit("close");
}

onMounted(async () => {
  setTimeout(() => {
    startAnimation.value = true;
  }, 1);
});
</script>

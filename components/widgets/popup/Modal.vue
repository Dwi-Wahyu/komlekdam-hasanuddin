<template>
  <div
    class="w-full flex items-center flex-col justify-center top-0 left-0 fixed bg-black/50 min-h-screen z-50"
  >
    <div
      class="min-w-96 transition-all duration-300 ease-in-out"
      :class="startAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <div
        class="bg-white border-b rounded-t-lg px-4 py-3 flex justify-between items-center"
      >
        <h1 class="font-semibold text-lg">{{ title }}</h1>

        <button @click="toggleModal">
          <IconsClose />
        </button>
      </div>
      <div
        class="p-4 bg-white shadow"
        :class="showAction ? '' : 'rounded-b-lg'"
      >
        <div class="w-full flex flex-col">
          <slot />
        </div>
      </div>
      <div
        v-if="showAction"
        class="flex bg-white justify-end rounded-b-lg px-4 py-3 gap-3 border-t"
      >
        <WidgetsButtonBaseButton
          @click="toggleModal"
          variant="outline"
          class="rounded-full"
        >
          {{ kembaliButtonText }}
        </WidgetsButtonBaseButton>
        <WidgetsButtonBaseButton @click="actionHandler" class="rounded-full">
          {{ actionButtonText }}
        </WidgetsButtonBaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close", "action"]);

defineProps({
  title: {
    type: String,
    default: "Modal Box",
  },
  showAction: {
    type: Boolean,
    default: true,
  },
  actionButtonText: {
    type: String,
    default: "Submit",
  },
  kembaliButtonText: {
    type: String,
    default: "Kembali",
  },
});

const startAnimation = ref(false);

function toggleModal() {
  emit("close");
}

function actionHandler() {
  emit("action");
}

onMounted(() => {
  setTimeout(() => {
    startAnimation.value = true;
  }, 1);
});
</script>

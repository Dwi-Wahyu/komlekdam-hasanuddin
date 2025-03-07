<template>
  <label v-if="label" :for="id" class="block text-sm font-bold mb-2">
    {{ label }} <span v-if="require" class="text-danger">*</span>
  </label>
  <textarea
    :id="id"
    :disabled="disabled"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="[
      height,
      error ? 'border-red-600' : 'border-gray-200',
      variantClasses,
    ]"
    :placeholder="placeholder"
  ></textarea>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  require: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "",
  },
  error: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: "h-72",
  },
  variant: {
    type: String,
    default: "normal",
  },
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case "normal":
      return "text-left w-full mb-4 focus:outline-none border shadow p-4 rounded-lg";
    case "outline":
      return "block w-full mb-4 border-b border-yellow px-3 py-2 bg-transparent focus:outline-none";
    default:
      return "";
  }
});
</script>

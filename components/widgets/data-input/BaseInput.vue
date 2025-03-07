<template>
  <div class="mb-4">
    <label v-if="label" :for="id" class="block text-sm font-bold mb-2">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[error ? 'border-danger' : 'border-gray-300', variantClasses]"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
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
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  error: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "normal",
  },
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case "normal":
      return "block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm";
    case "outline":
      return "block w-full px-3 py-2 border-b border-yellow bg-transparent focus:outline-none";
    default:
      return "";
  }
});
</script>

<template>
  <div>
    <!-- <h1 class="text-xs font-medium">
        Menampilkan {{ perPage }} dari {{ totalDatas }} Data
      </h1> -->
    <div class="flex items-center justi fy-center space-x-2 select-none">
      <!-- Tombol Sebelumnya -->

      <button
        class="pl-3 text-sm font-medium text-yellow disabled:text-[#C1CDD8] disabled:cursor-not-allowed"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        <IconsChevron class="-rotate-90" width="24" height="24" />
      </button>

      <!-- Nomor Halaman -->
      <button
        v-for="page in pages"
        :key="page"
        :class="[
          'px-4 py-2 text-xs font-medium  rounded-lg',
          page === currentPage
            ? 'bg-primary text-white '
            : 'bg-gray-100 text-gray-700  hover:bg-gray-100',
        ]"
        @click="changePage(page)"
      >
        {{ page }}
      </button>

      <!-- Tombol Berikutnya -->
      <button
        class="pr-3 text-sm font-medium text-yellow disabled:text-[#C1CDD8] disabled:cursor-not-allowed"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        <IconsChevron class="rotate-90" width="24" height="24" />
      </button>
    </div>

    <!-- <div>
        <BaseSelect
          class="block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
          id="perpage_select"
          :options="defaultOption"
          v-model="selectedValue"
          @change="handleChange"
        >
          <option
            v-for="(option, idx) in defaultOption"
            :key="idx"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </BaseSelect>
      </div> -->
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: Number,
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  totalDatas: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    required: true,
  },
});

const selectedValue = ref("");

watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue;
  },
  { immediate: true }
);

const emit = defineEmits(["page-change"]);
// Generate array of pages

// Generate visible pages with ellipsis
const pages = computed(() => {
  const range = [];

  // Tampilkan halaman pertama
  range.push(1);

  if (props.currentPage > 4) {
    // Tambahkan ellipsis jika halaman aktif > 4
    range.push("...");
  }

  // Tentukan range halaman di sekitar currentPage
  const start = Math.max(2, props.currentPage - 2);
  const end = Math.min(props.totalPages - 1, props.currentPage + 2);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  if (props.currentPage < props.totalPages - 3) {
    // Tambahkan ellipsis jika halaman aktif < totalPages - 3
    range.push("...");
  }

  // Tampilkan halaman terakhir jika totalPages > 1
  if (props.totalPages > 1) {
    range.push(props.totalPages);
  }

  return range;
});

// Emit page change event
const changePage = (page) => {
  if (page === "..." || page < 1 || page > props.totalPages) return;
  emit("page-change", page);
};
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-xl mb-4 font-semibold">Program</h1>

    <div
      class="bg-[#30394a] px-5 py-4 border-b-2 items-center flex justify-between"
    >
      <h1 class="text-kg font-semibold text-yellow">Program</h1>

      <WidgetsDataInputBaseInput placeholder="Cari Progam" v-model="search" />

      <WidgetsDataInputBaseSelect
        :options="perpageOptions"
        v-model:model-value="perpage"
      />
    </div>
    <div class="px-5 py-4 bg-[#202742]">
      <WidgetsDatatable
        :headers="tableHeaders"
        :data="data"
        :loading="loading"
        :show-button-action="true"
        :actions="actions"
        :columns-visible="['nomor', 'judul', 'tanggal', 'kategori']"
      />
    </div>
    <div
      class="bg-[#202742] shadow flex justify-between items-center px-5 py-4 border-t-2"
    >
      <h1 class="text-sm text-yellow font-thin">
        Menampilkan {{ perpage }} dari {{ programStore.totalDatas }} data
      </h1>

      <WidgetsButtonBaseButton
        @click="navigateTo('/admin/program/tambah-program')"
        size="sm"
        variant="outline"
      >
        Tambah Program
      </WidgetsButtonBaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import Edit from "~/components/icons/Edit.vue";
import Trash from "~/components/icons/Trash.vue";
import { useMyProgramStore } from "~/store/program";

definePageMeta({
  middleware: "auth",
});

const search = ref("");

const programStore = useMyProgramStore();

const perpageOptions = [
  {
    label: "5 Kolom",
    value: 5,
  },
  {
    label: "10 Kolom",
    value: 10,
  },
  {
    label: "50 Kolom",
    value: 50,
  },
];

const perpage = ref(programStore.perPage);

function loadData() {
  console.log(search.value);

  programStore.getData({
    search: search.value,
    per_page: perpage.value,
    page: 1,
  });
}

const { data, loading, tableHeaders } = storeToRefs(programStore);

const actions = [
  {
    label: "Edit",
    onClick: handleUpdateClick,
    btnVariant: "primary",
    icon: Edit,
  },
  {
    label: "Hapus",
    onClick: () => {},
    btnVariant: "danger",
    icon: Trash,
  },
];

function handleUpdateClick(row: any) {
  console.log(row);
  navigateTo("/admin/program/edit/" + row.id);
}

watch([search], () => {
  loadData();
});

onMounted(() => {
  loadData();
});
</script>

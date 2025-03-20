<template>
  <div class="flex flex-col">
    <h1 class="text-xl mb-4 font-semibold">Berita</h1>

    <div
      class="bg-[#30394a] px-5 py-4 border-b-2 items-center flex justify-between"
    >
      <h1 class="text-kg font-semibold text-yellow">List Berita</h1>

      <WidgetsDataInputBaseInput
        placeholder="Cari Progam"
        v-model="search"
        :with-icon="true"
        :icon="Search"
      />

      <div class="flex gap-2 items-center">
        <WidgetsDataInputBaseSelect
          :options="perpageOptions"
          v-model:model-value="perpage"
        />

        <WidgetsPagination
          :model-value="perpage"
          :current-page="beritaStore.currentPage"
          :total-pages="beritaStore.totalPages"
          :total-datas="beritaStore.totalDatas"
          :per-page="beritaStore.perPage"
          @page-change="handlePageChange"
        />
      </div>
    </div>
    <div class="px-5 py-4 bg-[#202742]">
      <WidgetsDatatable
        :headers="tableHeaders"
        :data="data"
        :loading="loading"
        :show-button-action="true"
        :actions="actions"
        :columns-visible="['nomor', 'judul', 'tanggal', 'penulis', 'kategori']"
      />
    </div>
    <div
      class="bg-[#202742] flex shadow justify-between items-center px-5 py-4 border-t-2"
    >
      <h1 class="text-sm text-yellow font-thin">
        Menampilkan {{ perpage }} dari {{ beritaStore.totalDatas }} data
      </h1>

      <WidgetsButtonBaseButton
        @click="navigateTo('/admin/berita/tambah-berita')"
        size="sm"
        variant="outline"
      >
        Tambah Berita
      </WidgetsButtonBaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import Edit from "~/components/icons/Edit.vue";
import Search from "~/components/icons/Search.vue";
import Trash from "~/components/icons/Trash.vue";
import { useMyBeritaStore } from "~/store/berita";

definePageMeta({
  middleware: "auth",
});

const search = ref("");

const beritaStore = useMyBeritaStore();

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

const { data, loading, tableHeaders, currentPage } = storeToRefs(beritaStore);

const perpage = ref(beritaStore.perPage);

function loadData() {
  console.log(search.value);

  beritaStore.getData({
    search: search.value,
    per_page: perpage.value,
    page: 1,
  });
}

const handlePageChange = (page: any) => {
  beritaStore.currentPage = page;
  loadData();
};

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
}

watch([search], () => {
  loadData();
});

onMounted(() => {
  loadData();
});
</script>

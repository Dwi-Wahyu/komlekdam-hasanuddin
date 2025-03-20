<template>
  <div class="text-white">
    <WidgetsTambahBackButton
      link="/profil/tambah-data-kakomlek-dan-wakakomlekdam"
    />

    <WidgetsJudulSection
      text="Form Tambah Data Kakomlekdam dan Wakakomlekdam XIV/Hsn"
      class="mt-4"
    />

    <div class="px-7 grid gap-7 grid-cols-2 py-6 bg-[#30394a]">
      <WidgetsDataInputBaseFileInput v-model="pasfoto" />

      <div class="flex flex-col gap-5">
        <WidgetsDataInputBaseInput
          label="Nama Lengkap"
          placeholder="Masukkan nama lengkap beserta gelar"
          v-model="nama"
          variant="outline"
        />

        <WidgetsDataInputBaseSelect
          label="Jabatan"
          :options="jabatanOptions"
          v-model="jabatan"
          variant="underline"
        />
      </div>

      <div @click="handleSubmit" class="flex justify-center col-span-2">
        <WidgetsButtonBaseButton variant="outline">
          Tambah Data
        </WidgetsButtonBaseButton>
      </div>
    </div>
  </div>

  <WidgetsPopupToast
    v-if="showToast"
    :label="toastLabel"
    @close="toggleToast"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "tambah",
});

const showToast = ref(false);
const toastLabel = ref("");

const pasfoto = ref<File | undefined>();
const nama = ref("");
const jabatan = ref("");

const axios = useAxios();

const jabatanOptions = [
  { label: "Kakomlekdam", value: "kakomlekdam" },
  { label: "Wakakomlekdam", value: "wakakomlekdam" },
];

function toggleToast() {
  showToast.value = !showToast.value;
}

async function handleSubmit() {
  const payload = new FormData();

  payload.append("nama", nama.value);
  payload.append("jabatan", jabatan.value);
  if (pasfoto.value) {
    payload.append("pasfoto", pasfoto.value);
  }

  const postRequest = await axios.postForm("/api/pejabat/kepala", payload);

  if (postRequest.data.success) {
    toggleToast();
    toastLabel.value = postRequest.data.message;
  }
}
</script>

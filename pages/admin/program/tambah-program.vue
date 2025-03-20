<template>
  <WidgetsTambahBackButton
    link="/program/tambah-program"
    kembali-to="/admin/program"
    class="text-white"
  />

  <WidgetsJudulSection text="Form Tambah Program" />

  <div class="w-full bg-[#303949] text-white">
    <form @submit="onSubmit" class="p-5 bg-[#303949] w-full h-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <WidgetsDataInputBaseFileInput
          v-model="thumbnail"
          :error="errors.thumbnail"
        />
        <div class="flex flex-col gap-4 text-yellow">
          <div>
            <WidgetsDataInputBaseInput
              v-model="judul"
              placeholder="Ketik judul"
              label="Judul Program"
              variant="outline"
              :bind-attr="judulAttrs"
            />
            <WidgetsErrorInput :error="errors.judul" />
          </div>

          <div>
            <WidgetsDataInputBaseTextArea
              label="Deskripsi Singkat"
              placeholder="Masukkan Deskripsi Singkat Program"
              v-model="deskripsi"
              variant="outline"
              height="h-28"
              :bind-attr="deskripsiAttrs"
            />
            <WidgetsErrorInput :error="errors.deskripsi" />
          </div>

          <div>
            <WidgetsDataInputBaseInput
              label="Tanggal Program"
              placeholder="Masukkan Tanggal Program"
              v-model="tanggal"
              type="date"
              variant="outline"
              :bind-attr="tanggalAttrs"
            />
            <WidgetsErrorInput :error="errors.tanggal" />
          </div>

          <div>
            <WidgetsDataInputBaseSelect
              label="Kategori Program"
              placeholder="Pilih Kategori Program"
              variant="underline"
              :options="kategoriOptions"
              v-model="kategori"
            />
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h1 class="text-yellow font-semibold mb-2">Detail</h1>
        <WidgetsEditorQuill @editor-content="onChangeEditor" />
        <WidgetsErrorInput :error="errors.detail" />
      </div>

      <div class="mt-5">
        <h1 class="text-yellow font-semibold mb-2">Dokumentasi</h1>
        <WidgetsDataInputBaseFileInput
          v-model="dokumentasi"
          label="Tambahkan Dokumentasi"
          :multiple="true"
        />
        <WidgetsErrorInput class="mt-4" :error="errors.dokumentasi" />
      </div>

      <div class="mt-5 flex justify-center gap-5">
        <WidgetsButtonBaseButton
          variant="outline"
          type="submit"
          class="border-yellow text-yellow"
        >
          Buat Program
        </WidgetsButtonBaseButton>
      </div>
    </form>
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
  middleware: "auth",
});

import { useForm } from "vee-validate";
import {
  inputProgramSchema,
  type TInputProgramSchema,
} from "~/schema/program/input";
import { useMyAuthStore } from "~/store/auth";

const showToast = ref(false);
const toastLabel = ref("");

const runtimeConfig = useRuntimeConfig();
const { baseURL } = runtimeConfig.public.axios;
const authStore = useMyAuthStore();
const axios = useAxios();

function toggleToast() {
  showToast.value = !showToast.value;
}

const {
  defineField,
  errors,
  handleSubmit,
  setFieldError,
  isFieldValid,
  validateField,
  submitForm,
  isFieldTouched,
  resetForm,
} = useForm<TInputProgramSchema>({
  validationSchema: inputProgramSchema,
});

const kategoriOptions = [
  { label: "Program", value: "program" },
  { label: "Non Program", value: "non-program" },
];

const [judul, judulAttrs] = defineField("judul");
const [deskripsi, deskripsiAttrs] = defineField("deskripsi");
const [tanggal, tanggalAttrs] = defineField("tanggal");
const [kategori, kategoriAttrs] = defineField("kategori");
const [detail, detailAttrs] = defineField("detail");
const [thumbnail, thumbnailAttrs] = defineField("thumbnail");
const [dokumentasi, dokumentasiAttrs] = defineField("dokumentasi");

function onChangeEditor(content: string) {
  detail.value = content;
}

const onSubmit = handleSubmit(async (payload: TInputProgramSchema) => {
  const formData = new FormData();
  formData.append("judul", payload.judul);
  formData.append("deskripsi", payload.deskripsi);
  formData.append("tanggal", payload.tanggal);
  formData.append("kategori", payload.kategori);
  formData.append("detail", payload.detail);

  if (payload.thumbnail) {
    formData.append("thumbnail", payload.thumbnail);
  }

  if (payload.dokumentasi) {
    for (const each of payload.dokumentasi) {
      formData.append("dokumentasi", each);
    }
  }

  const url = baseURL + "/api/program";

  const createRequest = await fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: "Bearer " + authStore.token,
    },
  });

  if (createRequest.status === 201) {
    toastLabel.value = "Berhasil membuat program";
    toggleToast();
    resetForm();
  }
});
</script>

<template>
  <div class="w-full min-h-screen p-5 sm:p-16 sm:py-10">
    <WidgetsJudulSection text="Form Input Berita" />
    <div class="p-5 bg-[#303949] w-full h-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div
          class="w-full cursor-pointer flex shadow-lg p-5 transition-all ease-in-out duration-300 text-yellow hover:shadow-yellow flex-col gap-5 items-center justify-center bg-[#1d242e] h-full"
          @click="handleClickUpload"
        >
          <div
            class="flex items-center flex-col gap-5"
            v-if="!thumbnailPreview"
          >
            <IconsUpload />
            <h1>Upload Thumbnail Berita</h1>
            <input
              type="file"
              class="hidden"
              ref="fileInput"
              accept="image/*"
              @change="handleFileChange"
            />
          </div>

          <img
            v-if="thumbnailPreview"
            :src="thumbnailPreview"
            alt="Preview"
            class="max-w-full max-h-96 object-cover"
          />
        </div>
        <div class="text-yellow">
          <div class="mb-4">
            <WidgetsDataInputBaseInput
              v-model="judul"
              placeholder="Ketik judul"
              label="Judul Berita"
              variant="outline"
            />
          </div>

          <div>
            <WidgetsDataInputBaseTextArea
              label="Deskripsi Singkat"
              placeholder="Masukkan Deskripsi Singkat Berita"
              variant="outline"
              height="h-40"
            />
          </div>

          <div>
            <WidgetsDataInputBaseInput
              label="Tanggal Berita"
              placeholder="Masukkan Tanggal Berita"
              type="date"
              variant="outline"
            />
          </div>
        </div>
      </div>
      <div class="mt-5">
        <WidgetsDataInputQuillEditor />
      </div>

      <div class="mt-5 flex justify-center gap-5">
        <WidgetsButtonBaseButton
          @click="handleHapusThumbnail"
          variant="secondary"
        >
          Hapus Thumbnail
        </WidgetsButtonBaseButton>
        <WidgetsButtonBaseButton
          variant="outline"
          class="border-yellow text-yellow"
        >
          Buat Berita
        </WidgetsButtonBaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  inputBeritaSchema,
  type TInputBeritaSchema,
} from "~/schema/input-berita-schema";

import { useForm, ErrorMessage } from "vee-validate";

const kategoriOptions = [
  { label: "Politik", value: "politik" },
  { label: "Ekonomi", value: "ekonomi" },
  "Hukum dan Kriminal",
  "Kesehatan",
];

const {
  defineField,
  errors,
  handleSubmit,
  setFieldError,
  isFieldValid,
  validateField,
  isFieldTouched,
} = useForm<TInputBeritaSchema>({
  validationSchema: inputBeritaSchema,
});

const fileInput = ref<HTMLInputElement | null>(null);
const thumbnailPreview = ref<string | null>(null);

function handleHapusThumbnail() {
  thumbnailPreview.value = "";
}

function handleClickUpload() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      thumbnailPreview.value = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  }
}

const [judul, judulAttrs] = defineField("judul");
const [deskripsi, deskripsiAttrs] = defineField("deskripsi");
const [tenggat, tenggatAttrs] = defineField("tenggat");
const [kategori, kategoriAttrs] = defineField("kategori");

function onSubmit(values: any) {
  // Submit values to API...
  console.log(values);
}
</script>

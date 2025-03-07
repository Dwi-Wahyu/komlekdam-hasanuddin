<template>
  <div class="w-full min-h-screen p-16 py-10">
    <WidgetsJudulSection text="Form Input Berita" />
    <div class="p-5 bg-[#303949] w-full h-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div
          class="w-full flex drop-shadow-xl text-yellow flex-col gap-5 items-center justify-center bg-[#1d242e] h-full"
        >
          <IconsUpload />
          <h1>Upload Thumbnail Berita</h1>
        </div>
        <div class="text-yellow">
          <div>
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

      <div class="mt-5 flex justify-center">
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

const [judul, judulAttrs] = defineField("judul");
const [deskripsi, deskripsiAttrs] = defineField("deskripsi");
const [tenggat, tenggatAttrs] = defineField("tenggat");
const [kategori, kategoriAttrs] = defineField("kategori");

function onSubmit(values: any) {
  // Submit values to API...
  console.log(values);
}
</script>

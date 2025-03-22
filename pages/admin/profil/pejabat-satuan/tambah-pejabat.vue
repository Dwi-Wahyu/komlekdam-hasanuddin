<template>
  <div class="text-white">
    <WidgetsTambahBackButton
      link="/admin/profil/tambah-pejabat-satuan"
      kembali-to="/admin/profil/pejabat-satuan"
    />

    <WidgetsJudulSection text="Form Tambah Data Pejabat Satuan" class="mt-4" />

    <form
      @submit="onSubmit"
      class="px-7 grid gap-7 grid-cols-2 py-6 bg-[#30394a]"
    >
      <div>
        <WidgetsDataInputBaseFileInput
          label="Upload Pas Photo"
          v-model="pasfoto"
          min-height="min-h-96"
        />
        <WidgetsErrorInput :error="errors.pasfoto" class="mt-3" />
      </div>

      <div class="flex flex-col gap-5">
        <div>
          <WidgetsDataInputBaseInput
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap beserta gelar"
            v-model="nama"
            :bind-attr="namaAttrs"
            variant="outline"
          />
          <WidgetsErrorInput :error="errors.nama" />
        </div>

        <div>
          <WidgetsDataInputBaseSelect
            label="Jabatan"
            :options="jabatanOptions"
            v-model="jabatan"
            variant="underline"
          />
          <WidgetsErrorInput :error="errors.jabatan" />
        </div>
      </div>

      <div class="flex justify-center col-span-2">
        <WidgetsButtonBaseButton type="submit" variant="outline">
          Tambah Data
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
import { useForm } from "vee-validate";
import { jabatanOptions } from "~/data/data-jabatan";
import {
  inputPejabatSatuanSchema,
  type TInputPejabatSatuanSchema,
} from "~/schema/pejabat-satuan/input";

definePageMeta({
  layout: "tambah",
});

const showToast = ref(false);
const toastLabel = ref("");

const { defineField, errors, handleSubmit, resetForm } =
  useForm<TInputPejabatSatuanSchema>({
    validationSchema: inputPejabatSatuanSchema,
  });

const [nama, namaAttrs] = defineField("nama");
const [jabatan, jabatanAttrs] = defineField("jabatan");
const [pasfoto, pasfotoAttrs] = defineField("pasfoto");

const axios = useAxios();

function toggleToast() {
  showToast.value = !showToast.value;
}

const onSubmit = handleSubmit(async (payload: TInputPejabatSatuanSchema) => {
  const formdata = new FormData();

  formdata.append("nama", nama.value);
  formdata.append("jabatan", jabatan.value);
  if (pasfoto.value) {
    formdata.append("pasfoto", pasfoto.value);
  }

  const postRequest = await axios.postForm("/api/pejabat", formdata);

  if (postRequest.data.success) {
    toggleToast();
    toastLabel.value = postRequest.data.message;
    resetForm();
  }
});
</script>

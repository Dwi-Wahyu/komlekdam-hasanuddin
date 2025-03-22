<template>
  <div class="text-white">
    <WidgetsTambahBackButton
      link="/admin/profil/kepala-satuan-lampau/tambah-kepala-satuan-lampau"
      kembali-to="/admin/profil/kepala-satuan-lampau"
    />

    <WidgetsJudulSection text="Form Tambah Data Pejabat Satuan" class="mt-4" />

    <form
      @submit="onSubmit"
      class="px-7 grid gap-7 grid-cols-2 py-6 bg-[#30394a]"
    >
      <div>
        <WidgetsDataInputBaseFileInput
          label="Upload Pasfoto"
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
          <WidgetsDataInputBaseInput
            label="Masa Jabatan"
            placeholder="Masukkan Masa Jabatan"
            v-model="periode"
            :bind-attr="periodeAttrs"
            variant="outline"
          />
          <WidgetsErrorInput :error="errors.periode" />
        </div>

        <div>
          <WidgetsDataInputBaseInput
            label="Nama Jabatan"
            placeholder="Masukkan Masa Jabatan"
            v-model="jabatan"
            :bind-attr="jabatanAttrs"
            variant="outline"
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
import {
  inputKepalaSatuanLampauSchema,
  type TInputKepalaSatuanLampauSchema,
} from "~/schema/kepala-satuan-lampau/input";

definePageMeta({
  layout: "tambah",
});

const showToast = ref(false);
const toastLabel = ref("");

const { defineField, errors, handleSubmit, resetForm } =
  useForm<TInputKepalaSatuanLampauSchema>({
    validationSchema: inputKepalaSatuanLampauSchema,
  });

const [nama, namaAttrs] = defineField("nama");
const [jabatan, jabatanAttrs] = defineField("jabatan");
const [periode, periodeAttrs] = defineField("periode");
const [pasfoto, pasfotoAttrs] = defineField("pasfoto");

const axios = useAxios();

function toggleToast() {
  showToast.value = !showToast.value;
}

const onSubmit = handleSubmit(
  async (payload: TInputKepalaSatuanLampauSchema) => {
    const formdata = new FormData();

    formdata.append("nama", nama.value);
    formdata.append("jabatan", jabatan.value);
    formdata.append("periode", periode.value);
    if (pasfoto.value) {
      formdata.append("pasfoto", pasfoto.value);
    }

    const postRequest = await axios.postForm(
      "/api/kepala-satuan-lampau",
      formdata
    );

    if (postRequest.data.success) {
      toggleToast();
      toastLabel.value = postRequest.data.message;
      resetForm();
    }
  }
);
</script>

<template>
  <div
    class="w-full pt-20 pb-12 flex-col p-5 text-yellow flex items-center justify-center"
  >
    <WidgetsJudulSection text="Lapor!" subtext="Sigap, Cepat, Tanggap" />
    <form
      @submit="onSubmit"
      class="flex flex-col gap-4 bg-[#303949] p-10 w-full md:w-[40vw]"
    >
      <div>
        <WidgetsDataInputBaseInput
          label="Nama"
          placeholder="Masukkan Nama Lengkap"
          variant="outline"
          v-model="nama"
          v-bind="namaAttrs"
        />

        <span class="text-red-500 text-sm mt-1 block">
          {{ errors.nama }}
        </span>
      </div>

      <div>
        <WidgetsDataInputBaseInput
          label="Nomor Telepon"
          placeholder="Masukkan Nomor Telepon Aktif/Whatsapp"
          variant="outline"
          v-model="nomor"
          v-bind="nomorAttrs"
        />

        <span class="text-red-500 text-sm mt-1 block">
          {{ errors.nomor }}
        </span>
      </div>

      <div>
        <WidgetsDataInputBaseInput
          label="Email"
          placeholder="Masukkan Email"
          variant="outline"
          v-model="email"
          v-bind="emailAttrs"
        />

        <span class="text-red-500 text-sm mt-1 block">
          {{ errors.email }}
        </span>
      </div>

      <div>
        <WidgetsDataInputBaseInput
          label="Pesan"
          placeholder="Masukkan isi, kritik, dan saran"
          variant="outline"
          v-model="pesan"
          v-bind="pesanAttrs"
        />

        <span class="text-red-500 text-sm mt-1 block">
          {{ errors.pesan }}
        </span>
      </div>

      <div class="flex justify-center">
        <WidgetsButtonBaseButton
          type="submit"
          variant="outline"
          class="mt-5 border-yellow"
        >
          Buat Laporan
        </WidgetsButtonBaseButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import { object, string, type InferType } from "yup";

definePageMeta({
  layout: "landing",
});

const BuatLaporanSchema = object({
  nama: string().required("Tolong ketik nama"),
  nomor: string().required("Tolong ketik nomor"),
  email: string().required("Tolong ketik email"),
  pesan: string().required("Tolong ketik pesan"),
});

type TBuatLaporanSchema = InferType<typeof BuatLaporanSchema>;

const { defineField, isSubmitting, errors, isValidating, handleSubmit } =
  useForm<TBuatLaporanSchema>({
    validationSchema: BuatLaporanSchema,
  });

const [nama, namaAttrs] = defineField("nama");
const [nomor, nomorAttrs] = defineField("nomor");
const [email, emailAttrs] = defineField("email");
const [pesan, pesanAttrs] = defineField("pesan");

const onSubmit = handleSubmit(async (values) => {
  console.log(values);

  const createRequest = await $fetch("/api/laporan", {
    method: "POST",
    body: values,
  });

  console.log(createRequest);
});
</script>

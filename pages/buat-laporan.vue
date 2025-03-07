<template>
  <div
    class="w-full pt-20 pb-12 flex-col p-5 text-yellow flex items-center justify-center"
  >
    <WidgetsJudulSection text="Lapor!" subtext="Sigap, Cepat, Tanggap" />
    <div class="bg-[#303949] p-10 w-full sm:w-[40vw]">
      <div>
        <WidgetsDataInputBaseInput
          label="Nama"
          placeholder="Masukkan Nama Lengkap"
          variant="outline"
        />
      </div>

      <div>
        <WidgetsDataInputBaseInput
          label="Nomor Telepon"
          placeholder="Masukkan Nomor Telepon Aktif/Whatsapp"
          variant="outline"
        />
      </div>

      <div>
        <WidgetsDataInputBaseInput
          label="Email"
          placeholder="Masukkan Email"
          variant="outline"
        />
      </div>

      <div>
        <WidgetsDataInputBaseInput
          label="Pesan"
          placeholder="Masukkan isi, kritik, dan saran"
          variant="outline"
        />
      </div>

      <div class="flex justify-center">
        <WidgetsButtonBaseButton variant="outline" class="mt-5 border-yellow">
          Buat Laporan
        </WidgetsButtonBaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing",
});
</script>

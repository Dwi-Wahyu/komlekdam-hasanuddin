<template>
  <div class="flex gap-1 items-center">
    <button @click="navigateTo('/admin/profil')">
      <IconsChevron width="20" height="20" class="-rotate-90" />
    </button>
    <WidgetsAdminPageTitle
      title="Kakomlekdam dan Wakakomlekdam XIV/ Hasanuddin"
    />
  </div>

  <div class="mt-5 grid grid-cols-1 gap-7 md:grid-cols-2">
    <div v-for="(kepala, kepalaIdx) in data">
      <div
        v-if="kepala"
        class="flex-col gap-3 p-4 shadow-[7px_7px_0px_0px_rgba(0,0,0,0.2)] bg-[#303949] flex items-center justify-center"
      >
        <div class="flex items-center w-full gap-3 justify-between">
          <div>
            <h1 class="text-yellow">
              {{ kepala.nama }}
            </h1>
            <h1 class="text-sm">
              <span v-if="kepalaIdx === 'kakomlekdam'">
                Kakomlekdam XIV/ Hasanuddin
              </span>

              <span v-else> Wakakomlekdam XIV/ Hasanuddin </span>
            </h1>
          </div>

          <button
            @click="navigateTo(`/admin/profil/kepala/edit-kepala/${kepalaIdx}`)"
          >
            <IconsEdit width="17" height="17" fill="#fff" />
          </button>
        </div>

        <img
          :src="`${baseURL}/profil/${kepala.pasfoto}`"
          class="max-w-60 md:max-w-72"
          alt=""
        />
      </div>
      <div
        v-else
        class="cursor-pointer flex-col gap-3 bg-[#303949] shadow h-48 flex items-center justify-center"
        @click="navigateTo('/admin/profil/kepala/tambah-kepala')"
      >
        <IconsUserFill />

        <h1>Belum menambahkan {{ kepalaIdx }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  middleware: "auth",
});

type Kepala = {
  kakomlekdam: {
    nama: string;
    pasfoto: string;
  };
  wakakomlekdam: {
    nama: string;
    pasfoto: string;
  };
};

const runtimeConfig = useRuntimeConfig();
const { baseURL } = runtimeConfig.public.axios;

const { data, pending: loading } = useMyFetch<Kepala>("/api/pejabat/kepala", {
  lazy: true,
});
</script>

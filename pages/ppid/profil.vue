<template>
  <div class="p-5 pb-10 pt-20 flex flex-col items-center">
    <WidgetsJudulSection
      text="Profil Pejabat Pengelola Informasi dan Dokumentasi"
      class=""
      margin="mb-3"
    />

    <h1 class="text-sm mt-3 text-center md:w-[60vw]">
      PPID (Pejabat Pengelola Informasi dan Dokumentasi) adalah pejabat atau
      unit kerja yang bertanggung jawab untuk penyimpanan, pendokumentasian,
      penyediaan, dan/atau pelayanan informasi publik di Indonesia.
    </h1>

    <div class="flex md:flex-row md:w-[70vw] items-center w-full flex-col mt-3">
      <img src="/logo/ppid.png" class="max-w-[20rem]" alt="" />
      <div>
        <h1 class="mb-2">
          PPID dibentuk berdasarkan Undang-Undang Nomor 14 Tahun 2008 tentang
          Keterbukaan Informasi Publik (UU KIP). Beberapa poin penting tentang
          PPID:
        </h1>
        <ol class="">
          <li class="flex gap-2">
            <span>1.</span>
            Fungsi utamanya adalah mengelola dan menyediakan informasi publik
            yang dapat diakses oleh masyarakat.
          </li>
          <li class="flex gap-2">
            <span>2.</span>
            PPID ada di setiap badan publik, baik di tingkat pusat maupun
            daerah, termasuk kementerian, lembaga pemerintah non-kementerian,
            pemerintah daerah, BUMN, dan BUMD.
          </li>
          <li class="flex gap-2">
            <span>3.</span>
            PPID bertugas memastikan hak masyarakat untuk mendapatkan informasi
            publik terpenuhi, kecuali untuk informasi yang dikecualikan oleh
            undang-undang.
          </li>
          <li class="flex gap-2">
            <span>4.</span>
            PPID menjadi garda terdepan dalam implementasi keterbukaan informasi
            publik di Indonesia sebagai wujud tata kelola pemerintahan yang baik
            (good governance).
          </li>
          <li class="flex gap-2">
            <span>5.</span>
            PPID juga mengelola pengajuan keberatan atas informasi yang tidak
            diberikan atau ditolak, sesuai dengan prosedur yang diatur dalam UU
            KIP.
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing",
});
</script>

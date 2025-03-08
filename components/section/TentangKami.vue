<template>
  <div class="w-full p-5 py-10 pb-16">
    <h1 class="text-yellow text-xl font-bold">Tentang Kami</h1>
    <div class="flex flex-col items-center md:flex-row gap-12 md:px-5 mt-4">
      <div class="flex flex-col gap-3">
        <h1 class="font-bold text-2xl">KOMLEKDAM XIV/HASANUDDIN</h1>
        <p>
          Komunikasi dan Elektronika Kodam XIV/Hsn yang selanjutnya disebut
          Komlekdam XIV/Hsn adalah salah satu Badan Pelaksana Tingkat Kodam
          berkedudukan langsung di bawah Pangdam XIV/Hsn dengan tugas pokok
          menyelenggarakan Peperangan Elektronika (Pernika), Komunikasi dan
          Elektronika, Sistem Komando Pengendalian (Siskodal) dan Informasi,
          Foto Film Militer, serta Konstruksi, Pembekalan, Pemeliharaan,
          instalasi (Konbekharstal) materiel perhubungan dalam rangka mendukung
          tugas pokok Kodam.
        </p>
        <WidgetsButtonBaseButton
          variant="outline"
          class="border-yellow text-yellow w-fit"
        >
          Selengkapnya
        </WidgetsButtonBaseButton>
      </div>

      <img src="/public/image/tentang-kami/1.png" alt="" />
    </div>
    <div class="mt-10">
      <WidgetsJudulSection text="JAJARAN KOMLEKDAM XIV/HASANUDDIN" />
      <div class="flex w-full flex-col gap-7">
        <div
          class="flex"
          v-for="(temp, tempIdx) in jajaran"
          :key="tempIdx"
          :class="{ 'justify-end': (tempIdx + 1) % 2 == 0 }"
        >
          <div
            class="flex bg-[#303949] md:w-[70vw] items-center md:flex-row flex-col w-full border-[3.35px] border-yellow gap-5 p-5 md:p-7"
          >
            <img :src="temp.imgUrl" alt="" class="h-fit" />
            <div class="flex flex-col gap-3">
              <h1 class="text-lg text-yellow font-semibold">
                {{ temp.title }}
              </h1>
              <p class="text-md">
                {{ temp.desc }}
              </p>
              <WidgetsButtonBaseButton
                variant="outline"
                class="border-yellow mt-1 text-yellow w-fit"
              >
                Selengkapnya
              </WidgetsButtonBaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Jajaran = {
  title: string;
  desc: string;
  imgUrl: string;
  pathSelengkapnya: string;
};

const jajaran: Jajaran[] = [
  {
    title: "DENKOMLEKDAM XIV/HASANUDDIN",
    desc: `Detasemen Komunikasi dan Elektronika Korem 141 yang selanjutnya disebut Denkomlek Korem 141 adalah salah satu Badan Pelaksana Tingkat Korem berkedudukan langsung di bawah Kakomlekdam XIV/Hsn dengan tugas pokok menyelenggarakan kegiatan Komunikasi dan Elektronika yang meliputi Komunikasi, Pernika dan Foto Film Militer dan Konbekharstal Mathub dalam rangka mendukung tugas pokok Komlekdam di wilayah Korem 141/TP.`,
    imgUrl: "/image/tentang-kami/2.png",
    pathSelengkapnya: "/",
  },
  {
    title: "DENKOMLEK KOREM 141",
    desc: `Detasemen Komunikasi dan Elektronika Korem 141 yang selanjutnya disebut Denkomlek Korem 141 adalah salah satu Badan Pelaksana Tingkat Korem berkedudukan langsung di bawah Kakomlekdam XIV/Hsn dengan tugas pokok menyelenggarakan kegiatan Komunikasi dan Elektronika yang meliputi Komunikasi, Pernika dan Foto Film Militer dan Konbekharstal Mathub dalam rangka mendukung tugas pokok Komlekdam di wilayah Korem 141/TP.`,
    imgUrl: "/image/tentang-kami/3.png",
    pathSelengkapnya: "/",
  },
  {
    title: "DENKOMLEK KOREM 142",
    desc: `Detasemen Komunikasi dan Elektronika Korem 142 yang selanjutnya disebut Denkomlek Korem 142 adalah salah satu Badan Pelaksana Tingkat Korem berkedudukan langsung di bawah Kakomlekdam XIV/Hsn dengan tugas pokok menyelenggarakan kegiatan Komunikasi dan Elektronika yang meliputi Komunikasi, Pernika dan Foto Film Militer dan Konbekharstal Mathub dalam rangka mendukung tugas pokok Komlekdam di wilayah Korem 142/Tatag.`,
    imgUrl: "/image/tentang-kami/4.png",
    pathSelengkapnya: "/",
  },
  {
    title: "DENKOMLEK KOREM 143",
    desc: `Detasemen Komunikasi dan Elektronika Korem 143 yang selanjutnya disebut Denkomlek Korem 143 adalah salah satu Badan Pelaksana Tingkat Korem berkedudukan langsung di bawah Kakomlekdam XIV/Hsn dengan tugas pokok menyelenggarakan kegiatan Komunikasi dan Elektronika yang meliputi Komunikasi, Pernika dan Foto Film Militer dan Konbekharstal Mathub dalam rangka mendukung tugas pokok Komlekdam di wilayah Korem 143/HO.`,
    imgUrl: "/image/tentang-kami/5.png",
    pathSelengkapnya: "/",
  },
];
</script>

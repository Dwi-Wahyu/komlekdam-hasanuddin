import { defineStore } from "pinia";
import type { TDatatableResponse } from "~/types/datatatable.response";
interface ResData {
  msg: string;
  data: any;
  status: string;
}

type TProgramType = {
  nomor: number;
  nama: string;
  periode: string;
  jabatan: string;
};

type TDatatableData = TDatatableResponse & {
  data: TProgramType[];
};

export const useMyKepalaSatuanLampauStore = defineStore({
  id: "myKepalaSatuanLampauStore",
  state: () => ({
    currentPage: 1,
    totalPages: 10,
    perPage: 5,
    data: [] as any[],
    totalDatas: 50,
    tableHeaders: ["No", "Nama Lengkap", "Jabatan", "Masa Jabatan", "Aksi"],
    step: 1,
    error: false,
    error_data: null as ResData | null,
    responseData: null as ResData | null,
    loading: false,
  }),
  actions: {
    async getData(payload: any) {
      this.loading = true;
      this.error = false;
      this.error_data = null;
      this.data = [];

      const axios = useAxios();

      try {
        const request = await axios.get<TDatatableData>(
          "/api/kepala-satuan-lampau/data",
          {
            params: payload,
          }
        );

        request.data.data.map((element, index: number) => {
          const { nomor, jabatan, periode, nama } = element;

          let tempData = {
            nomor,
            jabatan,
            periode,
            nama,
          };

          this.data.push(tempData);
        });

        this.currentPage = request.data.currentPage || 1;
        this.totalPages = request.data.totalPages || 1;
        this.totalDatas = request.data.totalDatas || 5;

        this.loading = false;
      } catch (error) {}
    },
  },
});

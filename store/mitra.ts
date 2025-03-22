import { defineStore } from "pinia";
import type { TDatatableResponse } from "~/types/datatatable.response";
interface ResData {
  msg: string;
  data: any;
  status: string;
}

type TMitraType = {
  nomor: number;
  logoPath: string;
  nama: string;
};

type TDatatableData = TDatatableResponse & {
  data: TMitraType[];
};

export const useMyMitraStore = defineStore({
  id: "myMitraStore",
  state: () => ({
    currentPage: 1,
    totalPages: 10,
    perPage: 5,
    data: [] as any[],
    totalDatas: 50,
    tableHeaders: ["No", "Logo", "Nama", "Aksi"],
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
        const request = await axios.get<TDatatableData>("/api/mitra/data", {
          params: payload,
        });

        request.data.data.map((element, index: number) => {
          const { nomor, nama, logoPath } = element;

          const url = "profil/mitra/logo/" + logoPath;

          let tempData = {
            no: index + 1,
            nomor,
            nama,
            logo: url,
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

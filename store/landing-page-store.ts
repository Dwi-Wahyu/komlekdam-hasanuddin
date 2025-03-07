import { defineStore } from "pinia";

export const useMyLandingPageStore = defineStore("myLandingPageStore", {
  state: () => ({
    link: "/",
  }),
  persist: true,
  actions: {
    async changeLink(payload: string) {
      this.link = payload;
    },
  },
});

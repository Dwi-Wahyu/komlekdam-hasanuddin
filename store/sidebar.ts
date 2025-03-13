import { defineStore } from "pinia";
import { menuItems } from "~/data/sidebar/menu";

export const useMySidebarStore = defineStore("mySidebarStore", {
  state: () => ({
    appName: "eData Garing",
    menu: menuItems,
    parentActive: "/",
    sidebarActive: true,
    linkActive: "/",
  }),
  actions: {
    async changeParent(payload: any) {
      this.parentActive = payload;
    },

    async changeLink(link: string) {
      this.linkActive = link;
    },

    actionSidebar() {
      this.sidebarActive = !this.sidebarActive;
    },
  },
});

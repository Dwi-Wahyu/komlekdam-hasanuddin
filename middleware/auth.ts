import { useMyAuthStore } from "~/store/auth";
import { useMySidebarStore } from "~/store/sidebar";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useMyAuthStore();
  const sidebarStore = useMySidebarStore();

  sidebarStore.changeLink(to.path);
  sidebarStore.changeParent(to.path);

  if (authStore.isTokenExpired) {
    return navigateTo("/masuk");
  }
});

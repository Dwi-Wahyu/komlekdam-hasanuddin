import type { UseFetchOptions } from "nuxt/app";
import { useMyAuthStore } from "~/store/auth";

export function useMyFetch<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>
) {
  const runtimeConfig = useRuntimeConfig();
  const { baseURL } = runtimeConfig.public.axios;
  const authStore = useMyAuthStore();

  const backendUrl = baseURL + url;

  return useFetch(backendUrl, {
    ...options,
    headers: {
      Authorization: `Bearer ${authStore.token}`,
    },
  });
}

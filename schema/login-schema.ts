import { object, string, type InferType } from "yup";

export const loginSchema = object({
  username: string().required("Tolong ketik username"),
  password: string().required("Tolong ketik password"),
  captcha: string().required("Tolong ketik kode captcha"),
});

export type TLoginSchema = InferType<typeof loginSchema>;

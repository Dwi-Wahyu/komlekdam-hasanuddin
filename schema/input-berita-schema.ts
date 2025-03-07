import { object, string, type InferType } from "yup";

export const inputBeritaSchema = object({
  judul: string().required(),
  deskripsi: string().required(),
  tenggat: string().required(),
  kategori: string().required(),
});

export type TInputBeritaSchema = InferType<typeof inputBeritaSchema>;

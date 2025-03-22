import { mixed, object, string, type InferType } from "yup";

export const updatePejabatSatuanSchema = object({
  nama: string().required("Tolong ketik nama"),
  jabatan: string().required("Tolong pilih jabatan"),
});

export type TUpdatePejabatSatuanSchema = InferType<
  typeof updatePejabatSatuanSchema
>;

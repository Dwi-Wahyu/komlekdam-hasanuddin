import { mixed, object, string, type InferType } from "yup";

export const inputMitraSchema = object({
  nama: string().required("Tolong ketik nama"),
  logo: mixed<File>()
    .required("Tolong pilih logo")
    .test("fileSize", "File terlalu besar", (value) => {
      if (!value) return false;
      const file = value instanceof FileList ? value[0] : value;
      return file && file.size <= 5 * 1024 * 1024; // Maksimal 5MB
    })
    .test("fileType", "Format file tidak didukung", (value) => {
      if (!value) return false;
      const file = value instanceof FileList ? value[0] : value;
      return (
        file && ["image/jpeg", "image/png", "image/gif"].includes(file.type)
      );
    }),
});

export type TInputMitraSchema = InferType<typeof inputMitraSchema>;

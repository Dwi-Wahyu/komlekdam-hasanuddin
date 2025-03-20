import { mixed, object, string, type InferType } from "yup";

export const inputBeritaSchema = object({
  judul: string().required("Tolong ketik judul"),
  penulis: string().required("Tolong ketik penulis"),
  lokasi: string().required("Tolong ketik lokasi"),
  deskripsi: string().required("Tolong ketik deskripsi"),
  tanggal: string().required("Tolong ketik tanggal"),
  kategori: string().required("Tolong pilih kategori"),
  detail: string().required("Tolong ketik detail"),
  thumbnail: mixed<File>()
    .required("Tolong pilih thumbnail")
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

export type TInputBeritaSchema = InferType<typeof inputBeritaSchema>;

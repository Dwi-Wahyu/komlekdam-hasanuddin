module.exports = {
  apps: [
    {
      name: "komlekdam-XIV/Hasanuddin", // Nama aplikasi
      script: ".output/server/index.mjs", // Path ke file yang dijalankan
      env: {
        NITRO_PORT: 1947,
        NODE_ENV: "production",
      },
    },
  ],
};

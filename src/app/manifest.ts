import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "صدقة جارية",
    short_name: "صدقة جارية",
    description:
      "صدقة جارية لشريف عزت — اقرأ القرآن وادعُ له وانشر الصفحة لتعم الفائدة",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ec",
    theme_color: "#3f5c4c",
    lang: "ar",
    dir: "rtl",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

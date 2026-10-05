import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Acharya Debdutta | Vedic Astrologer",
    short_name: "Acharya Debdutta",
    description:
      "Personalised Vedic astrology guidance for relationships, career, finance, and life's important decisions.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F3EA",
    theme_color: "#632D3D",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

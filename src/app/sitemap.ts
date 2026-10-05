import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://acharyadebdutta.com";
  const now = new Date();

  const staticRoutes: {
    path: string;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority: number;
  }[] = [
    { path: "", changeFrequency: "daily", priority: 1.0 },
    { path: "/book-astrology-consultation", changeFrequency: "daily", priority: 0.95 },
    { path: "/report", changeFrequency: "weekly", priority: 0.9 },
    { path: "/courses", changeFrequency: "weekly", priority: 0.9 },
    { path: "/horoscope", changeFrequency: "daily", priority: 0.85 },
    { path: "/free-calculator", changeFrequency: "monthly", priority: 0.85 },
    { path: "/name-correction-services", changeFrequency: "weekly", priority: 0.85 },
    { path: "/online-puja-services", changeFrequency: "weekly", priority: 0.85 },
    { path: "/blogs", changeFrequency: "daily", priority: 0.85 },
    { path: "/about-us", changeFrequency: "monthly", priority: 0.75 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  ];

  return staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

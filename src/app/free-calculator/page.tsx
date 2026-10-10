import type { Metadata } from "next";
import CalculatorsClientPage from "./CalculatorsClientPage";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Free Vedic Astrology Calculators | Kundali, Moon Sign & Sade Sati | Acharya Debdutta",
  description:
    "Calculate your free Vedic birth chart (Kundali), Ascendant (Lagna), Moon Sign (Rashi), Nakshatra, Shani Sade Sati status, and Manglik Dosha instantly with Acharya Debdutta.",
  keywords: [
    "Free Kundali calculator",
    "Vedic birth chart calculator",
    "Moon sign calculator",
    "Nakshatra finder Kolkata",
    "Shani Sade Sati checker",
    "Manglik dosha calculator",
    "Acharya Debdutta calculators",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Free Vedic Astrology Calculators | Acharya Debdutta",
    description:
      "Instant, accurate Vedic calculations based on Lahiri Ayanamsha. Compute your Lagna, Moon Sign, Nakshatra, Sade Sati, and Manglik Dosha.",
    url: `${SITE_URL}/free-calculator`,
    images: [
      {
        url: "/images/benevolent-guru.png",
        width: 1086,
        height: 1448,
        alt: "Free Vedic Calculators with Acharya Debdutta",
      },
    ],
  },
};

export default function FreeCalculatorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Vedic Astrology Calculators",
    description:
      "Instant Vedic birth chart, Lagna, Moon sign, Nakshatra, Sade Sati, and Manglik dosha calculator.",
    applicationCategory: "AstrologyApplication",
    provider: {
      "@type": "Person",
      name: "Acharya Debdutta",
      telephone: "+919830078634",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorsClientPage />
    </>
  );
}

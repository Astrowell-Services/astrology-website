import type { Metadata } from "next";
import NameCorrectionClientPage from "./NameCorrectionClientPage";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Name Correction & Numerology Services | Chaldean & Vedic Tuning | Acharya Debdutta",
  description:
    "Harmonize your personal name, newborn baby's name, or business brand with ruling planetary vibrations. Expert Chaldean and Pythagorean numerology by Acharya Debdutta.",
  keywords: [
    "Name correction Kolkata",
    "Numerology name tuning",
    "Chaldean name correction",
    "Newborn baby naming astrology",
    "Business name numerology",
    "Acharya Debdutta numerologist",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Name Correction & Numerology Services | Acharya Debdutta",
    description:
      "Vedic sound vibration and Chaldean numerology to align your name with fortune, authority, and prosperity without legal hassles.",
    url: `${SITE_URL}/name-correction-services`,
    images: [
      {
        url: "/images/astrologer-sir.jpg",
        width: 1200,
        height: 630,
        alt: "Name Correction Services with Acharya Debdutta",
      },
    ],
  },
};

export default function NameCorrectionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vedic Numerology & Name Correction Services",
    description:
      "Chaldean and Pythagorean name tuning for personal names, newborn babies, and commercial enterprises.",
    provider: {
      "@type": "Person",
      name: "Acharya Debdutta",
      telephone: "+9198300786134",
    },
    serviceType: "Numerology & Phonetic Vibration Consultation",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NameCorrectionClientPage />
    </>
  );
}

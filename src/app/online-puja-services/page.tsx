import type { Metadata } from "next";
import PujaClientPage from "./PujaClientPage";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Online Vedic Puja & Hawan Services | Navagraha, Maha Mrityunjaya & Dosha Shanti | Acharya Debdutta",
  description:
    "Participate in authentic online Vedic pujas, Navagraha Shanti, Maha Mrityunjaya Jaap, and Kaal Sarp Hawans via live video. Individual Gotra Sankalpa and consecrated Prasad delivered to your doorstep.",
  keywords: [
    "Online puja services Kolkata",
    "Navagraha Shanti Hawan",
    "Maha Mrityunjaya puja online",
    "Kaal Sarp dosha nivaran",
    "Mangal dosha puja",
    "Live Vedic puja broadcast",
    "Acharya Debdutta puja services",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Online Vedic Puja & Hawan Services | Acharya Debdutta",
    description:
      "Strict scriptural rituals performed by learned Sanskrit scholars under Acharya Debdutta's guidance. Live interactive streaming and Prasad home delivery.",
    url: `${SITE_URL}/online-puja-services`,
    images: [
      {
        url: "/images/astrologer-sir.jpg",
        width: 1200,
        height: 630,
        alt: "Online Vedic Puja Services with Acharya Debdutta",
      },
    ],
  },
};

export default function OnlinePujaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online Vedic Puja & Hawan Services",
    description:
      "Authentic remedial Vedic rituals, Navagraha Shanti, Maha Mrityunjaya, and Kaal Sarp Hawans with live stream access.",
    provider: {
      "@type": "Person",
      name: "Acharya Debdutta",
      telephone: "+9198300786134",
    },
    serviceType: "Vedic Remedial Rituals & Puja",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PujaClientPage />
    </>
  );
}

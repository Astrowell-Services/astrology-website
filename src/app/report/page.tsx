import type { Metadata } from "next";
import ReportClientPage from "./ReportClientPage";
import { reportsList } from "@/data/reports";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Astrological Reports & Handwritten Vedic Dossiers | Acharya Debdutta",
  description:
    "Order comprehensive, hand-calculated Vedic astrology reports by Acharya Debdutta. Detailed Kundali roadmaps, career & wealth forecasts, marriage compatibility, and remedial blueprints delivered in high-resolution PDF.",
  keywords: [
    "Astrological Reports Kolkata",
    "Handwritten Vedic astrology report",
    "Kundali report PDF",
    "Career astrology report",
    "Marriage compatibility dossier",
    "Annual Varshphal report",
    "Gemstone recommendation report",
    "Acharya Debdutta reports",
    "Best Vedic astrologer report India",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Handcrafted Astrological Reports | Acharya Debdutta",
    description:
      "Deep personal Vedic dossiers personally computed and verified by Acharya Debdutta. 100% manual analysis, divisional charts (D1, D9, D10), and actionable remedial blueprints.",
    url: `${SITE_URL}/report`,
    images: [
      {
        url: "/images/benevolent-guru.png",
        width: 1086,
        height: 1448,
        alt: "Astrological Reports by Acharya Debdutta",
      },
    ],
  },
};

export default function ReportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Handcrafted Astrological Reports & Vedic Dossiers",
    description:
      "Comprehensive, manually synthesized Vedic astrology reports covering career, wealth, marriage, health, and remedial prescriptions.",
    provider: {
      "@type": "Person",
      name: "Acharya Debdutta",
      jobTitle: "Master Vedic Astrologer & Researcher",
      image: `${SITE_URL}/images/sir1.jpeg`,
      telephone: "+919830078634",
    },
    serviceType: "Astrological Analysis & Written Dossiers",
    areaServed: ["India", "Global"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vedic Astrological Reports",
      itemListElement: reportsList.map((r) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: r.title,
          description: r.description,
          timeRequired: r.turnaround,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReportClientPage />
    </>
  );
}

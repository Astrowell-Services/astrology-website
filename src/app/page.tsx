import type { Metadata } from "next";
import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import CalculatorsSection from "@/components/calculators/CalculatorsSection";
import HoroscopeSection from "@/components/horoscope/HoroscopeSection";
import CoursesSection from "@/components/courses/CoursesSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import YouTubeSection from "@/components/youtube/YouTubeSection";

import { astrologer } from "@/data/astrologer";
import { faqs } from "@/data/faqs";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Acharya Debdutta | Best Vedic Astrologer in Kolkata — Personalised Guidance",
  description:
    "Personalised Vedic astrology guidance for relationships, career, finance, and life's important decisions. 28+ years experience in Parasara & Jaimini Jyotish. Book a consultation.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Acharya Debdutta | Best Vedic Astrologer in Kolkata",
    description:
      "Personalised Vedic astrology guidance for relationships, career, finance and life's important decisions.",
    url: SITE_URL,
    images: [
      {
        url: "/images/benevolent-guru.png",
        width: 1086,
        height: 1448,
        alt: "Acharya Debdutta - Vedic Astrologer Kolkata",
      },
    ],
  },
};

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Acharya Debdutta - Vedic Astrologer",
    alternateName: "Astroacharya Debdutta Kolkata",
    image: `${SITE_URL}/images/benevolent-guru.png`,
    url: SITE_URL,
    telephone: astrologer.contact.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: astrologer.contact.location,
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.5726,
      longitude: 88.3639,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: astrologer.stats.rating,
      reviewCount: "10000",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <CalculatorsSection />
      <HoroscopeSection />
      <CoursesSection />
      <TestimonialsSection />
      <FAQSection />
      <YouTubeSection />
    </>
  );
}


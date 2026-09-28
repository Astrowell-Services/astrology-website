import type { Metadata } from "next";
import HoroscopeClientPage from "./HoroscopeClientPage";

export const metadata: Metadata = {
  title: "Horoscope Predictions | Daily, Weekly & Monthly Rashi Forecasts | Acharya Debdutta",
  description:
    "Get accurate daily, weekly, and monthly horoscope predictions based on your zodiac sign with Acharya Debdutta. Watch the latest Vedic Rashi forecasts updated directly from YouTube.",
  keywords: [
    "Horoscope Kolkata",
    "Daily Horoscope Acharya Debdutta",
    "Monthly Rashi prediction",
    "Bengali Horoscope YouTube",
    "Tula Rashi",
    "Singha Rashi",
    "Kanya Rashi",
    "Vedic Astrology Forecast",
  ],
  openGraph: {
    title: "Horoscope Predictions | Acharya Debdutta",
    description:
      "Get accurate daily, weekly, and monthly horoscope predictions based on your zodiac sign. Latest video updates by Acharya Debdutta.",
    url: "https://acharyadebdutta.com/horoscope",
    images: [
      {
        url: "/images/astrologer-sir.jpg",
        width: 1200,
        height: 630,
        alt: "Horoscope Predictions with Acharya Debdutta",
      },
    ],
  },
};

export default function HoroscopePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Horoscope Predictions - Acharya Debdutta",
    description:
      "Get accurate daily, weekly, and monthly horoscope predictions based on your zodiac sign with Acharya Debdutta.",
    publisher: {
      "@type": "Person",
      name: "Acharya Debdutta",
      jobTitle: "Master Vedic Astrologer",
      image: "https://acharyadebdutta.com/images/astrologer-sir.jpg",
      telephone: "+9198300786134",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HoroscopeClientPage />
    </>
  );
}

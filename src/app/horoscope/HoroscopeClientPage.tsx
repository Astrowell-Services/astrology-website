"use client";

import YouTubeSection from "@/components/youtube/YouTubeSection";

export default function HoroscopeClientPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      <YouTubeSection
        isInnerPage={true}
        eyebrow="VEDIC ASTROLOGY FORECASTS"
        title="Horoscope"
        subtitle="Get accurate daily, weekly, and monthly horoscope predictions based on your zodiac sign"
      />
    </div>
  );
}

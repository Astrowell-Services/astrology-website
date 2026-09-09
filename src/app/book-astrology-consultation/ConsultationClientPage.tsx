"use client";

import React from "react";
import ConsultationHero from "@/components/consultation/ConsultationHero";
import WhyChooseTelephonic from "@/components/consultation/WhyChooseTelephonic";
import WhatYouCanAsk from "@/components/consultation/WhatYouCanAsk";
import LimitedSlotsBanner from "@/components/consultation/LimitedSlotsBanner";
import HowItWorks from "@/components/consultation/HowItWorks";
import AstrologerMessage from "@/components/consultation/AstrologerMessage";

export default function ConsultationClientPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      {/* 1. Hero Section */}
      <ConsultationHero />

      {/* 2. Why Choose a Telephonic Astrology Consultation? */}
      <WhyChooseTelephonic />

      {/* 3. What You Can Ask During the Call */}
      <WhatYouCanAsk />

      {/* 4. Book Now – Limited Slots Available Banner */}
      <LimitedSlotsBanner />

      {/* 5. How the Call Consultation Works */}
      <HowItWorks />

      {/* 6. A Message from Achariya Debdutta */}
      <AstrologerMessage />
    </div>
  );
}

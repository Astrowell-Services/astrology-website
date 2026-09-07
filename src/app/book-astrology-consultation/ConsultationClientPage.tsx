"use client";

import React, { useState } from "react";
import ConsultationHero from "@/components/consultation/ConsultationHero";
import WhyChooseTelephonic from "@/components/consultation/WhyChooseTelephonic";
import WhatYouCanAsk from "@/components/consultation/WhatYouCanAsk";
import LimitedSlotsBanner from "@/components/consultation/LimitedSlotsBanner";
import HowItWorks from "@/components/consultation/HowItWorks";
import ConsultationPackages from "@/components/consultation/ConsultationPackages";
import AstrologerMessage from "@/components/consultation/AstrologerMessage";
import BookingModal from "@/components/consultation/BookingModal";
import { ConsultationPackage } from "@/data/consultation";

export default function ConsultationClientPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<ConsultationPackage | null>(null);

  const handleOpenBooking = (pkg?: ConsultationPackage) => {
    if (pkg) {
      setSelectedPkg(pkg);
    }
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
    setSelectedPkg(null);
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      {/* 1. Hero Section */}
      <ConsultationHero onBookClick={() => handleOpenBooking()} />

      {/* 2. Why Choose a Telephonic Astrology Consultation? */}
      <WhyChooseTelephonic />

      {/* 3. What You Can Ask During the Call */}
      <WhatYouCanAsk />

      {/* 4. Book Now – Limited Slots Available Banner */}
      <LimitedSlotsBanner onBookClick={() => handleOpenBooking()} />

      {/* 5. How the Call Consultation Works */}
      <HowItWorks />

      {/* 6. Call Consultation Packages (id="call-packages") */}
      <ConsultationPackages onSelectPackage={(pkg) => handleOpenBooking(pkg)} />

      {/* 7. A Message from Achariya Debdutta */}
      <AstrologerMessage />

      {/* Interactive Booking / Share Birth Details Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        selectedPackage={selectedPkg}
      />
    </div>
  );
}

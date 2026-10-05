"use client";

import { useState } from "react";
import NameCorrectionHero from "@/components/name-correction/NameCorrectionHero";
import NameProcessSteps from "@/components/name-correction/NameProcessSteps";
import NameReportDeliverables from "@/components/name-correction/NameReportDeliverables";
import WhyNameMatters from "@/components/name-correction/WhyNameMatters";
import NameVibrationChecker from "@/components/name-correction/NameVibrationChecker";
import NameTestimonials from "@/components/name-correction/NameTestimonials";
import NameCorrectionModal from "@/components/name-correction/NameCorrectionModal";

export default function NameCorrectionClientPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenModal = (service?: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      {/* 1. Hero with Exact Headline, Intro, Subheading, Formula & CTAs */}
      <NameCorrectionHero
        onRequestClick={() => handleOpenModal("Personal Name & Signature Correction")}
      />

      {/* 2. How the 4-Step Name Correction Process Works */}
      <NameProcessSteps />

      {/* 3. What Will You Receive in the Name Correction Report? (8 Deliverables) */}
      <NameReportDeliverables />

      {/* 4. Why Does Your Name Matter So Much? (Acoustic science, Pitfalls, Baby Naming & Confidentiality) */}
      <WhyNameMatters
        onRequestClick={() => handleOpenModal("Personal Name & Signature Correction")}
      />

      {/* 5. Interactive Chaldean Name Vibration Checker Tool */}
      <NameVibrationChecker />

      {/* 6. Happy Client Testimonials (Pooja, Ravi & Meenal, Neeraj) */}
      <NameTestimonials />

      {/* Interactive Request Modal */}
      <NameCorrectionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Sparkles, FileText, CheckCircle2 } from "lucide-react";
import ComingSoonGate, { HighlightItem } from "@/components/common/ComingSoonGate";
import NameCorrectionHero from "@/components/name-correction/NameCorrectionHero";
import NameProcessSteps from "@/components/name-correction/NameProcessSteps";
import NameReportDeliverables from "@/components/name-correction/NameReportDeliverables";
import WhyNameMatters from "@/components/name-correction/WhyNameMatters";
import NameVibrationChecker from "@/components/name-correction/NameVibrationChecker";
import NameTestimonials from "@/components/name-correction/NameTestimonials";
import NameCorrectionModal from "@/components/name-correction/NameCorrectionModal";

const nameHighlights: HighlightItem[] = [
  {
    icon: <Sparkles className="w-7 h-7 text-[#B68A3A]" />,
    title: "Chaldean Compound Tuning",
    description:
      "Acoustic vibration alignment ensuring your first and full name resonate with your ruling planet without legal identity alterations.",
    badge: "Testing",
  },
  {
    icon: <FileText className="w-7 h-7 text-[#B68A3A]" />,
    title: "Newborn Sacred Baby Naming",
    description:
      "Auspicious Nakshatra phonetics (Pada syllables) paired with Pythagorean and Vedic numerology for lifelong grace.",
    badge: "Testing",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7 text-[#B68A3A]" />,
    title: "Corporate & Brand Vibration",
    description:
      "Market authority and commercial numerological compatibility audit for business names, brand logos, and trade trademarks.",
    badge: "Testing",
  },
];

export default function NameCorrectionClientPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenModal = (service?: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <ComingSoonGate
      serviceKey="name-correction"
      title="Name Correction Services — Coming Soon"
      badgeText="Under Sacred Alignment"
      subtitle="Our automated Chaldean sound frequency calculations and signature vibration tuning services are coming soon. For more information or immediate personalized name analysis, please call our consultant directly."
      expectedDate="Phase 2 Release • In Final Testing"
      highlights={nameHighlights}
    >
      <div className="bg-[#F7F3EA] text-[#24211F]">
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
    </ComingSoonGate>
  );
}

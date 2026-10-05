"use client";

import { useState } from "react";
import PujaHero from "@/components/puja/PujaHero";
import PujaCatalog from "@/components/puja/PujaCatalog";
import HowOnlinePujaWorks from "@/components/puja/HowOnlinePujaWorks";
import PujaBookingModal from "@/components/puja/PujaBookingModal";

export default function PujaClientPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPuja, setSelectedPuja] = useState<string | undefined>(undefined);

  const handleOpenModal = (pujaTitle?: string) => {
    setSelectedPuja(pujaTitle);
    setModalOpen(true);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById("puja-catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      {/* 1. Header Hero */}
      <PujaHero
        onExploreClick={scrollToCatalog}
        onRequestClick={() => handleOpenModal()}
      />

      {/* 2. 6 Vedic Remedial Pujas Catalog */}
      <div id="puja-catalog">
        <PujaCatalog onSelectPuja={(title) => handleOpenModal(title)} />
      </div>

      {/* 3. How Online Puja Works (4 Steps with Free-Standing Icons) */}
      <HowOnlinePujaWorks />

      {/* Interactive Booking Modal */}
      <PujaBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPuja={selectedPuja}
      />
    </div>
  );
}

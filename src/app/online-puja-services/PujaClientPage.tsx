"use client";

import { useState } from "react";
import { Flame, HeartHandshake, ShieldCheck } from "lucide-react";
import ComingSoonGate, { HighlightItem } from "@/components/common/ComingSoonGate";
import PujaHero from "@/components/puja/PujaHero";
import PujaCatalog from "@/components/puja/PujaCatalog";
import HowOnlinePujaWorks from "@/components/puja/HowOnlinePujaWorks";
import PujaBookingModal from "@/components/puja/PujaBookingModal";

const pujaHighlights: HighlightItem[] = [
  {
    icon: <Flame className="w-7 h-7 text-[#B68A3A]" />,
    title: "Navagraha Shanti Hawan",
    description:
      "Scriptural fire rituals pacifying afflicted planets, reducing active Mahadasha turmoil with individual Gotra sankalpa.",
    badge: "Testing",
  },
  {
    icon: <HeartHandshake className="w-7 h-7 text-[#B68A3A]" />,
    title: "Maha Mrityunjaya Healing Jaap",
    description:
      "High-potency remedial Vedic chanting for critical health challenges, mental peace, and protection with live private video link.",
    badge: "Testing",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#B68A3A]" />,
    title: "Gotra Sankalpa & Prasad Delivery",
    description:
      "Personalized dedication in your family Gotra with energised yantra, sacred ash, and consecrated prasad dispatched to your doorstep.",
    badge: "Testing",
  },
];

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
    <ComingSoonGate
      serviceKey="online-puja"
      title="Online Puja Services — Coming Soon"
      badgeText="Under Sacred Consecration"
      subtitle="Our digital sankalpa booking system and sacred remedial puja services are coming soon. For more information or to book an immediate personalized ritual, please call our consultant directly."
      expectedDate="Phase 2 Release • In Final Testing"
      highlights={pujaHighlights}
    >
      <div className="bg-[#F7F3EA] text-[#24211F]">
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
    </ComingSoonGate>
  );
}

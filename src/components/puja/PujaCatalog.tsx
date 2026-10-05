"use client";

import { CheckCircle2, Flame, ArrowRight, MessageCircle } from "lucide-react";
import { astrologer } from "@/data/astrologer";

interface PujaCatalogProps {
  onSelectPuja: (pujaTitle: string) => void;
}

const pujas = [
  {
    id: "navagraha-shanti",
    badge: "Most Requested",
    title: "Navagraha Shanti Puja & Hawan",
    deity: "All 9 Planetary Deities (Navagrahas)",
    duration: "2.5 to 3 Hours",
    description:
      "A comprehensive ritual to balance all nine celestial bodies. Specifically recommended during challenging planetary Mahadashas, Sade Sati, or when multiple planets are combust or retrograde.",
    inclusions: [
      "Individual Sankalpa with Gotra & Birth Coordinates",
      "9 Distinct planetary wood (Samidha) offerings in Hawan",
      "Navagraha Beej Mantra japa by Vedic scholars",
      "Energized Navagraha Yantra & consecrated Vibhuti",
      "Interactive Live Zoom/Google Meet video stream",
    ],
  },
  {
    id: "maha-mrityunjaya",
    badge: "Health & Vitality",
    title: "Maha Mrityunjaya Jaap & Hawan",
    deity: "Lord Shiva (Trayambakeshwar)",
    duration: "3 to 4 Hours",
    description:
      "The supreme protective Vedic ritual for physical healing, protection against accidents, recovery from chronic ailments, and neutralizing Maraka (death-inflicting) dasha periods.",
    inclusions: [
      "1,100 / 2,100 Maha Mrityunjaya Samputit Mantra Jaap",
      "Ayurvedic herbs, Ghee, and Bilva leaf Hawan",
      "Chanting for patient's health by name and Gotra",
      "Consecrated Shiva Raksha Sutra (sacred thread)",
      "Live stream access for family members",
    ],
  },
  {
    id: "kaal-sarp-shanti",
    badge: "Karmic Obstacles",
    title: "Kaal Sarp & Rahu-Ketu Shanti Puja",
    deity: "Nag Devata & Lord Shiva",
    duration: "3 Hours",
    description:
      "Removes unexplained career stagnation, persistent financial losses, and chronic instability caused by all planets hemmed between Rahu and Ketu in the natal chart.",
    inclusions: [
      "Silver serpent pair (Nag-Nagin) consecration",
      "Rahu-Ketu Beej Mantra & Stotram recitations",
      "Purna Ahuti Hawan with black sesame and dravya",
      "Remedial Yantra energized with planetary rites",
      "Full live broadcast with priest interaction",
    ],
  },
  {
    id: "mangal-dosha-vivah",
    badge: "Relationship Harmony",
    title: "Mangal Dosha & Vivah Badha Nivaran",
    deity: "Mangal Devata & Goddess Katyayani",
    duration: "2.5 Hours",
    description:
      "Aimed at neutralizing severe Mars afflictions in the 1st, 4th, 7th, 8th, or 12th houses. Clears recurring marriage delays, emotional tempers, and relationship discord.",
    inclusions: [
      "Katyayani Vrata & Mangal Kavach recitation",
      "Red sandalwood and coral energization vidhi",
      "Prayers for timely, harmonious matrimonial union",
      "Consecrated Kumkum and Mangal Shanti Yantra",
      "Live participation link for bride/groom",
    ],
  },
  {
    id: "vastu-shanti",
    badge: "Domestic Harmony",
    title: "Vastu Shanti & Griha Pravesh Hawan",
    deity: "Vastu Purusha & Lord Ganesha",
    duration: "3 Hours",
    description:
      "Purifies residential apartments, independent homes, and commercial offices from directional imbalances (Vastu Dosha) and negative geo-pathic stress.",
    inclusions: [
      "Vastu Purusha Mandal puja & Kalash Sthapana",
      "Ganesha & Navagraha Hawan for spatial blessing",
      "Directional elemental balancing mantras",
      "Consecrated copper Vastu Pyramid & sacred water",
      "Custom guidance on optimal room placement",
    ],
  },
  {
    id: "rudrabhishek-puja",
    badge: "Peace & Prosperity",
    title: "Sacred Rudrabhishek Puja",
    deity: "Mahadev (Lord Shiva)",
    duration: "2 Hours",
    description:
      "The ancient pouring of sacred libations (Milk, Honey, Ghee, Ganga Jal, Sugarcane juice) over the Shiva Lingam while chanting the Sri Rudram. Bestows profound peace, removes sins, and attracts abundance.",
    inclusions: [
      "Full 11 Anuvakas of Namakam & Chamakam chanting",
      "Panchamrit Abhishek with sacred Bilva leaves",
      "Shiva Sahasranama archana by Sanskrit scholars",
      "Energized Bhasma (sacred ash) & Bilva leaves sent",
      "Live HD video streaming with direct chanting access",
    ],
  },
];

export default function PujaCatalog({ onSelectPuja }: PujaCatalogProps) {
  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Sacred Vedic Rites
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            Available Remedial Pujas &amp; Hawans
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#716B63] mt-3">
            Every puja is performed with fresh flowers, pure ghee, and unadulterated Vedic samagri
            at consecrated altars under Acharya Debdutta&apos;s direct supervision.
          </p>
        </div>

        {/* 6 Puja Cards Grid (2 columns on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pujas.map((p) => (
            <div
              key={p.id}
              className="bg-[#F7F3EA]/60 border border-[#D9CFBD] hover:border-[#632D3D]/50 hover:bg-[#F7F3EA] transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[0.68rem] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#FFFDF8] border border-[#D9CFBD] text-[#632D3D]">
                    {p.badge}
                  </span>
                  <span className="font-sans text-xs text-[#716B63]">
                    Duration: {p.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#24211F] font-normal mb-1.5 leading-snug">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-[#B68A3A] font-semibold mb-3">
                  Presiding Deity: {p.deity}
                </p>

                <p className="font-sans text-xs sm:text-[0.85rem] text-[#716B63] leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="mb-6">
                  <p className="font-sans text-[0.72rem] uppercase tracking-wider text-[#24211F] font-bold mb-3">
                    Ritual Inclusions:
                  </p>
                  <ul className="space-y-2">
                    {p.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#4A453E]">
                        <CheckCircle2 size={14} className="text-[#B68A3A] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#D9CFBD]/60 mt-auto">
                <button
                  type="button"
                  onClick={() => onSelectPuja(p.title)}
                  className="w-full py-3 px-4 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors flex items-center justify-center gap-2 mb-2.5"
                >
                  <Flame size={14} />
                  <span>Book This Puja</span>
                  <ArrowRight size={14} />
                </button>

                <a
                  href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Pranam Acharya Debdutta, I would like to inquire about booking the "${p.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 border border-[#D9CFBD] bg-[#FFFDF8] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] font-sans text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle size={14} className="text-[#25D366]" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

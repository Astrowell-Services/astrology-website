"use client";

import { CheckCircle2, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { astrologer } from "@/data/astrologer";

interface NameCorrectionPackagesProps {
  onRequestService: (serviceName: string) => void;
}

const packages = [
  {
    id: "personal-name",
    badge: "Most Popular",
    title: "Personal Name & Signature Correction",
    tagline: "Harmonize your name with your ruling planetary governors.",
    description:
      "Ideal for individuals facing recurring career delays, health friction, or identity confusion. Acharya Debdutta calculates your Mulank and Bhagyank to adjust spelling without requiring legal gazette changes.",
    features: [
      "Chaldean & Pythagorean compound calculation",
      "Identification of conflicting phonetic vibrations",
      "Subtle vowel & letter calibration options",
      "Signature graphology & professional handle advice",
      "Delivered in a comprehensive written PDF summary",
    ],
    turnaround: "48 Hours",
  },
  {
    id: "newborn-naming",
    badge: "Vedic Tradition",
    title: "Newborn Baby Naming (Nama Samskara)",
    tagline: "Auspicious phonetic foundation based on birth Nakshatra.",
    description:
      "Gift your newborn a name aligned with their cosmic blueprint. We calculate the exact Janma Nakshatra Pada syllable (Swara) and propose 10+ modern, culturally resonant names tuned to lucky compound numbers.",
    features: [
      "Exact Janma Nakshatra & Pada syllable calculation",
      "10+ Curated meaningful names with gender options",
      "Verification that compound numbers balance Lagna lord",
      "Avoidance of Maraka or conflicting sound letters",
      "Auspicious naming Muhurat & ceremony guidelines",
    ],
    turnaround: "48 – 72 Hours",
  },
  {
    id: "business-brand",
    badge: "Commercial Growth",
    title: "Business, Company & Brand Tuning",
    tagline: "Numerological resonance for commercial expansion.",
    description:
      "A commercial enterprise requires a name that magnetically attracts clients, investors, and stability. We test your proposed brand, legal entity, and domain names against industry governors.",
    features: [
      "Commercial brand vibration & industry alignment",
      "Founder's chart compatibility with corporate entity",
      "Domain name & social handle numerology check",
      "Tagline & launch Muhurat recommendation",
      "Confidential corporate advisory report",
    ],
    turnaround: "72 Hours",
  },
];

export default function NameCorrectionPackages({
  onRequestService,
}: NameCorrectionPackagesProps) {
  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Tailored Consultation Offerings
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            Choose Your Name Tuning Service
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#716B63] mt-3">
            Every consultation is personally evaluated by Acharya Debdutta with precision and discretion.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#FFFDF8] border border-[#D9CFBD] hover:border-[#632D3D]/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[0.68rem] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#F7F3EA] border border-[#D9CFBD] text-[#632D3D]">
                    {pkg.badge}
                  </span>
                  <span className="font-sans text-xs text-[#716B63]">
                    {pkg.turnaround}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#24211F] font-normal mb-2 leading-snug">
                  {pkg.title}
                </h3>
                <p className="font-sans text-xs text-[#B68A3A] font-semibold mb-4">
                  {pkg.tagline}
                </p>

                <p className="font-sans text-xs sm:text-[0.85rem] text-[#716B63] leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <p className="font-sans text-[0.72rem] uppercase tracking-wider text-[#24211F] font-bold mb-3">
                    Inclusions &amp; Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#4A453E]">
                        <CheckCircle2 size={14} className="text-[#B68A3A] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#D9CFBD]/60 mt-auto">
                <button
                  type="button"
                  onClick={() => onRequestService(pkg.title)}
                  className="w-full py-3 px-4 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors flex items-center justify-center gap-2 mb-2.5"
                >
                  <span>Request This Service</span>
                  <ArrowRight size={14} />
                </button>

                <a
                  href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Pranam Acharya Debdutta, I am interested in your "${pkg.title}" service.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 border border-[#D9CFBD] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] font-sans text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
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

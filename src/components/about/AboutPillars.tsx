"use client";

import { BookOpen, ShieldCheck, Sparkles, Lock } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Classical Scriptural Lineage",
    description:
      "Rooted strictly in Brihat Parasara Hora Shastra, Jaimini Upadesha Sutras, and Lal Kitab principles. Every prediction is backed by authentic mathematical divisional charts (D1 to D60).",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Fear-Free & Rational Counsel",
    description:
      "Zero sensationalism or manufactured panic over Manglik, Sade Sati, or Kaal Sarp. We explain the classical mitigations and provide calm, constructive roadmaps.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Calibrated & Ethical Remedies",
    description:
      "Safe, satvik, and scientifically calibrated recommendations. From energizing natural gemstones and authentic Rudrakshas to Vedic mantras and lifestyle adjustments.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Absolute Confidentiality",
    description:
      "Your personal charts, family matters, business dilemmas, and health history remain strictly private. We never share, archive, or commercialize your consultation records.",
    icon: Lock,
  },
];

export default function AboutPillars() {
  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            The Foundation of Trust
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            The 4 Pillars of Our Practice
          </h2>
          <p className="font-sans text-[0.88rem] sm:text-[0.93rem] text-[#716B63] mt-3 leading-relaxed">
            What sets Acharya Debdutta apart is an unwavering commitment to classical rigor,
            ethical transparency, and client dignity.
          </p>
        </div>

        {/* 4 Pillars Grid with Free-Standing Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-7 flex flex-col justify-between hover:border-[#632D3D]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <Icon
                        size={28}
                        className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="font-serif text-lg text-[#B68A3A]/70 font-normal">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#24211F] font-normal mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9CFBD]/60 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B68A3A]" />
                  <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#632D3D] font-600">
                    Core Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

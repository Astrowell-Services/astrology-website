"use client";

import { Sparkles, ShieldCheck, PenTool, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    number: "01",
    title: "Phonetic Bio-Resonance",
    description:
      "Every letter in your name carries an acoustic frequency. When aligned with your Lagna lord, people perceive your presence with natural warmth, respect, and confidence.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "No Legal Documentation Hassle",
    description:
      "You do not need to rewrite your passport, government IDs, or bank accounts. Subtle changes in social spelling, email signatures, and visiting cards activate the new vibration.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Signature & Graphology Balancing",
    description:
      "How you sign documents reflects your subconscious trajectory. Acharya Debdutta examines stroke angle and underscores to align your signature with upward growth.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Commercial Magnetic Appeal",
    description:
      "Brand names vibrating to friendly planetary numbers generate organic brand recall, customer loyalty, and smoother investor negotiations.",
  },
];

export default function WhyNameTuningMatters() {
  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            The Sound Science
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            Why Name Tuning Matters
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#716B63] mt-3">
            Your name is repeated thousands of times across a lifetime. Discover how tuning its
            phonetic frequency alters your cosmic magnetism.
          </p>
        </div>

        {/* 4 Cards with Free-Standing Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.number}
                className="bg-[#F7F3EA]/60 border border-[#D9CFBD] p-6 sm:p-7 flex flex-col justify-between hover:border-[#632D3D]/50 hover:bg-[#F7F3EA] transition-all duration-300 group"
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
                      {r.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#24211F] font-normal mb-2 leading-snug">
                    {r.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-[0.85rem] text-[#716B63] leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9CFBD]/60 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B68A3A]" />
                  <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#632D3D] font-600">
                    Vedic Acoustic Law
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

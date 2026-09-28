"use client";

import { whyHandcraftedHallmarks } from "@/data/reports";
import { Compass, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function WhyHandcrafted() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case "Clock":
        return <Clock size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case "ShieldCheck":
        return <ShieldCheck size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case "Sparkles":
        return <Sparkles size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case "CheckCircle2":
      default:
        return <CheckCircle2 size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-20 border-b border-[#D9CFBD]">
      <div className="container-site">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            The Vedic Distinction
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#24211F] font-normal leading-snug">
            Why a Handcrafted Report Matters
          </h2>
          <p className="font-sans text-[0.88rem] sm:text-[0.93rem] text-[#716B63] mt-3 leading-relaxed">
            Free software dumps hundreds of pages of automated contradictions. Every report by Acharya Debdutta
            is manually synthesized to filter noise and deliver clarity.
          </p>
        </div>

        {/* 5-Card Layout: Row 1 = 3 cards, Row 2 = 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {whyHandcraftedHallmarks.map((item, index) => {
            // Apply positioning classes for desktop grid (6-column layout)
            const desktopClass =
              index === 3
                ? "lg:col-span-2 lg:col-start-2"
                : "lg:col-span-2";

            return (
              <div
                key={item.id}
                className={`${desktopClass} bg-[#F7F3EA]/60 border border-[#D9CFBD] p-6 sm:p-7 flex flex-col justify-between hover:border-[#632D3D]/50 hover:bg-[#F7F3EA] transition-all duration-300 relative group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="font-serif text-lg text-[#B68A3A]/70 font-normal">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#24211F] font-normal mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9CFBD]/60 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B68A3A]" />
                  <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#632D3D] font-600">
                    Hand-Verified Metric
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

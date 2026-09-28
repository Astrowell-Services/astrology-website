"use client";

import { Sparkles, Compass } from "lucide-react";

export default function AboutPhilosophy() {
  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-22 border-b border-[#D9CFBD] relative">
      <div className="container-site max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-3 flex items-center justify-center gap-2">
          <Sparkles size={13} className="text-[#B68A3A]" />
          <span>Our Guiding Philosophy</span>
          <Sparkles size={13} className="text-[#B68A3A]" />
        </p>

        {/* Serif Quote */}
        <blockquote className="my-6 sm:my-8 px-4 sm:px-8">
          <p className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] font-normal text-[#24211F] leading-snug sm:leading-relaxed italic">
            &ldquo;Astrology is not about predicting a fixed, helpless fate. It is about
            understanding the cosmic patterns of time and using that understanding to make wiser,
            more conscious choices.&rdquo;
          </p>
        </blockquote>

        <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#632D3D] font-bold mb-8">
          — Acharya Debdutta
        </p>

        {/* 3 Pillars of Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10 pt-10 border-t border-[#D9CFBD]/60">
          <div className="p-4 bg-[#F7F3EA]/50 border border-[#D9CFBD]/80">
            <h3 className="font-serif text-lg text-[#24211F] font-normal mb-1.5">
              Karma &amp; Free Will
            </h3>
            <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
              Your birth chart is the karmic blueprint (Prarabdha), but your conscious effort
              (Purushartha) decides how you respond and navigate life.
            </p>
          </div>

          <div className="p-4 bg-[#F7F3EA]/50 border border-[#D9CFBD]/80">
            <h3 className="font-serif text-lg text-[#24211F] font-normal mb-1.5">
              The Science of Time (Kala)
            </h3>
            <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
              Planets do not compel; they indicate seasons. Just as a farmer plants in the right
              season, Vedic astrology identifies when to advance and when to preserve.
            </p>
          </div>

          <div className="p-4 bg-[#F7F3EA]/50 border border-[#D9CFBD]/80">
            <h3 className="font-serif text-lg text-[#24211F] font-normal mb-1.5">
              Ethical Guidance Only
            </h3>
            <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
              No fatalistic dread. Every challenging placement is evaluated with realistic,
              satvik, and cost-effective remedies tailored to your modern lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

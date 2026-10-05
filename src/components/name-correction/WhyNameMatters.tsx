"use client";

import { AlertCircle, CheckCircle2, Lock, Sparkles, ArrowRight } from "lucide-react";

interface WhyNameMattersProps {
  onRequestClick: () => void;
}

export default function WhyNameMatters({ onRequestClick }: WhyNameMattersProps) {
  const pitfalls = [
    "Attract the wrong energy",
    "Intensify karmic blockages",
    "Delay success",
    "Cause identity conflicts or anxiety",
    "Prevent you from fully realizing your potential",
  ];

  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            The Cosmic Acoustic Impact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            Why Does Your Name Matter So Much?
          </h2>
        </div>

        {/* 2-Column Split: Philosophy on Left, Pitfalls Warning on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Left: Narrative Explanation */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#4A453E] leading-relaxed">
            <p>
              Every name has a unique energy, sound, and numerical value. If your name vibration is
              not aligned with your birth details, it may create confusion, delays, or emotional
              imbalance.
            </p>
            <p>
              With the help of Numerology, Palmistry, and traditional astrology insights, proper
              Name Correction can bring clarity, confidence, and a more positive direction in life.
            </p>
            <p className="text-[#716B63] pt-2">
              Through personalized Name Redesigning and expert guidance, your name can be aligned with
              supportive vibrations. For newborns,{" "}
              <strong className="text-[#24211F] font-semibold">Baby Name Design</strong> can also help
              choose a meaningful name that supports positivity, growth, and harmony from the
              beginning.
            </p>
          </div>

          {/* Right: Caution / Warning Card */}
          <div className="lg:col-span-5 bg-[#F7F3EA] border border-[#632D3D]/30 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4 text-[#632D3D]">
              <AlertCircle size={20} />
              <h3 className="font-serif text-xl font-normal text-[#632D3D]">
                An Unbalanced Name Vibration May:
              </h3>
            </div>

            <ul className="space-y-3">
              {pitfalls.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A453E]">
                  <span className="text-[#632D3D] font-bold text-sm shrink-0">✕</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Banner with 100% Confidentiality & CTA */}
        <div className="bg-[#F7F3EA] border border-[#D9CFBD] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#FFFDF8] border border-[#D9CFBD] text-[#B68A3A] flex items-center justify-center shrink-0 mt-0.5">
              <Lock size={22} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#632D3D] mb-1">
                <CheckCircle2 size={13} className="text-[#B68A3A]" />
                100% Confidential &amp; Trusted by Thousands
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#716B63] max-w-xl leading-relaxed">
                Your information is never shared with third parties. Every consultation is
                confidential and handled with the utmost care and respect for your privacy and
                spiritual beliefs.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onRequestClick}
            className="w-full md:w-auto px-7 py-3.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#4E2230] transition-colors shrink-0 flex items-center justify-center gap-2"
          >
            <span>Get Name Correction</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

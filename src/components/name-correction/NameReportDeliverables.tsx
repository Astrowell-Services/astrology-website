"use client";

import { CheckCircle2, FileText, Lock } from "lucide-react";

export default function NameReportDeliverables() {
  const deliverables = [
    {
      title: "Detailed Numerology Assessment",
      description: "Full breakdown of your current name's compound and root numbers under Chaldean and Pythagorean systems.",
    },
    {
      title: "Alternate Options (if any)",
      description: "2 to 3 curated name alternatives and spelling variants calculated for harmonious planetary balance.",
    },
    {
      title: "Ideal Name Spelling & Logic",
      description: "Exact phonetic letter sequencing with the complete astrological reasoning behind each addition or omission.",
    },
    {
      title: "Problem Areas Identified",
      description: "Clear diagnostics on which letters or compound sums were triggering delays, anxiety, or financial friction.",
    },
    {
      title: "Energy & Vibration Analysis",
      description: "Evaluation of the new vibration against your Ascendant (Lagna), Janma Rashi, and ruling planetary governors.",
    },
    {
      title: "Implementation Recommendations",
      description: "Practical roadmap explaining how to adopt your new name in signatures, visiting cards, and social handles.",
    },
    {
      title: "Suggested Remedies (if applicable)",
      description: "Satvik planetary mantras, gemstones, or energization rituals to dissolve lingering past name blockages.",
    },
    {
      title: "Delivered Digital PDF Report",
      description: "A comprehensive, publication-grade high-resolution PDF document sent directly to your WhatsApp and email.",
    },
  ];

  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Archival Dossier Deliverables
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            What Will You Receive in the Name Correction Report?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#716B63] mt-3">
            Every client receives an exhaustive, personally verified written analysis for lifelong reference.
          </p>
        </div>

        {/* 8 Deliverables in an archival 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-7 flex items-start gap-4 hover:border-[#632D3D]/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#B68A3A]/10 text-[#632D3D] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={18} className="text-[#B68A3A]" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#24211F] font-normal mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-[0.85rem] text-[#716B63] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Archival Note */}
        <div className="max-w-5xl mx-auto bg-[#FFFDF8] border border-[#B68A3A]/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <FileText size={22} className="text-[#632D3D] shrink-0" />
            <p className="font-sans text-xs sm:text-sm text-[#4A453E]">
              <strong>Comprehensive Digital PDF:</strong> Sent directly to your WhatsApp and email
              within 48–72 hours of receiving your birth details.
            </p>
          </div>
          <span className="font-sans text-xs uppercase tracking-wider font-bold text-[#B68A3A] px-3 py-1 bg-[#F7F3EA] border border-[#D9CFBD] shrink-0">
            Official Assessment
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { reportAnatomyFeatures } from "@/data/reports";
import { Compass, Calendar, AlertTriangle, Sparkles, FileCheck, Lock } from "lucide-react";

export default function ReportAnatomy() {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case 1:
        return <Calendar size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case 2:
        return <AlertTriangle size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case 3:
      default:
        return <Sparkles size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Publication-Grade Deliverables
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            The Anatomy of a Vedic Dossier
          </h2>
          <p className="font-sans text-[0.9rem] sm:text-[0.95rem] text-[#716B63] mt-3 leading-relaxed">
            Every document is custom-compiled and verified by Acharya Debdutta to ensure academic
            astrological rigor alongside practical real-world comprehension.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {reportAnatomyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#F7F3EA]/70 border border-[#D9CFBD] p-6 sm:p-8 flex flex-col justify-between hover:border-[#632D3D]/50 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="font-sans text-[0.68rem] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#FFFDF8] border border-[#D9CFBD] text-[#632D3D]">
                    {feat.tag}
                  </span>
                </div>

                <p className="font-sans text-[0.72rem] uppercase tracking-wider text-[#B68A3A] font-semibold mb-1">
                  {feat.subtitle}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#24211F] font-normal mb-3">
                  {feat.title}
                </h3>
                <p className="font-sans text-[0.87rem] text-[#716B63] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D9CFBD]/60 flex items-center gap-2">
                <FileCheck size={14} className="text-[#B68A3A]" />
                <span className="font-sans text-[0.75rem] text-[#632D3D] font-500">
                  Included in all primary dossiers
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Archival Banner */}
        <div className="max-w-5xl mx-auto bg-[#F7F3EA] border border-[#D9CFBD] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#632D3D] text-[#FFFDF8] flex items-center justify-center shrink-0 mt-0.5">
              <Lock size={18} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#24211F] font-normal">
                100% Confidentiality &amp; Archival PDF Format
              </h4>
              <p className="font-sans text-[0.84rem] text-[#716B63] mt-1 max-w-xl leading-relaxed">
                Your birth details and personal charts are never archived publicly or sold to data networks.
                Your PDF is delivered password-free, fully readable on smartphone, tablet, or home print.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-sans text-xs uppercase tracking-wider text-[#B68A3A] font-bold px-3 py-1.5 border border-[#B68A3A]/40 bg-[#FFFDF8]">
              High-Res Vector PDF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

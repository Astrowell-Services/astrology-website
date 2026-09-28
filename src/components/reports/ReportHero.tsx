"use client";

import Link from "next/link";
import { MessageCircle, FileText, CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";
import { astrologer } from "@/data/astrologer";

interface ReportHeroProps {
  onExploreClick?: () => void;
}

export default function ReportHero({ onExploreClick }: ReportHeroProps) {
  return (
    <section className="bg-[#F7F3EA] border-b border-[#D9CFBD] pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 relative overflow-hidden">
      {/* Subtle background ambient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#B68A3A]/5 to-transparent pointer-events-none blur-3xl" />

      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B68A3A]/40 bg-[#FFFDF8] shadow-xs mb-5">
            <Award size={14} className="text-[#B68A3A]" />
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-600 text-[#632D3D]">
              Handcrafted Vedic Dossiers
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211F] leading-tight sm:leading-snug mb-5">
            In-Depth Astrological Reports <br className="hidden sm:inline" />
            <span className="italic text-[#632D3D] font-normal">Hand-Analyzed by Acharya Debdutta</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-[0.95rem] sm:text-base text-[#716B63] max-w-2xl mx-auto leading-relaxed mb-8">
            Unlike generic computer-generated printouts, every dossier is personally computed,
            cross-verified across divisional charts (D1, D9, D10), and accompanied by time-tested
            Vedic &amp; Lal Kitab remedial prescriptions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10">
            <a
              href="#reports-catalog"
              onClick={(e) => {
                if (onExploreClick) {
                  e.preventDefault();
                  onExploreClick();
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-sm font-semibold tracking-wide uppercase hover:bg-[#4E2230] transition-colors shadow-sm rounded-none"
            >
              <FileText size={16} />
              <span>Explore Report Catalog</span>
            </a>

            <a
              href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Pranam Acharya Debdutta, I would like to inquire about ordering an Astrological Report for my birth chart."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#632D3D] text-[#632D3D] bg-[#FFFDF8] font-sans text-sm font-semibold tracking-wide uppercase hover:bg-[#632D3D] hover:text-[#FFFDF8] transition-colors rounded-none"
            >
              <MessageCircle size={16} />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#D9CFBD]/80">
            <div className="flex items-center justify-center gap-2 text-left p-2">
              <ShieldCheck size={18} className="text-[#B68A3A] shrink-0" />
              <div className="flex flex-col">
                <span className="font-sans text-[0.8rem] font-bold text-[#24211F]">100% Manual</span>
                <span className="font-sans text-[0.7rem] text-[#716B63]">No automated bots</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-left p-2">
              <Clock size={18} className="text-[#B68A3A] shrink-0" />
              <div className="flex flex-col">
                <span className="font-sans text-[0.8rem] font-bold text-[#24211F]">48 – 72 Hours</span>
                <span className="font-sans text-[0.7rem] text-[#716B63]">Careful turnaround</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-left p-2">
              <FileText size={18} className="text-[#B68A3A] shrink-0" />
              <div className="flex flex-col">
                <span className="font-sans text-[0.8rem] font-bold text-[#24211F]">High-Res PDF</span>
                <span className="font-sans text-[0.7rem] text-[#716B63]">WhatsApp &amp; Email</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-left p-2">
              <CheckCircle2 size={18} className="text-[#B68A3A] shrink-0" />
              <div className="flex flex-col">
                <span className="font-sans text-[0.8rem] font-bold text-[#24211F]">Clarifications</span>
                <span className="font-sans text-[0.7rem] text-[#716B63]">Post-report support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

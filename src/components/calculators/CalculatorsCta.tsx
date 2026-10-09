"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { astrologer } from "@/data/astrologer";

export default function CalculatorsCta() {
  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-20 border-b border-[#D9CFBD]">
      <div className="container-site max-w-4xl mx-auto text-center">
        <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
          Beyond Algorithms
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-tight mb-4">
          Need Human Vedic Synthesis?
        </h2>

        <p className="font-sans text-[0.92rem] text-[#716B63] max-w-xl mx-auto leading-relaxed mb-8">
          Automated calculators compute basic placements, but only a seasoned astrologer can
          synthesize divisional charts, dasha timing, and customized remedial solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <a
            href={`tel:${astrologer.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors shadow-sm cursor-pointer"
          >
            <Phone size={15} />
            <span>Call Consultation</span>
          </a>

          <a
            href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              "Pranam Acharya Debdutta, I computed my chart using your free calculator and would like to discuss my planetary dasha."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#632D3D] text-[#632D3D] bg-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#632D3D] hover:text-[#FFFDF8] transition-colors"
          >
            <MessageCircle size={15} />
            <span>WhatsApp (+91 93300 27339)</span>
          </a>

          <Link
            href="/report/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#D9CFBD] text-[#716B63] bg-[#FFFDF8] hover:border-[#632D3D] hover:text-[#632D3D] font-sans text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <FileText size={15} />
            <span>Order Written Dossier</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

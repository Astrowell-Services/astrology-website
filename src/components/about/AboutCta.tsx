"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { astrologer } from "@/data/astrologer";

export default function AboutCta() {
  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-20 border-b border-[#D9CFBD]">
      <div className="container-site max-w-4xl mx-auto text-center">
        <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-3">
          Begin Your Journey
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211F] font-normal leading-tight mb-4">
          Ready to Understand Your Cosmic Path?
        </h2>

        <p className="font-sans text-[0.95rem] text-[#716B63] max-w-2xl mx-auto leading-relaxed mb-8">
          Whether you seek direct answers to immediate dilemmas through a telephonic session or
          desire a comprehensive handwritten Vedic report, Acharya Debdutta is here to guide you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/book-astrology-consultation/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors shadow-sm"
          >
            <Phone size={15} />
            <span>Book Consultation</span>
          </Link>

          <a
            href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              "Pranam Acharya Debdutta, I would like to book a consultation session with you."
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

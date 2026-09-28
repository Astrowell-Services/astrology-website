"use client";

import { MessageCircle, Bell } from "lucide-react";
import { astrologer } from "@/data/astrologer";

export default function BlogNewsletter() {
  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-20 border-b border-[#D9CFBD]">
      <div className="container-site max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFFDF8] border border-[#D9CFBD] mb-4 text-[#B68A3A]">
          <Bell size={22} />
        </div>

        <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
          Direct Transit Broadcast
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-tight mb-4">
          Never Miss a Major Cosmic Transit
        </h2>

        <p className="font-sans text-[0.92rem] text-[#716B63] max-w-xl mx-auto leading-relaxed mb-8">
          Join Acharya Debdutta&apos;s direct WhatsApp community for advance alerts on planetary
          Gochar shifts, eclipses, and auspicious Vedic Muhurats.
        </p>

        <div className="flex justify-center">
          <a
            href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              "Pranam Acharya Debdutta, I would like to join your WhatsApp broadcast for planetary transit alerts and astrological insights."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors shadow-sm"
          >
            <MessageCircle size={16} />
            <span>Join WhatsApp Broadcast</span>
          </a>
        </div>
      </div>
    </section>
  );
}

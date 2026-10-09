"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Phone } from "lucide-react";
import { astrologer } from "@/data/astrologer";

interface NameCorrectionHeroProps {
  onRequestClick: () => void;
}

export default function NameCorrectionHero({ onRequestClick }: NameCorrectionHeroProps) {
  return (
    <section className="bg-[#F7F3EA] border-b border-[#D9CFBD] pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 relative overflow-hidden">
      {/* Background ambient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#B68A3A]/6 to-transparent pointer-events-none blur-3xl" />

      <div className="container-site relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211F] leading-tight mb-5"
        >
          Name Correction Service by Astro Acharya Debdutta
        </motion.h1>

        {/* Core Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-sans text-base sm:text-lg text-[#4A453E] max-w-3xl mx-auto leading-relaxed mb-8"
        >
          In Vedic astrology and numerology, your name carries energy, vibration, and planetary
          influence that shape your personal growth, relationships, and life journey. Astro Acharya
          Debdutta helps align your personal, career, or baby name with auspicious cosmic frequencies
          for lasting harmony, balance, and success.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <button
            type="button"
            onClick={onRequestClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors shadow-sm"
          >
            <Sparkles size={15} />
            <span>Get Name Correction</span>
          </button>

          <Link
            href="/book-astrology-consultation/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#632D3D] text-[#632D3D] bg-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#632D3D] hover:text-[#FFFDF8] transition-colors"
          >
            <Phone size={15} />
            <span>Contact Us / Call Consultation</span>
          </Link>

          <a
            href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              "Pranam Astro Acharya Debdutta, I would like to inquire about your Name Correction Service."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#D9CFBD] text-[#716B63] bg-[#FFFDF8] hover:border-[#632D3D] hover:text-[#632D3D] font-sans text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <MessageCircle size={15} className="text-[#25D366]" />
            <span>WhatsApp (+91 93300 27339)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

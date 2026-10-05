"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles, MessageCircle, Phone, Video, Send } from "lucide-react";
import { astrologer } from "@/data/astrologer";

interface PujaHeroProps {
  onExploreClick: () => void;
  onRequestClick: () => void;
}

export default function PujaHero({ onExploreClick, onRequestClick }: PujaHeroProps) {
  return (
    <section className="bg-[#F7F3EA] border-b border-[#D9CFBD] pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 relative overflow-hidden">
      {/* Background ambient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#B68A3A]/6 to-transparent pointer-events-none blur-3xl" />

      <div className="container-site relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B68A3A]/40 bg-[#FFFDF8] shadow-xs mb-5"
        >
          <Flame size={14} className="text-[#B68A3A]" />
          <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-600 text-[#632D3D]">
            Authentic Vedic Rituals &amp; Dosha Shanti
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211F] leading-tight mb-4"
        >
          Online Vedic Puja &amp; Hawan Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="font-sans text-[0.95rem] sm:text-base text-[#716B63] max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Authentic remedial Hawans and Vedic pujas performed by experienced Sanskrit scholars under
          the personal guidance of Acharya Debdutta. Participate via live interactive video, with
          individual Gotra Sankalpa and consecrated Prasad delivered to your home.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10"
        >
          <button
            type="button"
            onClick={onRequestClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors shadow-sm"
          >
            <Flame size={15} />
            <span>Book a Sacred Puja</span>
          </button>

          <a
            href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              "Pranam Acharya Debdutta, I would like to inquire about booking an authentic Vedic Online Puja."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#632D3D] text-[#632D3D] bg-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#632D3D] hover:text-[#FFFDF8] transition-colors"
          >
            <MessageCircle size={15} />
            <span>WhatsApp Inquiry</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#D9CFBD]/80">
          <div className="flex items-center justify-center gap-2 text-left p-2">
            <Flame size={18} className="text-[#B68A3A] shrink-0" />
            <div className="flex flex-col">
              <span className="font-sans text-[0.8rem] font-bold text-[#24211F]">100% Vedic</span>
              <span className="font-sans text-[0.7rem] text-[#716B63]">Strict scriptural vidhi</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-left p-2">
            <Video size={18} className="text-[#B68A3A] shrink-0" />
            <div className="flex flex-col">
              <span className="font-sans text-[0.8rem] font-bold text-[#24211F]">Live Video</span>
              <span className="font-sans text-[0.7rem] text-[#716B63]">Interactive streaming</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-left p-2">
            <Sparkles size={18} className="text-[#B68A3A] shrink-0" />
            <div className="flex flex-col">
              <span className="font-sans text-[0.8rem] font-bold text-[#24211F]">Sankalpa</span>
              <span className="font-sans text-[0.7rem] text-[#716B63]">By Name &amp; Gotra</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-left p-2">
            <Send size={18} className="text-[#B68A3A] shrink-0" />
            <div className="flex flex-col">
              <span className="font-sans text-[0.8rem] font-bold text-[#24211F]">Prasad Delivery</span>
              <span className="font-sans text-[0.7rem] text-[#716B63]">Direct to doorstep</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

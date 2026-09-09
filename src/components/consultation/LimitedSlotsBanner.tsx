"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Languages, Clock, Phone, PhoneCall, AlertCircle } from "lucide-react";

interface LimitedSlotsBannerProps {
  onBookClick?: () => void;
}

export default function LimitedSlotsBanner({ onBookClick }: LimitedSlotsBannerProps) {
  return (
    <section className="py-12 bg-[#FFFDF8] border-b border-[#D9CFBD]/60">
      <div className="container-site">
        <motion.div
          className="relative bg-gradient-to-r from-[#F7F3EA] via-[#FFFDF8] to-[#F7F3EA] border-2 border-[#D9CFBD] p-8 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative gold corner accents */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B68A3A]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B68A3A]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#B68A3A]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#B68A3A]" />

          <div className="max-w-4xl mx-auto text-center">
            
            {/* Urgent badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#632D3D]/10 border border-[#632D3D]/30 text-[#632D3D] rounded-full mb-4">
              <AlertCircle size={14} />
              <span className="font-sans text-[0.72rem] tracking-wider uppercase font-semibold">
                High Demand • Limited Daily Slots
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#24211F] font-normal mb-3">
              Book Now – Limited Slots Available
            </h3>

            {/* Body */}
            <p className="font-sans text-[0.92rem] sm:text-base text-[#716B63] max-w-2xl mx-auto mb-7 leading-relaxed">
              Due to the one-on-one nature of this service, we accept limited bookings each day. Book your slot now to avoid delays.
            </p>

            {/* Button */}
            <div className="mb-8">
              <a
                href="tel:+919831421490"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#632D3D] hover:bg-[#4A1F2B] text-[#FFFDF8] font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
                id="limited-slots-book-btn"
              >
                <PhoneCall size={16} />
                <span>Book Call Now</span>
              </a>
            </div>

            {/* 4 Feature Badges with Lucide SVG icons (NO EMOJIS) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#D9CFBD]/60 text-left">
              
              <div className="flex items-center gap-3 p-2.5 bg-[#FFFDF8] border border-[#D9CFBD]/50">
                <div className="w-8 h-8 rounded-full bg-[#F7F3EA] flex items-center justify-center shrink-0">
                  <Globe size={16} className="text-[#B68A3A]" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans text-[0.74rem] font-semibold text-[#24211F]">PAN India + Global</div>
                  <div className="font-sans text-[0.66rem] text-[#716B63]">via WhatsApp Call</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 bg-[#FFFDF8] border border-[#D9CFBD]/50">
                <div className="w-8 h-8 rounded-full bg-[#F7F3EA] flex items-center justify-center shrink-0">
                  <Languages size={16} className="text-[#B68A3A]" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans text-[0.74rem] font-semibold text-[#24211F]">Hindi, English</div>
                  <div className="font-sans text-[0.66rem] text-[#716B63]">Fluent Guidance</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 bg-[#FFFDF8] border border-[#D9CFBD]/50">
                <div className="w-8 h-8 rounded-full bg-[#F7F3EA] flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#B68A3A]" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans text-[0.74rem] font-semibold text-[#24211F]">10:00 AM – 9:00 PM</div>
                  <div className="font-sans text-[0.66rem] text-[#716B63]">IST Operational Hours</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 bg-[#FFFDF8] border border-[#D9CFBD]/50">
                <div className="w-8 h-8 rounded-full bg-[#F7F3EA] flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#B68A3A]" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans text-[0.74rem] font-semibold text-[#24211F]">Phone Call Only</div>
                  <div className="font-sans text-[0.66rem] text-[#716B63]">Direct Audio Line</div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

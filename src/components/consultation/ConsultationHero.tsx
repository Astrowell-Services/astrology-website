"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, ShieldCheck, Clock, Award, MessageSquare } from "lucide-react";
import AstrologerPortrait from "@/components/hero/AstrologerPortrait";
import CelestialParticles from "@/components/astrology/CelestialParticles";
import CelestialWheel from "@/components/astrology/CelestialWheel";

export default function ConsultationHero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-[#F7F3EA]">
      {/* Background Celestial Ambience */}
      <CelestialParticles density="low" />

      {/* Rotating Celestial Wheel in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block overflow-hidden">
        <CelestialWheel size={750} rotate={true} speed={140} />
      </div>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Heading, Subtitle & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-[#24211F] font-normal leading-[1.15] mb-6 tracking-tight">
              Call Consultation With <br className="hidden sm:inline" />
              <span className="text-[#632D3D] italic font-serif">Achariya Debdutta</span>
            </h1>

            {/* Exact Body Text */}
            <p className="font-sans text-[0.98rem] sm:text-base text-[#716B63] leading-relaxed mb-8 max-w-2xl font-normal">
              Welcome to the Call Consultation service by Achariya Debdutta — where ancient Vedic wisdom meets modern convenience. Whether you’re struggling with career, marriage, health, or spiritual blockages, our expert astrologers are here to offer clarity, solutions, and personalized direction over a simple phone call.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="tel:+919830078634"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#632D3D] hover:bg-[#4A1F2B] text-[#FFFDF8] font-sans text-[0.84rem] font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                id="hero-book-call-btn"
              >
                <PhoneCall size={15} />
                <span>Call Consultant</span>
              </a>

              <a
                href="https://wa.me/919330027339?text=Hello%20Achariya%20Debdutta,%20I%20would%20like%20to%20inquire%20about%20a%20telephonic%20astrology%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#FFFDF8] border border-[#25D366] text-[#24211F] hover:bg-[#25D366]/10 font-sans text-[0.84rem] font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer"
              >
                <MessageSquare size={15} className="text-[#25D366]" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Trust Badges — Clean Lucide SVGs, strictly NO emojis */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#D9CFBD]/60 max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF8] border border-[#D9CFBD] flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} className="text-[#B68A3A]" />
                </div>
                <div>
                  <div className="font-sans text-[0.76rem] font-semibold text-[#24211F]">100% Private</div>
                  <div className="font-sans text-[0.66rem] text-[#716B63]">Strict Confidentiality</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF8] border border-[#D9CFBD] flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#B68A3A]" />
                </div>
                <div>
                  <div className="font-sans text-[0.76rem] font-semibold text-[#24211F]">24h Response</div>
                  <div className="font-sans text-[0.66rem] text-[#716B63]">Direct Fast Callback</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF8] border border-[#D9CFBD] flex items-center justify-center shrink-0">
                  <Award size={16} className="text-[#B68A3A]" />
                </div>
                <div>
                  <div className="font-sans text-[0.76rem] font-semibold text-[#24211F]">28+ Years</div>
                  <div className="font-sans text-[0.66rem] text-[#716B63]">Authentic Lineage</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Astrologer Portrait */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-sm lg:max-w-md -translate-y-5">
              <AstrologerPortrait />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

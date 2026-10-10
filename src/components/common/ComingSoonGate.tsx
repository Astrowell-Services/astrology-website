"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageSquare,
  Sparkles,
  Clock,
  ShieldCheck,
  Calendar,
  Lock,
  ArrowRight,
} from "lucide-react";
import CelestialWheel from "@/components/astrology/CelestialWheel";
import CelestialParticles from "@/components/astrology/CelestialParticles";

export interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

interface ComingSoonGateProps {
  serviceKey: "calculators" | "name-correction" | "online-puja";
  title: string;
  badgeText?: string;
  subtitle: string;
  expectedDate?: string;
  highlights: HighlightItem[];
  children: React.ReactNode;
}

export default function ComingSoonGate({
  serviceKey,
  title,
  badgeText = "Under Sacred Preparation",
  subtitle,
  expectedDate = "Phase 2 Deployment • In Final Testing",
  highlights,
  children,
}: ComingSoonGateProps) {
  return (
    <div className="relative min-h-screen bg-[#F7F3EA] text-[#24211F] overflow-hidden">
      {/* Background Celestial Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <CelestialParticles density="medium" />
        <div className="absolute -right-32 top-10 opacity-25 hidden md:block">
          <CelestialWheel size={700} opacity={0.16} rotate={true} speed={160} />
        </div>
        <div className="absolute -left-48 bottom-0 opacity-20 hidden md:block">
          <CelestialWheel size={650} opacity={0.12} rotate={true} speed={190} />
        </div>
      </div>

      {/* Main Coming Soon Presentation */}
      <section className="relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">
        <div className="container-site max-w-5xl mx-auto">
          {/* Header Badge & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            {/* Pulsing Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF8] border border-[#B68A3A]/40 shadow-xs mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B68A3A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B68A3A]" />
              </span>
              <span className="font-sans text-[0.68rem] tracking-[0.2em] uppercase text-[#632D3D] font-bold">
                {badgeText}
              </span>
              <span className="text-[#B68A3A]">•</span>
              <span className="font-sans text-[0.68rem] tracking-wider uppercase text-[#B68A3A] font-semibold">
                Coming Soon
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211F] font-normal leading-[1.18] mb-5">
              {title}
            </h1>

            <p className="font-sans text-[0.95rem] sm:text-base text-[#716B63] leading-relaxed max-w-2xl mx-auto mb-4">
              {subtitle}
            </p>

            <div className="inline-flex items-center gap-2 text-[0.72rem] tracking-wider uppercase text-[#B68A3A] font-semibold bg-[#FFFDF8]/80 px-3.5 py-1.5 border border-[#D9CFBD]/70 shadow-2xs">
              <Clock size={13} className="text-[#B68A3A]" />
              <span>{expectedDate}</span>
            </div>
          </motion.div>

          {/* Primary Action Card: For More Information Call Consultant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative bg-[#FFFDF8] border-2 border-[#D9CFBD] p-6 sm:p-9 lg:p-10 shadow-[0_10px_35px_rgba(36,33,31,0.06)] mb-12 sm:mb-16"
          >
            {/* Gold Corner Accents */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B68A3A]" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B68A3A]" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#B68A3A]" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#B68A3A]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#632D3D] mb-2">
                  <Sparkles size={14} className="text-[#B68A3A]" />
                  <span>Personal Consultation & Guidance</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#24211F] font-normal mb-3">
                  For more information, call our consultant directly.
                </h2>
                <p className="font-sans text-[0.88rem] sm:text-[0.92rem] text-[#716B63] leading-relaxed mb-5">
                  While this automated service is being calibrated, Acharya Debdutta is actively offering manual birth chart calculations, personal name vibration assessments, and sacred Vedic consultations over telephone.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-[0.78rem] text-[#24211F] font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#B68A3A]" />
                    <span>100% Classical Precision</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock size={14} className="text-[#B68A3A]" />
                    <span>Confidential Guidance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#B68A3A]" />
                    <span>Daily 10:00 AM – 8:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
                <a
                  href="tel:+919830078634"
                  id={`coming-soon-call-btn-${serviceKey}`}
                  className="group relative flex items-center justify-center gap-3.5 px-6 py-4 bg-[#632D3D] hover:bg-[#4A1F2B] text-[#FFFDF8] font-sans transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                >
                  <PhoneCall size={22} className="text-[#FFFDF8] group-hover:scale-110 transition-transform shrink-0" />
                  <div className="text-left leading-tight">
                    <div className="text-[0.66rem] tracking-widest uppercase text-[#D9CFBD] font-medium">
                      Call Consultant Helpline
                    </div>
                    <div className="font-bold text-base sm:text-lg text-[#FFFDF8]">
                      +919830078634
                    </div>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="https://wa.me/919330027339?text=Hello%20Acharya%20Debdutta,%20I%20am%20inquiring%20about%20the%20upcoming%20services%20and%20would%20like%20to%20consult."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#FFFDF8] border border-[#25D366] text-[#24211F] hover:bg-[#25D366]/10 font-sans text-[0.74rem] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <MessageSquare size={14} className="text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>

                  <Link
                    href="/book-astrology-consultation/"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#FFFDF8] border border-[#B68A3A] text-[#632D3D] hover:bg-[#B68A3A]/10 font-sans text-[0.74rem] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Calendar size={14} className="text-[#B68A3A]" />
                    <span>Book Session</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Architecture Highlights */}
          <div>
            <div className="text-center mb-6">
              <p className="font-sans text-[0.68rem] tracking-[0.2em] uppercase text-[#B68A3A] font-semibold">
                Under Active Preparation
              </p>
              <h3 className="font-serif text-xl sm:text-2xl text-[#24211F] mt-1">
                Upcoming Modules & Capabilities
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-[#FFFDF8] border border-[#D9CFBD] hover:border-[#B68A3A] transition-all duration-300 shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[#B68A3A]">
                        {item.icon}
                      </div>
                      <span className="font-sans text-[0.62rem] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#B68A3A]/10 text-[#632D3D] border border-[#B68A3A]/25 rounded-xs">
                        {item.badge || "Coming Soon"}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl text-[#24211F] group-hover:text-[#632D3D] transition-colors mb-2">
                      {item.title}
                    </h4>

                    <p className="font-sans text-[0.82rem] text-[#716B63] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#D9CFBD]/40 flex items-center justify-between">
                    <span className="font-sans text-[0.66rem] uppercase tracking-wider text-[#B68A3A] font-medium">
                      Vedic Precision
                    </span>
                    <a
                      href="tel:+919830078634"
                      className="font-sans text-[0.72rem] font-semibold text-[#632D3D] hover:underline flex items-center gap-1"
                    >
                      <span>Call Consultant</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Reassurance Ribbon */}
          <div className="mt-12 p-4 sm:p-5 bg-[#FFFDF8] border border-[#D9CFBD] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <PhoneCall size={20} className="text-[#632D3D] shrink-0" />
              <div>
                <p className="font-sans text-xs text-[#24211F] font-semibold">
                  For immediate assistance & consultation inquiries
                </p>
                <p className="font-sans text-[0.75rem] text-[#716B63]">
                  Acharya Debdutta Helpline: +919830078634
                </p>
              </div>
            </div>
            <a
              href="tel:+919830078634"
              className="px-4 py-2 bg-[#632D3D] hover:bg-[#4A1F2B] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase transition-colors shrink-0"
            >
              Call Consultant
            </a>
          </div>
        </div>
      </section>

      {/* 100% PRESERVED CODEBASE: Kept intact without deleting anything for SEO crawlers and zero regression */}
      <div className="sr-only" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

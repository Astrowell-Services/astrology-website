"use client";

import React from "react";
import { motion } from "framer-motion";
import { consultationPackages, ConsultationPackage } from "@/data/consultation";
import { Phone, Clock, Languages, Sparkles, Check, CheckCircle2 } from "lucide-react";

interface ConsultationPackagesProps {
  onSelectPackage?: (pkg: ConsultationPackage) => void;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ConsultationPackages({ onSelectPackage }: ConsultationPackagesProps) {
  const handleBooking = (pkg: ConsultationPackage) => {
    if (onSelectPackage) {
      onSelectPackage(pkg);
    } else {
      const message = encodeURIComponent(
        `Hello Achariya Debdutta ji, I would like to book the ${pkg.name} (₹${pkg.price}, ${pkg.duration}) for Call Consultation.`
      );
      window.open(`https://wa.me/919330027339?text=${message}`, "_blank");
    }
  };

  return (
    <section id="call-packages" className="section-spacing bg-[#FFFDF8] relative">
      <div className="container-site">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <p className="font-sans text-[0.72rem] tracking-[0.22em] uppercase text-[#B68A3A] font-semibold mb-2.5">
            Transparent Pricing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal mb-3">
            Call Consultation Packages
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#632D3D]">
            Connect directly with our expert astrologers
          </p>
        </div>

        {/* 3 Packages Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {consultationPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              className={`relative flex flex-col justify-between p-8 sm:p-9 transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-[#FFFDF8] border-2 border-[#B68A3A] shadow-[0_8px_32px_rgba(182,138,58,0.14)] -translate-y-1 lg:-translate-y-2"
                  : "bg-[#F7F3EA]/70 border border-[#D9CFBD] hover:border-[#B68A3A] hover:bg-[#FFFDF8] shadow-xs"
              }`}
            >
              {/* Badge if present (Value) */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B68A3A] text-[#FFFDF8] px-4 py-1 text-[0.68rem] tracking-[0.2em] font-sans font-bold uppercase shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Plan Name & Duration */}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#24211F] font-normal">
                    {pkg.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-[#632D3D] bg-[#632D3D]/10 px-2.5 py-1">
                    <Clock size={12} />
                    {pkg.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-[0.84rem] text-[#716B63] leading-relaxed mb-6 min-h-[42px]">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-[#D9CFBD]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl sm:text-5xl font-normal text-[#24211F]">
                      ₹{pkg.price}
                    </span>
                    <span className="font-sans text-xs text-[#716B63]">/ session</span>
                  </div>
                  <div className="font-sans text-[0.72rem] text-[#B68A3A] font-medium mt-1">
                    Inclusive of full birth chart preparation
                  </div>
                </div>

                {/* Core Features */}
                <div className="mb-6">
                  <span className="font-sans text-[0.68rem] uppercase tracking-wider text-[#716B63] font-bold block mb-3">
                    Key Features:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-[#B68A3A] mt-0.5 shrink-0" />
                        <span className="font-sans text-[0.85rem] text-[#24211F] font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications List */}
                <div className="pt-5 border-t border-[#D9CFBD]/60 space-y-2 mb-8 bg-[#FFFDF8]/80 p-3.5 border border-[#D9CFBD]/50">
                  <div className="flex items-center gap-2 text-[0.76rem] text-[#716B63]">
                    <Phone size={13} className="text-[#B68A3A] shrink-0" />
                    <span>{pkg.specs.mode}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-[#716B63]">
                    <Clock size={13} className="text-[#B68A3A] shrink-0" />
                    <span>{pkg.specs.timings}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-[#716B63]">
                    <Languages size={13} className="text-[#B68A3A] shrink-0" />
                    <span>{pkg.specs.languages}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-[#632D3D] font-medium">
                    <Sparkles size={13} className="text-[#B68A3A] shrink-0" />
                    <span>{pkg.specs.remedy}</span>
                  </div>
                </div>
              </div>

              {/* Book Now Button */}
              <button
                type="button"
                onClick={() => handleBooking(pkg)}
                className={`w-full py-3.5 px-6 font-sans text-[0.82rem] font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.highlighted
                    ? "bg-[#632D3D] hover:bg-[#4A1F2B] text-[#FFFDF8]"
                    : "bg-[#24211F] hover:bg-[#38332F] text-[#FFFDF8]"
                }`}
                id={`book-${pkg.id}`}
              >
                <span>Book Now</span>
                <Check size={14} />
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

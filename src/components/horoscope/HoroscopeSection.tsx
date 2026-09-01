"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, Sparkles, Heart, Briefcase, Clock, Calendar } from "lucide-react";
import { zodiacSigns, ZodiacHoroscope } from "@/data/horoscope";
import { zodiacIconMap } from "@/components/astrology/ZodiacIcons";
import PlanetaryOrbit from "@/components/astrology/PlanetaryOrbit";
import CelestialParticles from "@/components/astrology/CelestialParticles";

const elementColors: Record<string, { bg: string; text: string; border: string }> = {
  Fire: { bg: "#FBF3EE", text: "#8C432A", border: "#E8C8BA" },
  Earth: { bg: "#F4F6F0", text: "#4E603C", border: "#CAD5BD" },
  Air: { bg: "#F5F6FA", text: "#3A557A", border: "#BDCEE5" },
  Water: { bg: "#F2F7F8", text: "#2F6575", border: "#B5D7DF" },
};

export default function HoroscopeSection() {
  const [selectedSignId, setSelectedSignId] = useState<string>("aries");
  const selectedSign: ZodiacHoroscope =
    zodiacSigns.find((s) => s.id === selectedSignId) || zodiacSigns[0];

  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      };
      setFormattedDate(now.toLocaleDateString("en-US", options));
    };

    updateDate();

    // Check and auto-refresh date every 60 seconds so it updates automatically when day changes
    const timer = setInterval(updateDate, 60000);
    return () => clearInterval(timer);
  }, []);

  const SelectedIcon = zodiacIconMap[selectedSign.id];

  return (
    <section
      id="horoscope"
      className="section-spacing bg-[#FFFDF8] relative overflow-hidden"
      aria-labelledby="horoscope-heading"
    >
      {/* Background Celestial Orbit Lines */}
      <div className="absolute right-[-120px] lg:right-[-8%] top-1/2 -translate-y-1/2 pointer-events-none opacity-15">
        <PlanetaryOrbit size={550} opacity={0.14} rotate={true} speed={170} />
      </div>

      <CelestialParticles density="low" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
            <span>DAILY HOROSCOPE</span>
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
          </div>
          <h2 id="horoscope-heading" className="section-title mb-3">
            Planetary transits &amp; cosmic guidance for your sign.
          </h2>
          <p className="font-sans text-[0.85rem] text-[#716B63] flex items-center justify-center gap-2">
            <Calendar size={13} className="text-[#B68A3A]" />
            <span>Vedic Daily Forecast for {formattedDate || "Today"}</span>
          </p>
        </motion.div>

        {/* 12 Zodiac Signs Selector Tabs */}
        <div className="mb-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
            {zodiacSigns.map((sign) => {
              const isSelected = sign.id === selectedSignId;
              const SignIcon = zodiacIconMap[sign.id];
              return (
                <button
                  key={sign.id}
                  onClick={() => setSelectedSignId(sign.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xs border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#632D3D] text-[#FFFDF8] border-[#632D3D] shadow-sm scale-105 z-10"
                      : "bg-[#F7F3EA] text-[#24211F] border-[#D9CFBD] hover:border-[#B68A3A] hover:bg-[#FAF6EE]"
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`${sign.name} (${sign.sanskritName})`}
                >
                  <div className="mb-1.5 flex items-center justify-center">
                    {SignIcon && (
                      <SignIcon
                        size={22}
                        strokeWidth={1.75}
                        color={isSelected ? "#E8D4A8" : "#B68A3A"}
                      />
                    )}
                  </div>
                  <span className="font-serif text-[0.88rem] font-normal leading-none mb-0.5">
                    {sign.name}
                  </span>
                  <span
                    className={`font-sans text-[0.6rem] uppercase tracking-wider ${
                      isSelected ? "text-[#FFFDF8]/70" : "text-[#716B63]"
                    }`}
                  >
                    {sign.sanskritName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Sign Horoscope Reading Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSign.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="bg-[#FFFDF8] border border-[#D9CFBD] shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          >
            {/* Card Top Banner with Sign Attributes */}
            <div className="p-6 sm:p-8 bg-[#F7F3EA] border-b border-[#D9CFBD] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#FFFDF8] border border-[#B68A3A] flex items-center justify-center shrink-0 shadow-xs">
                  {SelectedIcon && (
                    <SelectedIcon
                      size={28}
                      strokeWidth={1.8}
                      color="#632D3D"
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif text-2xl lg:text-3xl text-[#24211F] font-normal">
                      {selectedSign.name}
                    </h3>
                    <span className="font-sans text-[0.72rem] tracking-wider uppercase px-2 py-0.5 border border-[#B68A3A]/40 text-[#B68A3A] bg-[#FFFDF8]">
                      {selectedSign.sanskritName}
                    </span>
                  </div>
                  <p className="font-sans text-[0.78rem] text-[#716B63]">
                    {selectedSign.dates} • Ruling: <strong className="text-[#24211F] font-semibold">{selectedSign.rulingPlanet}</strong>
                  </p>
                </div>
              </div>

              {/* Element & Auspicious Muhurat Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="font-sans text-[0.72rem] font-semibold uppercase px-3 py-1 border"
                  style={{
                    backgroundColor: elementColors[selectedSign.element].bg,
                    color: elementColors[selectedSign.element].text,
                    borderColor: elementColors[selectedSign.element].border,
                  }}
                >
                  {selectedSign.element} Element
                </span>
                <span className="font-sans text-[0.72rem] px-3 py-1 border border-[#D9CFBD] bg-[#FFFDF8] text-[#716B63] flex items-center gap-1.5">
                  <Clock size={12} className="text-[#B68A3A]" />
                  Auspicious: <strong className="text-[#24211F]">{selectedSign.luckyTime}</strong>
                </span>
              </div>
            </div>

            {/* Reading Body */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Daily Theme Headline */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2 text-[#B68A3A]">
                  <Sparkles size={14} />
                  <p className="font-sans text-[0.68rem] tracking-[0.2em] uppercase font-semibold">
                    Today&apos;s Cosmic Alignment
                  </p>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#632D3D] font-normal leading-snug">
                  &ldquo;{selectedSign.headline}&rdquo;
                </h4>
              </div>

              {/* Forecast Grid: 3 Pillars (Overview, Career, Love) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* General Overview */}
                <div className="p-5 bg-[#FAF6EE] border border-[#E8DEC8]">
                  <div className="flex items-center gap-2 mb-3 text-[#24211F]">
                    <Compass size={15} className="text-[#B68A3A]" />
                    <h5 className="font-sans text-[0.82rem] font-semibold uppercase tracking-wider">
                      General Overview
                    </h5>
                  </div>
                  <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
                    {selectedSign.overview}
                  </p>
                </div>

                {/* Career & Finance */}
                <div className="p-5 bg-[#FAF6EE] border border-[#E8DEC8]">
                  <div className="flex items-center gap-2 mb-3 text-[#24211F]">
                    <Briefcase size={15} className="text-[#B68A3A]" />
                    <h5 className="font-sans text-[0.82rem] font-semibold uppercase tracking-wider">
                      Career &amp; Enterprise
                    </h5>
                  </div>
                  <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
                    {selectedSign.career}
                  </p>
                </div>

                {/* Love & Harmony */}
                <div className="p-5 bg-[#FAF6EE] border border-[#E8DEC8]">
                  <div className="flex items-center gap-2 mb-3 text-[#24211F]">
                    <Heart size={15} className="text-[#B68A3A]" />
                    <h5 className="font-sans text-[0.82rem] font-semibold uppercase tracking-wider">
                      Love &amp; Harmony
                    </h5>
                  </div>
                  <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
                    {selectedSign.love}
                  </p>
                </div>
              </div>

              {/* Lucky Metrics Strip + CTAs */}
              <div className="pt-6 border-t border-[#D9CFBD] flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Lucky Metrics */}
                <div className="flex items-center gap-6">
                  <div>
                    <span className="font-sans text-[0.62rem] uppercase tracking-wider text-[#716B63] block">
                      Lucky Number
                    </span>
                    <span className="font-serif text-xl text-[#632D3D] font-medium">
                      {selectedSign.luckyNumber}
                    </span>
                  </div>
                  <div className="w-px h-8 bg-[#D9CFBD]" />
                  <div>
                    <span className="font-sans text-[0.62rem] uppercase tracking-wider text-[#716B63] block">
                      Lucky Color
                    </span>
                    <span className="font-serif text-base text-[#24211F]">
                      {selectedSign.luckyColor}
                    </span>
                  </div>
                </div>

                {/* Link to Full Consultation / Horoscope Page */}
                <div className="flex items-center gap-3">
                  <Link
                    href="/horoscope/"
                    className="btn-secondary text-[0.75rem] py-2.5 px-5"
                  >
                    <span>View Full Year Forecast</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/book-astrology-consultation/"
                    className="btn-primary text-[0.75rem] py-2.5 px-5"
                  >
                    <span>Book Chart Reading</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

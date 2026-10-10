"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import HeroDecor from "@/components/astrology/HeroDecor";
import AstrologerPortrait from "@/components/hero/AstrologerPortrait";
import CelestialWheel from "@/components/astrology/CelestialWheel";
import { astrologer } from "@/data/astrologer";

const fadeUpProps = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F7F3EA]"
      aria-label="Hero section"
      style={{ minHeight: "calc(100vh - 68px)" }}
    >
      {/* Background Celestial Wheel & Constellations */}
      <HeroDecor />

      <div
        className="container-site relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-6 py-12 lg:py-0"
        style={{ minHeight: "calc(100vh - 68px)" }}
      >
        {/* Left column — Editorial Text */}
        <div className="flex flex-col justify-center order-1 lg:order-1 lg:w-[54%] lg:pr-8 xl:pr-14 py-6 lg:py-16">
          {/* Eyebrow */}
          <motion.div
            className="eyebrow mb-5 flex items-center gap-2"
            {...fadeUpProps(0)}
          >
            <span className="inline-block w-5 h-px bg-[#B68A3A]" />
            <span>VEDIC WISDOM. PERSONAL GUIDANCE.</span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            className="font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-normal leading-[1.08] text-[#24211F] mb-6"
            {...fadeUpProps(0.1)}
          >
            Read the patterns.
            <br />
            <span className="text-[#632D3D]">Understand the path.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            className="font-sans text-[1rem] lg:text-[1.05rem] text-[#716B63] leading-relaxed max-w-lg mb-8"
            {...fadeUpProps(0.2)}
          >
            Personalised Vedic astrology guidance for relationships, career, finance and life&apos;s important decisions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-10"
            {...fadeUpProps(0.3)}
          >
            <Link
              href="/book-astrology-consultation/"
              id="hero-cta-primary"
              className="btn-primary group"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+919830078634"
              id="hero-cta-secondary"
              className="btn-secondary"
            >
              CALL CONSULTANT
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="flex items-center gap-3.5 pt-2"
            {...fadeUpProps(0.4)}
          >
            <div className="flex -space-x-2">
              {["#8B5D43", "#A87C51", "#68483B", "#8C6A48"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#FFFDF8] flex items-center justify-center shadow-xs"
                  style={{ backgroundColor: c }}
                  aria-hidden="true"
                >
                  <Users size={11} className="text-[#FFFDF8] opacity-80" />
                </div>
              ))}
            </div>
            <p className="font-sans text-[0.82rem] text-[#716B63]">
              <span className="font-semibold text-[#24211F]">{astrologer.stats.consultations}</span>{" "}
              consultations and counting
            </p>
          </motion.div>
        </div>

        {/* Right column — Astrologer Portrait sitting in front of Celestial Wheel */}
        <div className="relative flex items-center lg:items-end justify-center order-2 lg:order-2 lg:w-[46%] w-full pb-8 lg:pb-0">
          {/* Mobile & Tablet Celestial Wheel rotating behind the portrait */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 lg:hidden">
            <CelestialWheel
              size={390}
              opacity={0.22}
              rotate={true}
              speed={130}
              className="max-w-none"
            />
          </div>

          <motion.div
            className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto z-10 -translate-y-7"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <AstrologerPortrait />

            {/* Floating Experience Badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:left-4 bg-[#FFFDF8] border border-[#D9CFBD] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hidden sm:block z-30"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <Sparkles size={11} className="text-[#B68A3A]" />
                <p className="font-sans text-[0.58rem] tracking-[0.2em] uppercase text-[#B68A3A] font-semibold">
                  Experience
                </p>
              </div>
              <p className="font-serif text-xl text-[#24211F] font-normal leading-tight">
                {astrologer.stats.experience}
              </p>
              <p className="font-sans text-[0.68rem] text-[#716B63]">
                of Vedic practice
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

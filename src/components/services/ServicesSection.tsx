"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import {
  BookSymbol,
  PlanetSymbolSun,
  PhoneConsultSymbol,
  GemstoneSymbol,
  KundliSymbol,
  AlphabetSymbol,
  SacredPujaSymbol,
  CollabSymbol,
  StarDiamond,
} from "@/components/astrology/CelestialIcons";
import CelestialParticles from "@/components/astrology/CelestialParticles";

const iconMap: Record<string, React.ReactNode> = {
  reports: <BookSymbol className="w-8 h-8" />,
  courses: <PlanetSymbolSun className="w-8 h-8" />,
  phone: <PhoneConsultSymbol className="w-8 h-8" />,
  gemstone: <GemstoneSymbol className="w-8 h-8" />,
  horoscope: <KundliSymbol className="w-8 h-8" />,
  calculators: <KundliSymbol className="w-8 h-8" />,
  name: <AlphabetSymbol className="w-8 h-8" />,
  puja: <SacredPujaSymbol className="w-8 h-8" />,
  collab: <CollabSymbol className="w-8 h-8" />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-spacing bg-[#FFFDF8] relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Side Celestial Diamond Accents on section edges */}
      <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block opacity-40">
        <StarDiamond className="w-4 h-4 text-[#B68A3A]" />
      </div>
      <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block opacity-40">
        <StarDiamond className="w-4 h-4 text-[#B68A3A]" />
      </div>

      {/* Subtle background particles */}
      <CelestialParticles density="low" />

      <div className="container-site relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
            <span>OUR ASTROLOGY SERVICES</span>
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
          </div>
          <h2
            id="services-heading"
            className="section-title"
          >
            We offer a complete range of astrology-based services.
          </h2>
        </motion.div>

        {/* 9 Service cards 3-column grid layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              className="bg-[#FFFDF8] border border-[#D9CFBD] p-7 group hover:border-[#B68A3A] hover:bg-[#FAF6EE] transition-all duration-300 flex flex-col justify-between shadow-[0_2px_12px_rgba(36,33,31,0.02)] hover:shadow-[0_8px_24px_rgba(36,33,31,0.06)]"
              variants={cardVariants}
            >
              <div>
                {/* Header with Icon and Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="text-[#B68A3A] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                    {iconMap[service.icon] || <PlanetSymbolSun className="w-8 h-8" />}
                  </div>
                  <span className="font-sans text-[0.68rem] tracking-[0.2em] uppercase text-[#B68A3A] font-semibold">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-[1.3rem] font-normal text-[#24211F] mb-2.5 leading-snug group-hover:text-[#632D3D] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[0.84rem] text-[#716B63] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Link CTA */}
              <div className="pt-4 border-t border-[#D9CFBD]/60">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 font-sans text-[0.78rem] font-semibold text-[#632D3D] group-hover:gap-2.5 transition-all duration-200 uppercase tracking-wider"
                >
                  <span>Explore Service</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

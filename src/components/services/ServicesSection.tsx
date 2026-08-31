"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import {
  PlanetSymbolSaturn,
  PlanetSymbolVenus,
  PlanetSymbolMoon,
  PlanetSymbolSun,
  StarDiamond,
} from "@/components/astrology/CelestialIcons";
import CelestialParticles from "@/components/astrology/CelestialParticles";

const iconMap: Record<string, React.ReactNode> = {
  saturn: <PlanetSymbolSaturn className="w-8 h-8" />,
  venus: <PlanetSymbolVenus className="w-8 h-8" />,
  moon: <PlanetSymbolMoon className="w-8 h-8" />,
  sun: <PlanetSymbolSun className="w-8 h-8" />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
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
      {/* Side Celestial Diamond Accents on section edges (as seen in reference design) */}
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
          <p className="eyebrow mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
            OUR ASTROLOGY SERVICES
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
          </p>
          <h2
            id="services-heading"
            className="section-title"
          >
            Guidance for the questions that matter.
          </h2>
        </motion.div>

        {/* Service cards 4-column layout with 1px border separation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              className="bg-[#FFFDF8] border border-[#D9CFBD] p-8 group hover:border-[#B68A3A] hover:bg-[#FAF6EE] transition-all duration-300 flex flex-col justify-between"
              variants={cardVariants}
            >
              <div>
                {/* Icon */}
                <div className="mb-6 text-[#B68A3A] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                  {iconMap[service.icon]}
                </div>

                {/* Number */}
                <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-[#B68A3A] mb-2 font-semibold">
                  {service.number}
                </p>

                {/* Title */}
                <h3 className="font-serif text-[1.35rem] font-normal text-[#24211F] mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 font-sans text-[0.8rem] font-semibold text-[#632D3D] group-hover:gap-2.5 transition-all duration-200"
              >
                <span>Explore</span>
                <ArrowRight size={13} />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

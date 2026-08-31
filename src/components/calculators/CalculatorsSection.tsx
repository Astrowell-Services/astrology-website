"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { calculators } from "@/data/calculators";
import ChakraDiagram from "@/components/astrology/ChakraDiagram";
import {
  KundliSymbol,
  PlanetSymbolNodes,
  BookSymbol,
  AlphabetSymbol,
} from "@/components/astrology/CelestialIcons";

const iconMap: Record<string, React.ReactNode> = {
  kundali: <KundliSymbol className="w-10 h-10" />,
  nodes: <PlanetSymbolNodes className="w-10 h-10" />,
  book: <BookSymbol className="w-10 h-10" />,
  alphabet: <AlphabetSymbol className="w-10 h-10" />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CalculatorsSection() {
  return (
    <section
      id="calculators"
      className="section-spacing bg-[#F7F3EA] relative overflow-hidden"
      aria-labelledby="calculators-heading"
    >
      {/* LEFT PARTIALLY CROPPED CHAKRA / SACRED GEOMETRY DIAGRAM */}
      <div className="absolute -left-[160px] sm:-left-[200px] lg:-left-[180px] top-[15%] sm:top-1/2 -translate-y-1/2 pointer-events-none">
        <ChakraDiagram
          size={460}
          opacity={0.16}
          rotate={true}
          speed={180}
          className="w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px]"
        />
      </div>

      {/* RIGHT PARTIALLY CROPPED CHAKRA / SACRED GEOMETRY DIAGRAM */}
      <div className="absolute -right-[160px] sm:-right-[200px] lg:-right-[180px] bottom-[15%] sm:top-1/2 -translate-y-1/2 pointer-events-none">
        <ChakraDiagram
          size={460}
          opacity={0.16}
          rotate={true}
          speed={200}
          className="w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px]"
        />
      </div>

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
            OUR FREE CALCULATORS
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
          </p>
          <h2
            id="calculators-heading"
            className="section-title"
          >
            Begin your journey of self-discovery.
          </h2>
        </motion.div>

        {/* Calculator grid — 4 clean ivory cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {calculators.map((calc) => (
            <motion.div
              key={calc.id}
              className="bg-[#FFFDF8] border border-[#D9CFBD] p-8 flex flex-col justify-between group hover:border-[#B68A3A] hover:bg-[#FAF6EE] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              variants={itemVariants}
            >
              <div>
                {/* Icon */}
                <div className="text-[#B68A3A] mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {iconMap[calc.icon]}
                </div>

                {/* Title */}
                <h3 className="font-serif text-[1.25rem] font-normal text-[#24211F] mb-3 text-center leading-snug">
                  {calc.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[0.82rem] text-[#716B63] leading-relaxed mb-6 text-center">
                  {calc.description}
                </p>
              </div>

              {/* CTA */}
              <div className="text-center pt-2">
                <Link
                  href={calc.href}
                  className="inline-flex items-center gap-1.5 font-sans text-[0.8rem] font-semibold text-[#632D3D] group-hover:gap-2.5 transition-all duration-200"
                >
                  <span>Calculate</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

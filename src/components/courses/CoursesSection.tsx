"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { courses } from "@/data/courses";
import PlanetaryOrbit from "@/components/astrology/PlanetaryOrbit";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="section-spacing bg-[#EEE7D9] relative overflow-hidden"
      aria-labelledby="courses-heading"
    >
      {/* Background Planetary Orbital Trajectories */}
      <div className="absolute right-[-100px] sm:right-[-40px] lg:right-[-10%] top-1/2 -translate-y-1/2 pointer-events-none opacity-20 lg:opacity-10">
        <PlanetaryOrbit size={520} opacity={0.16} rotate={true} speed={180} className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px]" />
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
            COURSES WE OFFER
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
          </p>
          <h2
            id="courses-heading"
            className="section-title"
          >
            Learn the wisdom. Go deeper.
          </h2>
        </motion.div>

        {/* Course cards 3-column grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {courses.map((course) => (
            <motion.article
              key={course.id}
              className="bg-[#FFFDF8] border border-[#D9CFBD] overflow-hidden group hover:border-[#B68A3A] hover:shadow-[0_8px_30px_rgba(182,138,58,0.08)] transition-all duration-300 flex flex-col justify-between"
              variants={cardVariants}
            >
              <div>
                {/* Course image with fallback illustration */}
                <div
                  className="relative overflow-hidden bg-[#E2D6C0]"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Fallback Vedic Illustrated Banner */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#3D261A] via-[#5C3E2D] to-[#2B1B12] text-[#FFFDF8] select-none"
                    aria-hidden="true"
                  >
                    <div className="w-12 h-12 rounded-full border border-[#B68A3A]/50 flex items-center justify-center mb-2">
                      <span className="font-serif text-lg text-[#D4A85A]">✦</span>
                    </div>
                    <p className="font-serif text-sm text-[#FFFDF8]/90 text-center tracking-wide line-clamp-1">
                      {course.title}
                    </p>
                    <p className="font-sans text-[0.6rem] tracking-[0.18em] uppercase text-[#D4A85A] mt-1">
                      Vedic Academy
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7">
                  <h3 className="font-serif text-[1.3rem] font-normal text-[#24211F] mb-3 leading-snug group-hover:text-[#632D3D] transition-colors duration-200">
                    {course.title}
                  </h3>

                  {/* Meta: Lessons & Duration */}
                  <div className="flex items-center gap-4 mb-4 text-[#716B63]">
                    <span className="flex items-center gap-1.5 font-sans text-[0.78rem]">
                      <BookOpen size={13} className="text-[#B68A3A]" />
                      {course.lessons} Lessons
                    </span>
                    <span className="text-[#D9CFBD]">•</span>
                    <span className="flex items-center gap-1.5 font-sans text-[0.78rem]">
                      <Clock size={13} className="text-[#B68A3A]" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Price */}
                  <p className="font-serif text-[1.4rem] font-normal text-[#632D3D] mb-6">
                    {course.price}
                  </p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-7 pb-7 pt-0 border-t border-[#D9CFBD]/60">
                <Link
                  href={course.href}
                  className="inline-flex items-center gap-1.5 font-sans text-[0.8rem] font-semibold text-[#632D3D] group-hover:gap-2.5 transition-all duration-200 mt-4"
                >
                  <span>Explore Course</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Courses Center Button */}
        <div className="text-center">
          <Link
            href="/courses/"
            className="btn-secondary px-8 py-3.5"
          >
            VIEW ALL COURSES
          </Link>
        </div>
      </div>
    </section>
  );
}

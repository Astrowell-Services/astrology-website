"use client";

import Link from "next/link";
import { ArrowRight, UserCheck, GraduationCap, Video } from "lucide-react";

const domains = [
  {
    icon: UserCheck,
    tag: "Individual & Family Guidance",
    title: "Over 10,000 Private Consultations",
    description:
      "For nearly three decades, clients across India, the US, UK, Canada, and Australia have sought Acharya Debdutta's counsel for major career crossroads, marriage timing, business ventures, and health decisions.",
    actionLabel: "Explore Consultations",
    actionHref: "/book-astrology-consultation/",
  },
  {
    icon: GraduationCap,
    tag: "Vedic Academic Mentorship",
    title: "Training Tomorrow's Astrologers",
    description:
      "Believing that sacred Vedic wisdom must be preserved and taught without superstition, Acharya Debdutta conducts structured certification masterclasses covering Vedic Foundations, Kundali Matching, and Lal Kitab.",
    actionLabel: "View Certified Courses",
    actionHref: "/courses/",
  },
  {
    icon: Video,
    tag: "Public Discourse & Research",
    title: "Daily Transits & Video Broadcasts",
    description:
      "Demystifying planetary movements through regular video analyses on YouTube. Analyzing how Gochar transits of Jupiter, Saturn, and Rahu affect each Rashi in contemporary life.",
    actionLabel: "Watch Forecasts",
    actionHref: "/horoscope/",
  },
];

export default function AboutMilestones() {
  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            A Legacy of Service
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            Three Decades of Astrological Mastery
          </h2>
          <p className="font-sans text-[0.88rem] sm:text-[0.93rem] text-[#716B63] mt-3 leading-relaxed">
            From private boardroom consultations to community masterclasses, discover the pillars of
            Acharya Debdutta&apos;s lifelong work.
          </p>
        </div>

        {/* 3 Domain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {domains.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F3EA]/60 border border-[#D9CFBD] p-7 sm:p-8 flex flex-col justify-between hover:border-[#632D3D]/50 hover:bg-[#F7F3EA] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-[0.68rem] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#FFFDF8] border border-[#D9CFBD] text-[#632D3D]">
                      {d.tag}
                    </span>
                    <Icon
                      size={22}
                      className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="font-serif text-2xl text-[#24211F] font-normal mb-3 leading-snug">
                    {d.title}
                  </h3>

                  <p className="font-sans text-[0.87rem] text-[#716B63] leading-relaxed mb-6">
                    {d.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9CFBD]/60">
                  <Link
                    href={d.actionHref}
                    className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider font-semibold text-[#632D3D] group-hover:text-[#B68A3A] transition-colors"
                  >
                    <span>{d.actionLabel}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

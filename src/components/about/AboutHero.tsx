"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Award, Compass, Globe, Users } from "lucide-react";
import { astrologer } from "@/data/astrologer";

export default function AboutHero() {
  return (
    <section className="bg-[#F7F3EA] border-b border-[#D9CFBD] pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-18 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-radial from-[#B68A3A]/6 to-transparent pointer-events-none blur-3xl" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Narrative & Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B68A3A]/40 bg-[#FFFDF8] shadow-xs mb-5">
              <Award size={14} className="text-[#B68A3A]" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-600 text-[#632D3D]">
                Vedic Master &amp; Research Astrologer
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211F] leading-tight sm:leading-snug mb-5">
              Guiding Destinies with Classical Vedic Rigor and{" "}
              <span className="italic text-[#632D3D] font-normal">Empathetic Precision</span>
            </h1>

            {/* Narrative Paragraphs */}
            <p className="font-sans text-[0.95rem] sm:text-base text-[#4A453E] leading-relaxed mb-4">
              With over 28 years of dedicated practice in the classical Parasara and Jaimini
              traditions of Vedic Jyotish, Acharya Debdutta has counseled thousands of seekers,
              professionals, and families worldwide.
            </p>
            <p className="font-sans text-[0.9rem] sm:text-[0.95rem] text-[#716B63] leading-relaxed mb-8">
              Rejecting fatalism and fear-inducing claims, his methodology unites mathematical chart
              casting (D1, D9, D10) with practical, satvik remedies. Every consultation is an honest,
              confidential dialogue designed to restore clarity, confidence, and purpose.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/book-astrology-consultation/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors shadow-sm"
              >
                <Phone size={15} />
                <span>Book a Consultation</span>
              </Link>

              <a
                href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Pranam Acharya Debdutta, I would like to learn more about your consultation services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#632D3D] text-[#632D3D] bg-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#632D3D] hover:text-[#FFFDF8] transition-colors"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-[#D9CFBD]/80">
              <div className="flex items-center gap-2.5">
                <Compass size={20} className="text-[#B68A3A] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#24211F]">
                    {astrologer.stats.experience}
                  </span>
                  <span className="font-sans text-[0.68rem] uppercase tracking-wider text-[#716B63]">
                    Vedic Practice
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Users size={20} className="text-[#B68A3A] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#24211F]">
                    {astrologer.stats.consultations}
                  </span>
                  <span className="font-sans text-[0.68rem] uppercase tracking-wider text-[#716B63]">
                    Readings Done
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe size={20} className="text-[#B68A3A] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#24211F]">
                    {astrologer.stats.countries}
                  </span>
                  <span className="font-sans text-[0.68rem] uppercase tracking-wider text-[#716B63]">
                    Countries Reached
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Award size={20} className="text-[#B68A3A] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#24211F]">
                    {astrologer.stats.rating} / 5.0
                  </span>
                  <span className="font-sans text-[0.68rem] uppercase tracking-wider text-[#716B63]">
                    Client Trust
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Master Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative background border frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#B68A3A]/40 pointer-events-none" />

              {/* Main Portrait Card */}
              <div className="relative bg-[#FFFDF8] border border-[#D9CFBD] p-3 shadow-lg">
                <div className="relative aspect-4/5 overflow-hidden bg-[#24211F]">
                  <Image
                    src="/images/astrologer-sir.jpg"
                    alt="Acharya Debdutta - Master Vedic Astrologer"
                    fill
                    priority
                    className="object-cover object-top hover:scale-102 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Card Caption */}
                <div className="pt-4 pb-2 px-2 text-center">
                  <h2 className="font-serif text-2xl text-[#24211F] font-normal">
                    {astrologer.name}
                  </h2>
                  <p className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-[#B68A3A] font-600 mt-0.5">
                    Classical Jyotish Scholar &amp; Mentor
                  </p>
                  <p className="font-sans text-[0.8rem] text-[#716B63] mt-2 italic">
                    &ldquo;{astrologer.shortBio}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

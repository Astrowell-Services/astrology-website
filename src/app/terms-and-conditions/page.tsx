import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, AlertCircle } from "lucide-react";
import { astrologer } from "@/data/astrologer";

export const metadata: Metadata = {
  title: "Terms & Conditions & Astrological Disclaimer | Acharya Debdutta",
  description:
    "Terms of service, consultation guidelines, and ethical astrological disclaimer for Acharya Debdutta's consultations and educational programs.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      <section className="border-b border-[#D9CFBD] pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 bg-[#FFFDF8]">
        <div className="container-site max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider text-[#632D3D] hover:text-[#B68A3A] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B68A3A]/40 bg-[#F7F3EA] shadow-xs mb-4">
            <FileText size={13} className="text-[#B68A3A]" />
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-600 text-[#632D3D]">
              Ethical Standards &amp; Terms
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211F] mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="font-sans text-xs text-[#716B63]">
            Last updated: September 2026 • Acharya Debdutta Vedic Consultancy
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-site max-w-4xl mx-auto space-y-8 font-sans text-sm sm:text-base text-[#4A453E] leading-relaxed">
          <div className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#24211F] font-normal mb-3">
              1. Astrological Disclaimer &amp; Nature of Guidance
            </h2>
            <p className="text-[#716B63] mb-3">
              Vedic Astrology (Jyotish) is an ancient, observational science based on astronomical planetary
              coordinates and classical interpretive texts (Brihat Parasara Hora Shastra, Jaimini Sutras).
            </p>
            <p className="text-[#716B63]">
              Astrological consultations, reports, and recommendations offered by Acharya Debdutta are intended
              as advisory guidance to assist individuals in making informed personal, spiritual, and career choices.
              They are not intended to replace certified medical, legal, psychological, or certified financial advice.
            </p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#24211F] font-normal mb-3">
              2. Accuracy of Birth Information
            </h2>
            <p className="text-[#716B63]">
              Astrological calculations depend strictly on the precision of the Date, Time, and Place of Birth
              provided by the client. While Acharya Debdutta applies rigorous birth-chart rectification techniques
              when requested, clients acknowledge that inaccurate birth timing naturally alters divisional chart placements.
            </p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#24211F] font-normal mb-3">
              3. Consultation Booking &amp; Rescheduling
            </h2>
            <p className="text-[#716B63] mb-3">
              Telephonic consultations are scheduled according to mutually confirmed IST (Indian Standard Time)
              time-slots. If you need to reschedule due to an emergency, please notify our administrative team at
              least 4 hours in advance via WhatsApp.
            </p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#24211F] font-normal mb-3">
              4. Vedic Remedies &amp; Free Will
            </h2>
            <p className="text-[#716B63]">
              Acharya Debdutta strongly upholds the Vedic doctrine of Purushartha (conscious human effort).
              Planetary remedies (such as mantras, satvik lifestyle modifications, and gemstones) are supportive
              measures to harmonize energetic vibrations. Results naturally harmonize with an individual&apos;s
              own ethical karma and focused diligence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import { astrologer } from "@/data/astrologer";

export const metadata: Metadata = {
  title: "Privacy Policy | Acharya Debdutta - Vedic Astrology",
  description:
    "Privacy Policy for Acharya Debdutta's Vedic Astrology services. How we collect, safeguard, and maintain 100% confidentiality of your birth chart and personal consultation details.",
};

export default function PrivacyPolicyPage() {
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
            <Lock size={13} className="text-[#B68A3A]" />
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-600 text-[#632D3D]">
              Client Data Protection
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211F] mb-3">
            Privacy Policy
          </h1>
          <p className="font-sans text-xs text-[#716B63]">
            Last updated: September 2026 • Effective for all global consultations
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-site max-w-4xl mx-auto space-y-8 font-sans text-sm sm:text-base text-[#4A453E] leading-relaxed">
          <div className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#24211F] font-normal mb-3">
              1. Our Unconditional Confidentiality Pledge
            </h2>
            <p className="text-[#716B63] mb-3">
              At Acharya Debdutta&apos;s consultancy, client confidentiality is sacred. When you provide
              your birth details (Date of Birth, Time of Birth, Place of Birth), family history, or personal
              questions, they are utilized strictly for casting and analyzing your Vedic astrological chart.
            </p>
            <p className="text-[#716B63]">
              We do not sell, rent, monetize, or publicly share your personal identity, charts, or consultation
              notes with any third-party marketing network or data broker.
            </p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#24211F] font-normal mb-3">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[#716B63]">
              <li>
                <strong>Astrological Coordinates:</strong> Full Name, Date of Birth, Exact Time of Birth, Place of Birth.
              </li>
              <li>
                <strong>Contact Information:</strong> WhatsApp phone number and email address for sending PDF dossiers, appointment reminders, and live video stream links.
              </li>
              <li>
                <strong>Sankalpa &amp; Puja Details:</strong> Gotra and residential address strictly when requested for home delivery of consecrated Prasad.
              </li>
            </ul>
          </div>

          <div className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#24211F] font-normal mb-3">
              3. Secure Communications
            </h2>
            <p className="text-[#716B63] mb-3">
              All electronic communications (WhatsApp messaging, phone calls, and email dossiers) are handled
              through secure, authenticated channels directly by Acharya Debdutta and his verified administrative team.
            </p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#24211F] font-normal mb-3">
              4. Contact Us Regarding Your Data
            </h2>
            <p className="text-[#716B63]">
              If you wish to update your contact details or request the deletion of your historical birth chart
              records from our private archives, reach out directly at{" "}
              <a href={`mailto:${astrologer.contact.email}`} className="text-[#632D3D] underline">
                {astrologer.contact.email}
              </a>{" "}
              or via WhatsApp at{" "}
              <a
                href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                className="text-[#632D3D] underline"
              >
                {astrologer.contact.whatsapp}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Camera, PlaySquare, Share2, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { astrologer } from "@/data/astrologer";
import { AstrologyDivider } from "@/components/astrology/CelestialIcons";
import BrandLogoMark from "@/components/astrology/BrandLogoMark";

const quickLinks = [
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/book-astrology-consultation/" },
  { label: "Reports", href: "/report/" },
  { label: "Courses", href: "/courses/" },
  { label: "Blogs", href: "/blogs/" },
];

const resources = [
  { label: "Horoscope", href: "/horoscope/" },
  { label: "Free Calculators", href: "/free-calculator/" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/book-astrology-consultation/" },
];

const services = [
  { label: "Name Correction Services", href: "/name-correction-services/" },
  { label: "Online Puja Services", href: "/online-puja-services/" },
  { label: "Call Consultant", href: "/book-astrology-consultation/" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#EEE7D9] border-t border-[#D9CFBD]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer grid */}
      <div className="container-site py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4" aria-label="Acharya Debdutta">
              <BrandLogoMark size={42} />
              <div className="flex flex-col">
                <p className="font-serif text-2xl text-[#24211F]">{astrologer.name}</p>
                <p className="font-sans text-[0.58rem] tracking-[0.22em] uppercase text-[#B68A3A] mt-0.5 font-600">
                  {astrologer.title}
                </p>
              </div>
            </Link>
            <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed max-w-xs mb-6">
              {astrologer.shortBio} Personalised Vedic astrology guidance delivered with precision, empathy and wisdom.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Camera size={16} />, href: astrologer.social.instagram, label: "Instagram" },
                { icon: <PlaySquare size={16} />, href: astrologer.social.youtube, label: "YouTube" },
                { icon: <Share2 size={16} />, href: astrologer.social.facebook, label: "Facebook" },
                { icon: <MessageCircle size={16} />, href: astrologer.social.whatsapp, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-8 h-8 border border-[#D9CFBD] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-[0.65rem] font-600 tracking-[0.2em] uppercase text-[#B68A3A] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[0.85rem] text-[#716B63] hover:text-[#632D3D] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-sans text-[0.65rem] font-600 tracking-[0.2em] uppercase text-[#B68A3A] mb-4 mt-7">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[0.85rem] text-[#716B63] hover:text-[#632D3D] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-[0.65rem] font-600 tracking-[0.2em] uppercase text-[#B68A3A] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[0.85rem] text-[#716B63] hover:text-[#632D3D] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-[0.65rem] font-600 tracking-[0.2em] uppercase text-[#B68A3A] mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#B68A3A] mt-0.5 shrink-0" />
                <a
                  href={`tel:${astrologer.contact.phone}`}
                  className="font-sans text-[0.85rem] text-[#716B63] hover:text-[#632D3D] transition-colors"
                >
                  {astrologer.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#B68A3A] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${astrologer.contact.email}`}
                  className="font-sans text-[0.85rem] text-[#716B63] hover:text-[#632D3D] transition-colors break-all"
                >
                  {astrologer.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#B68A3A] mt-0.5 shrink-0" />
                <span className="font-sans text-[0.85rem] text-[#716B63]">
                  {astrologer.contact.location}
                </span>
              </li>
            </ul>

            {/* YouTube CTA */}
            <div className="mt-7 p-4 bg-[#FFFDF8] border border-[#D9CFBD]">
              <p className="font-sans text-[0.7rem] tracking-[0.15em] uppercase text-[#B68A3A] mb-1">
                YouTube Channel
              </p>
              <p className="font-sans text-[0.8rem] text-[#716B63] mb-3">
                Subscribe for weekly astrology insights.
              </p>
              <a
                href={astrologer.social.youtube}
                className="flex items-center gap-2 font-sans text-[0.75rem] font-600 text-[#632D3D] hover:text-[#4A1F2B] transition-colors"
              >
                <PlaySquare size={14} />
                Visit Channel
              </a>
            </div>
          </div>
        </div>
      </div>

      <AstrologyDivider className="container-site" />

      {/* Bottom bar */}
      <div className="container-site py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[0.75rem] text-[#716B63]">
            &copy; 2026 {astrologer.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="font-sans text-[0.75rem] text-[#716B63] hover:text-[#632D3D] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-sans text-[0.75rem] text-[#716B63] hover:text-[#632D3D] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


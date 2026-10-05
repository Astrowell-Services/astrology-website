"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { astrologer } from "@/data/astrologer";
import BrandLogoMark from "@/components/astrology/BrandLogoMark";

const primaryNav = [
  { label: "Call Consultant", href: "/book-astrology-consultation/" },
  { label: "Courses", href: "/courses/" },
  { label: "Reports", href: "/report/" },
  { label: "Horoscope", href: "/horoscope/" },
  { label: "Free Calculators", href: "/free-calculator/" },
  { label: "Blogs", href: "/blogs/" },
  { label: "About Us", href: "/about-us/" },
];

const moreNav = [
  { label: "Name Correction Services", href: "/name-correction-services/" },
  { label: "Online Puja Services", href: "/online-puja-services/" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const tabletDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const insideDesktop = desktopDropdownRef.current?.contains(target);
      const insideTablet = tabletDropdownRef.current?.contains(target);
      if (!insideDesktop && !insideTablet) {
        setMoreOpen(false);
      }
    };

    if (moreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreOpen]);

  // Close dropdown on route transition
  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-[#FFFDF8]/95 backdrop-blur-sm shadow-[0_1px_0_#D9CFBD]"
            : "bg-[#FFFDF8]/90 backdrop-blur-sm"
          }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-w-0 pr-2"
              aria-label="Acharya Debdutta — Vedic Astrology"
            >
              <BrandLogoMark size={34} className="sm:w-[38px] sm:h-[38px] transition-transform duration-300 group-hover:scale-105 shrink-0" />
              <div className="flex flex-col leading-none truncate">
                <span
                  className="font-serif text-[1.05rem] sm:text-lg lg:text-xl font-normal tracking-wide text-[#24211F] truncate"
                >
                  {astrologer.name}
                </span>
                <span
                  className="font-sans text-[0.48rem] sm:text-[0.52rem] tracking-[0.2em] uppercase mt-0.5 sm:mt-1 text-[#B68A3A] font-semibold"
                >
                  {astrologer.title}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (XL screens) */}
            <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 font-sans text-[0.8rem] font-500 tracking-wide transition-colors duration-200 whitespace-nowrap ${pathname === item.href || pathname.startsWith(item.href)
                      ? "text-[#632D3D]"
                      : "text-[#24211F] hover:text-[#632D3D]"
                    }`}
                  style={{ fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative" ref={desktopDropdownRef}>
                <button
                  type="button"
                  onClick={() => setMoreOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-3 py-2 font-sans text-[0.8rem] font-500 text-[#24211F] hover:text-[#632D3D] transition-colors duration-200 cursor-pointer"
                  style={{ fontWeight: 500 }}
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                >
                  More
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {moreOpen && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-[#FFFDF8] border border-[#D9CFBD] shadow-lg z-50">
                    {moreNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMoreOpen(false)}
                        className="block px-5 py-3 font-sans text-[0.8rem] text-[#24211F] hover:text-[#632D3D] hover:bg-[#F7F3EA] transition-colors duration-150 border-b border-[#D9CFBD] last:border-b-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Tablet Navigation (LG screens) */}
            <nav className="hidden lg:flex xl:hidden items-center gap-0.5" aria-label="Main navigation">
              {primaryNav.slice(0, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2.5 py-2 font-sans text-[0.75rem] font-500 tracking-wide transition-colors duration-200 whitespace-nowrap ${pathname === item.href
                      ? "text-[#632D3D]"
                      : "text-[#24211F] hover:text-[#632D3D]"
                    }`}
                  style={{ fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              ))}

              {/* More dropdown for tablet */}
              <div className="relative" ref={tabletDropdownRef}>
                <button
                  type="button"
                  onClick={() => setMoreOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-2.5 py-2 font-sans text-[0.75rem] text-[#24211F] hover:text-[#632D3D] transition-colors duration-200 cursor-pointer"
                  style={{ fontWeight: 500 }}
                  aria-expanded={moreOpen}
                >
                  More
                  <ChevronDown size={12} className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
                </button>

                {moreOpen && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-[#FFFDF8] border border-[#D9CFBD] shadow-lg z-50">
                    {[...primaryNav.slice(5), ...moreNav].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMoreOpen(false)}
                        className="block px-5 py-3 font-sans text-[0.8rem] text-[#24211F] hover:text-[#632D3D] hover:bg-[#F7F3EA] transition-colors border-b border-[#D9CFBD] last:border-b-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3 shrink-0">
              {/* CTA button — strictly hidden on screens smaller than lg (1024px) */}
              <Link
                href="/book-astrology-consultation/"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#632D3D] hover:bg-[#4A1F2B] text-[#FFFDF8] font-sans text-[0.75rem] font-semibold tracking-wider uppercase border border-[#632D3D] transition-colors shrink-0 cursor-pointer"
              >
                Book a Consultation
              </Link>

              {/* Hamburger button — visible on mobile and tablet (< 1024px) */}
              <button
                type="button"
                className="lg:hidden flex items-center justify-center w-10 h-10 text-[#24211F] hover:text-[#632D3D] transition-colors shrink-0"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so content doesn't go under fixed header */}
      <div className="h-16 lg:h-18" aria-hidden="true" />

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}


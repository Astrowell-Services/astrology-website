"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const menuGroups = [
  {
    label: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us/" },
      { label: "Call Consultant", href: "/book-astrology-consultation/" },
    ],
  },
  {
    label: "Astrology",
    links: [
      { label: "Reports", href: "/report/" },
      { label: "Horoscope", href: "/horoscope/" },
      { label: "Free Calculators", href: "/free-calculator/" },
    ],
  },
  {
    label: "Services",
    links: [
      { label: "Name Correction Services", href: "/name-correction-services/" },
      { label: "Online Puja Services", href: "/online-puja-services/" },
      { label: "Courses", href: "/courses/" },
    ],
  },
  {
    label: "Content",
    links: [{ label: "Blogs", href: "/blogs/" }],
  },
];

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-[#24211F]/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[70] w-[min(340px,90vw)] bg-[#FFFDF8] flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#D9CFBD]">
              <div>
                <p className="font-serif text-lg text-[#24211F]">Acharya Debdutta</p>
                <p className="font-sans text-[0.6rem] tracking-[0.18em] uppercase text-[#B68A3A] mt-0.5">
                  Vedic Astrologer
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-9 h-9 text-[#716B63] hover:text-[#632D3D] transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable links area */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {menuGroups.map((group) => (
                <div key={group.label} className="mb-6">
                  <p className="font-sans text-[0.6rem] font-600 tracking-[0.2em] uppercase text-[#B68A3A] mb-3">
                    {group.label}
                  </p>
                  <ul className="space-y-0.5">
                    {group.links.map((link) => {
                      const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className={`block py-2.5 px-3 font-sans text-[0.9rem] transition-colors duration-150 ${
                              active
                                ? "text-[#632D3D] bg-[#F7F3EA] font-600"
                                : "text-[#24211F] hover:text-[#632D3D] hover:bg-[#F7F3EA]"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA Footer */}
            <div className="px-6 py-5 border-t border-[#D9CFBD]">
              <Link
                href="/book-astrology-consultation/"
                onClick={onClose}
                className="btn-primary w-full justify-center text-[0.8rem]"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


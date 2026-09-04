export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "astrological-reports",
    number: "01",
    title: "Astrological Reports",
    description:
      "Comprehensive hand-crafted Vedic reports covering career prospects, financial fortune, Kundli doshas, and life roadmap.",
    href: "/report/",
    icon: "reports",
  },
  {
    id: "astrology-courses",
    number: "02",
    title: "Astrology Courses",
    description:
      "Structured certification masterclasses from Vedic foundations to advanced Nakshatra and Prashna techniques.",
    href: "/courses/",
    icon: "courses",
  },
  {
    id: "call-consultation",
    number: "03",
    title: "Call Consultation Services",
    description:
      "Direct 1-on-1 confidential phone or video consultations with Acharya Debdutta for personalized guidance.",
    href: "/book-astrology-consultation/",
    icon: "phone",
  },
  {
    id: "astrology-products",
    number: "04",
    title: "Astrology Products",
    description:
      "Certified natural gemstones, energized Rudraksha beads, and sacred Vedic Yantras customized to your planetary chart.",
    href: "/book-astrology-consultation/",
    icon: "gemstone",
  },
  {
    id: "custom-horoscope",
    number: "05",
    title: "Custom Horoscope",
    description:
      "Deep personal Varshphal and planetary transit forecasts analyzed against your specific birth chart coordinates.",
    href: "/horoscope/",
    icon: "horoscope",
  },
  {
    id: "free-calculators",
    number: "06",
    title: "Free Calculators",
    description:
      "Instant Vedic birth chart calculation, Shani Sade Sati timeline analysis, and planetary dasha calculators.",
    href: "/free-calculator/",
    icon: "calculators",
  },
  {
    id: "name-correction",
    number: "07",
    title: "Name Correction Services",
    description:
      "Vedic numerology and phonetic vibration correction for personal names, newborn naming, and brand success.",
    href: "/name-correction-services/",
    icon: "name",
  },
  {
    id: "online-puja",
    number: "08",
    title: "Online Puja Services",
    description:
      "Authentic Vedic rituals, Navagraha Shanti pujas, and planetary Hawans performed with live video access.",
    href: "/online-puja-services/",
    icon: "puja",
  },
  {
    id: "collaboration",
    number: "09",
    title: "Collaboration With Us",
    description:
      "Partnerships for corporate astrology workshops, media events, institutional lectures, and research collaborations.",
    href: "/about-us/",
    icon: "collab",
  },
];

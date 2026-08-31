export interface Calculator {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const calculators: Calculator[] = [
  {
    id: "kundali-analysis",
    title: "Kundali Analysis",
    description:
      "Analyse your birth chart instantly. Understand your planetary positions, houses and life patterns.",
    href: "/free-calculator/",
    icon: "kundali",
  },
  {
    id: "rahu-ketu",
    title: "Rahu & Ketu Calculator",
    description:
      "Understand the shadow planets\u2014Rahu and Ketu\u2014and their role in your karmic journey.",
    href: "/free-calculator/",
    icon: "nodes",
  },
  {
    id: "lal-kitab",
    title: "Lal Kitab Calculator",
    description:
      "Insights based on Lal Kitab principles, a unique branch of Vedic astrological tradition.",
    href: "/free-calculator/",
    icon: "book",
  },
  {
    id: "name-analysis",
    title: "Name Analysis",
    description:
      "Find the energy and meaning of your name through Vedic numerology and sound vibration.",
    href: "/free-calculator/",
    icon: "alphabet",
  },
];

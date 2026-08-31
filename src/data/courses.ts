export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  price: string;
  href: string;
  curriculum?: string[];
}

export const courses: Course[] = [
  {
    id: "vedic-astrology-foundations",
    title: "Vedic Astrology Foundations",
    description:
      "Build a solid understanding of Vedic astrology from the ground up. Planets, signs, houses and basic chart reading.",
    image: "/images/course-vedic-foundations.jpg",
    level: "Beginner",
    lessons: 24,
    duration: "8 hours",
    price: "\u20b94,999",
    href: "/courses/",
    curriculum: [
      "Introduction to Vedic Astrology",
      "The Nine Planets",
      "12 Houses and Their Significance",
      "Signs and Their Nature",
      "Reading a Birth Chart",
    ],
  },
  {
    id: "advanced-kundali-analysis",
    title: "Advanced Kundali Analysis",
    description:
      "Deep dive into Kundali interpretation\u2014divisional charts, yogas, planetary combinations and predictive techniques.",
    image: "/images/course-kundali-analysis.jpg",
    level: "Intermediate",
    lessons: 18,
    duration: "6 hours",
    price: "\u20b96,999",
    href: "/courses/",
    curriculum: [
      "Divisional Charts (Navamsa, Dashamsa)",
      "Important Yogas",
      "Dasha Systems",
      "Transit Analysis",
      "Case Studies",
    ],
  },
  {
    id: "predictive-astrology-masterclass",
    title: "Predictive Astrology Masterclass",
    description:
      "Master the art of timing with Vimshottari Dasha, transits, Ashtakavarga and event prediction.",
    image: "/images/course-predictive.jpg",
    level: "Advanced",
    lessons: 20,
    duration: "7 hours",
    price: "\u20b95,499",
    href: "/courses/",
    curriculum: [
      "Vimshottari Dasha in Depth",
      "Transits and Their Impact",
      "Ashtakavarga System",
      "Annual Horoscope",
      "Advanced Prediction Techniques",
    ],
  },
];

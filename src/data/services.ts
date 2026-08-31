export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  icon: string; // SVG path reference
}

export const services: Service[] = [
  {
    id: "career-finance",
    number: "01",
    title: "Career & Finance",
    description:
      "Clarity on your career path, opportunities and financial growth through a precise Kundali reading.",
    href: "/book-astrology-consultation/",
    icon: "saturn",
  },
  {
    id: "relationships",
    number: "02",
    title: "Relationships",
    description:
      "Understand relationship patterns and build stronger, more conscious connections.",
    href: "/book-astrology-consultation/",
    icon: "venus",
  },
  {
    id: "marriage-compatibility",
    number: "03",
    title: "Marriage & Compatibility",
    description:
      "Find harmony and lifelong compatibility through Kundali matching and Ashtkoot analysis.",
    href: "/book-astrology-consultation/",
    icon: "moon",
  },
  {
    id: "life-guidance",
    number: "04",
    title: "Life Guidance",
    description:
      "Navigate life\u2019s important decisions with wisdom and clarity using Vedic Dasha and transit analysis.",
    href: "/book-astrology-consultation/",
    icon: "sun",
  },
];

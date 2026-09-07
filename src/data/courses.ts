export interface Course {
  id: string;
  title: string;
  seoTag?: string;
  duration: string;
  level: string;
  language?: string;
  description: string;
  curriculum: string[];
  targetAudience?: string;
  outcome?: string;
  bonus?: string;
  lessons?: number;
  image: string;
  price?: string;
  href: string;
}

export const detailedCourses: Course[] = [
  {
    id: "vedic-astrology-foundation",
    title: "Vedic Astrology Foundation",
    seoTag: "Horoscope Matching in Kolkata",
    duration: "6 Weeks",
    level: "Beginner",
    language: "Hindi + English",
    description:
      "Start your astrology journey here. Learn the fundamentals of planets, signs, houses, and how cosmic energies influence human life.",
    curriculum: [
      "Introduction to Vedic Astrology (Jyotish) & Cosmic Philosophy",
      "Understanding the 9 Planets (Navagraha) & Planetary Nature",
      "12 Zodiac Signs (Rashis) & Their Hidden Significance",
      "The 12 Houses (Bhavas) & Life Domains",
      "Nakshatras (Lunar Mansions) & Role in Chart Reading",
      "Chart Formats (North Indian vs. South Indian Styles)",
      "Basic Interpretation & Planetary Combination Techniques",
      "Live Horoscope Practice & Interactive Q&A Sessions",
    ],
    targetAudience:
      "Beginners, spiritual enthusiasts, or anyone interested in astrology for deep self-discovery.",
    lessons: 24,
    image: "/images/course-vedic-foundations.jpg",
    price: "₹4,999",
    href: "/courses/",
  },
  {
    id: "kundali-matching-vivah-milan",
    title: "Kundali Matching (Vivah Milan) Course",
    seoTag: "Kundli and Horoscope Matching in Kolkata",
    duration: "3 Weeks",
    level: "Beginner to Pro",
    language: "Hindi + English",
    description:
      "Specialized professional training in marital compatibility and Kundali Milan, ideal for practicing astrologers, matchmakers, and marital counselors.",
    curriculum: [
      "The 36 Guna Ashtakoota Matching System & Weightage",
      "Mangal Dosha (Kuja Dosha) Analysis & Effective Vedic Remedies",
      "Nadi Dosha, Bhakoot Dosha & Astrological Exception Rules",
      "Gana, Rashi, Yoni, and Graha Maitri Analysis",
      "Shubh Marriage Muhurat & Spiritual Timing Aspects",
      "In-depth Chart Analysis for Delayed or Challenged Marriages",
    ],
    outcome:
      "Confidently guide couples and families with accurate, compassionate compatibility reports and remedial timing.",
    lessons: 18,
    image: "/images/course-kundali-analysis.jpg",
    price: "₹5,499",
    href: "/courses/",
  },
  {
    id: "lal-kitab-karma-remedies",
    title: "Lal Kitab Course (Secrets of Karma & Remedies)",
    seoTag: "Best astrologer for online consultation",
    duration: "5 Weeks",
    level: "All Levels",
    language: "Hindi + English",
    description:
      "Explore the profound world of Lal Kitab — a practical, intuitive, and highly revered branch of astrology focused on fast-acting karmic remedies.",
    curriculum: [
      "Introduction to Lal Kitab Principles & Karmic Debt Theories",
      "Artificial & Sleeping Planetary Placements (Soye Hue Grah)",
      "Lal Kitab Remedies: Essential Do's and Critical Don'ts",
      "Effects of Planetary Combinations across the 12 Houses",
      "Real-world Case Studies, Remedial Timing & Precautions",
      "Common Remedial Misconceptions, Pitfalls & Warnings",
    ],
    targetAudience:
      "Astrology learners interested in fast-acting, practical, and karma-balancing astrological remedies.",
    lessons: 20,
    image: "/images/course-predictive.jpg",
    price: "₹6,499",
    href: "/courses/",
  },
  {
    id: "numerology-name-correction",
    title: "Numerology & Name Correction Course",
    seoTag: "Name Correction Astrology Kolkata",
    duration: "4 Weeks",
    level: "Beginner to Intermediate",
    language: "Hindi + English",
    description:
      "Master the mystical science of numbers and vibrational resonance. Ideal for individuals interested in personal name correction, auspicious business naming, and lucky frequency tuning.",
    curriculum: [
      "Core Foundations: Birth Number (Mulank) & Destiny Number (Bhagyank)",
      "Name Numerology: Chaldean & Pythagorean Calculations",
      "Auspicious Personal Names, Brand Naming & Commercial Titles",
      "Signature Vibration Tuning & Remedial Handwriting Alignment",
      "Relationship & Business Partnership Compatibility through Numbers",
      "Master Numbers, Karmic Debt Numbers (13, 14, 16, 19) & Year Cycles",
    ],
    bonus: "Includes comprehensive practical calculation worksheets for real-time analysis.",
    lessons: 16,
    image: "/images/course-vedic-foundations.jpg",
    price: "₹4,499",
    href: "/courses/",
  },
];

// Legacy list for homepage compatibility
export const courses = detailedCourses;

export interface CourseTestimonial {
  id: string;
  name: string;
  city: string;
  courseTitle: string;
  rating: number;
  review: string;
  initials: string;
  badge?: string;
}

export const courseTestimonials: CourseTestimonial[] = [
  {
    id: "ct-1",
    name: "Dr. Ananya Mukherjee",
    city: "Kolkata",
    courseTitle: "Vedic Astrology Foundation",
    rating: 5,
    review:
      "Achariya Debdutta’s approach is pure science and logic. He demystified Bhavas and Nakshatras in a way that gave me clarity not just about charts, but about life and karma. Highly recommended for every seeker!",
    initials: "AM",
    badge: "Verified Student",
  },
  {
    id: "ct-2",
    name: "Rajesh K. Sharma",
    city: "Mumbai",
    courseTitle: "Kundali Matching (Vivah Milan)",
    rating: 5,
    review:
      "The Vivah Milan course is extraordinarily detailed. Learning the exceptions to Nadi and Bhakoot Dosha removed so many misconceptions I had. The live chart practice was invaluable.",
    initials: "RS",
    badge: "Practicing Astrologer",
  },
  {
    id: "ct-3",
    name: "Pooja Sengupta",
    city: "Bangalore",
    courseTitle: "Numerology & Name Correction",
    rating: 5,
    review:
      "Learning Chaldean numerology and signature tuning with Achariya Ji helped me correct my brand name and personal signature. The practical worksheets provided made everything crystal clear.",
    initials: "PS",
    badge: "Verified Student",
  },
  {
    id: "ct-4",
    name: "Vikramaditya Bose",
    city: "Delhi NCR",
    courseTitle: "Lal Kitab Course",
    rating: 5,
    review:
      "Lal Kitab was always a mystery to me until I took this course. The do’s and don’ts of remedies were explained with such karmic depth and responsibility. Exceptional mentorship.",
    initials: "VB",
    badge: "Verified Student",
  },
];

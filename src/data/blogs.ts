export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: "Planetary Transits" | "Vedic Remedies" | "Kundali & Marriage" | "Numerology" | "Spiritual Living";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  thumbnail: string;
  tags: string[];
  featured?: boolean;
}

export const blogCategories = [
  "All Articles",
  "Planetary Transits",
  "Vedic Remedies",
  "Kundali & Marriage",
  "Numerology",
  "Spiritual Living",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-shani-sade-sati-myths-remedies",
    title: "Understanding Shani Sade Sati: Myths, Realities, and Classical Remedies",
    excerpt:
      "Why the seven-and-a-half-year transit of Saturn is not a curse of doom, but a profound cosmic crucible for maturity, resilience, and karmic realignment.",
    content: [
      "For centuries, few astrological phrases have triggered as much unwarranted anxiety as Shani Sade Sati. The moment individuals hear that Saturn is transiting adjacent to their natal Moon, panic sets in. Astrological folklore has unfortunately painted this period as one of unending misery, financial ruin, and personal despair.",
      "However, in the classical teachings of Sage Parasara and the foundational tenets of Vedic Jyotish, Saturn (Shani Bhagwan) is revered as the Dharmaraja and the ultimate cosmic dispenser of justice (Nyayadhikari). Saturn does not punish out of spite; it removes delusions, dissolves ungrounded pride, and burns away karmic lethargy.",
      "During the three phases of Sade Sati—the rising phase (12th from Moon), the peak phase (over the natal Moon), and the setting phase (2nd from Moon)—individuals are pushed to confront unresolved issues. If approached with disciplined effort, truthfulness, and humility, Sade Sati often becomes the very crucible that builds enduring wealth, institutional authority, and inner stillness.",
      "Satvik remedies for Sade Sati do not involve exorbitantly expensive rituals. Daily recitation of the Hanuman Chalisa or Dasharatha Shani Stotram, serving the elderly or disabled on Saturdays, and cultivating unconditional patience are the most effective remedies prescribed by tradition.",
    ],
    category: "Planetary Transits",
    readTime: "6 min read",
    publishedAt: "September 24, 2026",
    author: {
      name: "Acharya Debdutta",
      role: "Vedic Astrologer",
      image: "/images/sir1.jpeg",
    },
    thumbnail: "/images/sir1.jpeg",
    tags: ["Saturn", "Sade Sati", "Transits", "Remedies", "Vedic Wisdom"],
    featured: true,
  },
  {
    slug: "navamsha-d9-chart-marriage-longevity",
    title: "The Navamsha (D9) Chart: Unlocking Marital Harmony and Destiny",
    excerpt:
      "Why judging a relationship solely by the Rashi (D1) chart is incomplete. Discover how the 9th divisional harmonic reveals your true partner and second half of life.",
    content: [
      "In traditional Hindu astrology, the Rashi chart (D1) is often likened to the tree, while the Navamsha chart (D9) represents the ripe fruit. The D1 chart displays the physical manifestations and initial conditions of life, but the Navamsha reveals the deeper spiritual strength and endurance of every planet.",
      "When evaluating marriage and partnerships, looking only at the 7th house of the D1 chart gives an incomplete picture. An afflicted 7th lord in the birth chart may actually be exalted or fortified in the Navamsha, indicating that initial romantic hurdles will mature into a rock-solid, loving lifelong union.",
      "Furthermore, the Navamsha acts as the mirror of the soul's inner trajectory (Dharma). Post the age of 28 to 32, the planetary strengths in the D9 chart begin to dominate an individual's psychological demeanor, making Navamsha analysis essential for long-term compatibility.",
    ],
    category: "Kundali & Marriage",
    readTime: "5 min read",
    publishedAt: "September 18, 2026",
    author: {
      name: "Acharya Debdutta",
      role: "Vedic Astrologer",
      image: "/images/sir1.jpeg",
    },
    thumbnail: "/images/sir1.jpeg",
    tags: ["Navamsha", "Kundali Milan", "Marriage", "D9 Chart", "Compatibility"],
    featured: false,
  },
  {
    slug: "science-of-gemstones-how-to-avoid-counterproductive-stones",
    title: "The Science of Gemstones: How to Avoid Counterproductive Stones",
    excerpt:
      "Wearing the gemstone of a functional malefic planet can trigger chronic anxiety, digestive issues, and career disruption. Learn the precise calculations behind Jyotish gem selection.",
    content: [
      "Natural gemstones are powerful crystalline prisms capable of refracting and magnifying planetary electromagnetic frequencies directly into the human aura. However, in popular culture, gemstones are often treated like good-luck charms or casual jewelry without understanding their planetary physics.",
      "A stone is never selected simply based on which planet is 'weak' or your birth month. If a planet is a functional malefic for your Lagna (for instance, Mars for a Gemini Ascendant or Jupiter for a Taurus Ascendant), wearing its gemstone will aggressively amplify its malefic potential, inviting accidents, legal issues, or emotional turmoil.",
      "Acharya Debdutta stresses that only functional benefic lords—primarily the lords of the 1st, 5th, and 9th houses (Trikona lords)—should be considered for gemstone enhancement, accompanied by verified metal compatibility and an auspicious consecration (Pran Pratishtha) Muhurat.",
    ],
    category: "Vedic Remedies",
    readTime: "7 min read",
    publishedAt: "September 12, 2026",
    author: {
      name: "Acharya Debdutta",
      role: "Vedic Astrologer",
      image: "/images/sir1.jpeg",
    },
    thumbnail: "/images/sir1.jpeg",
    tags: ["Gemstones", "Remedies", "Planetary Energies", "Ratna Shastra"],
    featured: false,
  },
  {
    slug: "jupiter-guru-transits-divine-grace-timing",
    title: "Jupiter's Auspicious Transits: Navigating Windows of Grace and Fortune",
    excerpt:
      "Guru's divine gaze (Drishti) possesses the sacred power to neutralize hundreds of chart doshas. How to align your career and family decisions with Jupiterian cycles.",
    content: [
      "In classical Vedic astrology, Brihaspati (Jupiter) is the Devaguru—the supreme karaka for wisdom, progeny, higher knowledge, and divine benevolence. While other planetary transits test and forge our endurance, Jupiter’s transits open windows of grace, financial abundance, and spiritual expansion.",
      "A cornerstone of transit (Gochar) interpretation is the 5th, 7th, and 9th special aspects (Drishti) of Jupiter. Wherever Jupiter casts its radiant glance, it calms turbulence, reconciles strained family ties, and inspires visionary thinking.",
      "By identifying the exact months during which Jupiter transits your 1st, 5th, 9th, or 11th houses, you can plan significant milestones such as launching new commercial enterprises, solemnizing marriages, or investing in long-term wealth assets.",
    ],
    category: "Planetary Transits",
    readTime: "5 min read",
    publishedAt: "September 05, 2026",
    author: {
      name: "Acharya Debdutta",
      role: "Vedic Astrologer",
      image: "/images/sir1.jpeg",
    },
    thumbnail: "/images/sir1.jpeg",
    tags: ["Jupiter", "Brihaspati", "Gochar", "Career", "Transits"],
    featured: false,
  },
  {
    slug: "power-of-sound-numerology-name-tuning",
    title: "The Power of Sound & Numerology: How Name Tuning Alters Vibrations",
    excerpt:
      "Discover how Chaldean and Pythagorean numerology harmonize phonetic sound frequencies with your birth day number and ruling planetary governor.",
    content: [
      "Every time your name is spoken, heard, or signed, it releases an acoustic frequency that reverberates across your bio-magnetic field. Ancient Vedic rishis recognized this intimately through the sacred science of Nama Samskara (naming ceremonies mapped to birth Nakshatra syllables).",
      "In modern times, many individuals carry names whose compound numerical sum conflicts violently with their psychic (Mulank) or destiny (Bhagyank) numbers. A person ruled by the Sun (Number 1) carrying a name vibrating to Saturn (Number 8) frequently battles unexplained resistance, legal delays, and self-doubt.",
      "Through subtle vowel elongation or letter calibration—without requiring legal name overhauls in everyday conversation—the energetic polarity of your name can be aligned with wealth, respect, and organic personal magnetism.",
    ],
    category: "Numerology",
    readTime: "6 min read",
    publishedAt: "August 28, 2026",
    author: {
      name: "Acharya Debdutta",
      role: "Vedic Astrologer",
      image: "/images/sir1.jpeg",
    },
    thumbnail: "/images/sir1.jpeg",
    tags: ["Numerology", "Name Correction", "Chaldean", "Vibrations"],
    featured: false,
  },
  {
    slug: "lal-kitab-remedies-simple-satvik-modern-life",
    title: "Lal Kitab Remedies for the Modern Era: Simple, Satvik, and Effective",
    excerpt:
      "Practical remedies using everyday household elements, charity, and behavioral adjustments to soothe afflicted planetary energies without expensive rituals.",
    content: [
      "Lal Kitab occupies a distinct and venerated space in Indian astrological science. Unlike elaborate temple Hawans that require immense time and financial resources, Lal Kitab emphasizes simple, ethical, and behavior-driven remedial actions.",
      "The philosophy rests on the principle of planetary transference. If a malefic planet is placed in a sensitive house, its energy can be channeled or pacified through specific symbolic donations, natural elements (water, copper, silver, earth), or caring for animals like cows, dogs, and birds.",
      "Most importantly, Lal Kitab teaches that character is destiny. Honoring one's parents, maintaining clean thresholds at home, refraining from deceit, and feeding the underprivileged often provide deeper and more immediate relief than any external talisman.",
    ],
    category: "Vedic Remedies",
    readTime: "5 min read",
    publishedAt: "August 20, 2026",
    author: {
      name: "Acharya Debdutta",
      role: "Vedic Astrologer",
      image: "/images/sir1.jpeg",
    },
    thumbnail: "/images/sir1.jpeg",
    tags: ["Lal Kitab", "Satvik Remedies", "Karma", "Daily Living"],
    featured: false,
  },
];

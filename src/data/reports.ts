export interface AstrologicalReport {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  turnaround: string;
  pageCount: string;
  highlights: string[];
  sampleQuestions: string[];
  deliverables: string[];
  isPopular?: boolean;
}

export interface ReportHallmark {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReportWorkflowStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReportAnatomyFeature {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export const reportsList: AstrologicalReport[] = [
  {
    id: "comprehensive-life-kundali",
    badge: "Most Comprehensive",
    title: "Complete 5-Year Life & Kundali Roadmap",
    subtitle: "A holistic deep-dive into your destiny, career, wealth, relationships, and health.",
    description:
      "Our flagship handwritten dossier. Acharya Debdutta meticulously calculates your D1 Rashi, D9 Navamsha, and key divisional charts, providing a clear 5-year timeline of Mahadashas, Antardashas, key life milestones, and protective Vedic remedies.",
    turnaround: "48 – 72 Hours",
    pageCount: "40 – 45 Pages PDF",
    highlights: [
      "Complete Lagna, Moon Sign & Nakshatra breakdown",
      "5-Year Mahadasha & Antardasha predictive timeline",
      "Analysis of planetary yogas (Raj Yogas, Dhana Yogas)",
      "Dosha scrutiny (Manglik, Kaal Sarp, Pitra, Sade Sati)",
      "Customized Gemstone, Yantra & Mantra prescription",
    ],
    sampleQuestions: [
      "What are the defining turning points of my next 5 years?",
      "Which dasha period will bring peak career and financial breakthroughs?",
      "Are there latent doshas causing repetitive hurdles, and how can they be neutralized?",
    ],
    deliverables: [
      "High-Resolution Color PDF Dossier",
      "Exact Divisional Charts & Planetary Tables",
      "Step-by-Step Remedial & Ritual Blueprint",
      "Direct WhatsApp Clarification Window",
    ],
    isPopular: true,
  },
  {
    id: "career-wealth-business",
    badge: "High Demand",
    title: "Career, Wealth & Business Prosperity Dossier",
    subtitle: "Cosmic strategy for professional breakthroughs, job switches, and commercial expansion.",
    description:
      "Focused specifically on your 10th house of profession, 2nd house of accumulated wealth, 11th house of gains, and the D10 Dasamsa divisional chart. Identifies ideal vocation domains, promotion windows, partnership viability, and debt-clearance yogas.",
    turnaround: "48 Hours",
    pageCount: "25 – 30 Pages PDF",
    highlights: [
      "D10 Dasamsa scrutiny & planetary strength in career",
      "Job switch, promotion & overseas relocation windows",
      "Business partnership compatibility & brand timing",
      "Dhana Yogas (wealth generators) & financial risk cycles",
      "Practical Lal Kitab & Vedic remedies for professional growth",
    ],
    sampleQuestions: [
      "Is now the right time to change jobs or launch my independent venture?",
      "Which business sector is astrologically most lucrative for my chart?",
      "How can I overcome persistent workplace politics or career stagnation?",
    ],
    deliverables: [
      "Detailed Career & Financial Forecast PDF",
      "Favorable & Critical Calendar Windows for Decisions",
      "Custom Business / Office Remedial Advice",
      "Planetary Gemstone & Yantra Recommendation",
    ],
    isPopular: false,
  },
  {
    id: "marriage-relationship-compatibility",
    badge: "Personalized",
    title: "Marriage, Relationship & Kundali Milan Dossier",
    subtitle: "Clarity on marriage timing, spouse nature, marital harmony, and compatibility.",
    description:
      "A sensitive and thorough analysis of the 7th house, Venus/Jupiter placements, and the D9 Navamsha chart. Ideal for singles awaiting marriage timing, parents looking for matchmaking validation, or couples seeking to resolve marital friction.",
    turnaround: "48 Hours",
    pageCount: "25 – 30 Pages PDF",
    highlights: [
      "Timing and circumstances of meeting your life partner",
      "Spouse characteristics, personality, and direction of origin",
      "In-depth Ashtakoot & Dashakoot compatibility scoring",
      "Manglik Dosha, Nadi Dosha, and Bhakoot Dosha resolution",
      "Remedies to restore affection, trust, and mutual harmony",
    ],
    sampleQuestions: [
      "When will I get married, and what will my partner's nature be like?",
      "Are our kundalis truly compatible beyond basic Guna Milan?",
      "What remedies will heal lingering misunderstandings in our marriage?",
    ],
    deliverables: [
      "Comprehensive Relationship Dossier PDF",
      "Detailed 36-Guna Scoring & Dosha Neutralization",
      "Navamsha (D9) Chart Placement Breakdown",
      "Vedic Ritual & Fasting Recommendations",
    ],
    isPopular: false,
  },
  {
    id: "annual-varshphal-forecast",
    badge: "Annual Special",
    title: "Annual Varshphal & Solar Return Report",
    subtitle: "A month-by-month predictive blueprint for the upcoming 12 months from your birthday.",
    description:
      "Constructed using ancient Tajika Varshphal principles. Calculated for the exact moment the Sun returns to your natal coordinates, mapping Muntha placement, Varshapati lord, and pinpointing opportunities and precautions across the entire year.",
    turnaround: "48 Hours",
    pageCount: "30 – 35 Pages PDF",
    highlights: [
      "Muntha lord and Varshapati planetary ruler analysis",
      "Month-by-month predictive breakdown across 12 months",
      "Golden opportunity windows for investments and travel",
      "Caution periods for health, legal, or emotional matters",
      "Yearly remedial schedule with auspicious dates",
    ],
    sampleQuestions: [
      "What are the major themes and unexpected events of my upcoming year?",
      "Which months are most favorable for major life changes and financial commitments?",
      "What specific cautions should I observe during my sensitive months?",
    ],
    deliverables: [
      "12-Month Predictive Calendar & Analysis PDF",
      "Tajika Annual Chart & Planetary Strengths",
      "Auspicious Muhurat Dates for Key Actions",
      "Tailored Annual Protection Remedies",
    ],
    isPopular: true,
  },
  {
    id: "health-vitality-medical",
    badge: "Holistic Health",
    title: "Health, Vitality & Medical Astrology Analysis",
    subtitle: "Preventive cosmic analysis of bodily constitutions, sensitive periods, and vitality.",
    description:
      "Rooted in classical Ayur-Jyotish principles, evaluating the 6th house of illnesses, 8th house of longevity, and 12th house of recovery. Identifies seasonal vulnerabilities, stress triggers, and remedial measures to safeguard physical and mental well-being.",
    turnaround: "48 – 72 Hours",
    pageCount: "20 – 25 Pages PDF",
    highlights: [
      "Tridosha (Vata, Pitta, Kapha) astrological balance",
      "Sensitive organs and potential health triggers",
      "Maraka and Badhaka dasha period identification",
      "Emotional resilience and psychosomatic stress indicators",
      "Maha Mrityunjaya mantra & Ayurvedic lifestyle alignments",
    ],
    sampleQuestions: [
      "What health precautions should I take during my current planetary dasha?",
      "Are there astrological factors behind persistent energy depletion or mental anxiety?",
      "Which Vedic remedies support physical recuperation and longevity?",
    ],
    deliverables: [
      "Medical Astrology Report PDF",
      "Constitutional & Planetary Vulnerability Matrix",
      "Protective Mantras & Healing Gemstone Suggestions",
      "Auspicious Days for Treatments & Surgery",
    ],
    isPopular: false,
  },
  {
    id: "gemstone-rudraksha-remedy",
    badge: "Remedial Blueprint",
    title: "Gemstone, Rudraksha & Remedial Prescription",
    subtitle: "Authentic, chart-energized planetary gemstone and sacred bead recommendations.",
    description:
      "A precise prescription preventing the common danger of wearing incompatible gemstones. Acharya Debdutta analyzes your functional benefics versus functional malefics to prescribe exact carats, wearing metal, finger, activation mantra, and auspicious Muhurat.",
    turnaround: "24 – 48 Hours",
    pageCount: "15 – 20 Pages PDF",
    highlights: [
      "Primary Life-Stone (Bhagyoday), Lucky Stone & Career Gem",
      "Strict warnings on strictly incompatible gemstones to avoid",
      "Exact weight (Ratti / Carat), ideal metal & wearing finger",
      "Consecration (Pran Pratishtha) vidhi & seed mantras",
      "Compatible Rudraksha Mukhi recommendations",
    ],
    sampleQuestions: [
      "Which gemstone will directly amplify my luck and career progress?",
      "Is the gemstone I am currently wearing conflicting with my chart?",
      "What is the exact Vedic ritual to energize and wear my gemstone?",
    ],
    deliverables: [
      "Certified Gemstone & Rudraksha Prescription PDF",
      "Step-by-Step Cleansing & Activation Protocol",
      "Authentic Sourcing & Purity Guidelines",
      "Specialized Planetary Seed Mantras",
    ],
    isPopular: false,
  },
];

export const whyHandcraftedHallmarks: ReportHallmark[] = [
  {
    id: "hallmark-1",
    number: "01",
    title: "Divisional Chart Cross-Synthesis",
    description:
      "Generic software only prints D1 charts. Acharya Debdutta manually cross-checks your Navamsha (D9), Dasamsa (D10), and Saptamsha (D7) to uncover hidden planetary strengths.",
    iconName: "Compass",
  },
  {
    id: "hallmark-2",
    number: "02",
    title: "Pinpoint Dasha & Gochar Timing",
    description:
      "Automated software spits out generic lifetime paragraphs. We pinpoint exact micro-windows where transits activate natal yogas to give you actionable decision timing.",
    iconName: "Clock",
  },
  {
    id: "hallmark-3",
    number: "03",
    title: "Root-Cause Dosha Neutralization",
    description:
      "Rather than inducing panic over Manglik or Sade Sati, every dosha is checked for classical cancellations (Bhanga) and paired with practical, cost-effective remedies.",
    iconName: "ShieldCheck",
  },
  {
    id: "hallmark-4",
    number: "04",
    title: "Safe & Calibrated Remedies",
    description:
      "Wearing the wrong gemstone can trigger severe planetary friction. Every recommendation is meticulously safe, balanced with your active dasha lord, and non-destructive.",
    iconName: "Sparkles",
  },
  {
    id: "hallmark-5",
    number: "05",
    title: "Direct Clarification Guarantee",
    description:
      "Every report is delivered as a high-resolution PDF on WhatsApp & email, accompanied by a dedicated clarification window with Acharya Debdutta's team for your follow-up doubts.",
    iconName: "CheckCircle2",
  },
];

export const reportWorkflowSteps: ReportWorkflowStep[] = [
  {
    step: "01",
    title: "Submit Birth Coordinates",
    description:
      "Provide your exact Date of Birth, Time of Birth, and Place of Birth, along with your primary queries or focal life areas.",
    iconName: "Calendar",
  },
  {
    step: "02",
    title: "Manual Chart Casting & Scrutiny",
    description:
      "Acharya Debdutta manually casts your D1, D9, D10 charts, cross-verifies planetary degrees, and inspects your active Mahadasha.",
    iconName: "FileSpreadsheet",
  },
  {
    step: "03",
    title: "Predictive Synthesis & Remedies",
    description:
      "Deep analysis is synthesized into a clear, structured dossier detailing your timeline, yogas, caution phases, and tailored remedies.",
    iconName: "PenTool",
  },
  {
    step: "04",
    title: "PDF Delivery & Clarification",
    description:
      "Receive your comprehensive color PDF dossier directly via WhatsApp and email within 48–72 hours, with direct support for questions.",
    iconName: "Send",
  },
];

export const reportAnatomyFeatures: ReportAnatomyFeature[] = [
  {
    title: "Vedic Planetary Chart & Planetary Tables",
    subtitle: "Mathematical Precision",
    description:
      "Complete Kundali wheel with exact planetary degrees, Bhavat Bhavam correlations, Shadbala strengths, and Ashtakavarga points.",
    tag: "Astronomical Mapping",
  },
  {
    title: "Vimshottari Dasha & Micro-Sub-Periods",
    subtitle: "Temporal Precision",
    description:
      "Detailed breakdown of your current and upcoming Mahadasha, Antardasha, and Pratyantardasha cycles with specific influence highlights.",
    tag: "Timeline Forecasting",
  },
  {
    title: "Critical Caution Windows & Golden Periods",
    subtitle: "Actionable Strategy",
    description:
      "Highlighting exact calendar months where planetary transits favor bold moves, alongside periods requiring caution in health, finances, or contracts.",
    tag: "Strategic Timing",
  },
  {
    title: "Consecrated Vedic & Lal Kitab Remedies",
    subtitle: "Practical Transformation",
    description:
      "Customized mantras, gemstone specifications, charity protocols, and household alignments that are safe, ethical, and easily performed.",
    tag: "Remedial Science",
  },
];

export const reportFaqs = [
  {
    question: "How are these reports different from free or automated computerized reports?",
    answer:
      "Computerized reports use automated templated text triggered merely by sun or moon sign placement, ignoring complex planetary aspects, divisional charts (D9, D10), combustion, and cancellation yogas. Every report from Acharya Debdutta is hand-calculated and individually analyzed to provide authentic, nuanced, and actionable personal guidance.",
  },
  {
    question: "What if I do not have my exact time of birth?",
    answer:
      "Exact birth time is critical for precise Ascendant (Lagna) and divisional chart calculations. If your birth time is approximate within 15–20 minutes, Acharya Debdutta can perform Birth Time Rectification (BTR) by cross-referencing major past life events (education, marriage, career milestones) before finalizing your report.",
  },
  {
    question: "In what format will I receive my report, and how long does it take?",
    answer:
      "You will receive a beautifully formatted, publication-grade high-resolution PDF dossier delivered directly to your WhatsApp and email address. Standard delivery time is 48 to 72 hours, as Acharya Debdutta personalmente scrutinizes every chart without robotic automation.",
  },
  {
    question: "Can I ask follow-up questions after reading my report?",
    answer:
      "Yes, absolutely. Every report includes a post-delivery clarification window. You can reply directly on WhatsApp with any doubts or seek clarification regarding the recommended remedies and timelines.",
  },
  {
    question: "Are the recommended remedies expensive or difficult to perform?",
    answer:
      "No. Acharya Debdutta emphasizes satvik, ethical, and practical Vedic remedies such as personalized mantra chanting, behavioral adjustments, simple charity (daan), and optional gemstone/Rudraksha prescriptions. You will never be pressured into unnecessary or exorbitant rituals.",
  },
  {
    question: "Can I order a report for family members or children?",
    answer:
      "Yes. You can order comprehensive reports for your spouse, children, or parents by providing their birth date, time, and birthplace coordinates in the request modal.",
  },
];

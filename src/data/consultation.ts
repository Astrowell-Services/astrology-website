export interface ConsultationPackage {
  id: string;
  name: string;
  badge?: string;
  duration: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  specs: {
    mode: string;
    timings: string;
    languages: string;
    remedy: string;
  };
  highlighted?: boolean;
}

export interface ConsultationQueryCategory {
  id: string;
  title: string;
  iconName: string;
  questions: string[];
}

export interface ConsultationStep {
  step: string;
  title: string;
  description: string;
}

export interface ConsultationBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const whyChooseBenefits: ConsultationBenefit[] = [
  {
    id: "confidentiality",
    title: "100% Confidentiality Guaranteed",
    description: "Every discussion remains strictly private. Your chart details and personal queries are never shared with any third party.",
    iconName: "Lock",
  },
  {
    id: "accuracy",
    title: "Accurate Vedic Insights",
    description: "Readings grounded in genuine Parasara and Jaimini classical traditions by experienced astrologers with decades of experience.",
    iconName: "Compass",
  },
  {
    id: "remedies",
    title: "Personalized Remedies",
    description: "Actionable, customized remedies (mantras, gemstones, daan, and pujas) scientifically mapped to your active Mahadasha and birth chart.",
    iconName: "FileText",
  },
  {
    id: "languages",
    title: "Language Options",
    description: "Fluent consultations available in Hindi or English so you can comfortably express your innermost concerns with complete clarity.",
    iconName: "Languages",
  },
  {
    id: "quick-appointment",
    title: "Quick Appointment",
    description: "Talk within 24 hours. Fast slot scheduling without long waiting periods for urgent life decisions.",
    iconName: "Clock",
  },
];

export const whatYouCanAskCategories: ConsultationQueryCategory[] = [
  {
    id: "career",
    title: "Career & Job",
    iconName: "Briefcase",
    questions: [
      "When will I get a new job?",
      "Should I change my field?",
      "Will I succeed in business or partnership?",
    ],
  },
  {
    id: "marriage",
    title: "Love & Marriage",
    iconName: "Heart",
    questions: [
      "When will I get married?",
      "Is my partner compatible?",
      "Kundali matching & Manglik dosha analysis.",
    ],
  },
  {
    id: "finance",
    title: "Property & Finance",
    iconName: "Coins",
    questions: [
      "Will I buy a house or property?",
      "Will I become wealthy & accumulate assets?",
      "When will financial debts and blocks resolve?",
    ],
  },
  {
    id: "family",
    title: "Family & Children",
    iconName: "Users",
    questions: [
      "When will we be blessed with a child?",
      "What about my children's health & education?",
      "What does the future hold for family harmony?",
    ],
  },
  {
    id: "spiritual",
    title: "Spiritual Growth",
    iconName: "Sun",
    questions: [
      "What is blocking my subtle life energy?",
      "Which Ishta Devata, mantras, or pujas are right for me?",
      "How can I align with my soul's true purpose?",
    ],
  },
  {
    id: "health",
    title: "Health & Emotional Stress",
    iconName: "HeartPulse",
    questions: [
      "Find the root of recurring health issues.",
      "Overcoming mental anxiety, depression & restlessness.",
      "Clear peace-related blocks and restore mental calm.",
    ],
  },
];

export const consultationSteps: ConsultationStep[] = [
  {
    step: "01",
    title: "Book Your Slot",
    description:
      "Fill out the form on this page or call our helpline to schedule your consultation. Choose your preferred astrologer if needed.",
  },
  {
    step: "02",
    title: "Share Birth Details",
    description:
      "To get the most accurate predictions, we ask for your full name, date of birth, time of birth, and place of birth. Don’t worry if the time is approximate — we use advanced techniques like Prashna Kundali to adjust.",
  },
  {
    step: "03",
    title: "Make the Payment",
    description:
      "Secure your spot by completing the online payment via UPI, Paytm, GPay, or Net Banking. You will receive a confirmation email/SMS.",
  },
  {
    step: "04",
    title: "Get the Call",
    description:
      "At your scheduled time, you’ll receive a direct call from our expert astrologer. The consultation will last between 15 to 45 minutes, depending on your selected plan.",
  },
  {
    step: "05",
    title: "Receive Solutions",
    description:
      "You’ll be guided with predictions, time periods (dasha/antardasha), mantras, remedies, gemstones, and more. In some cases, a detailed follow-up may be offered over WhatsApp/email.",
  },
];

export const consultationPackages: ConsultationPackage[] = [
  {
    id: "basic-plan",
    name: "Basic Plan",
    duration: "25 Minutes",
    price: 499,
    description: "Basic Plan is perfect for individuals who need quick and precise answers.",
    features: [
      "1 Personal Question",
      "Talk to Astrologer Live",
      "Quick Remedy Suggestion",
    ],
    specs: {
      mode: "Direct Phone or WhatsApp Audio",
      timings: "Between 10 AM – 7 PM (IST)",
      languages: "Hindi / English",
      remedy: "One instant Vedic remedy",
    },
    highlighted: false,
  },
  {
    id: "standard-plan",
    name: "Standard Plan",
    duration: "40 Minutes",
    price: 999,
    description: "People with 2–3 concerns or looking for balanced consultation.",
    features: [
      "In-depth Horoscope Reading",
      "Covers 2–3 Life Areas (Career, Marriage, Health)",
      "Talk to Astrologer Live",
    ],
    specs: {
      mode: "Direct Phone or WhatsApp Audio",
      timings: "Between 10 AM – 7 PM (IST)",
      languages: "Hindi / English",
      remedy: "Live call with detailed remedy suggestions",
    },
    highlighted: false,
  },
  {
    id: "premium-plan",
    name: "Premium Plan",
    badge: "Value",
    duration: "60 Minutes",
    price: 1999,
    description: "Deep life analysis, business guidance, Kundali dosha correction.",
    features: [
      "Full Life Analysis",
      "Custom Remedies & Dosha Report",
      "Talk + WhatsApp Follow-up",
    ],
    specs: {
      mode: "Direct Phone or WhatsApp Audio",
      timings: "Between 10 AM – 7 PM (IST)",
      languages: "Hindi / English",
      remedy: "WhatsApp follow-up for 48 hours",
    },
    highlighted: true,
  },
];

export const astrologerQuote = {
  quote:
    "Don’t walk through darkness alone. Let the ancient science of astrology light your path. One call can change how you see your karma, your destiny, and your purpose.",
  author: "Achariya Debdutta",
  role: "Vedic Astrologer & Mentor",
};

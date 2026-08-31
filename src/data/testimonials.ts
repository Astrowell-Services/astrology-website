export interface Testimonial {
  id: string;
  review: string;
  name: string;
  city: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    review:
      "Acharya Debdutta\u2019s guidance has brought clarity and confidence in my life. The Kundali reading was deeply accurate and actionable. I knew what to focus on and what to let go of.",
    name: "Neha S.",
    city: "Kolkata",
    rating: 5,
    initials: "NS",
  },
  {
    id: "t2",
    review:
      "The Kundali analysis was extremely accurate and deeply insightful. My questions about career and marriage were answered with remarkable precision. I am grateful for this guidance.",
    name: "Priya M.",
    city: "Bangalore",
    rating: 5,
    initials: "PM",
  },
  {
    id: "t3",
    review:
      "Professional, empathetic and truly committed to helping others. Acharya Debdutta took the time to explain every aspect of my chart without overwhelming me.",
    name: "Arjun R.",
    city: "Delhi",
    rating: 5,
    initials: "AR",
  },
  {
    id: "t4",
    review:
      "After years of uncertainty about my career path, one consultation changed my entire perspective. The planetary analysis was precise and the remedies were practical.",
    name: "Meera K.",
    city: "Mumbai",
    rating: 5,
    initials: "MK",
  },
  {
    id: "t5",
    review:
      "The couple compatibility report was a revelation. It helped us understand each other at a deeper level and navigate our differences with more compassion.",
    name: "Vikram T.",
    city: "Chennai",
    rating: 5,
    initials: "VT",
  },
];

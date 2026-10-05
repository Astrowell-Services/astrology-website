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
      "Acharya Debdutta's guidance brought profound clarity and calmness during my family's turbulent transition. The Kundali reading was deeply accurate, compassionate, and actionable. I finally knew what to focus on and what to let go of.",
    name: "Debosmita Roychowdhury",
    city: "Kolkata",
    rating: 5,
    initials: "DR",
  },
  {
    id: "t2",
    review:
      "The D9 and D10 career analysis was astonishingly precise. Questions regarding my overseas job shift and business partnerships were resolved with mathematical clarity. No superstitions, just classical Vedic insight.",
    name: "Karthik Venkataraman",
    city: "Bengaluru",
    rating: 5,
    initials: "KV",
  },
  {
    id: "t3",
    review:
      "Professional, empathetic, and truly committed to guiding seekers. Acharya ji took the time to explain planetary dashas in simple terms without inducing fear or selling unnecessary stones.",
    name: "Sunita Aggarwal",
    city: "New Delhi",
    rating: 5,
    initials: "SA",
  },
  {
    id: "t4",
    review:
      "After months of severe career stagnation, a single consultation opened my eyes to the Shani-Rahu transit timing. The satvik remedies suggested were practical, grounded, and life-changing.",
    name: "Dr. Jayanta Majumder",
    city: "Siliguri",
    rating: 5,
    initials: "JM",
  },
  {
    id: "t5",
    review:
      "The couple compatibility consultation was an eye-opener. It helped us understand each other's emotional wiring and navigate persistent differences with mutual respect and genuine harmony.",
    name: "Aparna & Prateek Deshmukh",
    city: "Pune",
    rating: 5,
    initials: "PD",
  },
  {
    id: "t6",
    review:
      "His remedial approach is rooted in authentic Parasara Jyotish. Clear timelines, genuine counseling, and no false promises. Truly one of the finest and most ethical astrologers in India today.",
    name: "Rajinder Sandhu",
    city: "Chandigarh",
    rating: 5,
    initials: "RS",
  },
];

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  uploadDate: string;
  youtubeUrl: string;
  description: string;
}

export const videos: Video[] = [
  {
    id: "v1",
    title: "Transit of Jupiter in 2026 and Its Impact",
    thumbnail: "/images/video-thumb-jupiter.jpg",
    duration: "10:45",
    uploadDate: "3 days ago",
    youtubeUrl: "#",
    description: "An in-depth look at Jupiter\u2019s transit and what it means for each rising sign.",
  },
  {
    id: "v2",
    title: "How to Read Your Kundali \u2014 Basics",
    thumbnail: "/images/video-thumb-kundali.jpg",
    duration: "08:32",
    uploadDate: "1 week ago",
    youtubeUrl: "#",
    description: "A beginner\u2019s guide to reading your own Vedic birth chart.",
  },
  {
    id: "v3",
    title: "Rahu & Ketu: The Shadow Planets",
    thumbnail: "/images/video-thumb-rahu.jpg",
    duration: "07:31",
    uploadDate: "2 weeks ago",
    youtubeUrl: "#",
    description: "Understanding the karmic significance of Rahu and Ketu in your chart.",
  },
  {
    id: "v4",
    title: "Career Astrology: Find Your Path",
    thumbnail: "/images/video-thumb-career.jpg",
    duration: "06:18",
    uploadDate: "3 weeks ago",
    youtubeUrl: "#",
    description: "How to use the 10th house and planetary yogas to understand your career destiny.",
  },
];

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  responsibilities: string[];
  contentAreas?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location: string;
}

export const PERSONAL_INFO = {
  name: "Nikita Tupe",
  roles: [
    "Marathi Content Creator",
    "On-Camera Anchor",
    "Video Host",
    "Brand & UGC Creator"
  ],
  tagline: "I create audience-first content that turns complex topics into clear, engaging stories.",
  aboutText: `I am a bilingual digital media professional specializing in end-to-end video production and anchoring, primarily in Marathi. From digging deep into research and ideation to scriptwriting with high-retention hooks, on-camera delivery, and coordinating the post-production pipeline, I manage the complete content lifecycle. By combining storytelling and data-driven insights, I translate complex financial, business, and social concepts into highly accessible stories that build community trust and drive measurable audience growth.`,
  contact: {
    email: "nikitatupe20@gmail.com",
    phone: "+91 7517835117",
    location: "Bengaluru, India",
    socials: {
      email: "mailto:nikitatupe20@gmail.com",
      youtube: "https://youtube.com/playlist?list=PLS6rOjmQNxpdhNDq4fU5o5rAwtxvCPtBT&si=LDOFtqlboX3474mM",
      linkedin: "https://www.linkedin.com/in/nikita-tupe-6701bb261/",
      instagram: "https://www.instagram.com/nikitatupe20/"
    }
  },
  stats: {
    subscribers: "38.6K+",
    videoViews: "1L+",
    shortsViews: "1M+",
    languages: ["Marathi", "Hindi", "English"]
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "anchoring",
    number: "01",
    title: "ANCHORING",
    description: "On-camera hosting and presentation for digital video content."
  },
  {
    id: "content-creation",
    number: "02",
    title: "CONTENT CREATION",
    description: "End-to-end digital content creation from research and ideation to publishing."
  },
  {
    id: "scriptwriting",
    number: "03",
    title: "SCRIPTWRITING",
    description: "Audience-focused scripts designed around strong hooks, storytelling and retention."
  },
  {
    id: "brand-ugc",
    number: "04",
    title: "BRAND & UGC CONTENT",
    description: "Creator-led promotional and advertising content for brands."
  },
  {
    id: "voiceover",
    number: "05",
    title: "VOICEOVER & DUBBING",
    description: "Voiceover and dubbing across Marathi, Hindi and English."
  }
];

export const LONG_FORM_VIDEOS: VideoItem[] = [
  {
    id: "ip11D8y5UqM",
    title: "Maharashtra Farm Loan Waiver 2026",
    category: "Government Schemes",
    description: "A complete breakdown of eligibility, application criteria, and structural benefits of the 2026 farm loan waiver program in Maharashtra.",
    youtubeUrl: "https://youtu.be/ip11D8y5UqM",
    thumbnailUrl: "https://img.youtube.com/vi/ip11D8y5UqM/maxresdefault.jpg"
  },
  {
    id: "a4MrLWShwKo",
    title: "Senior Citizens New Tax Rules in Marathi",
    category: "Finance",
    description: "Comprehensive guide explaining the new income tax slabs, declarations, and savings plans specifically for senior citizens.",
    youtubeUrl: "https://youtu.be/a4MrLWShwKo",
    thumbnailUrl: "https://img.youtube.com/vi/a4MrLWShwKo/maxresdefault.jpg"
  },
  {
    id: "G4DchIQqWjQ",
    title: "ST Bus NCMC Card Mandatory",
    category: "Consumer Awareness",
    description: "Crucial consumer guide explaining how to apply for and use the mandatory National Common Mobility Card for Maharashtra state transport.",
    youtubeUrl: "https://youtu.be/G4DchIQqWjQ",
    thumbnailUrl: "https://img.youtube.com/vi/G4DchIQqWjQ/maxresdefault.jpg"
  },
  {
    id: "cwSz0mH-B6g",
    title: "New Car vs Old Car — Which Is Financially Smarter",
    category: "Finance & Money",
    description: "A mathematical breakdown of depreciation, insurance, and interest rates to help viewers decide between a new and pre-owned vehicle.",
    youtubeUrl: "https://youtu.be/cwSz0mH-B6g",
    thumbnailUrl: "https://img.youtube.com/vi/cwSz0mH-B6g/maxresdefault.jpg"
  },
  {
    id: "j_5dejpMupc",
    title: "RD Scheme",
    category: "Savings & Investments",
    description: "Demystifying Recurring Deposit (RD) interest rates, tenure strategies, and Post Office small savings rules for consistent returns.",
    youtubeUrl: "https://youtu.be/j_5dejpMupc",
    thumbnailUrl: "https://img.youtube.com/vi/j_5dejpMupc/maxresdefault.jpg"
  },
  {
    id: "AEIdKo3nimY",
    title: "Smart Home Loan Tips in Marathi",
    category: "Finance",
    description: "Actionable tips on reducing your home loan EMI, selecting tenures, and negotiating interest rates with commercial banks.",
    youtubeUrl: "https://youtu.be/AEIdKo3nimY",
    thumbnailUrl: "https://img.youtube.com/vi/AEIdKo3nimY/maxresdefault.jpg"
  },
  {
    id: "wON1Amx0HT8",
    title: "Why Gold Prices Are Rising",
    category: "Business & Economy",
    description: "An analysis of global geopolitical situations, inflation hedge, and central bank purchases driving gold prices to record highs.",
    youtubeUrl: "https://youtu.be/wON1Amx0HT8",
    thumbnailUrl: "https://img.youtube.com/vi/wON1Amx0HT8/maxresdefault.jpg"
  },
  {
    id: "EqZpRNQCc2A",
    title: "Indian Post Office Scheme 2.0",
    category: "Government Schemes",
    description: "A detailed breakdown of the updated Indian Post Office saving schemes, tenure options, safety features, and interest updates.",
    youtubeUrl: "https://youtu.be/EqZpRNQCc2A",
    thumbnailUrl: "https://img.youtube.com/vi/EqZpRNQCc2A/maxresdefault.jpg"
  }
];

export const SHORT_FORM_VIDEOS: VideoItem[] = [
  {
    id: "VHzcJ_V9vao",
    title: "Short 1",
    category: "Short-Form / UGC",
    description: "Dynamic micro-content focused on consumer awareness and smart money habits.",
    youtubeUrl: "https://youtube.com/shorts/VHzcJ_V9vao",
    thumbnailUrl: "https://img.youtube.com/vi/VHzcJ_V9vao/maxresdefault.jpg"
  },
  {
    id: "priqGHwWZXI",
    title: "Short 2",
    category: "Short-Form / UGC",
    description: "Creative business insights delivered with native storytelling and fast-paced visual hooks.",
    youtubeUrl: "https://youtube.com/shorts/priqGHwWZXI",
    thumbnailUrl: "https://img.youtube.com/vi/priqGHwWZXI/maxresdefault.jpg"
  },
  {
    id: "qdBates9czY",
    title: "Short 3",
    category: "Short-Form / UGC",
    description: "Quick breakdown of essential government rules impacting daily expenses.",
    youtubeUrl: "https://youtube.com/shorts/qdBates9czY",
    thumbnailUrl: "https://img.youtube.com/vi/qdBates9czY/maxresdefault.jpg"
  },
  {
    id: "iMxW1aO3ZHE",
    title: "Short 4",
    category: "Short-Form / UGC",
    description: "Strategic investment comparison targeting digital-first Gen Z and millennial audiences.",
    youtubeUrl: "https://youtube.com/shorts/iMxW1aO3ZHE",
    thumbnailUrl: "https://img.youtube.com/vi/iMxW1aO3ZHE/maxresdefault.jpg"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "BOSSWALLAH TECHNOLOGIES",
    role: "Content Creator & Anchor",
    period: "03/11/2025 – Present",
    location: "Bengaluru",
    description: "Joined BossWallah as the first Marathi Anchor & Content Creator, taking ownership of Marathi content creation and channel development from scratch.",
    responsibilities: [
      "Research and topic selection",
      "Marathi scriptwriting",
      "Anchoring",
      "Editing coordination",
      "Final quality control",
      "Video publishing",
      "Audience and trend analysis",
      "Brand and UGC content"
    ],
    contentAreas: [
      "Finance",
      "Business",
      "Farming",
      "Government Schemes",
      "Technology",
      "Consumer Awareness"
    ]
  },
  {
    company: "FEVER FM, BANGALORE",
    role: "Social Media Manager",
    period: "02/2025 – 05/2025",
    location: "Bengaluru",
    responsibilities: [
      "YouTube scripts",
      "Instagram management",
      "Daily Instagram reels",
      "Audience communication",
      "Video editing assistance",
      "Audio editing",
      "Voiceovers",
      "Mobile video shoots"
    ]
  }
];

export const BRANDS = [
  "Axis",
  "Max Life",
  "AlertPay",
  "Storystream",
  "MasterApp",
  "Univest",
  "Superliving"
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "MA, Journalism and Mass Communication",
    school: "Garden City University",
    period: "2025",
    location: "Bangalore"
  },
  {
    degree: "BA, Multimedia and Mass Communication",
    school: "SMT. Mithibai Motiram Kundnani College",
    period: "2023",
    location: "Mumbai"
  }
];

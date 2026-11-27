import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Globe,
  Server,
  BarChart3,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const TECHY_DECEMBER = {
  title: "Techy December 2026",
  subtitle: "3-Week Intensive Tech Bootcamp",
  tagline: "Learn. Build. Launch.",
  startDate: "December 2, 2026",
  endDate: "December 21, 2026",
  demoDay: "December 23, 2026",
  registrationCloses: "November 30, 2026",
  seatLimit: 60,
  promoFeeNGN: 30_000,
  groupFeeNGN: 27_000,
  depositNGN: 10_000,
  depositBalanceDue: "November 27, 2026",
  referralRewardNGN: 3_000,
  audience: "Students, Youth & Career-Changers",
  registrationUrl: "https://tinyurl.com/TechyDecember",
  venue: "Ephad ICT Academy, Plot 1755, Gbazango, Kubwa, Abuja",
  tasterDates: ["Saturday, Nov 28, 2026"] as const,
  schedule: {
    period: "3 Weeks (9 Class Days)",
    daysPerWeek: "Mon, Wed & Fri",
    cohorts: "Morning (9:00 AM – 12:00 PM) · Afternoon (1:00 PM – 4:00 PM)",
    weekendCheckin: "Weekend virtual check-ins for Q&A and project feedback",
  },
  contact: {
    phone: "09133333647",
    whatsappNumber: "2349133333647",
    email: "ephadict@gmail.com",
    website: "ict.ephadinternationalacademy.org",
  },
} as const;

export function buildTechyDecemberWaLink(message?: string) {
  const defaultMsg =
    "Hi EPHAD ICT Academy, I'd like to register / reserve a seat for *Techy December 2026* (3-Week Bootcamp — ₦30,000).";
  return `https://wa.me/${TECHY_DECEMBER.contact.whatsappNumber}?text=${encodeURIComponent(
    message ?? defaultMsg
  )}`;
}

/** Local classroom assets — real EPHAD ICT Academy students & lab */
export const TECHY_DECEMBER_ASSETS = {
  gallery: [
    { src: "/img/class-1.jpeg", alt: "EPHAD ICT Academy students learning in class" },
    { src: "/img/class-2.jpeg", alt: "EPHAD ICT Academy computer workstations" },
    { src: "/img/class-3.jpeg", alt: "Hands-on tech training session at EPHAD" },
    { src: "/img/class-4.jpeg", alt: "EPHAD ICT Academy lab environment" },
  ] as const,
} as const;

const TRACK_IMAGES = {
  basicComputing:
    "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop",
  frontend:
    "https://images.unsplash.com/photo-1535720784870-74958b94607a?q=80&w=800&auto=format&fit=crop",
  backend:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  dataAnalytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  mobileApp:
    "https://images.unsplash.com/photo-1591115765372-b086060629a0?q=80&w=800&auto=format&fit=crop",
  aiAutomation:
    "https://images.unsplash.com/photo-1573497019238-588007b04781?q=80&w=800&auto=format&fit=crop",
} as const;

export interface TechyDecemberCourse {
  id: string;
  title: string;
  outcome: string;
  promoFeeNGN: number;
  regularFeeNGN: number;
  introductory?: boolean;
  icon: LucideIcon;
  image: string;
}

export const techyDecemberCourses: TechyDecemberCourse[] = [
  {
    id: "td-basic-computing",
    title: "Basic Computing & Office Productivity",
    outcome:
      "Use Microsoft Word, Excel, PowerPoint, and the internet confidently and safely for school, work, and business.",
    promoFeeNGN: 30_000,
    regularFeeNGN: 100_000,
    icon: Monitor,
    image: TRACK_IMAGES.basicComputing,
  },
  {
    id: "td-frontend-engineering",
    title: "Frontend Engineering",
    outcome:
      "Build and publish a responsive, interactive webpage using HTML, CSS, and JavaScript fundamentals.",
    promoFeeNGN: 30_000,
    regularFeeNGN: 250_000,
    icon: Globe,
    image: TRACK_IMAGES.frontend,
  },
  {
    id: "td-backend-engineering",
    title: "Backend Engineering",
    outcome:
      "Build server-side logic, simple REST APIs, and database workflows to power modern web applications.",
    promoFeeNGN: 30_000,
    regularFeeNGN: 300_000,
    icon: Server,
    image: TRACK_IMAGES.backend,
  },
  {
    id: "td-data-analytics",
    title: "Data Analytics",
    outcome:
      "Clean and analyse a real dataset in Excel and present a clear, chart-based insight report.",
    promoFeeNGN: 30_000,
    regularFeeNGN: 250_000,
    icon: BarChart3,
    image: TRACK_IMAGES.dataAnalytics,
  },
  {
    id: "td-mobile-app",
    title: "Mobile App Development",
    outcome:
      "Design, build, and run a simple working mobile app screen flow in a small, hands-on cohort.",
    promoFeeNGN: 30_000,
    regularFeeNGN: 250_000,
    introductory: true,
    icon: Smartphone,
    image: TRACK_IMAGES.mobileApp,
  },
  {
    id: "td-ai-automation",
    title: "AI Automation",
    outcome:
      "Use practical AI tools to automate everyday and business workflows in a guided hands-on cohort.",
    promoFeeNGN: 30_000,
    regularFeeNGN: 250_000,
    introductory: true,
    icon: Sparkles,
    image: TRACK_IMAGES.aiAutomation,
  },
];

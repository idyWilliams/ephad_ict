import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Code2,
  Smartphone,
  Globe,
  Palette,
  Shield,
  Sparkles,
} from "lucide-react";

export const SUMMER_BOOTCAMP = {
  title: "Tech Summer Bootcamp 2026",
  tagline: "Build skills. Create projects. Shape the future.",
  startDate: "August 3, 2026",
  endDate: "September 4, 2026",
  ageRange: "Ages 7 – 18",
  applicationFormUrl: "https://forms.gle/pBJeCWnykjy7yXLaA",
  schedule: {
    period: "4 Weeks",
    daysPerWeek: "3 Days Weekly",
    hoursPerSession: "6 Hours per Session",
  },
  contact: {
    phone: "09133333647",
    email: "ephadict@gmail.com",
    website: "ict.ephadinternationalacademy.org",
  },
} as const;

/** Local assets — students in class & bootcamp backgrounds */
export const SUMMER_BOOTCAMP_ASSETS = {
  heroSlides: [
    "/bg/summer-camp-hero-1.jpeg",
    "/bg/summer-camp-hero-2.jpeg",
  ] as const,
  /** Life at EPHAD gallery — camp promo + real class photos */
  lifeAtEphad: [
    { src: "/bg/summer-camp-hero-1.jpeg", alt: "EPHAD Tech Summer Bootcamp 2026" },
    { src: "/img/class-1.jpeg", alt: "EPHAD students learning in class" },
    { src: "/img/class-2.jpeg", alt: "EPHAD students at computer workstations" },
    { src: "/img/class-3.jpeg", alt: "EPHAD youth tech session" },
    { src: "/img/class-4.jpeg", alt: "EPHAD ICT Academy classroom" },
  ] as const,
  students: [
    "/img/class-1.jpeg",
    "/img/class-2.jpeg",
    "/img/class-3.jpeg",
    "/img/class-4.jpeg",
  ] as const,
} as const;

/** Topic-specific imagery — Black youth & professionals in tech */
const COURSE_IMAGES = {
  basicComputer:
    "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop",
  coding:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  mobile:
    "https://images.unsplash.com/photo-1591115765372-b086060629a0?q=80&w=800&auto=format&fit=crop",
  website:
    "https://images.unsplash.com/photo-1535720784870-74958b94607a?q=80&w=800&auto=format&fit=crop",
  graphicDesign:
    "https://images.unsplash.com/photo-1573496359142-b04592033964?q=80&w=800&auto=format&fit=crop",
  cybersecurity:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  ai:
    "https://images.unsplash.com/photo-1573497019238-588007b04781?q=80&w=800&auto=format&fit=crop",
} as const;

export interface SummerBootcampCourse {
  id: string;
  title: string;
  description: string;
  priceNGN: number;
  icon: LucideIcon;
  image: string;
}

export const summerBootcampCourses: SummerBootcampCourse[] = [
  {
    id: "sb-basic-computer",
    title: "Basic Computer Skills",
    description:
      "Equip students with essential computer skills for school, work, and everyday life. Learn Microsoft Word, Excel, PowerPoint, internet browsing, typing, file management, and other fundamental digital skills needed to use a computer with confidence.",
    priceNGN: 30_000,
    icon: Monitor,
    image: COURSE_IMAGES.basicComputer,
  },
  {
    id: "sb-coding-programming",
    title: "Coding & Programming",
    description:
      "Introduce students to the exciting world of programming through fun, hands-on projects. Create simple games, animations, and interactive applications while developing logical thinking, creativity, and problem-solving abilities.",
    priceNGN: 40_000,
    icon: Code2,
    image: COURSE_IMAGES.coding,
  },
  {
    id: "sb-mobile-app",
    title: "Mobile App Development",
    description:
      "Delve into the world of mobile app creation by learning the fundamentals of designing and building simple Android applications. Gain practical skills in app development while encouraging creativity, innovation, and digital problem-solving.",
    priceNGN: 40_000,
    icon: Smartphone,
    image: COURSE_IMAGES.mobile,
  },
  {
    id: "sb-website-dev",
    title: "Website Development",
    description:
      "Build modern, responsive websites from scratch. Explore web design principles, structure web pages, and create functional websites while gaining valuable front-end development experience.",
    priceNGN: 40_000,
    icon: Globe,
    image: COURSE_IMAGES.website,
  },
  {
    id: "sb-graphic-design",
    title: "Graphic Design",
    description:
      "Develop the creative and technical skills required to produce professional digital designs. Create flyers, logos, posters, social media graphics, and other visual content while building strong design and visual communication skills.",
    priceNGN: 35_000,
    icon: Palette,
    image: COURSE_IMAGES.graphicDesign,
  },
  {
    id: "sb-cybersecurity",
    title: "Cybersecurity",
    description:
      "Learn how to stay safe in today's digital world. Protect personal information, identify online threats, create strong security habits, and practice responsible digital citizenship.",
    priceNGN: 40_000,
    icon: Shield,
    image: COURSE_IMAGES.cybersecurity,
  },
  {
    id: "sb-ai-automation",
    title: "AI Automation",
    description:
      "Discover the power of Artificial Intelligence and how it can be used to learn smarter, automate everyday tasks, enhance creativity, and solve real-world problems. A practical foundation for understanding the technologies shaping the future.",
    priceNGN: 40_000,
    icon: Sparkles,
    image: COURSE_IMAGES.ai,
  },
];

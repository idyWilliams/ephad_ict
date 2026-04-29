/**
 * ─── EPHAD ICT Academy — Payment Configuration ─────────────────────────────
 *
 * SETUP:
 * 1. Copy .env.example → .env.local
 * 2. Set NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY to your Paystack public key
 *    - Test: pk_test_xxxx  (testMode: true)
 *    - Live: pk_live_xxxx  (testMode: false)
 * 3. Set NEXT_PUBLIC_PAYMENT_TEST_MODE=false for production
 *
 * ADDING / EDITING COURSE PRICES:
 * - Edit the arrays below (foundationalPayConfig, careerPayConfig, youthPayConfig)
 * - All prices are in NGN (kobo-free — the lib accepts naira directly)
 *
 * CALLBACKS:
 * - onSuccess, onClose, onError are wired per-call in EnrollModal.tsx
 * - Add server-side webhook verification in pages/api/webhooks/paystack.ts (TODO)
 */

import type { PaymentCategory, CoursePayConfig } from "./types";

// ─── FOUNDATIONAL PROGRAMS (Adults) ──────────────────────────────────────────
export const foundationalPayConfig: CoursePayConfig[] = [
  {
    id: "basic-computer",
    name: "Basic Computer & Microsoft Office",
    description: "Master everyday computer skills: Word, Excel, PowerPoint, email, internet browsing, and file management.",
    priceNGN: 50_000,
    duration: "4 weeks",
    category: "adults-foundational",
  },
  {
    id: "ict-fundamentals",
    name: "ICT Fundamentals & Digital Literacy",
    description: "IC3-aligned: computer basics, hardware, software, networks, and responsible digital behaviour.",
    priceNGN: 55_000,
    duration: "4 weeks",
    category: "adults-foundational",
  },
];

// ─── CAREER TECH BOOTCAMPS (Adults) ──────────────────────────────────────────
export const careerPayConfig: CoursePayConfig[] = [
  {
    id: "frontend-engineering",
    name: "Frontend Engineering",
    description: "React, Next.js, and modern CSS to build production-ready, responsive user interfaces.",
    priceNGN: 120_000,
    duration: "10 weeks",
    category: "adults-career",
  },
  {
    id: "backend-engineering",
    name: "Backend Engineering",
    description: "Node.js, databases, REST APIs, and server architecture for scalable backend systems.",
    priceNGN: 150_000,
    duration: "12 weeks",
    category: "adults-career",
  },
  {
    id: "python-dev",
    name: "Python Development",
    description: "Core Python, OOP, and practical projects across scripting, automation, and web.",
    priceNGN: 100_000,
    duration: "8 weeks",
    category: "adults-career",
  },
  {
    id: "product-design",
    name: "UI/UX Product Design",
    description: "Figma, user research, wireframing, and prototyping to design beautiful, conversion-focused products.",
    priceNGN: 100_000,
    duration: "8 weeks",
    category: "adults-career",
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    description: "Python, SQL, Pandas, and data visualisation to build decision-ready dashboards.",
    priceNGN: 120_000,
    duration: "8 weeks",
    category: "adults-career",
  },
  {
    id: "web-design",
    name: "Web Design",
    description: "Visual design principles and hand-coded HTML/CSS to craft beautiful websites.",
    priceNGN: 80_000,
    duration: "6 weeks",
    category: "adults-career",
  },
  {
    id: "ethical-hacking",
    name: "Ethical Hacking Fundamentals",
    description: "CEH-aligned: network security, vulnerability assessment, and pentesting methodologies.",
    priceNGN: 200_000,
    duration: "10 weeks",
    category: "adults-career",
  },
];

// ─── YOUTH PROGRAMS (Kids & Teens) ───────────────────────────────────────────
export const youthPayConfig: CoursePayConfig[] = [
  {
    id: "kids-ict-club",
    name: "Kids ICT & Coding Club",
    description: "Safe, structured intro to computers, internet, and visual coding for children aged 7–12.",
    priceNGN: 40_000,
    duration: "4–6 weeks",
    category: "youth",
  },
  {
    id: "teens-coding-web",
    name: "Teens Coding & Web",
    description: "HTML, CSS, JavaScript basics, and Python intro for teenagers aged 13–17.",
    priceNGN: 60_000,
    duration: "6–8 weeks",
    category: "youth",
  },
];

// ─── LOOKUP HELPER ───────────────────────────────────────────────────────────
export const allCourses: CoursePayConfig[] = [
  ...foundationalPayConfig,
  ...careerPayConfig,
  ...youthPayConfig,
];

export function getCourseById(id: string): CoursePayConfig | undefined {
  return allCourses.find((c) => c.id === id);
}

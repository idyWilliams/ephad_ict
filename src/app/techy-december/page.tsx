import type { Metadata } from "next";
import TechyDecemberPage from "./page.client";

export const metadata: Metadata = {
  alternates: {
    canonical: "/techy-december",
  },
  title: "Techy December 2026 | Foundation Tech Bootcamp in Kubwa, Abuja",
  description:
    "Start your 3-month tech course this December with Module 1 for only ₦30,000. Web Development, Data Analytics, Mobile Apps, AI Automation, and Basic Computing at Ephad ICT Academy, Kubwa. Dec 2 – Dec 23, 2026.",
};

export default function Page() {
  return <TechyDecemberPage />;
}

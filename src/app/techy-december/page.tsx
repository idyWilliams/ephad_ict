import type { Metadata } from "next";
import TechyDecemberPage from "./page.client";

export const metadata: Metadata = {
  alternates: {
    canonical: "/techy-december",
  },
  title: "Techy December 2026 | 3-Week Intensive Tech Bootcamp in Kubwa, Abuja",
  description:
    "Join our 3-week intensive tech bootcamp this December for only ₦30,000. Basic Computing, Frontend Engineering, Backend Engineering, Data Analytics, Mobile Apps, and AI Automation at Ephad ICT Academy, Kubwa. Dec 2 – Dec 23, 2026.",
};

export default function Page() {
  return <TechyDecemberPage />;
}

import type { Metadata } from "next";
import SummerBootcampPage from "./page.client";

export const metadata: Metadata = {
  title: "Tech Summer Bootcamp 2026 | EPHAD ICT Academy",
  description:
    "Summer tech bootcamp for kids and teens aged 7–18. Coding, web design, mobile apps, graphic design, cybersecurity, and AI. August 3 – September 4, 2026.",
};

export default function Page() {
  return <SummerBootcampPage />;
}

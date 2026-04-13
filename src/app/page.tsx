import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Courses } from "@/components/sections/Courses";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { KidsCTA } from "@/components/sections/KidsCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <KidsCTA />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}

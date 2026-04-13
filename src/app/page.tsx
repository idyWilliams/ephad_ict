import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProductLines } from "@/components/sections/ProductLines";
import { Courses } from "@/components/sections/Courses";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ProductLines />
      <Courses />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}

import { Hero } from "@/components/sections/Hero";
// import { SummerBootcampBanner } from "@/components/sections/SummerBootcampBanner";
import { TechyDecemberBanner } from "@/components/sections/TechyDecemberBanner";
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
      {/* <SummerBootcampBanner /> */}
      <TechyDecemberBanner />
      <About />
      <ProductLines />
      <Courses />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}

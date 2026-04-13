"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Laptop, Rocket } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const lines = [
  {
    index: "01",
    icon: Rocket,
    tag: "Program Line 01",
    label: "Youth Labs",
    headline: "Kids & Teens",
    sub: "Ages 7 – 17",
    desc: "Structured, safe, and fun ICT programs specifically built for children and teenagers. Two dedicated tracks: Kids ICT & Coding Club and Teens Coding & Web. Available as term-based, holiday, or bootcamp formats.",
    cta: "Explore Youth Programs",
    href: "/kids-teens",
    external: false,
    accent: true,
  },
  {
    index: "02",
    icon: Monitor,
    tag: "Program Line 02",
    label: "Adult Foundational",
    headline: "Digital Foundations",
    sub: "Zero experience required",
    desc: "Basic Computer & Microsoft Office plus ICT Fundamentals & Digital Literacy—for adults starting completely fresh or needing a professional grounding in technology.",
    cta: "View Foundational Programs",
    href: "/#foundational",
    external: false,
    accent: false,
  },
  {
    index: "03",
    icon: Laptop,
    tag: "Program Line 03",
    label: "Career Tech",
    headline: "Bootcamp Tracks",
    sub: "2–3 month intensives",
    desc: "Frontend, Backend, Python, UI/UX, Data Analysis, Web Design, and Ethical Hacking Fundamentals. Project-led, portfolio-driven career programs for adults making a real move into tech.",
    cta: "View Career Bootcamps",
    href: "/#career-tech",
    external: false,
    accent: false,
  },
];

export const ProductLines = () => {
  return (
    <section id="programs" className="py-28 bg-[#F4F3EF] dark:bg-[#02040a] border-t border-[#1C1C18]/5 dark:border-white/5 relative z-10 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-[10%]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[var(--color-brand-sky)]" />
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#1C1C18]/50 dark:text-white/50">Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1C1C18] dark:text-white tracking-tighter uppercase">
            Three <span className="font-bold">Distinct Paths.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
          className="grid md:grid-cols-3 gap-0 border-l border-[#1C1C18]/10 dark:border-white/10"
        >
          {lines.map((line) => (
            <motion.div
              key={line.index}
              variants={fadeIn}
              className={`relative group border-r border-b border-[#1C1C18]/10 dark:border-white/10 p-10 md:p-12 flex flex-col justify-between gap-10 transition-all duration-500 ${
                line.accent
                  ? "bg-[#1C1C18] dark:bg-white"
                  : "bg-transparent hover:bg-[#1C1C18]/[0.025] dark:hover:bg-white/[0.02]"
              }`}
            >
              {/* Top */}
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-3 border ${line.accent ? "border-white/20 bg-white/10" : "border-[#1C1C18]/10 dark:border-white/10 bg-[#1C1C18]/5 dark:bg-white/5"}`}>
                    <line.icon size={22} className={line.accent ? "text-white dark:text-[#1C1C18]" : "text-[#1C1C18] dark:text-white"} />
                  </div>
                  <span className={`text-4xl font-black ${line.accent ? "text-white/10 dark:text-[#1C1C18]/10" : "text-[#1C1C18]/10 dark:text-white/10"}`}>{line.index}</span>
                </div>

                <div className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-3 ${line.accent ? "text-[var(--color-brand-sky)]" : "text-[var(--color-brand-sky)]"}`}>
                  {line.tag}
                </div>

                <h3 className={`text-3xl font-black uppercase tracking-tighter leading-tight mb-1 ${line.accent ? "text-white dark:text-[#1C1C18]" : "text-[#1C1C18] dark:text-white"}`}>
                  {line.headline}
                </h3>
                <div className={`text-xs uppercase tracking-widest font-medium mb-6 ${line.accent ? "text-white/50 dark:text-[#1C1C18]/50" : "text-[#1C1C18]/40 dark:text-white/40"}`}>
                  {line.sub}
                </div>

                <p className={`font-light leading-relaxed text-sm ${line.accent ? "text-white/70 dark:text-[#1C1C18]/70" : "text-[#1C1C18]/60 dark:text-white/60"}`}>
                  {line.desc}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={line.href}
                className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group/link transition-colors ${
                  line.accent
                    ? "text-white dark:text-[#1C1C18] hover:text-[var(--color-brand-sky)] dark:hover:text-[var(--color-brand-sky)]"
                    : "text-[#1C1C18] dark:text-white hover:text-[var(--color-brand-sky)] dark:hover:text-[var(--color-brand-sky)]"
                }`}
              >
                {line.cta}
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

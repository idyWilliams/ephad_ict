"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Laptop, Rocket } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const lines = [
  {
    index: "01", icon: Rocket, tag: "Program Line 01", label: "Youth Labs",
    headline: "Kids & Teens", sub: "Ages 7 – 17",
    desc: "Structured, safe, and fun ICT programs specifically built for children and teenagers. Two dedicated tracks: Kids ICT & Coding Club and Teens Coding & Web. Available as term-based, holiday, or bootcamp formats.",
    cta: "Explore Youth Programs", href: "/kids-teens", accent: true,
  },
  {
    index: "02", icon: Monitor, tag: "Program Line 02", label: "Adult Foundational",
    headline: "Digital Foundations", sub: "Zero experience required",
    desc: "Basic Computer & Microsoft Office plus ICT Fundamentals & Digital Literacy—for adults starting from scratch or needing a professional grounding in technology.",
    cta: "View Foundational Programs", href: "/#foundational", accent: false,
  },
  {
    index: "03", icon: Laptop, tag: "Program Line 03", label: "Career Tech",
    headline: "Bootcamp Tracks", sub: "2–3 month intensives",
    desc: "Frontend, Backend, Python, UI/UX, Data Analysis, Web Design, and Ethical Hacking Fundamentals. Project-led, portfolio-driven career programs for adults making a real move into tech.",
    cta: "View Career Bootcamps", href: "/#career-tech", accent: false,
  },
];

export const ProductLines = () => {
  return (
    /* Sits on lm-section-strong — clearly deeper than the About (lm-base) above it */
    <section id="programs" className="py-28 bg-[var(--lm-section-strong)] dark:bg-[var(--dm-section)] border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] relative z-10 overflow-hidden transition-colors duration-500">
      {/* Light mode boundary shadows */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--lm-soft-line)] dark:hidden" />
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[var(--lm-text-main)]/[0.03] to-transparent dark:hidden pointer-events-none" />

      {/* Dark mode ambient orbs — subtle blue wash behind the grid */}
      <div className="ambient-orb ambient-float-slow w-[700px] h-[700px] bg-blue-700/[0.09] blur-[140px] top-[-20%] left-[-10%] hidden dark:block" />
      <div className="ambient-orb ambient-float-mid  w-[500px] h-[500px] bg-indigo-600/[0.06] blur-[120px] bottom-[-10%] right-[-5%] hidden dark:block" />

      {/* Light mode ambient orb */}
      <div className="ambient-orb ambient-float-slow w-[500px] h-[500px] bg-blue-400/[0.06] blur-[100px] top-[-10%] right-[-5%] dark:hidden" />

      <div className="container mx-auto px-6 md:px-[10%]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] tracking-tighter uppercase">
            Three <span className="font-bold">Distinct Paths.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
          className="grid md:grid-cols-3 gap-0 border-l border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]"
        >
          {lines.map((line) => (
            <motion.div
              key={line.index} variants={fadeIn}
              className={`relative group border-r border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] p-10 md:p-12 flex flex-col justify-between gap-10 transition-all duration-500 ${
                line.accent
                  ? "bg-[var(--lm-text-main)] dark:bg-[var(--dm-text-main)] shadow-lg"
                  : "bg-[var(--lm-section-strong)]/60 hover:bg-[var(--lm-elevated)]/60 dark:bg-transparent dark:hover:bg-[var(--dm-elevated)]/20"
              }`}
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-3 border ${line.accent ? "border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)]" : "border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] bg-[var(--lm-elevated)]/50 dark:bg-[var(--dm-elevated)]/50"}`}>
                    <line.icon size={22} className={line.accent ? "text-[var(--lm-text-main)] dark:text-[var(--dm-base)]" : "text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]"} />
                  </div>
                  <span className={`text-4xl font-black ${line.accent ? "text-[var(--lm-elevated)]/10 dark:text-[var(--dm-base)]/10" : "text-[var(--lm-text-main)]/10 dark:text-[var(--dm-text-main)]/10"}`}>{line.index}</span>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3 text-[var(--lm-accent)] dark:text-[var(--dm-accent)]">{line.tag}</div>

                <h3 className={`text-3xl font-black uppercase tracking-tighter leading-tight mb-1 ${line.accent ? "text-[var(--lm-elevated)] dark:text-[var(--dm-base)]" : "text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]"}`}>
                  {line.headline}
                </h3>
                <div className={`text-xs uppercase tracking-widest font-medium mb-6 ${line.accent ? "text-[var(--lm-elevated)]/50 dark:text-[var(--dm-base)]/50" : "text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]"}`}>
                  {line.sub}
                </div>

                <p className={`font-light leading-relaxed text-sm ${line.accent ? "text-[var(--lm-elevated)]/70 dark:text-[var(--dm-base)]/70" : "text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]"}`}>
                  {line.desc}
                </p>
              </div>

              <Link
                href={line.href}
                className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group/link transition-colors ${
                  line.accent
                    ? "text-[var(--lm-elevated)] dark:text-[var(--dm-base)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)]"
                    : "text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)]"
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

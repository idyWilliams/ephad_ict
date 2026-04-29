"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { foundationalPayConfig, careerPayConfig } from "@/lib/payments/config";
import type { CoursePayConfig } from "@/lib/payments/types";
import { EnrollModal } from "@/components/ui/EnrollModal";
import { useWhatsAppCtx } from "@/context/WhatsAppContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 mb-3">
    <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)]">{text}</span>
  </div>
);

export const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<CoursePayConfig | null>(null);
  const { setCourseName } = useWhatsAppCtx();

  return (
    <>
      <EnrollModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />

      <section id="courses" className="relative z-10 transition-colors duration-500">

        {/* ─── FOUNDATIONAL DIGITAL SKILLS ─── */}
        <div id="foundational" className="py-28 bg-[var(--lm-section)] dark:bg-[var(--dm-section)]/50 dark:backdrop-blur-3xl border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] relative theme-transition">
          {/* Light mode: subtle top boundary */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[var(--lm-text-main)]/[0.04] to-transparent dark:hidden pointer-events-none" />
          {/* Dark mode: accent glow boundary */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--dm-accent)]/30 to-transparent hidden dark:block" />
          {/* Ambient orb accents */}
          <div className="absolute top-[20%] right-[5%] w-64 h-64 bg-[var(--lm-accent-secondary)]/4 rounded-full blur-3xl ambient-float-mid dark:hidden pointer-events-none" />
          <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-[var(--dm-accent)]/6 rounded-full blur-3xl ambient-float-slow hidden dark:block pointer-events-none" />
          <div className="container mx-auto px-6 md:px-[10%]">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
              className="mb-16 grid md:grid-cols-2 gap-8 items-end"
            >
              <div>
                <SectionLabel text="Program Line 02" />
                <h2 className="text-4xl md:text-5xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] tracking-tighter uppercase leading-tight">
                  Foundational <span className="font-bold">Digital Skills.</span>
                </h2>
              </div>
              <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light text-base leading-relaxed max-w-sm">
                For absolute beginners and professionals who need a solid grounding in computers, productivity tools, and digital literacy. Zero prior experience required.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
              className="flex flex-col"
            >
              {foundationalPayConfig.map((course, i) => (
                <motion.div
                  key={course.id} variants={fadeIn}
                  onMouseEnter={() => setCourseName(course.name)}
                  onMouseLeave={() => setCourseName(null)}
                  className="group relative border-b border-[var(--lm-text-main)]/5 dark:border-[var(--dm-soft-line)] py-10 md:py-14 transition-all duration-500 hover:bg-[var(--lm-text-main)]/[0.025] dark:hover:bg-white/[0.02]"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0 bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)] group-hover:w-1 transition-all duration-500" />
                  <div className="grid md:grid-cols-12 gap-6 items-center pl-6 md:pl-10">
                    <div className="md:col-span-1">
                      <span className="text-2xl font-light text-[var(--lm-text-main)]/20 dark:text-[var(--dm-text-main)]/20 group-hover:text-[var(--lm-text-main)]/60 dark:group-hover:text-white/60 transition-colors">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] group-hover:text-[var(--lm-accent)] dark:text-[var(--dm-accent)] transition-colors leading-tight">
                        {course.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-3 text-xs uppercase tracking-widest text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-semibold">
                        <span>{course.duration}</span><span>·</span>
                        <span className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] font-bold">₦{course.priceNGN.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed">{course.description}</p>
                    </div>
                    <div className="md:col-span-3 flex items-center">
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--lm-text-main)] dark:hover:bg-white hover:text-white dark:hover:text-black transition-all hover:border-transparent"
                      >
                        Enroll & Pay
                        <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ─── CAREER TECH BOOTCAMPS ─── */}
        <div id="career-tech" className="py-28 bg-[var(--lm-section-strong)] dark:bg-[var(--dm-section)]/50 dark:backdrop-blur-3xl border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] relative theme-transition">
          {/* Light mode: subtle top boundary */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[var(--lm-text-main)]/[0.05] to-transparent dark:hidden pointer-events-none" />
          {/* Dark mode: dual accent boundary glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--dm-accent)]/40 to-transparent hidden dark:block" />
          {/* Ambient orb accents */}
          <div className="absolute top-[30%] left-[10%] w-72 h-72 bg-[var(--lm-accent)]/5 rounded-full blur-3xl ambient-float-fast dark:hidden pointer-events-none" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[var(--dm-accent-secondary)]/8 rounded-full blur-3xl ambient-float-mid hidden dark:block pointer-events-none" />
          <div className="container mx-auto px-6 md:px-[10%]">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
              className="mb-16 grid md:grid-cols-2 gap-8 items-end"
            >
              <div>
                <SectionLabel text="Program Line 03" />
                <h2 className="text-4xl md:text-5xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] tracking-tighter uppercase leading-tight">
                  Career Tech <span className="font-bold">Bootcamps.</span>
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light text-base leading-relaxed">
                  2–3 month intensive cohorts. Real projects, portfolio outcomes, and career orientation.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  {["Project-based", "Portfolio outcome", "Career-oriented", "2–3 months"].map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
              className="flex flex-col"
            >
              {careerPayConfig.map((course, i) => (
                <motion.div
                  key={course.id} variants={fadeIn}
                  onMouseEnter={() => setCourseName(course.name)}
                  onMouseLeave={() => setCourseName(null)}
                  className="group relative border-b border-[var(--lm-text-main)]/5 dark:border-[var(--dm-soft-line)] py-10 md:py-14 transition-all duration-500 hover:bg-[var(--lm-text-main)]/[0.025] dark:hover:bg-white/[0.02]"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0 bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)] group-hover:w-1 transition-all duration-500" />
                  <div className="grid md:grid-cols-12 gap-6 items-center pl-6 md:pl-10">
                    <div className="md:col-span-1">
                      <span className="text-2xl font-light text-[var(--lm-text-main)]/20 dark:text-[var(--dm-text-main)]/20 group-hover:text-[var(--lm-text-main)]/60 dark:group-hover:text-white/60 transition-colors">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] group-hover:text-[var(--lm-accent)] dark:text-[var(--dm-accent)] transition-colors leading-tight">
                        {course.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-xs uppercase tracking-widest text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-semibold">
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed text-sm">{course.description}</p>
                    </div>
                    <div className="md:col-span-3 flex flex-col items-start gap-3">
                      <span className="text-xl font-black text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">₦{course.priceNGN.toLocaleString()}</span>
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all"
                      >
                        Enroll & Pay
                        <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

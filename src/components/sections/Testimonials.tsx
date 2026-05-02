"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";
import { fadeIn, staggerContainer } from "@/lib/motion";

export const Testimonials = () => {
  return (
    /* lm-section — one rung below ProductLines (section-strong), creating alternating rhythm */
    <section id="testimonials" className="py-32 bg-[var(--lm-section)] dark:bg-[var(--dm-section)]/50 dark:backdrop-blur-3xl relative z-10 overflow-hidden theme-transition">
      {/* blueprint cross-hatch — lighter stroke in light mode */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.35] dark:opacity-100 theme-transition"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40h40V0z' fill='none' stroke='rgba(11,12,29,0.05)' stroke-width='1'/%3E%3C/svg%3E\")" }}
      />
      {/* Ambient orbs — light mode */}
      <div className="absolute top-[15%] right-[10%] w-80 h-80 bg-[var(--lm-accent-secondary)]/4 rounded-full blur-3xl ambient-float-slow dark:hidden pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-[var(--lm-accent)]/5 rounded-full blur-3xl ambient-float-mid dark:hidden pointer-events-none" />
      {/* Ambient orbs — dark mode */}
      <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-[var(--dm-accent)]/8 rounded-full blur-3xl ambient-float-slow hidden dark:block pointer-events-none" />
      <div className="absolute bottom-[25%] right-[10%] w-80 h-80 bg-[var(--dm-accent-secondary)]/6 rounded-full blur-3xl ambient-float-mid hidden dark:block pointer-events-none" />
      {/* section boundary markers — gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--lm-text-main)]/10 via-[var(--dm-accent)]/25 to-transparent theme-transition" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--lm-text-main)]/10 via-[var(--dm-accent)]/25 to-transparent theme-transition" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="mb-24 flex items-center gap-6">
            <div className="h-px w-24 bg-gradient-to-r from-[var(--lm-accent)] to-[var(--lm-accent-secondary)] dark:from-[var(--dm-accent)] dark:to-[var(--dm-accent-secondary)] theme-transition" />
            <h2 className="text-sm font-semibold tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] uppercase theme-transition">
              Intercepted Feedback
            </h2>
          </div>

          <div className="flex flex-col gap-32">
            {testimonials.map((t, i) => (
              <motion.div
                key={i} variants={fadeIn}
                className={`relative flex flex-col ${i % 2 !== 0 ? "md:items-end text-right" : "md:items-start text-left"}`}
              >
                <div className={`absolute top-[-3rem] ${i % 2 !== 0 ? "right-0" : "left-0"} text-[10rem] font-serif text-[var(--lm-text-main)]/5 dark:text-[var(--dm-text-main)]/5 leading-none select-none pointer-events-none theme-transition`}>
                  "
                </div>

                <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] leading-[1.2] max-w-4xl tracking-tight mb-8">
                  {t.quote.split(" ").map((word, idx) => (
                    <span
                      key={idx}
                      className={`inline-block mr-3 ${idx % 3 === 0 ? "text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]" : "text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]"} theme-transition hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)]`}
                    >
                      {word}
                    </span>
                  ))}
                </h3>

                <div className={`flex items-center gap-6 ${i % 2 !== 0 ? "flex-row-reverse" : "flex-row"}`}>
                  <div className="w-16 h-px bg-gradient-to-r from-[var(--lm-text-main)]/25 to-[var(--lm-accent)]/40 dark:from-white/20 dark:to-[var(--dm-accent)] theme-transition" />
                  <div>
                    <p className="text-lg font-medium text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase tracking-widest theme-transition">{t.name}</p>
                    <p className="text-sm text-[var(--lm-accent)] dark:text-[var(--dm-accent)] uppercase tracking-widest mt-1 theme-transition">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { slideInLeft, staggerContainer, fadeIn } from "@/lib/motion";

export const About = () => {
  return (
    /* Sits at lm-base — the page skeleton. Lightest surface, resting beat. */
    <section id="about" className="py-32 bg-[var(--lm-base)] dark:bg-[#02040a] relative z-10 overflow-hidden border-t border-[var(--lm-ink)]/5 dark:border-white/5 transition-colors duration-500">
      {/* Light mode: very faint right-side bloom to mirror hero's left/right rhythm */}
      <div className="absolute top-0 right-0 w-[40%] h-[70%] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.05)_0%,transparent_65%)] dark:hidden pointer-events-none" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft}
            className="lg:col-span-8"
          >
            <div className="mb-12 flex items-center gap-6">
              <div className="h-px w-24 bg-[var(--lm-ink)]/20 dark:bg-white/20 transition-colors duration-500" />
              <h2 className="text-sm font-semibold tracking-[0.3em] text-[var(--color-brand-sky)] uppercase">The Directive</h2>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-[var(--lm-ink)] dark:text-white leading-[1.05] uppercase transition-colors duration-500">
              Theory is dead. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-ink)]/70 to-[var(--lm-ink)]/20 dark:from-white/70 dark:to-white/20 transition-all duration-500">We build operators.</span>
            </h3>

            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <p className="text-[var(--lm-body)]/65 dark:text-white/50 text-lg font-light leading-relaxed transition-colors duration-500">
                EPHAD operates on a fundamentally different paradigm. We strip away academic bloat, focusing entirely on high-impact technical execution. Our labs mirror production environments.
              </p>
              <p className="text-[var(--lm-body)]/65 dark:text-white/50 text-lg font-light leading-relaxed transition-colors duration-500">
                If you are looking for easy certifications, look elsewhere. We exist to forge Africa's most lethal engineers, designers, and systems architects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="lg:col-span-4 flex flex-col gap-10 lg:pl-12 border-l border-[var(--lm-ink)]/8 dark:border-white/5 lg:py-8 transition-colors duration-500"
          >
            {[
              { val: "10+", label: "Years in Production" },
              { val: "100%", label: "Practical Application" },
              { val: "O.S.", label: "Open Source Ethos" }
            ].map((m, i) => (
              <motion.div key={i} variants={fadeIn} className="group cursor-default">
                <div className="text-5xl lg:text-6xl font-light text-[var(--lm-ink)] dark:text-white group-hover:text-[var(--color-brand-sky)] transition-colors tracking-tighter duration-500">
                  {m.val}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] font-medium text-[var(--lm-body)]/50 dark:text-white/40 transition-colors duration-500">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

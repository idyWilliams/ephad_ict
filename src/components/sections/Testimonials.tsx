"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";
import { fadeIn, staggerContainer } from "@/lib/motion";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-[var(--lm-panel)] dark:bg-[#050505] relative z-10 overflow-hidden transition-colors duration-500">
      {/* Subtle blueprint grid – adapts tone per theme */}
      <div className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNSwgMTcsIDMzLCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="mb-24 flex items-center gap-6">
            <div className="h-px w-24 bg-[var(--color-brand-sky)]" />
            <h2 className="text-sm font-semibold tracking-[0.3em] text-[var(--lm-body)]/50 dark:text-white/50 uppercase transition-colors duration-500">
              Intercepted Feedback
            </h2>
          </div>

          <div className="flex flex-col gap-32">
            {testimonials.map((t, i) => (
              <motion.div
                key={i} variants={fadeIn}
                className={`relative flex flex-col ${i % 2 !== 0 ? "md:items-end text-right" : "md:items-start text-left"}`}
              >
                <div className={`absolute top-[-3rem] ${i % 2 !== 0 ? "right-0" : "left-0"} text-[10rem] font-serif text-[var(--lm-ink)]/5 dark:text-white/5 leading-none select-none pointer-events-none transition-colors duration-500`}>
                  "
                </div>

                <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-[var(--lm-ink)] dark:text-white leading-[1.2] max-w-4xl tracking-tight mb-8">
                  {t.quote.split(" ").map((word, idx) => (
                    <span
                      key={idx}
                      className={`inline-block mr-3 ${idx % 3 === 0 ? "text-[var(--lm-ink)] dark:text-white" : "text-[var(--lm-body)]/60 dark:text-white/60"} transition-colors duration-1000 hover:text-[var(--color-brand-sky)] dark:hover:text-[var(--color-brand-sky)]`}
                    >
                      {word}
                    </span>
                  ))}
                </h3>

                <div className={`flex items-center gap-6 ${i % 2 !== 0 ? "flex-row-reverse" : "flex-row"}`}>
                  <div className="w-16 h-px bg-[var(--lm-ink)]/20 dark:bg-white/20 transition-colors duration-500" />
                  <div>
                    <p className="text-lg font-medium text-[var(--lm-ink)] dark:text-white uppercase tracking-widest transition-colors duration-500">{t.name}</p>
                    <p className="text-sm text-[var(--color-brand-sky)] uppercase tracking-widest mt-1">{t.role}</p>
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

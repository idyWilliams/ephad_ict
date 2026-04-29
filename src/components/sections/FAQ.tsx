"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data";
import { Plus, X } from "lucide-react";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    /* lm-section-strong — same depth as ProductLines, anchors this important section */
    <section id="faq" className="py-32 bg-[var(--lm-section-strong)] dark:bg-[var(--dm-section)]/50 dark:backdrop-blur-3xl relative z-10 overflow-hidden theme-transition">
      {/* Ambient orbs — light mode */}
      <div className="absolute top-[20%] left-[5%] w-72 h-72 bg-[var(--lm-accent-secondary)]/4 rounded-full blur-3xl ambient-float-mid dark:hidden pointer-events-none" />
      {/* Ambient orbs — dark mode */}
      <div className="absolute bottom-[15%] right-[5%] w-96 h-96 bg-[var(--dm-accent)]/8 rounded-full blur-3xl ambient-float-slow hidden dark:block pointer-events-none" />
      <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-[var(--dm-accent-secondary)]/6 rounded-full blur-3xl ambient-float-mid hidden dark:block pointer-events-none" />
      {/* top/bottom boundary lines — gradient accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--lm-text-main)]/12 via-[var(--dm-accent)]/30 to-transparent theme-transition" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--lm-text-main)]/12 via-[var(--dm-accent)]/30 to-transparent theme-transition" />
      {/* subtle inner-shadow top */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[var(--lm-text-main)]/[0.05] to-transparent dark:hidden pointer-events-none" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="lg:col-span-4"
          >
            <h2 className="text-xs font-semibold tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] uppercase mb-4 theme-transition">Intelligence</h2>
            <h3 className="text-4xl md:text-5xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase tracking-tighter leading-tight theme-transition">
              Parameters & <br /><span className="font-bold">Protocols</span>
            </h3>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:col-span-8 flex flex-col"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i} variants={fadeIn}
                  className="border-b border-[var(--lm-text-main)]/12 dark:border-[var(--dm-soft-line)] transition-colors duration-500"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left py-8 flex items-center justify-between group"
                  >
                    <span className={cn(
                      "text-xl md:text-2xl font-light tracking-wide transition-colors duration-300 pr-8",
                      isOpen
                        ? "text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]"
                        : "text-[var(--lm-text-muted)]/55 dark:text-[var(--dm-text-main)]/50 group-hover:text-[var(--lm-accent)] dark:group-hover:text-[var(--dm-accent)]"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "transition-transform duration-500 flex-shrink-0",
                      isOpen
                        ? "text-[var(--lm-accent)] dark:text-[var(--dm-accent)] rotate-90"
                        : "text-[var(--lm-text-muted)]/30 dark:text-[var(--dm-text-main)]/30 group-hover:text-[var(--lm-accent)] dark:group-hover:text-[var(--dm-accent)]"
                    )}>
                      {isOpen ? <X size={24} /> : <Plus size={24} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] text-lg font-light leading-relaxed max-w-3xl theme-transition">
                          {faq.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
    <section id="faq" className="py-32 bg-[var(--lm-band)] dark:bg-[#02040a] relative z-10 border-t border-[var(--lm-ink)]/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="lg:col-span-4"
          >
            <h2 className="text-xs font-semibold tracking-[0.3em] text-[var(--color-brand-sky)] uppercase mb-4">Intelligence</h2>
            <h3 className="text-4xl md:text-5xl font-light text-[var(--lm-ink)] dark:text-white uppercase tracking-tighter leading-tight transition-colors duration-500">
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
                  className="border-b border-[var(--lm-ink)]/10 dark:border-white/10 transition-colors duration-500"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left py-8 flex items-center justify-between group"
                  >
                    <span className={cn(
                      "text-xl md:text-2xl font-light tracking-wide transition-colors duration-300 pr-8",
                      isOpen ? "text-[var(--lm-ink)] dark:text-white" : "text-[var(--lm-body)]/50 dark:text-white/50 group-hover:text-[var(--lm-ink)] dark:group-hover:text-white"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "transition-transform duration-500",
                      isOpen ? "text-[var(--lm-ink)] dark:text-white rotate-90" : "text-[var(--lm-body)]/30 dark:text-white/30 group-hover:text-[var(--lm-ink)] dark:group-hover:text-white"
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
                        <div className="pb-8 text-[var(--lm-body)]/60 dark:text-white/50 text-lg font-light leading-relaxed max-w-3xl transition-colors duration-500">
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

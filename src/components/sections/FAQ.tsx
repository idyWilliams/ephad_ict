"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data";
import { Plus, Minus } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#0a0f1c] relative z-10">
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="text-[var(--color-brand-sky)] font-semibold tracking-widest uppercase text-xs mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto flex flex-col gap-4"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className={cn(
                  "relative rounded-3xl border transition-all duration-500 overflow-hidden",
                  isOpen ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]" : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                )}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between"
                >
                  <span className="text-lg font-medium text-white tracking-wide pr-8">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                    isOpen ? "bg-[var(--color-brand-sky)] text-white" : "bg-white/10 text-white/60"
                  )}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-8 text-white/60 font-light leading-relaxed">
                        {faq.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

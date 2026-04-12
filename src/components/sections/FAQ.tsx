"use client";

import { motion } from "framer-motion";
import { faqs } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeIn } from "@/lib/motion";

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
          >
            <span className="text-[var(--color-brand-blue)] font-semibold tracking-wider uppercase text-sm mb-4 block">Got Questions?</span>
            <h2 className="text-4xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-[var(--color-brand-navy)]/10">
                <AccordionTrigger className="text-left text-lg font-medium text-[var(--color-brand-navy)] hover:text-[var(--color-brand-blue)] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                  {faq.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

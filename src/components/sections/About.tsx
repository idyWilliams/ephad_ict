"use client";

import { motion } from "framer-motion";
import { slideInLeft, staggerContainer, fadeIn } from "@/lib/motion";

export const About = () => {
  return (
    <section id="about" className="py-32 bg-[#DFDED8] dark:bg-[#02040a] relative z-10 overflow-hidden border-t border-[#1C1C18]/5 dark:border-white/5 transition-colors duration-500">
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-brand-blue)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Huge Manifesto Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="lg:col-span-8"
          >
            <div className="mb-12 flex items-center gap-6">
               <div className="h-px w-24 bg-[#1C1C18]/20 dark:bg-white/20 transition-colors duration-500" />
               <h2 className="text-sm font-semibold tracking-[0.3em] text-[var(--color-brand-sky)] uppercase">
                 The Directive
               </h2>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-[#1C1C18] dark:text-white leading-[1.05] uppercase transition-colors duration-500">
              Theory is dead. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C1C18]/70 to-[#1C1C18]/20 dark:from-white/70 dark:to-white/20 transition-all duration-500">We build operators.</span>
            </h3>

            <div className="mt-16 grid md:grid-cols-2 gap-12">
               <p className="text-[#1C1C18]/50 dark:text-white/50 text-lg font-light leading-relaxed transition-colors duration-500">
                 EPHAD operates on a fundamentally different paradigm. We strip away academic bloat, focusing entirely on high-impact technical execution. Our labs mirror production environments. 
               </p>
               <p className="text-[#1C1C18]/50 dark:text-white/50 text-lg font-light leading-relaxed transition-colors duration-500">
                 If you are looking for easy certifications, look elsewhere. We exist to forge Africa's most lethal engineers, designers, and systems architects.
               </p>
            </div>
          </motion.div>

          {/* Right Column: Architectural Metrics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-4 flex flex-col gap-10 lg:pl-12 border-l border-[#1C1C18]/5 dark:border-white/5 lg:py-8 transition-colors duration-500"
          >
            {[
              { val: "10+", label: "Years in Production" },
              { val: "100%", label: "Practical Application" },
              { val: "O.S.", label: "Open Source Ethos" }
            ].map((m, i) => (
              <motion.div key={i} variants={fadeIn} className="group cursor-default">
                <div className="text-5xl lg:text-6xl font-light text-[#1C1C18] dark:text-white group-hover:text-[var(--color-brand-sky)] dark:group-hover:text-[var(--color-brand-sky)] transition-colors tracking-tighter duration-500">
                  {m.val}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] font-medium text-[#1C1C18]/40 dark:text-white/40 transition-colors duration-500">
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "@/data";
import { toast } from "sonner";
import { fadeIn, slideInLeft } from "@/lib/motion";

export const CTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Application received. Welcome to the frontier.");
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section id="register" className="relative min-h-[90svh] bg-[var(--lm-accent)] dark:bg-[#02040a] flex items-center border-t border-[var(--lm-ink)]/10 dark:border-white/10 z-10 overflow-hidden transition-colors duration-500">

      {/* Structural center line */}
      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[var(--lm-ink)]/5 dark:bg-white/5 hidden lg:block transition-colors duration-500" />

      {/* Light mode atmosphere — soft blue bloom behind the CTA */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-[var(--color-brand-sky)]/[0.06] rounded-full blur-[150px] pointer-events-none dark:hidden" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left Text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft}
            className="text-[var(--lm-ink)] dark:text-white transition-colors duration-500"
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              The <br />Next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-sky)] to-[var(--lm-ink)] dark:to-white transition-all duration-500">Move.</span>
            </h2>
            <p className="text-xl text-[var(--lm-body)]/60 dark:text-white/50 font-light max-w-sm mb-12 transition-colors duration-500">
              Stop consuming. Start shipping. Secure your place in our next engineering cohort.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[var(--lm-ink)]/20 dark:bg-white/20 transition-colors duration-500" />
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--lm-body)]/60 dark:text-white/60 transition-colors duration-500">No fluff. Just execution.</span>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="w-full lg:pl-10"
          >
            <form onSubmit={onSubmit} className="flex flex-col gap-12">
              <div className="relative group">
                <input required placeholder="LEGAL NAME"
                  className="w-full bg-transparent border-0 border-b border-[var(--lm-ink)]/20 dark:border-white/20 text-[var(--lm-ink)] dark:text-white placeholder-[var(--lm-body)]/30 dark:placeholder-white/30 rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-ink)] dark:focus:border-white transition-all text-xl font-light uppercase tracking-widest" />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <input required type="tel" placeholder="PHONE NUMBER"
                  className="bg-transparent border-0 border-b border-[var(--lm-ink)]/20 dark:border-white/20 text-[var(--lm-ink)] dark:text-white placeholder-[var(--lm-body)]/30 dark:placeholder-white/30 rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-ink)] dark:focus:border-white transition-all text-xl font-light uppercase tracking-widest" />
                <input required type="email" placeholder="EMAIL ADDRESS"
                  className="bg-transparent border-0 border-b border-[var(--lm-ink)]/20 dark:border-white/20 text-[var(--lm-ink)] dark:text-white placeholder-[var(--lm-body)]/30 dark:placeholder-white/30 rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-ink)] dark:focus:border-white transition-all text-xl font-light uppercase tracking-widest" />
              </div>

              <div className="relative group">
                <select required defaultValue=""
                  className="w-full bg-transparent border-0 border-b border-[var(--lm-ink)]/20 dark:border-white/20 text-[var(--lm-ink)] dark:text-white rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-ink)] dark:focus:border-white transition-all text-xl font-light uppercase tracking-widest appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[var(--lm-accent)] dark:bg-[#1C1C18] text-[var(--lm-body)]/50 dark:text-white/50">SELECT TRACK</option>
                  {courses.map(c => (
                    <option key={c.id} value={c.id} className="bg-[var(--lm-accent)] dark:bg-[#1C1C18] text-[var(--lm-ink)] dark:text-white uppercase">{c.title}</option>
                  ))}
                </select>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="group relative w-full h-20 bg-[var(--lm-ink)] dark:bg-white text-white dark:text-black mt-8 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b30] to-[var(--lm-ink)] dark:from-gray-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-2xl font-black uppercase tracking-tighter">
                  {isSubmitting ? "Processing" : "Initialize"}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
    /* lm-elevated — the deepest, most prestigious surface. Premium focal point. */
    <section id="register" className="relative min-h-[90svh] bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] flex items-center z-10 overflow-hidden transition-colors duration-500">

      {/* Structural center line */}
      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[var(--lm-text-main)]/5 dark:bg-white/5 hidden lg:block" />

      {/* Dark mode ambient radial gradient */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_bottom_left,var(--dm-accent-soft)_0%,transparent_70%)]" />

      {/* Light mode volumetric atmosphere */}
      <div className="absolute inset-0 dark:hidden pointer-events-none">
        {/* Soft diagonal gradient from lm-accent-soft into transparent */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--lm-accent-soft)_0%,transparent_60%)]" />
        {/* top-right corner bloom — to keep consistency with the brand feel */}
        <div className="absolute top-[-15%] right-[-8%] w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,var(--lm-accent-soft)_0%,transparent_60%)]" />
      </div>

      {/* Boundary line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--lm-text-main)]/12 dark:border-[var(--dm-soft-line)]" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft}
            className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] transition-colors duration-500"
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              The <br />Next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-accent)] to-[var(--lm-text-main)] dark:to-white transition-all duration-500">Move.</span>
            </h2>
            <p className="text-xl text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light max-w-sm mb-12 transition-colors duration-500">
              Stop consuming. Start shipping. Secure your place in our next engineering cohort.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[var(--lm-text-main)]/20 dark:bg-white/20 transition-colors duration-500" />
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] transition-colors duration-500">No fluff. Just execution.</span>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="w-full lg:pl-10"
          >
            <form onSubmit={onSubmit} className="flex flex-col gap-12">
              <div className="relative group">
                <input required placeholder="LEGAL NAME"
                  className="w-full bg-transparent border-0 border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] placeholder-[var(--lm-text-muted)]/30 dark:placeholder-white/30 rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-text-main)] dark:focus:border-white transition-all text-xl font-light uppercase tracking-widest" />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <input required type="tel" placeholder="PHONE NUMBER"
                  className="bg-transparent border-0 border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] placeholder-[var(--lm-text-muted)]/30 dark:placeholder-white/30 rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-text-main)] dark:focus:border-white transition-all text-xl font-light uppercase tracking-widest" />
                <input required type="email" placeholder="EMAIL ADDRESS"
                  className="bg-transparent border-0 border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] placeholder-[var(--lm-text-muted)]/30 dark:placeholder-white/30 rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-text-main)] dark:focus:border-white transition-all text-xl font-light uppercase tracking-widest" />
              </div>

              <div className="relative group">
                <select required defaultValue=""
                  className="w-full bg-[var(--lm-elevated)] dark:bg-transparent border-0 border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-text-main)] dark:focus:border-white transition-all text-xl font-light uppercase tracking-widest appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[var(--lm-elevated)] dark:bg-[var(--lm-text-main)] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">SELECT TRACK</option>
                  {courses.map(c => (
                    <option key={c.id} value={c.id} className="bg-[var(--lm-elevated)] dark:bg-[var(--lm-text-main)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase">{c.title}</option>
                  ))}
                </select>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="group relative w-full h-20 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-black mt-8 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-lg dark:shadow-none btn-glow-dark"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b30] to-[var(--lm-text-main)] dark:from-gray-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity" />
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

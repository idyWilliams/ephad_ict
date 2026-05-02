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
    <section id="register" className="relative min-h-[90svh] bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)]/60 dark:backdrop-blur-2xl flex items-center z-10 overflow-hidden theme-transition">

      {/* Structural center line */}
      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[var(--lm-text-main)]/5 dark:bg-white/5 hidden lg:block theme-transition" />

      {/* Dark mode ambient radial gradient with secondary teal accent */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_bottom_left,var(--dm-accent-soft)_0%,transparent_70%)]" />
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.06)_0%,transparent_60%)]" />

      {/* Light mode volumetric atmosphere with jade accent */}
      <div className="absolute inset-0 dark:hidden pointer-events-none">
        {/* Soft diagonal gradient from lm-accent-soft */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--lm-accent-soft)_0%,transparent_60%)]" />
        {/* Top-right corner bloom */}
        <div className="absolute top-[-15%] right-[-8%] w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,var(--lm-accent-soft)_0%,transparent_60%)]" />
        {/* Subtle jade accent bottom-left */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.04)_0%,transparent_70%)] ambient-float-slow" />
      </div>

      {/* Dark mode animated orbs */}
      <div className="absolute inset-0 hidden dark:block overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-96 h-96 bg-[var(--dm-accent)]/8 rounded-full blur-3xl ambient-float-slow pointer-events-none" />
        <div className="absolute bottom-[10%] right-[20%] w-80 h-80 bg-[var(--dm-accent-secondary)]/6 rounded-full blur-3xl ambient-float-mid pointer-events-none" />
      </div>

      {/* Boundary line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--lm-text-main)]/15 via-[var(--dm-accent)]/30 to-transparent theme-transition" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft}
            className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] theme-transition"
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              The <br />Next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-accent)] to-[var(--lm-text-main)] dark:from-[var(--dm-accent)] dark:to-[var(--dm-text-main)] transition-all duration-500">Move.</span>
            </h2>
            <p className="text-xl text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light max-w-sm mb-12 theme-transition">
              Stop consuming. Start shipping. Secure your place in our next engineering cohort.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-[var(--lm-text-main)]/30 to-[var(--lm-accent)]/50 dark:from-white/20 dark:to-[var(--dm-accent)] theme-transition" />
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] theme-transition">No fluff. Just execution.</span>
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
                  className="w-full bg-transparent border-0 border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] placeholder-[var(--lm-text-muted)]/30 dark:placeholder-white/30 rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-accent)] dark:focus:border-[var(--dm-accent)] transition-all text-xl font-light uppercase tracking-widest border-glow" />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <input required type="tel" placeholder="PHONE NUMBER"
                  className="bg-transparent border-0 border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] placeholder-[var(--lm-text-muted)]/30 dark:placeholder-white/30 rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-accent)] dark:focus:border-[var(--dm-accent)] transition-all text-xl font-light uppercase tracking-widest border-glow" />
                <input required type="email" placeholder="EMAIL ADDRESS"
                  className="bg-transparent border-0 border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] placeholder-[var(--lm-text-muted)]/30 dark:placeholder-white/30 rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-accent)] dark:focus:border-[var(--dm-accent)] transition-all text-xl font-light uppercase tracking-widest border-glow" />
              </div>

              <div className="relative group">
                <select required defaultValue=""
                  className="w-full bg-[var(--lm-elevated)] dark:bg-transparent border-0 border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] rounded-none h-14 px-0 focus:outline-none focus:ring-0 focus:border-[var(--lm-accent)] dark:focus:border-[var(--dm-accent)] transition-all text-xl font-light uppercase tracking-widest appearance-none cursor-pointer border-glow"
                >
                  <option value="" disabled className="bg-[var(--lm-elevated)] dark:bg-[var(--lm-text-main)] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">SELECT TRACK</option>
                  {courses.map(c => (
                    <option key={c.id} value={c.id} className="bg-[var(--lm-elevated)] dark:bg-[var(--lm-text-main)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase">{c.title}</option>
                  ))}
                </select>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="group relative w-full h-20 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-black mt-8 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-lg dark:shadow-none btn-glow-light dark:btn-glow-dark"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--lm-accent)] to-[var(--lm-text-main)] dark:from-[var(--dm-accent)] dark:to-white opacity-0 group-hover:opacity-100 transition-opacity" />
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

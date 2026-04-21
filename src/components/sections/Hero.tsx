"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] bg-[var(--lm-section)] dark:bg-transparent text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] overflow-hidden flex flex-col justify-end pt-32 pb-12 transition-colors duration-500">

      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
          alt="Tech background"
          fill
          className="object-cover mix-blend-multiply dark:mix-blend-luminosity grayscale-[20%] dark:grayscale-[50%] opacity-12 dark:opacity-30"
          priority
        />
        {/* Dark mode: radial overlay using dm-accent-soft as requested */}
        <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_center,var(--dm-accent-soft)_0%,transparent_70%)]" />

        {/* Dark mode gradient bleeds */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-t from-[var(--dm-base)] via-[var(--dm-base)]/80 to-transparent" />
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-r from-[var(--dm-base)] via-transparent to-[var(--dm-base)]" />

        {/* Light mode: very soft diagonal gradient from lm-accent-soft into transparent */}
        <div className="absolute inset-0 dark:hidden bg-[linear-gradient(135deg,var(--lm-accent-soft)_0%,transparent_60%)]" />
        <div className="absolute inset-0 dark:hidden">
          {/* Base bleed gradient to blend image into the surface */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--lm-section)] via-[var(--lm-section)]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--lm-section)] via-transparent to-[var(--lm-section)]/60" />
        </div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-[var(--lm-soft-line)] dark:bg-[var(--dm-soft-line)] transition-colors duration-500" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-[var(--lm-soft-line)] dark:bg-[var(--dm-soft-line)] transition-colors duration-500" />
        <div className="absolute top-[30%] left-0 right-0 h-px bg-[var(--lm-soft-line)] dark:bg-[var(--dm-soft-line)] transition-colors duration-500" />
      </div>

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] transition-colors duration-500">
            EPHAD ICT Academy
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] drop-shadow-2xl transition-colors duration-500"
          initial={{ opacity: 0, y: 120, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Forge The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-text-main)] via-[var(--lm-text-main)]/75 to-[var(--lm-text-main)]/20 dark:from-[var(--dm-text-main)] dark:via-[var(--dm-text-main)] dark:to-[var(--dm-text-main)]/20 transition-all duration-500">
            Digital Era.
          </span>
        </motion.h1>

        {/* Sub-layout */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-8 md:gap-16 items-end">

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <p className="text-lg md:text-xl text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-medium leading-relaxed max-w-sm transition-colors duration-500">
              We engineer talent. No standard classrooms—just intensive, real-world execution designed to build Africa's finest tech operators.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <div className="flex flex-col gap-1 border-l border-[var(--lm-accent)] dark:border-[var(--dm-accent)] pl-6">
              <span className="text-3xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] transition-colors duration-500">Kubwa, Abuja</span>
              <span className="text-sm font-medium uppercase tracking-widest text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] transition-colors duration-500">Headquarters</span>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3 flex md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
          >
            <Link
              href="#courses"
              className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] bg-[var(--lm-text-main)]/5 dark:bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:bg-[var(--lm-text-main)] hover:border-[var(--lm-text-main)] dark:hover:bg-white dark:hover:border-white shadow-lg dark:shadow-none"
            >
              <ArrowDownRight className="w-8 h-8 text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] group-hover:text-white dark:group-hover:text-[var(--color-brand-navy)] transition-colors" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

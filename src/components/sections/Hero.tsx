"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] bg-[#F4F3EF] dark:bg-[var(--color-brand-navy)] text-[#1C1C18] dark:text-white overflow-hidden flex flex-col justify-end pt-32 pb-12 transition-colors duration-500">
      
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
          alt="Tech background"
          fill
          className="object-cover mix-blend-multiply dark:mix-blend-luminosity grayscale-[20%] dark:grayscale-[50%] opacity-15 dark:opacity-30"
          priority
        />
        {/* Deep masking gradient to blend into the background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3EF] via-[#F4F3EF]/90 dark:from-[var(--color-brand-navy)] dark:via-[var(--color-brand-navy)]/80 to-transparent transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F3EF] via-transparent to-[#F4F3EF] dark:from-[var(--color-brand-navy)] dark:to-[var(--color-brand-navy)] transition-colors duration-500" />
      </div>

      {/* Grid Lines for Structural Rigidity */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-[#1C1C18]/10 dark:bg-white/5 transition-colors duration-500" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-[#1C1C18]/10 dark:bg-white/5 transition-colors duration-500" />
        <div className="absolute top-[30%] left-0 right-0 h-px bg-[#1C1C18]/10 dark:bg-white/5 transition-colors duration-500" />
      </div>

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-[var(--color-brand-sky)]" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1C1C18]/50 dark:text-white/50 transition-colors duration-500">
            EPHAD ICT Academy
          </span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1 
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase text-[#1C1C18] dark:text-white drop-shadow-2xl transition-colors duration-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Forge The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C1C18] via-[#1C1C18]/80 to-[#1C1C18]/20 dark:from-white dark:via-white dark:to-white/20 transition-all duration-500">
            Digital Era.
          </span>
        </motion.h1>

        {/* Sub-layout: Asymmetrical block */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-8 md:gap-16 items-end">
          
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-[#1C1C18]/70 dark:text-white/60 font-medium dark:font-light leading-relaxed max-w-sm transition-colors duration-500">
              We engineer talent. No standard classrooms—just intensive, real-world execution designed to build Africa’s finest tech operators.
            </p>
          </motion.div>

          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex flex-col gap-1 border-l border-[var(--color-brand-sky)] pl-6">
               <span className="text-3xl font-light text-[#1C1C18] dark:text-white transition-colors duration-500">Kubwa, Abuja</span>
               <span className="text-sm font-medium uppercase tracking-widest text-[#1C1C18]/40 dark:text-white/40 transition-colors duration-500">Headquarters</span>
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
              className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-[#1C1C18]/20 dark:border-white/20 bg-[#1C1C18]/5 dark:bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:bg-[#1C1C18] hover:border-[#1C1C18] dark:hover:bg-white dark:hover:border-white"
            >
              <ArrowDownRight className="w-8 h-8 text-[#1C1C18] dark:text-white group-hover:text-white dark:group-hover:text-[var(--color-brand-navy)] transition-colors" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

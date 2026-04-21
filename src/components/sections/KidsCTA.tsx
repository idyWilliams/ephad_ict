"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { fadeIn } from "@/lib/motion";

export const KidsCTA = () => {
  return (
    <section className="py-24 bg-[var(--lm-section)] dark:bg-[var(--dm-section)]/40 dark:backdrop-blur-3xl relative z-10 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="relative rounded-[2.5rem] overflow-hidden group border border-[#1C1C18]/10 dark:border-[var(--dm-soft-line)] bg-[var(--lm-elevated)] dark:bg-transparent transition-colors duration-500"
        >
          {/* Subtle Background Layer */}
          <div className="absolute inset-0 z-0">
             <Image 
               src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
               alt="Youth learning"
               fill
               className="object-cover opacity-[0.05] dark:opacity-20 mix-blend-multiply dark:mix-blend-luminosity grayscale transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#F4F3EF] via-[#F4F3EF]/90 dark:from-[#090b18] dark:via-[#090b18]/90 to-transparent transition-colors duration-500" />
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1C1C18]/60 dark:text-[var(--dm-text-main)]/60">For Parents & Guardians</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-light text-[#1C1C18] dark:text-[var(--dm-text-main)] tracking-tight leading-[1.1] mb-6">
                Discover the <span className="font-bold">Youth Academy.</span>
              </h3>
              <p className="text-lg text-[#1C1C18]/60 dark:text-[var(--dm-text-main)]/60 font-light leading-relaxed">
                Structured ICT fundamentals, coding, and web design tracks exclusively engineered for children and teenagers. Prepare them early for the digital frontier.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link 
                href="/kids-teens"
                className="group/btn relative inline-flex items-center justify-center gap-4 h-16 px-10 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-[var(--dm-base)] font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a24] to-[#1C1C18] dark:from-gray-200 dark:to-white opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <span className="relative">Explore Programs</span>
                <ArrowRight size={18} className="relative group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

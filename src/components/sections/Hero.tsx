"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Star, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { slowFadeIn, staggerContainer, floatAnimation, floatAnimationSlow } from "@/lib/motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0d1224] pt-24 pb-20">
      {/* Immersive Lighting Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full bg-gradient-to-br from-[var(--color-brand-blue)]/30 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[60%] rounded-full bg-gradient-to-tl from-[var(--color-brand-sky)]/20 to-transparent blur-[130px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-50 transition-opacity" />

      <div className="container mx-auto px-6 md:px-12 z-10 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content Area: Asymmetrical weighting */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="col-span-1 lg:col-span-7 text-white"
        >
          <motion.div variants={slowFadeIn} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <Sparkles className="w-4 h-4 text-[var(--color-brand-sky)]" />
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase text-xs">Transforming Tech Education</span>
          </motion.div>

          <motion.h1 variants={slowFadeIn} className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight mb-8 leading-[1.05]">
            Master the <br />
            <span className="relative">
              <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-[var(--color-brand-sky)] to-[#a8c7fa] opacity-30 mix-blend-screen" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-sky)] via-[#a8c7fa] to-white">Digital Frontier</span>
            </span>
          </motion.h1>

          <motion.p variants={slowFadeIn} className="text-lg md:text-xl text-white/60 mb-12 max-w-xl leading-relaxed font-light">
            EPHAD elevates ambition into expertise. Immerse yourself in our hands-on, high-intensity training programs designed to forge Nigeria's next generation of tech leaders.
          </motion.p>

          <motion.div variants={slowFadeIn} className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <Link 
              href="#courses" 
              className="group relative inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-[#0d1224] text-lg font-semibold overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center">
                Explore Programs 
                <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </Link>
            
            <div className="flex items-center gap-4 text-white/50 text-sm mt-4 sm:mt-0 font-medium tracking-wide">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0d1224] bg-white/10 relative overflow-hidden blur-[0.5px] hover:blur-none transition-all">
                    <Image 
                      src={`https://images.unsplash.com/photo-1542385151-efd9000785a0?w=100&h=100&fit=crop&q=80&ixlib=rb-4.0.3`} 
                      alt="Student" fill className="object-cover" 
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base flex items-center gap-1">500+ <Star className="w-3 h-3 fill-[var(--color-brand-sky)] text-[var(--color-brand-sky)]" /></span>
                <span className="text-xs">Successful Grads</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content Area: Floating Cinematic Elements */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-5 relative h-[500px] lg:h-[700px] w-full hidden md:block"
        >
          {/* Main Floating Media Card */}
          <motion.div 
            variants={floatAnimationSlow}
            initial="initial"
            animate="animate"
            className="absolute inset-0 lg:inset-y-10 lg:-inset-x-10 z-10"
          >
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-2">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-transparent to-transparent z-10 opacity-80" />
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                alt="Tech environment"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* Floating Trust Badge - Back */}
          <motion.div 
            variants={floatAnimation}
            initial="initial"
            animate="animate"
            className="absolute top-1/4 -right-12 z-0 bg-[#1a3673]/80 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl rotate-6"
          >
             <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-white/5">
                <Users className="text-white" size={24} />
             </div>
             <p className="text-white font-bold text-2xl">98%</p>
             <p className="text-white/60 text-xs uppercase tracking-wider font-semibold">Placement Rate</p>
          </motion.div>

          {/* Floating Action Badge - Front */}
          <motion.div 
             initial={{ y: 0 }}
             animate={{ y: [-8, 8, -8] }}
             transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
             className="absolute bottom-1/4 -left-16 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-2xl -rotate-3 group cursor-pointer hover:bg-white/20 transition-colors"
          >
             <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-brand-sky)] to-blue-600 flex items-center justify-center border-2 border-white/20">
                  <div className="absolute inset-0 rounded-full animate-ping bg-[var(--color-brand-sky)]/40" />
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Next Cohort</p>
                  <p className="text-[var(--color-brand-sky)] text-sm font-medium">Enrolling Now</p>
                </div>
             </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Subtle Web3 Deep Dive Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0f1c] to-transparent pointer-events-none" />
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { fadeIn, staggerContainer } from "@/lib/motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[var(--color-brand-navy)] pt-20">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-blue)]/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand-sky)]/20 blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-white"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-brand-sky)]"></span>
            <span className="text-sm font-medium text-white/80">Admissions Open for Next Cohort</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-sky)] to-[#a8c7fa]">Digital Generation</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            Practical tech education, hands-on learning, mentorship, and career growth at Kubwa's premier ICT academy.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <Link href="#courses" className="inline-flex items-center justify-center bg-[var(--color-brand-sky)] hover:bg-[var(--color-brand-blue)] text-white font-semibold rounded-full h-14 px-8 text-base shadow-[0_0_40px_-10px_var(--color-brand-sky)] transition-all hover:scale-105">
                Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#about" className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-white/20 hover:bg-white/5 hover:text-white text-white bg-transparent backdrop-blur-md text-base transition-all">
              Learn More
            </Link>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-12 flex items-center gap-6 text-white/50 text-sm">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-navy)] bg-gradient-to-br from-gray-700 to-gray-600 relative overflow-hidden">
                  <Image 
                    src={`https://images.unsplash.com/photo-1531123897727-8f129e1bfdd5?w=100&h=100&fit=crop&q=80&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D`} 
                    alt="Student" fill className="object-cover" 
                  />
                </div>
              ))}
            </div>
            <p>Join <span className="text-white font-medium">500+</span> graduates</p>
          </motion.div>
        </motion.div>

        {/* Right Content - Abstract Imagery/Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative lg:h-[600px] w-full hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-blue)]/20 to-[var(--color-brand-sky)]/30 rounded-[3rem] transform rotate-3 scale-105 backdrop-blur-3xl border border-white/10" />
          
          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-[#1A1A2E]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Students collaborating"
              fill
              className="object-cover opacity-80"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy)] via-transparent to-transparent opacity-80" />
            
            {/* Floating Element */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-sky)]/20 flex items-center justify-center text-[var(--color-brand-sky)]">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">100% Practical Sessions</h3>
                  <p className="text-white/60 text-sm">Build real portfolios</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Curved Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }}></div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { courses } from "@/data";
import { Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Courses = () => {
  return (
    <section id="courses" className="py-32 bg-[#0a0f1c] relative z-10">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[var(--color-brand-blue)]/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 text-xs font-semibold tracking-widest uppercase text-white/70">
                <Sparkles size={14} className="text-[var(--color-brand-sky)]" /> Curriculum
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Architect Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Tech Trajectory</span>
              </motion.h2>
            </div>
            <motion.p variants={fadeIn} className="text-white/50 text-lg max-w-sm font-light">
              Carefully curated paths designed to take you from foundational concepts to industry-grade engineering and design.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, i) => {
            const isFeatured = i === 3 || i === 8; // Highlight specific sophisticated programs
            
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2",
                  isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                )}
              >
                {/* Glass Card Surface */}
                <div className={cn(
                  "absolute inset-0 border transition-colors duration-500",
                  isFeatured 
                    ? "bg-gradient-to-br from-[#1a3673]/40 to-[#0d1224]/80 border-[var(--color-brand-sky)]/30 group-hover:border-[var(--color-brand-sky)]/50" 
                    : "bg-white/5 border-white/5 group-hover:bg-white/10 group-hover:border-white/10"
                )} />
                
                <div className="relative p-8 md:p-10 h-full flex flex-col z-10 backdrop-blur-sm">
                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-12">
                    <div className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold tracking-wider",
                      isFeatured ? "bg-[var(--color-brand-sky)] text-white" : "bg-white/5 text-white/60"
                    )}>
                      {course.duration}
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0d1224] text-white transition-all duration-500 transform group-hover:rotate-45">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <h3 className={cn(
                    "font-bold text-white mb-4 leading-tight group-hover:text-[var(--color-brand-sky)] transition-colors",
                    isFeatured ? "text-3xl md:text-5xl max-w-xl" : "text-2xl"
                  )}>
                    {course.title}
                  </h3>
                  
                  <p className="text-white/60 mb-12 flex-grow font-light leading-relaxed max-w-lg">
                    {course.description}
                  </p>

                  {/* Footer Row */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="text-xl font-medium text-white">
                      {course.price}
                    </div>
                    <Link 
                      href={`#register?course=${course.id}`} 
                      className="text-sm font-semibold text-white/80 hover:text-white pb-1 border-b border-white/30 hover:border-white transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

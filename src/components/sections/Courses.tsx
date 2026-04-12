"use client";

import { motion } from "framer-motion";
import { courses } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const Courses = () => {
  return (
    <section id="courses" className="py-32 bg-[var(--color-brand-navy)] relative z-10">
      
      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <div className="mb-24 md:flex items-end justify-between border-b border-white/10 pb-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight uppercase">
              The <span className="font-bold">Syllabus.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white/40 max-w-xs text-sm uppercase tracking-widest mt-8 md:mt-0 font-medium"
          >
            Select your discipline. Zero filler. 100% execution.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col"
        >
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              variants={fadeIn}
              className="group relative border-b border-white/10 py-10 md:py-16 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0 bg-[var(--color-brand-sky)] group-hover:w-1 transition-all duration-500" />
              
              <div className="grid md:grid-cols-12 gap-8 items-center pl-6 md:pl-10">
                
                {/* Index Number */}
                <div className="col-span-12 md:col-span-2">
                  <span className="text-2xl md:text-4xl font-light text-white/20 group-hover:text-white/80 transition-colors">
                    {(i+1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Course Title */}
                <div className="col-span-12 md:col-span-5">
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[var(--color-brand-sky)] transition-colors leading-tight">
                    {course.title}
                  </h3>
                </div>

                {/* Description & Metrics */}
                <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                  <p className="text-white/50 font-light leading-relaxed text-sm md:text-base">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-semibold text-white/30 group-hover:text-white/70 transition-colors">
                    <span>{course.duration}</span>
                    <span>{course.price}</span>
                  </div>
                </div>

                {/* Arrow Action */}
                <div className="col-span-12 md:col-span-1 flex md:justify-end">
                  <Link 
                    href={`#register?course=${course.id}`}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500"
                  >
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { courses } from "@/data";
import { Card } from "@/components/ui/card";
import { Clock, Tag, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Link from "next/link";

export const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-[var(--color-brand-steel)]/20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeIn} className="text-[var(--color-brand-blue)] font-semibold tracking-wider uppercase text-sm mb-4 block">Our Curriculum</motion.span>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-6">
              Future-Proof Your Career
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              Select from our highly curated list of intensive technical and design programs.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-none rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group bg-white relative">
                <div className="p-8 h-full flex flex-col">
                  {/* Icon/Decoration top right */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[var(--color-brand-steel)]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-brand-blue)] group-hover:text-white transition-all duration-300 text-[var(--color-brand-blue)]">
                    <ArrowUpRight size={24} />
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--color-brand-navy)] mb-4 pr-12 leading-tight group-hover:text-[var(--color-brand-blue)] transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 flex-grow">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500 font-medium">
                      <Clock size={16} className="mr-3 text-[var(--color-brand-sky)]" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 font-medium">
                      <Tag size={16} className="mr-3 text-[var(--color-brand-sky)]" />
                      {course.price}
                    </div>
                  </div>

                  <Link href={`#register?course=${course.id}`} className="inline-flex items-center justify-center w-full rounded-2xl bg-white border-2 border-[var(--color-brand-navy)]/10 text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-white transition-all duration-300 h-12">
                      Select Program
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

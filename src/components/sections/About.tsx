"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { fadeIn, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion";

export const About = () => {
  const features = [
    "Industry-experienced mentors",
    "Real-world project portfolios",
    "Conducive learning environment",
    "Post-training career support",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="relative h-[600px] rounded-3xl overflow-hidden"
          >
            {/* Main Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="African students coding" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-[var(--color-brand-navy)]/10 mix-blend-multiply" />
            </div>

            {/* Overlapping Info Box */}
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-3xl shadow-xl max-w-[240px]">
              <h3 className="text-4xl font-bold text-[var(--color-brand-blue)] mb-2">10+</h3>
              <p className="text-gray-600 text-sm font-medium">Years combined instructor experience building real tech.</p>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeIn} className="text-[var(--color-brand-blue)] font-semibold tracking-wider uppercase text-sm mb-4 block">About EPHAD</motion.span>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-6 leading-tight">
              More than just an academy. <br/> We are a launchpad.
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located in the heart of Kubwa, Abuja, EPHAD ICT Academy was built to bridge the gap between theoretical computer knowledge and actual industry demands. We don't just teach code; we teach problem-solving.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <motion.li key={idx} variants={fadeIn} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-[var(--color-brand-sky)] mr-4" size={24} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { fadeIn, slideInLeft, staggerContainer } from "@/lib/motion";

export const About = () => {
  const metrics = [
    { value: "10+", label: "Years Experience" },
    { value: "100%", label: "Practical Training" },
    { value: "50+", label: "Hiring Partners" },
  ];

  return (
    <section id="about" className="py-32 bg-[#0c1120] relative z-10 overflow-hidden">
      {/* Soft Edge Separator */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0d1224] to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Asymmetrical Image Composition */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="relative h-[650px] w-full"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-brand-sky)]/20 rounded-full blur-[100px]" />

            {/* Main Curved Image */}
            <div className="absolute inset-4 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="African students coding" 
                fill 
                className="object-cover scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1224]/80 to-transparent" />
            </div>

            {/* Overlapping Glass Metrics */}
            <div className="absolute bottom-12 left-10 right-10 flex gap-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
              {metrics.map((m, i) => (
                <div key={i} className="flex-1 text-center">
                  <div className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">{m.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest font-semibold">{m.label}</div>
                  {i < metrics.length - 1 && <div className="absolute top-1/2 -mt-4 w-px h-8 bg-white/10 right-1/3" style={{right: `${33 * (2-i)}%`}}/>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="pr-0 md:pr-12"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 text-xs font-semibold tracking-widest uppercase text-white/70">
               Our Ethos
            </motion.div>
            
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
              Engineered for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white italic font-light">Real World</span>
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg text-white/60 mb-6 leading-relaxed font-light">
              Unlike traditional academies that prioritize theory, EPHAD operates like a modern technology company. From day one, you build, break, and deploy real systems.
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-lg text-white/60 mb-12 leading-relaxed font-light">
              Located in Kubwa, Abuja, our labs are designed to mimic high-performance engineering environments. We don't just teach code; we forge elite problem-solvers.
            </motion.p>

            <motion.div variants={fadeIn}>
              <a href="#courses" className="group inline-flex items-center gap-4 text-white hover:text-[var(--color-brand-sky)] transition-colors text-lg font-medium tracking-wide">
                <span>View our methodology</span>
                <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[var(--color-brand-sky)] flex items-center justify-center transition-colors">
                  <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

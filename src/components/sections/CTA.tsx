"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "@/data";
import { toast } from "sonner";
import { fadeIn, scaleUp } from "@/lib/motion";

export const CTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      toast.success("Application received! We'll contact you within 24 hours.", {
        className: 'bg-[#0d1224] text-white border-white/20'
      });
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section id="register" className="py-32 bg-[#050813] relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Immersive Deep Blur Background Context */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-20 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c] pointer-events-none" />
      
      {/* Central Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--color-brand-blue)]/40 rounded-full blur-[200px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
          
          {/* Left Text */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
            className="lg:w-5/12 text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 text-xs font-semibold tracking-widest uppercase text-white/70">
              Join EPHAD
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight text-white">
              Claim Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-sky)] via-white to-white/50">Future.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed font-light">
              Secure your spot in our upcoming cohort. Immerse yourself in a world-class syllabus that bridges the gap between potential and mastery.
            </p>
            
            <div className="grid grid-cols-2 gap-8 text-white/80 border-t border-white/10 pt-10">
               <div>
                  <h4 className="text-sm uppercase tracking-widest font-semibold text-[var(--color-brand-sky)] mb-2">Location</h4>
                  <p className="font-light">Kubwa, Abuja</p>
               </div>
               <div>
                  <h4 className="text-sm uppercase tracking-widest font-semibold text-[var(--color-brand-sky)] mb-2">Intake</h4>
                  <p className="font-light">Rolling Admissions</p>
               </div>
            </div>
          </motion.div>

          {/* Right Floating Glass Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="lg:w-7/12 w-full relative"
          >
             {/* Secondary glow behind form */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-brand-sky)]/20 to-[var(--color-brand-blue)]/20 rounded-[3rem] blur-2xl z-0" />
             
            <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 w-full lg:ml-auto lg:max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-2">Registration Form</h3>
              <p className="text-white/50 text-sm mb-8 font-light">Enter your details and a counselor will get in touch immediately.</p>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-white/70">Full Name</label>
                    <input required placeholder="Your Legal Name" className="w-full bg-black/20 border border-white/10 text-white placeholder-white/30 rounded-xl h-14 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)] focus:border-transparent transition-all backdrop-blur-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-white/70">Phone Number</label>
                    <input required type="tel" placeholder="+234 ..." className="w-full bg-black/20 border border-white/10 text-white placeholder-white/30 rounded-xl h-14 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)] focus:border-transparent transition-all backdrop-blur-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-white/70">Email Address</label>
                  <input required type="email" placeholder="you@domain.com" className="w-full bg-black/20 border border-white/10 text-white placeholder-white/30 rounded-xl h-14 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)] focus:border-transparent transition-all backdrop-blur-sm" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-white/70">Select Program</label>
                  <select 
                    required 
                    defaultValue=""
                    className="w-full bg-black/20 border border-white/10 text-white rounded-xl h-14 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)] focus:border-transparent transition-all backdrop-blur-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0d1224] text-white">Select your specialized track...</option>
                    {courses.map(c => (
                      <option key={c.id} value={c.id} className="bg-[#0d1224] text-white">{c.title}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="group relative w-full h-14 mt-6 bg-white text-[#0d1224] rounded-xl text-lg font-bold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">{isSubmitting ? "Processing..." : "Submit Application"}</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

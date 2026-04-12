"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "@/data";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/motion";

export const CTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      toast.success("Registration received. We will contact you shortly!");
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section id="register" className="py-24 bg-[var(--color-brand-navy)] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[var(--color-brand-blue)]/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
            className="lg:w-1/2 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to start your <br />
              <span className="text-[var(--color-brand-sky)]">Tech Journey?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-md leading-relaxed">
              Fill out the form to register for your preferred course. Our admissions team will get back to you within 24 hours with details.
            </p>
            <div className="flex flex-col gap-4 text-white/60">
              <p>📍 Physical Classes available in Kubwa</p>
              <p>💻 Hybrid Options available</p>
              <p>📜 Verifiable Certification upon completion</p>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-[var(--color-brand-navy)]">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-semibold text-sm">Full Name</label>
                    <Input required placeholder="John Doe" className="bg-gray-50 border-gray-200 focus-visible:ring-[var(--color-brand-sky)] rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-semibold text-sm">Phone Number</label>
                    <Input required type="tel" placeholder="0800 000 0000" className="bg-gray-50 border-gray-200 focus-visible:ring-[var(--color-brand-sky)] rounded-xl h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-semibold text-sm">Email Address</label>
                  <Input required type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200 focus-visible:ring-[var(--color-brand-sky)] rounded-xl h-12" />
                </div>

                <div className="space-y-2">
                  <label className="font-semibold text-sm">Select Course</label>
                  <select 
                    required 
                    defaultValue=""
                    className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-sky)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>Select a program...</option>
                    {courses.map(c => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-navy)] text-white rounded-xl h-14 text-lg font-semibold transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Proceed to Registration"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

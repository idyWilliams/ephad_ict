"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";
import { Star, MessageSquareQuote } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#090d18] relative z-10 overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#1a3673]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="text-center mb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeIn} className="text-[#3b82f6] font-semibold tracking-widest uppercase text-xs mb-4 block">Proven Excellence</motion.span>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Stories of <span className="italic text-white/50 font-light">Transformation</span>
            </motion.h2>
          </motion.div>
        </div>

        {/* CSS Infinite Marquee Wrapper */}
        <div className="relative w-full overflow-hidden flex -mx-6 md:-mx-12 px-6 md:px-12 mask-edges">
          <motion.div 
            className="flex gap-8 whitespace-nowrap py-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
             {/* Render array twice for seamless loop */}
             {[...testimonials, ...testimonials].map((t, i) => (
                <div 
                  key={i} 
                  className="w-[350px] md:w-[450px] shrink-0 whitespace-normal"
                >
                  <div className="relative h-full bg-white/5 border border-white/10 rounded-3xl p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md">
                    <MessageSquareQuote className="absolute top-8 right-8 text-white/5 w-16 h-16 group-hover:-translate-y-2 group-hover:rotate-12 transition-all duration-500" />
                    
                    <div className="flex gap-1 mb-8">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} size={16} className="fill-[#3b82f6] text-[#3b82f6]" />
                      ))}
                    </div>
                    
                    <p className="text-white/80 text-lg mb-10 leading-relaxed font-light tracking-wide">
                      "{t.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1a3673] to-[#3b82f6] flex items-center justify-center text-white font-bold shadow-inner">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white tracking-wide">{t.name}</h4>
                        <p className="text-sm text-[#3b82f6]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
             ))}
          </motion.div>
        </div>
      </div>
      
      {/* Global CSS for the fade edge mask */}
      <style dangerouslySetInnerHTML={{__html:`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
    </section>
  );
};

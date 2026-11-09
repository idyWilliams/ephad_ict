"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, Sparkles, Code2, Rocket } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function BootcampWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show widget after a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.8, filter: "blur(10px)" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="fixed bottom-6 left-6 z-[100] w-[340px] shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
            {/* Animated glowing border effect */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.6)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />
            
            {/* Inner Card */}
            <div className="relative h-full w-full bg-background/95 backdrop-blur-xl dark:bg-slate-950/95 rounded-[15px] p-5 border border-white/10 dark:border-white/5 overflow-hidden">
              
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/20 blur-2xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-pink-500/20 blur-2xl rounded-full pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 text-slate-400 hover:text-foreground transition-colors bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full p-1.5 z-10"
                aria-label="Close widget"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex flex-col gap-3 relative z-10">
                {/* Header / Badge */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Upcoming Event
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-extrabold text-lg text-foreground mb-1.5 flex items-center gap-2">
                    Tech Summer Bootcamp
                    <Rocket className="w-4 h-4 text-pink-500 animate-pulse" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Master <strong className="text-foreground font-semibold">Coding</strong> & <strong className="text-foreground font-semibold">UI/UX</strong> this summer. Join our immersive hands-on training sessions!
                  </p>
                  
                  {/* CTA Button */}
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdkV4ci2hP1rs9PkjmOC3LhUBPo_yMjfeafu736M9wVe4hfvg/viewform?usp=send_form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center gap-2 w-full font-semibold text-white bg-indigo-600 hover:bg-indigo-500 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.25)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] overflow-hidden group/btn"
                  >
                    {/* Button hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    
                    <Code2 className="w-4 h-4" />
                    <span>Secure Your Spot</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

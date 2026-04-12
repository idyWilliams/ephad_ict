"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";
import { fadeIn, staggerContainer } from "@/lib/motion";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#050505] relative z-10 overflow-hidden">
      
      {/* Background Grid Layer */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-40 mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="mb-24 flex items-center gap-6">
            <div className="h-px w-24 bg-[var(--color-brand-sky)]" />
            <h2 className="text-sm font-semibold tracking-[0.3em] text-white/50 uppercase">
              Intercepted Feedback
            </h2>
          </div>

          <div className="flex flex-col gap-32">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className={`relative flex flex-col ${i % 2 !== 0 ? 'md:items-end text-right' : 'md:items-start text-left'}`}
              >
                {/* Massive Decorative Quote Mark */}
                <div className={`absolute top-[-3rem] ${i % 2 !== 0 ? 'right-0' : 'left-0'} text-[10rem] font-serif text-white/5 leading-none select-none pointer-events-none`}>
                  "
                </div>
                
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-[1.2] max-w-4xl tracking-tight mb-8">
                  {t.quote.split(" ").map((word, idx) => (
                    <span 
                      key={idx} 
                      className={`inline-block mr-3 ${idx % 3 === 0 ? 'text-white' : 'text-white/60'} transition-colors duration-1000 hover:text-[var(--color-brand-sky)]`}
                    >
                      {word}
                    </span>
                  ))}
                </h3>
                
                <div className={`flex items-center gap-6 ${i % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-16 h-px bg-white/20" />
                  <div>
                    <p className="text-lg font-medium text-white uppercase tracking-widest">{t.name}</p>
                    <p className="text-sm text-[var(--color-brand-sky)] uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { slideInLeft, staggerContainer, fadeIn } from "@/lib/motion";

export const About = () => {
  return (
    /* Sits at lm-base — the page skeleton. Lightest surface, resting beat. */
    <section id="about" className="py-32 bg-[var(--lm-base)] dark:bg-transparent relative z-10 overflow-hidden border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] theme-transition">
      {/* Light mode: faint right-side bloom with amber accent */}
      <div className="absolute top-0 right-0 w-[40%] h-[70%] bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.06)_0%,transparent_65%)] dark:hidden pointer-events-none" />
      <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.04)_0%,transparent_70%)] dark:hidden blur-2xl ambient-float-mid pointer-events-none" />

      {/* Dark mode: layered depth with indigo and gold glows */}
      <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,rgba(129,140,248,0.08)_0%,transparent_60%)] hidden dark:block pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.06)_0%,transparent_70%)] hidden dark:block blur-3xl ambient-float-slow pointer-events-none" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft}
            className="lg:col-span-8"
          >
            <div className="mb-12 flex items-center gap-6">
              <div className="h-px w-24 bg-[var(--lm-text-main)]/20 dark:bg-white/20 transition-colors duration-500" />
              <h2 className="text-sm font-semibold tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] uppercase">Our Mission</h2>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] leading-[1.05] uppercase transition-colors duration-500">
              Learning by Doing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-text-main)]/70 to-[var(--lm-text-main)]/20 dark:from-white/70 dark:to-white/20 transition-all duration-500">Master by Creating.</span>
            </h3>

            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] text-lg font-light leading-relaxed transition-colors duration-500">
                At EPHAD, we believe that true mastery comes through practical application. We provide a dynamic learning environment where you can experiment, build, and grow your technical skills.
              </p>
              <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] text-lg font-light leading-relaxed transition-colors duration-500">
                Our programs are designed to bridge the gap between curiosity and expertise. We're here to empower the next generation of tech leaders, designers, and problem-solvers.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="lg:col-span-4 flex flex-col gap-10 lg:pl-12 border-l border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] lg:py-8 transition-colors duration-500"
          >
            {[
              { val: "10+", label: "Years of Excellence" },
              { val: "100%", label: "Hands-on Learning" },
              { val: "O.S.", label: "Open Source Ethos" }
            ].map((m, i) => (
              <motion.div key={i} variants={fadeIn} className="group cursor-default">
                <div className="text-5xl lg:text-6xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] group-hover:text-[var(--lm-accent)] dark:text-[var(--dm-accent)] transition-colors tracking-tighter duration-500">
                  {m.val}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] font-medium text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] transition-colors duration-500">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

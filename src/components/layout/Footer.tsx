"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    /* lm-section-strong — intentionally deeper than base/section, anchors the bottom */
    <footer className="bg-[var(--lm-section-strong)] dark:bg-[#090b18] border-t border-[var(--lm-ink)]/10 dark:border-white/10 pt-24 pb-8 overflow-hidden relative z-10 transition-colors duration-500">

      {/* Light mode: radial vignette from bottom-center — anchors the page visually */}
      <div className="absolute inset-0 dark:hidden pointer-events-none bg-[radial-gradient(ellipse_at_50%_110%,rgba(11,12,29,0.07)_0%,transparent_65%)]" />
      {/* Subtle top inner-shadow to mark boundary from CTA above */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--lm-ink)]/[0.04] to-transparent dark:hidden pointer-events-none" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-20 border-b border-[var(--lm-ink)]/10 dark:border-white/10 transition-colors duration-500">

          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-4 group mb-6">
                <div className="w-12 h-12 border border-[var(--lm-ink)]/20 dark:border-white/20 flex items-center justify-center text-[var(--lm-ink)] dark:text-white font-bold text-xl group-hover:bg-[var(--lm-ink)] group-hover:text-[var(--lm-base)] dark:group-hover:bg-white dark:group-hover:text-[var(--lm-ink)] transition-all shadow-sm dark:shadow-none">
                  E.
                </div>
                <span className="font-semibold tracking-[0.4em] uppercase text-sm text-[var(--lm-ink)] dark:text-white transition-colors duration-500">EPHAD</span>
              </Link>
              <p className="text-[var(--lm-body)]/55 dark:text-white/40 font-light max-w-sm text-sm leading-relaxed mb-8 transition-colors duration-500">
                Engineering Africa's next generation of systems architects, designers, and technical operators from our high-performance labs in Abuja.
              </p>
            </div>
            <a href="mailto:hello@ephad.com" className="group inline-flex items-center gap-4 text-[var(--lm-ink)] dark:text-white hover:text-[var(--color-brand-sky)] dark:hover:text-[var(--color-brand-sky)] transition-colors w-fit">
              <span className="text-xl font-light uppercase tracking-widest border-b border-[var(--lm-ink)]/20 dark:border-white/20 pb-1 group-hover:border-[var(--color-brand-sky)] transition-colors duration-500">
                hello@ephad.com
              </span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--lm-body)]/35 dark:text-white/30 mb-8 transition-colors duration-500">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Syllabus', 'Intel', 'Intercepts', 'Registration'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Registration' ? '/#register' : `/#${item.toLowerCase()}`}
                    className="text-[var(--lm-body)]/60 dark:text-white/60 hover:text-[var(--lm-ink)] dark:hover:text-white uppercase tracking-widest text-sm font-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--lm-body)]/35 dark:text-white/30 mb-8 transition-colors duration-500">Network</h4>
            <ul className="flex flex-col gap-4">
              {['Twitter / X', 'LinkedIn', 'GitHub'].map((social) => (
                <li key={social}>
                  <a href="#" className="group inline-flex items-center gap-3 text-[var(--lm-body)]/60 dark:text-white/60 hover:text-[var(--lm-ink)] dark:hover:text-white transition-colors">
                    <span className="uppercase tracking-widest text-sm font-light relative">
                      {social}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-brand-sky)] transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Watermark */}
        <div className="py-12 md:py-20 flex justify-center border-b border-[var(--lm-ink)]/10 dark:border-white/10 mb-8 transition-colors duration-500">
          <span className="text-[15vw] md:text-[18vw] font-black uppercase leading-none tracking-tighter text-[var(--lm-ink)]/[0.055] dark:text-white/5 select-none transition-colors duration-500">
            EPHAD
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--lm-body)]/40 dark:text-white/30 md:flex-row transition-colors duration-500">
          <p>© {new Date().getFullYear()} EPHAD ICT Academy.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[var(--lm-ink)] dark:hover:text-white transition-colors">Privacy Protocol</Link>
            <Link href="#" className="hover:text-[var(--lm-ink)] dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>
            Designed & Built with <span className="text-[var(--color-brand-sky)]">♥</span> by{" "}
            <a href="https://isentrytechnologies.com" target="_blank" rel="noopener noreferrer"
              className="text-[var(--lm-ink)] dark:text-white hover:text-[var(--color-brand-sky)] transition-colors border-b border-[var(--lm-ink)]/20 dark:border-white/20 hover:border-transparent">
              Isentry Technologies
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

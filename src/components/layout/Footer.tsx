"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#02040a] border-t border-white/10 pt-24 pb-8 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 md:px-[10%] relative z-20">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-20 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-4 group mb-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-white font-bold text-xl group-hover:bg-white group-hover:text-black transition-all">
                  E.
                </div>
                <span className="font-semibold tracking-[0.4em] uppercase text-sm text-white">
                  EPHAD
                </span>
              </Link>
              <p className="text-white/40 font-light max-w-sm text-sm leading-relaxed mb-8">
                Engineering Africa's next generation of systems architects, designers, and technical operators from our high-performance labs in Abuja.
              </p>
            </div>
            
            <a href="mailto:hello@ephad.com" className="group inline-flex items-center gap-4 text-white hover:text-[var(--color-brand-sky)] transition-colors w-fit">
              <span className="text-xl font-light uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-[var(--color-brand-sky)] transition-colors">
                hello@ephad.com
              </span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30 mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Syllabus', 'Intel', 'Intercepts', 'Registration'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-white uppercase tracking-widest text-sm font-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30 mb-8">Network</h4>
            <ul className="flex flex-col gap-4">
              {['Twitter / X', 'LinkedIn', 'GitHub'].map((social) => (
                <li key={social}>
                  <a href="#" className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors">
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

        {/* Massive End Brand Mark */}
        <div className="py-12 md:py-20 flex justify-center border-b border-white/10 mb-8">
          <span className="text-[15vw] md:text-[18vw] font-black uppercase leading-none tracking-tighter text-white/5 select-none">
            EPHAD
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-white/30 md:flex-row">
          <p>© {new Date().getFullYear()} EPHAD ICT Academy.</p>
          <div className="flex items-center gap-6">
             <Link href="#" className="hover:text-white transition-colors">Privacy Protocol</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>
            Designed & Built with <span className="text-[var(--color-brand-sky)]">♥</span> by <a href="https://isentrytechnologies.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-brand-sky)] transition-colors border-b border-white/20 hover:border-transparent">Isentry Technologies</a>
          </p>
        </div>
        
      </div>
    </footer>
  );
};

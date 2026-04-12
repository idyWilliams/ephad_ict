"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Syllabus", href: "#courses" },
    { name: "Intel", href: "#about" },
    { name: "Intercepts", href: "#testimonials" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b border-white/5",
      scrolled ? "bg-[#02040a]/90 backdrop-blur-2xl py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 md:px-[10%] flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-6 group z-50">
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white font-bold text-lg group-hover:bg-white group-hover:text-black transition-all">
            E.
          </div>
          <span className="font-semibold tracking-[0.3em] uppercase text-xs text-white">
            EPHAD
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#register" 
            className="relative px-6 py-3 border border-[var(--color-brand-sky)] text-[var(--color-brand-sky)] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[var(--color-brand-sky)] hover:text-white transition-colors"
          >
            Apply Nav
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 h-screen bg-[#02040a] border-t border-white/10 p-8 flex flex-col items-center justify-center gap-10"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-light uppercase tracking-widest text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#register" 
                onClick={() => setMobileMenuOpen(false)} 
                className="mt-8 text-xl font-bold uppercase tracking-[0.3em] text-[var(--color-brand-sky)]"
              >
                Apply Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

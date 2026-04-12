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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out pt-6 px-4 md:px-0 pointer-events-none">
      <div 
        className={cn(
          "mx-auto max-w-5xl flex items-center justify-between rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto",
          scrolled 
            ? "bg-[#0d1224]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3 px-6" 
            : "bg-transparent py-2 px-4"
        )}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--color-brand-blue)] to-[var(--color-brand-sky)] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_var(--color-glow-blue)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">E</span>
          </div>
          <span className={cn("font-semibold tracking-wide transition-colors duration-300 hidden sm:block", scrolled ? "text-white" : "text-white")}>
            EPHAD
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/5 rounded-full px-6 py-2 border border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white hover:text-shadow-sm transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link 
            href="#register" 
            className="group relative inline-flex h-11 items-center justify-center bg-white text-[#0d1224] font-semibold rounded-full px-7 overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-sm tracking-wide">Get Started</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full mt-4 left-4 right-4 bg-[#0d1224]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-white/80 hover:text-white transition-colors border-b border-white/5 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#register" 
                onClick={() => setMobileMenuOpen(false)} 
                className="mt-4 relative inline-flex h-14 items-center justify-center bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-sky)] text-white font-semibold rounded-2xl px-8 hover:brightness-110 transition-all"
              >
                Start Your Journey
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

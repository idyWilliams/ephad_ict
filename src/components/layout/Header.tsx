"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-[var(--color-brand-navy)]/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--color-brand-blue)] to-[var(--color-brand-sky)] flex items-center justify-center text-white font-bold text-xl shadow-lg">
            E
          </div>
          <span className={cn("font-bold text-xl tracking-tight transition-colors duration-300", scrolled ? "text-white" : "text-white")}>
            EPHAD
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link href="#register" className="inline-flex h-10 items-center justify-center bg-white text-[var(--color-brand-navy)] hover:bg-white/90 font-semibold rounded-full px-6 transition-colors">
            Register Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-[var(--color-brand-navy)] flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-white/90 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="#register" onClick={() => setMobileMenuOpen(false)} className="inline-flex h-12 items-center justify-center bg-white text-[var(--color-brand-navy)] font-semibold rounded-full px-8 mt-4 transition-colors">
                Register Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

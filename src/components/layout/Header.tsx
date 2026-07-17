"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "/#courses" },
    { name: "Summer Bootcamp", href: "/summer-bootcamp", highlight: true },
    { name: "Youth Academy", href: "/kids-teens" },
    { name: "About", href: "/#about" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]",
      scrolled ? "bg-[var(--lm-base)]/90 dark:bg-[var(--dm-base)]/90 backdrop-blur-2xl py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 md:px-[10%] flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-4 group z-50">
          <div className="w-12 h-12 relative flex items-center justify-center overflow-hidden border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/ephad-logo.jpg"
              alt="EPHAD Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* <span className="font-semibold tracking-[0.3em] uppercase text-xs text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hidden sm:block">
            EPHAD
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-semibold tracking-[0.2em] uppercase transition-colors",
                link.highlight
                  ? "text-[var(--lm-accent-secondary)] dark:text-[var(--dm-accent-secondary)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)]"
                  : "text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] hover:text-[var(--lm-text-main)] dark:hover:text-[var(--dm-text-main)]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/#register"
            className="relative px-6 py-3 border border-[var(--lm-accent)] text-[var(--lm-accent)] dark:border-[var(--dm-accent)] dark:text-[var(--dm-accent)] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[var(--lm-accent)] hover:text-white dark:hover:bg-[var(--dm-accent)] dark:hover:text-black transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <ThemeToggle />
          <button
            className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 h-screen bg-[var(--lm-base)] dark:bg-[var(--dm-base)] border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] p-8 flex flex-col items-center justify-center gap-10"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-4xl font-light uppercase tracking-widest transition-colors",
                    link.highlight
                      ? "text-[var(--lm-accent-secondary)] dark:text-[var(--dm-accent-secondary)]"
                      : "text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] hover:text-[var(--lm-text-main)] dark:hover:text-[var(--dm-text-main)]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#register"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 text-xl font-bold uppercase tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] hover:text-white dark:hover:text-black"
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

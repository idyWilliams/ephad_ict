"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SUMMER_BOOTCAMP_ASSETS } from "@/data/summerBootcamp";

const SLIDES = SUMMER_BOOTCAMP_ASSETS.heroSlides;
const INTERVAL_MS = 5000;

export function SummerBootcampHeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  function goTo(next: number) {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }

  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:ml-auto">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] bg-[var(--lm-section)] dark:bg-[var(--dm-section)] shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={SLIDES[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center p-3 md:p-4"
          >
            <div className="relative w-full h-full">
              <Image
                src={SLIDES[index]}
                alt={`EPHAD Tech Summer Bootcamp 2026 — slide ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]"
                  : "w-1.5 bg-[var(--lm-text-main)]/25 dark:bg-white/25 hover:bg-[var(--lm-text-main)]/40"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[var(--lm-elevated)]/90 dark:bg-[var(--dm-elevated)]/90 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:bg-[var(--lm-elevated)] transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[var(--lm-elevated)]/90 dark:bg-[var(--dm-elevated)]/90 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:bg-[var(--lm-elevated)] transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

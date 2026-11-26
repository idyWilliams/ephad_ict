"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { fadeIn } from "@/lib/motion";
import {
  TECHY_DECEMBER,
  TECHY_DECEMBER_ASSETS,
} from "@/data/techyDecember";

export const TechyDecemberBanner = () => {
  return (
    <section className="relative z-20 -mt-4 pb-8 pt-4 bg-[var(--lm-base)] dark:bg-[var(--dm-base)] transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-[10%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          className="relative overflow-hidden rounded-[2rem] border border-[var(--lm-accent-secondary)]/30 dark:border-[var(--dm-accent-secondary)]/30 bg-gradient-to-br from-[var(--lm-elevated)] via-[var(--lm-section)] to-[var(--lm-elevated)] dark:from-[var(--dm-elevated)] dark:via-[var(--dm-section)] dark:to-[var(--dm-elevated)] shadow-lg dark:shadow-none"
        >
          {/* Decorative blooms */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--lm-accent-secondary)]/10 dark:bg-[var(--dm-accent-secondary)]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-[var(--lm-accent)]/10 dark:bg-[var(--dm-accent)]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--lm-accent-secondary)]/15 dark:bg-[var(--dm-accent-secondary)]/15 text-[var(--lm-accent-secondary)] dark:text-[var(--dm-accent-secondary)] text-[10px] font-bold uppercase tracking-[0.25em] rounded-full border border-[var(--lm-accent-secondary)]/25 dark:border-[var(--dm-accent-secondary)]/25">
                  <Sparkles size={12} />
                  Enrolling Now · {TECHY_DECEMBER.seatLimit} Seats Only
                </span>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                  <Calendar
                    size={12}
                    className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)]"
                  />
                  {TECHY_DECEMBER.startDate} – {TECHY_DECEMBER.endDate}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] leading-[0.95] mb-4">
                Techy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-accent)] to-[var(--lm-accent-secondary)] dark:from-[var(--dm-accent)] dark:to-[var(--dm-accent-secondary)]">
                  December 2026
                </span>
              </h2>

              <p className="text-base md:text-lg text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed mb-6">
                Join our{" "}
                <strong className="font-semibold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                  3-week intensive tech bootcamp for only ₦30,000
                </strong>
                . Learn hands-on in our Kubwa lab across 6 practical tracks,
                build a real project, and graduate on Demo Day (Dec 23).
              </p>

              <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                <span className="px-3 py-1.5 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] rounded-full">
                  6 Practical Tracks
                </span>
                <span className="px-3 py-1.5 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] rounded-full">
                  {TECHY_DECEMBER.schedule.period}
                </span>
                <span className="px-3 py-1.5 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] rounded-full">
                  {TECHY_DECEMBER.schedule.daysPerWeek}
                </span>
                <span className="px-3 py-1.5 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] rounded-full">
                  Demo Day: {TECHY_DECEMBER.demoDay}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-6 flex-shrink-0 lg:items-end">
              {/* Classroom preview */}
              <div className="hidden sm:grid grid-cols-2 gap-2 w-44 lg:w-52 flex-shrink-0">
                {TECHY_DECEMBER_ASSETS.gallery.slice(0, 2).map((item, i) => (
                  <div
                    key={item.src}
                    className={`relative overflow-hidden rounded-sm border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] ${
                      i === 1 ? "mt-6" : ""
                    }`}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link
                  href="/techy-december"
                  className="group inline-flex items-center justify-center gap-3 h-14 px-8 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-[var(--dm-base)] font-bold text-xs uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform"
                >
                  Explore Tracks
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href={TECHY_DECEMBER.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-14 px-8 border border-[var(--lm-accent)] dark:border-[var(--dm-accent)] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[var(--lm-accent)] hover:text-white dark:hover:bg-[var(--dm-accent)] dark:hover:text-black transition-colors"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

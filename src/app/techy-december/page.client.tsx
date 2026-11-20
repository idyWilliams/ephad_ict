"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  Sparkles,
  MapPin,
  Gift,
  Users,
  Award,
  ExternalLink,
} from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";
import {
  TECHY_DECEMBER,
  TECHY_DECEMBER_ASSETS,
  techyDecemberCourses,
  buildTechyDecemberWaLink,
} from "@/data/techyDecember";
import {
  techyDecemberPayConfig,
  techyDecemberDepositConfig,
} from "@/lib/payments/config";
import type { CoursePayConfig } from "@/lib/payments/types";
import { EnrollModal } from "@/components/ui/EnrollModal";
import { useWhatsAppCtx } from "@/context/WhatsAppContext";

export default function TechyDecemberPage() {
  const [selectedCourse, setSelectedCourse] = useState<CoursePayConfig | null>(
    null
  );
  const { setCourseName } = useWhatsAppCtx();

  function getPayConfig(id: string) {
    return techyDecemberPayConfig.find((c) => c.id === id);
  }

  return (
    <>
      <EnrollModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      <div className="bg-[var(--lm-base)] dark:bg-[var(--dm-base)] transition-colors duration-500 overflow-hidden min-h-screen pb-32">
        {/* Hero */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-[10%] bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] transition-colors duration-500 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 dark:hidden bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.10)_0%,transparent_55%)]" />
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.10)_0%,transparent_55%)]" />
            <div className="absolute inset-0 dark:hidden bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.06)_0%,transparent_50%)]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-2xl"
            >
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--lm-accent-secondary)]/15 dark:bg-[var(--dm-accent-secondary)]/15 text-[var(--lm-accent-secondary)] dark:text-[var(--dm-accent-secondary)] text-[10px] font-bold uppercase tracking-[0.25em] rounded-full border border-[var(--lm-accent-secondary)]/25">
                  <Sparkles size={12} />
                  End-of-Year Foundation Bootcamp · {TECHY_DECEMBER.seatLimit}{" "}
                  Seats
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                  {TECHY_DECEMBER.audience}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] leading-[0.9] mb-8">
                Techy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-accent)] to-[var(--lm-accent-secondary)] dark:from-[var(--dm-accent)] dark:to-[var(--dm-accent-secondary)]">
                  December.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[var(--lm-text-muted)]/85 dark:text-[var(--dm-text-main)]/75 font-light leading-relaxed max-w-2xl mb-10">
                Start your 3-month tech course this December with{" "}
                <strong className="font-semibold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                  Module 1 for only ₦30,000
                </strong>{" "}
                (regular price from ₦200,000). Build a real project, graduate on
                Demo Day, and credit your full ₦30,000 toward January 2027.
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center gap-3 text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                  <Calendar
                    size={18}
                    className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)] flex-shrink-0"
                  />
                  <span className="font-medium uppercase tracking-wider text-xs">
                    {TECHY_DECEMBER.startDate} – {TECHY_DECEMBER.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                  <Clock
                    size={18}
                    className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)] flex-shrink-0"
                  />
                  <span className="font-medium uppercase tracking-wider text-xs">
                    {TECHY_DECEMBER.schedule.daysPerWeek} ·{" "}
                    {TECHY_DECEMBER.schedule.period}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#tracks"
                  className="inline-flex h-14 items-center justify-center bg-[var(--lm-text-main)] dark:bg-white text-[var(--lm-base)] dark:text-black px-8 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                >
                  Explore 5 Tracks
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedCourse(techyDecemberDepositConfig)}
                  className="inline-flex h-14 items-center justify-center border border-[var(--lm-accent)] dark:border-[var(--dm-accent)] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] px-8 font-bold uppercase tracking-widest text-xs hover:bg-[var(--lm-accent)] hover:text-white dark:hover:bg-[var(--dm-accent)] dark:hover:text-black transition-colors"
                >
                  Reserve Seat (₦10,000)
                </button>
                <a
                  href={buildTechyDecemberWaLink(
                    "Hi EPHAD ICT Academy, I'd like to attend a Free Taster Session for *Techy December 2026*."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] px-8 font-bold uppercase tracking-widest text-xs hover:bg-[var(--lm-text-main)]/5 dark:hover:bg-white/5 transition-colors"
                >
                  Free Taster Session
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            {/* Classroom mosaic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-2 gap-4"
            >
              {TECHY_DECEMBER_ASSETS.gallery.map((item, i) => (
                <div
                  key={item.src}
                  className={`relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] group ${
                    i % 2 === 1 ? "mt-6" : ""
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Details Strip */}
        <section className="py-12 bg-[var(--lm-section)] dark:bg-[var(--dm-section)] border-y border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
          <div className="container mx-auto px-6 md:px-[10%]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { label: "Duration", value: TECHY_DECEMBER.schedule.period },
                { label: "Class Days", value: TECHY_DECEMBER.schedule.daysPerWeek },
                { label: "Demo Day", value: TECHY_DECEMBER.demoDay },
                {
                  label: "Reg. Closes",
                  value: TECHY_DECEMBER.registrationCloses,
                },
              ].map((item) => (
                <div key={item.label} className="text-center md:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] mb-2">
                    {item.label}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase tracking-tight">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracks & Module 1 Outcomes */}
        <section
          id="tracks"
          className="py-28 bg-[var(--lm-base)] dark:bg-[var(--dm-base)] relative z-10"
        >
          <div className="container mx-auto px-6 md:px-[10%]">
            <div className="mb-16 max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                <h2 className="text-xs font-bold tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] uppercase">
                  5 Tracks · Module 1 Foundation
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] tracking-tighter uppercase mb-4">
                Choose Your <span className="font-bold">Track.</span>
              </h3>
              <p className="text-sm md:text-base text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed">
                Each track delivers Module 1 of our regular 3-month course. You
                leave with a real, showcased project on Demo Day and a
                Certificate of Completion (Foundation Level).
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {techyDecemberCourses.map((course) => {
                const payConfig = getPayConfig(course.id);
                const Icon = course.icon;

                return (
                  <motion.article
                    key={course.id}
                    variants={fadeIn}
                    onMouseEnter={() =>
                      setCourseName(`${course.title} (Techy December)`)
                    }
                    onMouseLeave={() => setCourseName(null)}
                    className="group flex flex-col border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] overflow-hidden hover:border-[var(--lm-accent)]/40 dark:hover:border-[var(--dm-accent)]/40 transition-colors bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)]"
                  >
                    <div className="h-52 relative bg-[var(--lm-panel)] dark:bg-[var(--dm-section)] overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover object-center opacity-95 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                        <div className="p-2 bg-white/90 dark:bg-black/80 rounded-sm">
                          <Icon
                            size={18}
                            className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)]"
                          />
                        </div>
                        {course.introductory && (
                          <span className="px-2.5 py-1 bg-black/75 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                            Small Cohort · Intro
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-8">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] mb-2">
                        Module 1 · 3 Weeks
                      </p>
                      <h4 className="text-xl font-bold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-3 uppercase tracking-tight">
                        {course.title}
                      </h4>
                      <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed text-sm mb-6 flex-1">
                        <span className="font-semibold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                          Outcome:{" "}
                        </span>
                        {course.outcome}
                      </p>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
                        <div className="flex-1">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] block mb-1">
                            Promo Fee
                          </span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                              ₦{course.promoFeeNGN.toLocaleString()}
                            </span>
                            <span className="text-xs line-through text-[var(--lm-text-muted)]/70 dark:text-[var(--dm-text-muted)]/70">
                              ₦{course.regularFeeNGN.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {payConfig && (
                            <button
                              type="button"
                              onClick={() => setSelectedCourse(payConfig)}
                              className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all"
                            >
                              Enroll
                              <ArrowRight
                                size={12}
                                className="group-hover/btn:translate-x-0.5 transition-transform"
                              />
                            </button>
                          )}
                          <a
                            href={buildTechyDecemberWaLink(
                              `Hi EPHAD ICT Academy, I'm interested in *${course.title}* for Techy December 2026.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-3 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] text-[10px] font-bold uppercase tracking-widest hover:border-[var(--lm-text-main)] dark:hover:border-white transition-colors"
                          >
                            Ask
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* January 2027 Continuation Credit Callout */}
        <section className="py-20 bg-[var(--lm-section)] dark:bg-[var(--dm-section)] border-y border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
          <div className="container mx-auto px-6 md:px-[10%]">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[var(--lm-accent-secondary)] dark:bg-[var(--dm-accent-secondary)]" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--lm-accent-secondary)] dark:text-[var(--dm-accent-secondary)]">
                    Built for Long-Term Growth
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] leading-[0.98] mb-5">
                  Your ₦30,000 Credits Into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-accent)] to-[var(--lm-accent-secondary)] dark:from-[var(--dm-accent)] dark:to-[var(--dm-accent-secondary)]">
                    January 2027.
                  </span>
                </h2>
                <p className="text-base text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed max-w-2xl">
                  Techy December is not a disconnected crash course—it is Module
                  1 of our full 3-month programme. Continue into Modules 2 &amp;
                  3 in January 2027 and have your entire ₦30,000 fee credited
                  against your regular course tuition when you enrol by January
                  31, 2027.
                </p>
              </div>

              <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Award,
                    title: "Demo Day Showcase",
                    desc: "Present your finished Module 1 project and earn your Foundation Certificate on Dec 23.",
                  },
                  {
                    icon: Gift,
                    title: "100% Fee Credit",
                    desc: "Every naira paid for Techy December counts directly toward Modules 2 & 3 in January.",
                  },
                ].map((card) => {
                  const CardIcon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="p-6 bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]"
                    >
                      <CardIcon
                        size={20}
                        className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)] mb-4"
                      />
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers, Free Tasters & Referrals */}
        <section className="py-24 bg-[var(--lm-base)] dark:bg-[var(--dm-base)]">
          <div className="container mx-auto px-6 md:px-[10%]">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pricing Options */}
              <div className="p-8 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] mb-3">
                  Flexible Pricing
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-6">
                  Fees &amp; Deposits
                </h3>
                <ul className="flex flex-col gap-4 text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light flex-1">
                  <li className="flex justify-between border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] pb-3">
                    <span>Standard Fee (Any Track)</span>
                    <strong className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                      ₦{TECHY_DECEMBER.promoFeeNGN.toLocaleString()}
                    </strong>
                  </li>
                  <li className="flex justify-between border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] pb-3">
                    <span>
                      Early-Bird (First {TECHY_DECEMBER.earlyBirdSlots}, by Nov
                      22)
                    </span>
                    <strong className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                      ₦{TECHY_DECEMBER.earlyBirdFeeNGN.toLocaleString()}
                    </strong>
                  </li>
                  <li className="flex justify-between border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] pb-3">
                    <span>Group Rate (5+ Students)</span>
                    <strong className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                      ₦{TECHY_DECEMBER.groupFeeNGN.toLocaleString()} / ea
                    </strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Seat Deposit (Balance by Nov 27)</span>
                    <strong className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                      ₦{TECHY_DECEMBER.depositNGN.toLocaleString()}
                    </strong>
                  </li>
                </ul>
              </div>

              {/* Free Taster Sessions */}
              <div className="p-8 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--lm-accent-secondary)] dark:text-[var(--dm-accent-secondary)] mb-3">
                  Try Before You Enrol
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-4">
                  Free Taster Sessions
                </h3>
                <p className="text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed mb-6 flex-1">
                  Not sure which track fits you best? Visit our Kubwa lab for a
                  free 2-hour hands-on intro session, meet the instructors, and
                  try the workstations before committing.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  {TECHY_DECEMBER.tasterDates.map((date) => (
                    <div
                      key={date}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]"
                    >
                      <Calendar
                        size={14}
                        className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)]"
                      />
                      {date}
                    </div>
                  ))}
                </div>
                <a
                  href={buildTechyDecemberWaLink(
                    "Hi EPHAD ICT Academy, I'd like to book a spot for the Techy December Free Taster Session."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 border border-[var(--lm-text-main)] dark:border-white text-[var(--lm-text-main)] dark:text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--lm-text-main)] hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  Book Free Taster
                  <ArrowRight size={12} />
                </a>
              </div>

              {/* Referral Program */}
              <div className="p-8 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] mb-3">
                  Ambassador Program
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-4">
                  Refer &amp; Earn ₦
                  {TECHY_DECEMBER.referralRewardNGN.toLocaleString()}
                </h3>
                <p className="text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed mb-6 flex-1">
                  Invite friends, classmates, or community members to Techy
                  December. Earn ₦
                  {TECHY_DECEMBER.referralRewardNGN.toLocaleString()} for every
                  referred student who pays in full and attends the first class.
                  Ambassadors with 5+ referrals also receive a branded T-shirt
                  and priority January placement.
                </p>
                <a
                  href={buildTechyDecemberWaLink(
                    "Hi EPHAD ICT Academy, I'd like to join the Techy December 2026 Referral / Ambassador Program."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] text-[10px] font-bold uppercase tracking-widest hover:border-[var(--lm-accent)] dark:hover:border-[var(--dm-accent)] transition-colors"
                >
                  <Users size={13} />
                  Become an Ambassador
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Venue, Rules & Registration */}
        <section
          id="enroll"
          className="py-28 bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] relative overflow-hidden"
        >
          <div className="container mx-auto px-6 md:px-[10%] relative z-20">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                    Registration &amp; Venue
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-8">
                  Secure Your <br />
                  Seat.
                </h2>

                <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed mb-8">
                  Open to new students only. Registration closes{" "}
                  <strong className="font-semibold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                    {TECHY_DECEMBER.registrationCloses}
                  </strong>{" "}
                  or once the {TECHY_DECEMBER.seatLimit}-seat cap is reached.
                  Students under 18 require parent/guardian consent.
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  <div className="flex items-start gap-3 text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                    <MapPin
                      size={16}
                      className="flex-shrink-0 mt-1 text-[var(--lm-accent)] dark:text-[var(--dm-accent)]"
                    />
                    <span className="text-sm font-light tracking-wide">
                      {TECHY_DECEMBER.venue}
                    </span>
                  </div>
                  <a
                    href={`tel:${TECHY_DECEMBER.contact.phone}`}
                    className="flex items-center gap-3 text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)] transition-colors"
                  >
                    <Phone size={16} className="flex-shrink-0" />
                    <span className="text-sm font-light tracking-wide">
                      {TECHY_DECEMBER.contact.phone}
                    </span>
                  </a>
                  <a
                    href={`mailto:${TECHY_DECEMBER.contact.email}`}
                    className="flex items-center gap-3 text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)] transition-colors"
                  >
                    <Mail size={16} className="flex-shrink-0" />
                    <span className="text-sm font-light tracking-wide">
                      {TECHY_DECEMBER.contact.email}
                    </span>
                  </a>
                  <a
                    href={`https://${TECHY_DECEMBER.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)] transition-colors"
                  >
                    <Globe size={16} className="flex-shrink-0" />
                    <span className="text-sm font-light tracking-wide">
                      {TECHY_DECEMBER.contact.website}
                    </span>
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    "Lab computers, power, and internet provided",
                    "Morning (9:00–12:00) & Afternoon (1:00–4:00) cohorts",
                    "Weekend virtual check-ins & project feedback",
                    "Full refund up to Nov 27 · No refund after Dec 2",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-[var(--lm-text-muted)]/80 dark:text-[var(--dm-text-main)]/75 font-light"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)] flex-shrink-0"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[var(--lm-base)] dark:bg-[var(--dm-base)] p-10 md:p-12 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] flex flex-col justify-between gap-8">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] mb-3">
                    3 Simple Steps
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase tracking-tight mb-4">
                    Ready to Level Up Before 2027?
                  </h3>
                  <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed mb-8">
                    Pick your track, pay your ₦10,000 seat deposit or full
                    ₦30,000 fee online via Paystack, and confirm your cohort on
                    WhatsApp.
                  </p>

                  <ol className="flex flex-col gap-4 mb-8">
                    {[
                      "Choose one of the 5 practical tracks above.",
                      "Pay your ₦10,000 seat deposit or ₦30,000 full fee online (or at the academy).",
                      "Start building on December 2 and showcase your project on Demo Day (Dec 23).",
                    ].map((step, idx) => (
                      <li
                        key={step}
                        className="flex items-start gap-4 text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light"
                      >
                        <span className="w-6 h-6 rounded-full bg-[var(--lm-accent)]/15 dark:bg-[var(--dm-accent)]/15 text-[var(--lm-accent)] dark:text-[var(--dm-accent)] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(techyDecemberDepositConfig)}
                    className="flex-1 inline-flex items-center justify-center gap-2 h-14 px-8 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
                  >
                    Pay ₦10,000 Deposit
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href={buildTechyDecemberWaLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 h-14 px-8 border border-[var(--lm-accent)] dark:border-[var(--dm-accent)] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[var(--lm-accent)] hover:text-white dark:hover:bg-[var(--dm-accent)] dark:hover:text-black transition-colors"
                  >
                    Register on WhatsApp
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

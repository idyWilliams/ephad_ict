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
  Sun,
  ExternalLink,
} from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { SUMMER_BOOTCAMP, SUMMER_BOOTCAMP_ASSETS, summerBootcampCourses } from "@/data/summerBootcamp";
import { summerBootcampPayConfig } from "@/lib/payments/config";
import type { CoursePayConfig } from "@/lib/payments/types";
import { EnrollModal } from "@/components/ui/EnrollModal";
import { SummerBootcampHeroCarousel } from "@/components/sections/SummerBootcampHeroCarousel";
import { useWhatsAppCtx } from "@/context/WhatsAppContext";

const FORM_URL = SUMMER_BOOTCAMP.applicationFormUrl;

export default function SummerBootcampPage() {
  const [selectedCourse, setSelectedCourse] = useState<CoursePayConfig | null>(null);
  const { setCourseName } = useWhatsAppCtx();

  function getPayConfig(id: string) {
    return summerBootcampPayConfig.find((c) => c.id === id);
  }

  return (
    <>
      <EnrollModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />

      <div className="bg-[var(--lm-base)] dark:bg-[var(--dm-base)] transition-colors duration-500 overflow-hidden min-h-screen pb-32">

        {/* Hero */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-[10%] bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] transition-colors duration-500 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 dark:hidden bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.10)_0%,transparent_55%)]" />
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.10)_0%,transparent_55%)]" />
            <div className="absolute inset-0 dark:hidden bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.06)_0%,transparent_50%)]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--lm-accent-secondary)]/15 dark:bg-[var(--dm-accent-secondary)]/15 text-[var(--lm-accent-secondary)] dark:text-[var(--dm-accent-secondary)] text-[10px] font-bold uppercase tracking-[0.25em] rounded-full border border-[var(--lm-accent-secondary)]/25">
                  <Sun size={12} />
                  Summer 2026 · Enrolling Now
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                  Kids & Teens · {SUMMER_BOOTCAMP.ageRange}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] leading-[0.9] mb-8">
                Tech Summer{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-accent)] to-[var(--lm-accent-secondary)] dark:from-[var(--dm-accent)] dark:to-[var(--dm-accent-secondary)]">
                  Bootcamp.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[var(--lm-text-muted)]/80 dark:text-[var(--dm-text-main)]/70 font-light leading-relaxed max-w-2xl mb-10">
                An intensive summer program designed to turn young minds into confident creators. Choose from seven practical tech tracks and build real skills this summer.
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center gap-3 text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                  <Calendar size={18} className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)] flex-shrink-0" />
                  <span className="font-medium uppercase tracking-wider text-xs">
                    {SUMMER_BOOTCAMP.startDate} – {SUMMER_BOOTCAMP.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                  <Clock size={18} className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)] flex-shrink-0" />
                  <span className="font-medium uppercase tracking-wider text-xs">
                    {SUMMER_BOOTCAMP.schedule.daysPerWeek} · {SUMMER_BOOTCAMP.schedule.hoursPerSession}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#courses"
                  className="inline-flex h-14 items-center justify-center bg-[var(--lm-text-main)] dark:bg-white text-[var(--lm-base)] dark:text-black px-10 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                >
                  Browse Courses
                </Link>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] px-10 font-bold uppercase tracking-widest text-xs hover:bg-[var(--lm-text-main)]/5 dark:hover:bg-white/5 transition-colors"
                >
                  Apply Now
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <SummerBootcampHeroCarousel />
            </motion.div>
          </div>
        </section>

        {/* Schedule strip */}
        <section className="py-12 bg-[var(--lm-section)] dark:bg-[var(--dm-section)] border-y border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
          <div className="container mx-auto px-6 md:px-[10%]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { label: "Duration", value: SUMMER_BOOTCAMP.schedule.period },
                { label: "Schedule", value: SUMMER_BOOTCAMP.schedule.daysPerWeek },
                { label: "Class Time", value: SUMMER_BOOTCAMP.schedule.hoursPerSession },
                { label: "Age Range", value: SUMMER_BOOTCAMP.ageRange },
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

        {/* Real students showcase */}
        <section className="py-20 bg-[var(--lm-base)] dark:bg-[var(--dm-base)] border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
          <div className="container mx-auto px-6 md:px-[10%]">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
              <h2 className="text-xs font-bold tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] uppercase">
                Life at EPHAD ICT Academy
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {SUMMER_BOOTCAMP_ASSETS.lifeAtEphad.map((item, i) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative overflow-hidden rounded-sm border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] group ${
                    i === 0 ? "col-span-2 md:col-span-1 aspect-[4/3]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ${
                      i === 0 ? "object-contain bg-[var(--lm-section)] dark:bg-[var(--dm-section)] p-2" : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-32 bg-[var(--lm-base)] dark:bg-[var(--dm-base)] relative z-10">
          <div className="container mx-auto px-6 md:px-[10%]">
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                <h2 className="text-xs font-bold tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] uppercase">
                  7 Tracks Available
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] tracking-tighter uppercase">
                Our <span className="font-bold">Courses.</span>
              </h3>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {summerBootcampCourses.map((course) => {
                const payConfig = getPayConfig(course.id);
                const Icon = course.icon;

                return (
                  <motion.article
                    key={course.id}
                    variants={fadeIn}
                    onMouseEnter={() => setCourseName(course.title)}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="p-2 bg-white/90 dark:bg-black/80 rounded-sm">
                          <Icon size={18} className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-8">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] mb-2">
                        {SUMMER_BOOTCAMP.schedule.period} · 3 Days/Week
                      </p>
                      <h4 className="text-xl font-bold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-3 uppercase tracking-tight">
                        {course.title}
                      </h4>
                      <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed text-sm mb-6 flex-1">
                        {course.description}
                      </p>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
                        <div className="flex-1">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] block mb-1">
                            Course Fee
                          </span>
                          <span className="text-2xl font-black text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">
                            ₦{course.priceNGN.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all"
                          >
                            Apply
                            <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                          </a>
                          {payConfig && (
                            <button
                              onClick={() => setSelectedCourse(payConfig)}
                              className="inline-flex items-center justify-center px-4 py-3 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] text-[10px] font-bold uppercase tracking-widest hover:border-[var(--lm-text-main)] dark:hover:border-white transition-colors"
                            >
                              Pay Fee
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Contact + Enquiry */}
        <section
          id="enroll"
          className="py-32 bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] relative overflow-hidden"
        >
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.10)_0%,transparent_60%)] pointer-events-none" />

          <div className="container mx-auto px-6 md:px-[10%] relative z-20">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">
                    Get In Touch
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-8">
                  Apply <br />Today.
                </h2>

                <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed mb-10">
                  Classes run from {SUMMER_BOOTCAMP.startDate} to {SUMMER_BOOTCAMP.endDate} for students {SUMMER_BOOTCAMP.ageRange.toLowerCase()}. Complete the registration form to secure a spot, then pay your course fee online or contact us for assistance.
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  <a
                    href={`tel:${SUMMER_BOOTCAMP.contact.phone}`}
                    className="flex items-center gap-3 text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)] transition-colors"
                  >
                    <Phone size={16} className="flex-shrink-0" />
                    <span className="text-sm font-light tracking-wide">{SUMMER_BOOTCAMP.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${SUMMER_BOOTCAMP.contact.email}`}
                    className="flex items-center gap-3 text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)] transition-colors"
                  >
                    <Mail size={16} className="flex-shrink-0" />
                    <span className="text-sm font-light tracking-wide">{SUMMER_BOOTCAMP.contact.email}</span>
                  </a>
                  <a
                    href={`https://${SUMMER_BOOTCAMP.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)] transition-colors"
                  >
                    <Globe size={16} className="flex-shrink-0" />
                    <span className="text-sm font-light tracking-wide">{SUMMER_BOOTCAMP.contact.website}</span>
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    "Limited cohort sizes per track",
                    "Dedicated youth mentors",
                    "Hands-on project-based learning",
                    "Certificate on completion",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-[var(--lm-text-muted)]/70 dark:text-[var(--dm-text-main)]/70 font-light"
                    >
                      <CheckCircle2 size={14} className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[var(--lm-base)] dark:bg-[var(--dm-base)] p-10 md:p-12 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
                <ApplicationPanel />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function ApplicationPanel() {
  const formCourses = [
    "Computer Basics",
    "Coding and Programming",
    "Mobile App Development",
    "Website Development",
    "Graphic Design",
    "AI and Automation",
    "Cybersecurity Basics",
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)] mb-3">
          Registration Form
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase tracking-tight mb-4">
          Tech Summer Bootcamp 2026
        </h3>
        <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed">
          Apply through our official Google Form. You&apos;ll provide the student&apos;s name, email, phone number, and course of interest.
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {formCourses.map((course) => (
          <li
            key={course}
            className="flex items-center gap-3 text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light"
          >
            <CheckCircle2 size={14} className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)] flex-shrink-0" />
            {course}
          </li>
        ))}
      </ul>

      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full h-16 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-black overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-3"
      >
        <span className="relative font-black uppercase tracking-[0.2em] text-sm">
          Open Application Form
        </span>
        <ExternalLink size={16} className="relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

      <p className="text-[10px] uppercase tracking-widest text-[var(--lm-text-muted)]/60 dark:text-[var(--dm-text-muted)]/60 text-center">
        Opens in a new tab · Google Forms
      </p>
    </div>
  );
}

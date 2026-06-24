"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { ShieldCheck, Gamepad2, Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer, slideInLeft } from "@/lib/motion";
import { youthPayConfig } from "@/lib/payments/config";
import type { CoursePayConfig } from "@/lib/payments/types";
import { EnrollModal } from "@/components/ui/EnrollModal";
import { useWhatsAppCtx } from "@/context/WhatsAppContext";

export default function KidsTeensPage() {
  const [selectedCourse, setSelectedCourse] = useState<CoursePayConfig | null>(null);
  const { setCourseName } = useWhatsAppCtx();

  return (
    <>
      <EnrollModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />

      <div className="bg-[var(--lm-base)] dark:bg-[var(--dm-base)] transition-colors duration-500 overflow-hidden min-h-screen pb-32">

        {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-[10%] bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] transition-colors duration-500">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1 }} animate={{ scale: 1.15 }}
              transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
                alt="Kids learning tech"
                fill
                className="object-cover grayscale-[5%] dark:grayscale-[10%] opacity-30 dark:opacity-45"
                priority
              />
            </motion.div>
            {/* Light mode: soft elevated surface blend */}
            <div className="absolute inset-0 dark:hidden bg-gradient-to-t from-[var(--lm-elevated)] via-[var(--lm-elevated)]/70 to-transparent" />
            {/* Dark mode: soft blend — no heavy darkness */}
            <div className="absolute inset-0 hidden dark:block bg-gradient-to-t from-[var(--dm-elevated)] via-[var(--dm-elevated)]/60 to-transparent" />
            {/* Light mode: soft corner blooms */}
            <div className="absolute inset-0 dark:hidden bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.08)_0%,transparent_60%)]" />
            <div className="absolute inset-0 dark:hidden bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.06)_0%,transparent_50%)]" />
            {/* Dark mode: soft corner blooms */}
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,rgba(129,140,248,0.10)_0%,transparent_60%)]" />
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.08)_0%,transparent_50%)]" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Youth Labs · Program Line 01</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] leading-[0.9] mb-10">
                Inspiring <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-text-main)] to-[var(--lm-text-main)]/40 dark:from-white dark:to-white/20">
                  Young Creators.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[var(--lm-text-muted)]/70 dark:text-[var(--dm-text-main)]/70 font-light leading-relaxed max-w-2xl mb-4">
                Engaging programs designed specifically for kids and teens aged 7–17. We turn screen time into creative time, helping young minds build the skills they need for a bright digital future.
              </p>
              <p className="text-sm text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] uppercase tracking-widest font-medium mb-12">
                Available as term-based · holiday programs · bootcamp sprints
              </p>

              <div className="flex flex-wrap gap-6">
                <Link href="#programs" className="inline-flex h-16 items-center justify-center bg-[var(--lm-text-main)] dark:bg-white text-[var(--lm-base)] dark:text-black px-10 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                  View Tracks
                </Link>
                <Link href="#enroll" className="inline-flex h-16 items-center justify-center border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] px-10 font-bold uppercase tracking-widest text-sm hover:bg-[var(--lm-text-main)]/5 dark:hover:bg-white/5 transition-colors">
                  Enroll & Pay
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 2. THE METHODOLOGY ──────────────────────────────────────────── */}
        <section className="py-32 bg-[var(--lm-section)] dark:bg-[var(--dm-section)] relative z-10 transition-colors duration-500 border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
          <div className="container mx-auto px-6 md:px-[10%] relative z-20">
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                <h2 className="text-xs font-bold tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] uppercase">Our Approach</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] tracking-tighter uppercase">How We <span className="font-bold">Learn.</span></h3>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-16 lg:gap-24">
              {[
                { icon: ShieldCheck, title: "Supportive Environment", desc: "A safe and encouraging space where young learners can explore technology with confidence. We prioritize mentorship and guided discovery." },
                { icon: Gamepad2, title: "Creative Building", desc: "We believe in learning by doing. Students master complex concepts by creating their own games, websites, and interactive projects." },
                { icon: Brain, title: "Problem Solving Skills", desc: "Beyond coding, we help kids develop logical thinking and creative resilience, preparing them to tackle challenges with confidence and curiosity." }
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeIn} className="relative group mt-8 md:mt-0">
                  <span className="absolute -top-16 -left-8 text-[10rem] font-black leading-none text-[var(--lm-text-main)]/[0.04] dark:text-[var(--dm-text-main)]/[0.03] select-none pointer-events-none group-hover:-translate-y-2 group-hover:text-[var(--lm-accent)] dark:text-[var(--dm-accent)]/10 transition-all duration-700">
                    0{i + 1}
                  </span>
                  <div className="relative z-10 pt-8 border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] group-hover:border-[var(--lm-accent)] dark:border-[var(--dm-accent)] transition-colors duration-500">
                    <div className="mb-8 p-5 inline-flex bg-[var(--lm-base)] dark:bg-[var(--dm-base)] rounded-sm group-hover:bg-[var(--lm-text-main)] dark:group-hover:bg-white shadow-sm transition-colors duration-500">
                      <feature.icon size={26} className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] group-hover:text-[var(--lm-base)] dark:group-hover:text-black transition-colors duration-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] tracking-tight leading-tight uppercase mb-6 group-hover:text-[var(--lm-accent)] dark:text-[var(--dm-accent)] transition-colors duration-500">{feature.title}</h4>
                    <p className="text-[var(--lm-text-muted)]/70 dark:text-[var(--dm-text-main)]/60 font-light leading-relaxed text-base md:text-lg">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 3. THE TWO TRACKS ───────────────────────────────────────────── */}
        <section id="programs" className="py-32 bg-[var(--lm-base)] dark:bg-[var(--dm-base)] relative z-10 transition-colors duration-500">
          <div className="container mx-auto px-6 md:px-[10%] relative z-20">
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                <h2 className="text-xs font-bold tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] uppercase">Dedicated Tracks</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-light text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] tracking-tighter uppercase">Our <span className="font-bold">Programs.</span></h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {youthPayConfig.map((prog, pi) => (
                <motion.div
                  key={prog.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={pi === 0 ? slideInLeft : fadeIn}
                  onMouseEnter={() => setCourseName(prog.name)}
                  onMouseLeave={() => setCourseName(null)}
                  className="border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] overflow-hidden group hover:border-[var(--lm-text-main)]/30 dark:hover:border-white/30 transition-colors"
                >
                  <div className="h-64 relative bg-[var(--lm-panel)] dark:bg-[var(--dm-section)]">
                    <Image
                      src={prog.id === "kids-ict-club"
                        ? "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop"
                        : prog.id === "basic-computer"
                          ? "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
                          : "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                      }
                      alt={prog.name}
                      fill
                      className="object-cover opacity-90 dark:opacity-85 group-hover:scale-105 transition-transform duration-700 grayscale-[5%] dark:grayscale-[10%]"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-4 py-2 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-[var(--lm-text-main)] text-xs font-bold uppercase tracking-widest">
                        {prog.id === "kids-ict-club" ? "Ages 7 – 12" : prog.id === "basic-computer" ? "All Ages" : "Ages 13 – 17"}
                      </span>
                    </div>
                  </div>

                  <div className="p-10 bg-[var(--lm-band)] dark:bg-[var(--dm-section)]">
                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--lm-accent)] dark:text-[var(--dm-accent)]">{prog.duration}</span>
                    </div>
                    <h4 className="text-3xl font-bold text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-2">{prog.name}</h4>
                    {prog.statusLabel && (
                      <div className="mb-4 inline-flex items-center px-2 py-1 text-[9px] uppercase font-bold tracking-widest bg-[var(--lm-accent)]/10 text-[var(--lm-accent)] dark:bg-[var(--dm-accent)]/10 dark:text-[var(--dm-accent)] border border-[var(--lm-accent)]/20 dark:border-[var(--dm-accent)]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)] mr-2 animate-pulse" />
                        {prog.statusLabel}
                      </div>
                    )}
                    <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] mb-8 font-light leading-relaxed">{prog.description}</p>

                    <div className="flex items-center justify-between pt-6 border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] block">Program Fee</span>
                        <span className="text-2xl font-black text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]">₦{prog.priceNGN.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => !prog.registrationClosed && setSelectedCourse(prog)}
                        disabled={prog.registrationClosed}
                        className={`group/btn inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${prog.registrationClosed
                          ? "bg-[var(--lm-soft-line)] dark:bg-[var(--dm-soft-line)] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] opacity-50 cursor-not-allowed"
                          : "bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-black hover:opacity-90"
                          }`}
                      >
                        {prog.registrationClosed ? "Closed" : "Enroll & Pay"}
                        {!prog.registrationClosed && <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. CONTACT / ENQUIRY FORM ───────────────────────────────────── */}
        <section id="enroll" className="py-32 bg-[var(--lm-elevated)] dark:bg-[var(--dm-elevated)] border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] transition-colors duration-500 relative overflow-hidden">
          {/* light mode corner blooms */}
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.10)_0%,transparent_60%)] dark:hidden pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-[var(--lm-text-main)]/12 dark:hidden" />
          <div className="container mx-auto px-6 md:px-[10%] relative z-20">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[var(--lm-accent)] dark:bg-[var(--dm-accent)]" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Enquire</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] mb-8">Secure <br />Their Seat.</h2>
                <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light leading-relaxed mb-8">
                  Not ready to pay yet? Send us an enquiry and our admissions team will contact you within 24 hours. You can also click
                  <strong className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)]"> Enroll & Pay</strong> on any track above to pay instantly.
                </p>
                <div className="flex flex-col gap-3">
                  {["Limited cohort sizes", "Dedicated youth mentors", "Flexible scheduling options", "Progress reports for parents"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[var(--lm-text-muted)]/70 dark:text-[var(--dm-text-main)]/70 font-light">
                      <CheckCircle2 size={14} className="text-[var(--lm-accent)] dark:text-[var(--dm-accent)] flex-shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[var(--lm-base)] dark:bg-[var(--dm-base)] p-10 md:p-12 border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)]">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

/** A lightweight enquiry form (separate from Pay & Enroll) */
function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Enquiry received. We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Parent / Guardian Name *</label>
          <input required placeholder="Jane Doe" className="bg-transparent border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] h-12 focus:outline-none focus:border-[var(--lm-text-main)] dark:focus:border-white transition-colors text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase font-light tracking-wide placeholder:text-[var(--lm-text-muted)]/20 dark:placeholder:text-white/20" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Child / Teen Full Name *</label>
          <input required placeholder="John Doe Jr." className="bg-transparent border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] h-12 focus:outline-none focus:border-[var(--lm-text-main)] dark:focus:border-white transition-colors text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase font-light tracking-wide placeholder:text-[var(--lm-text-muted)]/20 dark:placeholder:text-white/20" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Phone Number *</label>
          <input required type="tel" placeholder="+234 913 333 3647" className="bg-transparent border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] h-12 focus:outline-none focus:border-[var(--lm-text-main)] dark:focus:border-white transition-colors text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase font-light tracking-wide placeholder:text-[var(--lm-text-muted)]/20 dark:placeholder:text-white/20" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Email Address *</label>
          <input required type="email" placeholder="ephadict@gmail.com" className="bg-transparent border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] h-12 focus:outline-none focus:border-[var(--lm-text-main)] dark:focus:border-white transition-colors text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase font-light tracking-wide placeholder:text-[var(--lm-text-muted)]/20 dark:placeholder:text-white/20" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Age Bracket *</label>
          <select required defaultValue="" className="bg-transparent border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] h-12 focus:outline-none focus:border-[var(--lm-text-main)] dark:focus:border-white transition-colors text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase font-light tracking-wide appearance-none cursor-pointer">
            <option value="" disabled className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">Age</option>
            <option value="7-9" className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">7 – 9</option>
            <option value="10-12" className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">10 – 12</option>
            <option value="13-17" className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">13 – 17</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Program Track *</label>
          <select required defaultValue="" className="bg-transparent border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] h-12 focus:outline-none focus:border-[var(--lm-text-main)] dark:focus:border-white transition-colors text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase font-light tracking-wide appearance-none cursor-pointer">
            <option value="" disabled className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">Select</option>
            {youthPayConfig.map(p => (
              <option key={p.id} value={p.id} className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">{p.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)]">Preferred Format *</label>
          <select required defaultValue="" className="bg-transparent border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] h-12 focus:outline-none focus:border-[var(--lm-text-main)] dark:focus:border-white transition-colors text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] uppercase font-light tracking-wide appearance-none cursor-pointer">
            <option value="" disabled className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">Format</option>
            <option value="term" className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">Term-Based</option>
            <option value="holiday" className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">Holiday Program</option>
            <option value="bootcamp" className="bg-[var(--lm-accent)] dark:bg-[var(--dm-base)]">Bootcamp Sprint</option>
          </select>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="group relative w-full h-16 bg-[var(--lm-text-main)] dark:bg-white text-white dark:text-black mt-4 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50">
        <span className="relative font-black uppercase tracking-[0.2em] text-sm">
          {isSubmitting ? "Submitting..." : "Send Enquiry"}
        </span>
      </button>
    </form>
  );
}

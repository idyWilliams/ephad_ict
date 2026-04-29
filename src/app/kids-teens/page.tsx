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

export default function KidsTeensPage() {
  const [selectedCourse, setSelectedCourse] = useState<CoursePayConfig | null>(null);

  return (
    <>
      <EnrollModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />

      <div className="bg-[var(--lm-base)] dark:bg-[#02040a] transition-colors duration-500 overflow-hidden min-h-screen pb-32">

        {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-[10%]">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1 }} animate={{ scale: 1.15 }}
              transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
                alt="Code editor on screen"
                fill
                className="object-cover opacity-20 dark:opacity-30 mix-blend-multiply dark:mix-blend-luminosity grayscale-[10%] dark:grayscale-[30%]"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--lm-base)] via-[var(--lm-base)]/90 dark:from-[#02040a] dark:via-[#02040a]/90 to-[var(--lm-base)]/30 dark:to-[#02040a]/30" />
            {/* subtle atmospheric bloom */}
            <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[55%] bg-[var(--color-brand-sky)]/[0.05] rounded-full blur-[120px] pointer-events-none dark:hidden" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[var(--color-brand-sky)]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--lm-body)]/60 dark:text-white/60">Youth Labs · Program Line 01</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[var(--lm-ink)] dark:text-white leading-[0.9] mb-10">
                Securing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lm-ink)] to-[var(--lm-ink)]/40 dark:from-white dark:to-white/20">
                  Their Future.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[var(--lm-body)]/70 dark:text-white/70 font-light leading-relaxed max-w-2xl mb-4">
                Two structured tracks for young learners aged 7–17. Safe, guided, and hands-on programs that build real digital skills—turning screen consumers into creators.
              </p>
              <p className="text-sm text-[var(--lm-body)]/50 dark:text-white/50 uppercase tracking-widest font-medium mb-12">
                Available as term-based · holiday programs · bootcamp sprints
              </p>

              <div className="flex flex-wrap gap-6">
                <Link href="#programs" className="inline-flex h-16 items-center justify-center bg-[var(--lm-ink)] dark:bg-white text-[var(--lm-base)] dark:text-black px-10 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                  View Tracks
                </Link>
                <Link href="#enroll" className="inline-flex h-16 items-center justify-center border border-[var(--lm-ink)]/20 dark:border-white/20 text-[var(--lm-ink)] dark:text-white px-10 font-bold uppercase tracking-widest text-sm hover:bg-[var(--lm-ink)]/5 dark:hover:bg-white/5 transition-colors">
                  Enroll & Pay
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 2. THE METHODOLOGY ──────────────────────────────────────────── */}
        <section className="py-32 bg-[var(--lm-band)] dark:bg-[#050505] relative z-10 transition-colors duration-500 border-t border-[var(--lm-ink)]/5 dark:border-white/5">
          <div className="container mx-auto px-6 md:px-[10%] relative z-20">
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[var(--color-brand-sky)]" />
                <h2 className="text-xs font-bold tracking-[0.3em] text-[var(--lm-body)]/50 dark:text-white/50 uppercase">Core Philosophy</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-light text-[var(--lm-ink)] dark:text-white tracking-tighter uppercase">The <span className="font-bold">Methodology.</span></h3>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-16 lg:gap-24">
              {[
                { icon: ShieldCheck, title: "Controlled Environment", desc: "A rigorously moderated, distraction-free lab space. We prioritize emotional safety and guided encouragement so young minds can experiment fearlessly." },
                { icon: Gamepad2, title: "Applied Engineering", desc: "Theory is secondary. Students grasp complex computer science concepts by building their own video games, web interfaces, and interactive projects." },
                { icon: Brain, title: "Cognitive Architecture", desc: "Beyond syntax, our curriculum fundamentally rewires how young brains approach problems—forging deep analytical skills, spatial logic, and creative resilience." }
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeIn} className="relative group mt-8 md:mt-0">
                  <span className="absolute -top-16 -left-8 text-[10rem] font-black leading-none text-[var(--lm-ink)]/[0.04] dark:text-white/[0.03] select-none pointer-events-none group-hover:-translate-y-2 group-hover:text-[var(--color-brand-sky)]/10 transition-all duration-700">
                    0{i + 1}
                  </span>
                  <div className="relative z-10 pt-8 border-t border-[var(--lm-ink)]/20 dark:border-white/20 group-hover:border-[var(--color-brand-sky)] transition-colors duration-500">
                    <div className="mb-8 p-5 inline-flex bg-[var(--lm-base)] dark:bg-[#02040a] rounded-sm group-hover:bg-[var(--lm-ink)] dark:group-hover:bg-white shadow-sm transition-colors duration-500">
                      <feature.icon size={26} className="text-[var(--lm-ink)] dark:text-white group-hover:text-[var(--lm-base)] dark:group-hover:text-black transition-colors duration-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-[var(--lm-ink)] dark:text-white tracking-tight leading-tight uppercase mb-6 group-hover:text-[var(--color-brand-sky)] transition-colors duration-500">{feature.title}</h4>
                    <p className="text-[var(--lm-body)]/70 dark:text-white/60 font-light leading-relaxed text-base md:text-lg">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 3. THE TWO TRACKS ───────────────────────────────────────────── */}
        <section id="programs" className="py-32 bg-[var(--lm-base)] dark:bg-[#02040a] relative z-10 transition-colors duration-500">
          <div className="container mx-auto px-6 md:px-[10%] relative z-20">
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[var(--color-brand-sky)]" />
                <h2 className="text-xs font-bold tracking-[0.3em] text-[var(--lm-body)]/50 dark:text-white/50 uppercase">Dedicated Tracks</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-light text-[var(--lm-ink)] dark:text-white tracking-tighter uppercase">The <span className="font-bold">Curriculum.</span></h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {youthPayConfig.map((prog, pi) => (
                <motion.div
                  key={prog.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={pi === 0 ? slideInLeft : fadeIn}
                  className="border border-[var(--lm-ink)]/10 dark:border-white/10 overflow-hidden group hover:border-[var(--lm-ink)]/30 dark:hover:border-white/30 transition-colors"
                >
                  <div className="h-64 relative bg-[var(--lm-panel)] dark:bg-[#050505]">
                    <Image
                      src={pi === 0
                        ? "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        : "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      }
                      alt={prog.name}
                      fill
                      className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply dark:mix-blend-luminosity grayscale-[20%] dark:grayscale-[40%]"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-4 py-2 bg-[var(--lm-ink)] dark:bg-white text-white dark:text-[var(--lm-ink)] text-xs font-bold uppercase tracking-widest">
                        {prog.id === "kids-ict-club" ? "Ages 7 – 12" : "Ages 13 – 17"}
                      </span>
                    </div>
                  </div>

                  <div className="p-10 bg-[var(--lm-band)] dark:bg-[#050505]">
                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-brand-sky)]">{prog.duration}</span>
                    </div>
                    <h4 className="text-3xl font-bold text-[var(--lm-ink)] dark:text-white mb-4">{prog.name}</h4>
                    <p className="text-[var(--lm-body)]/60 dark:text-white/60 mb-8 font-light leading-relaxed">{prog.description}</p>

                    <div className="flex items-center justify-between pt-6 border-t border-[var(--lm-ink)]/5 dark:border-white/5">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--lm-body)]/40 dark:text-white/40 block">Program Fee</span>
                        <span className="text-2xl font-black text-[var(--lm-ink)] dark:text-white">₦{prog.priceNGN.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => setSelectedCourse(prog)}
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-[var(--lm-ink)] dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all"
                      >
                        Enroll & Pay
                        <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. CONTACT / ENQUIRY FORM ───────────────────────────────────── */}
        <section id="enroll" className="py-32 bg-[var(--lm-accent)] dark:bg-[#02040a] border-t border-[var(--lm-ink)]/10 dark:border-white/10 transition-colors duration-500">
          <div className="container mx-auto px-6 md:px-[10%] relative z-20">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[var(--color-brand-sky)]" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--lm-body)]/50 dark:text-white/50">Enquire</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[var(--lm-ink)] dark:text-white mb-8">Secure <br />Their Seat.</h2>
                <p className="text-[var(--lm-body)]/60 dark:text-white/60 font-light leading-relaxed mb-8">
                  Not ready to pay yet? Send us an enquiry and our admissions team will contact you within 24 hours. You can also click
                  <strong className="text-[var(--lm-ink)] dark:text-white"> Enroll & Pay</strong> on any track above to pay instantly.
                </p>
                <div className="flex flex-col gap-3">
                  {["Limited cohort sizes", "Dedicated youth mentors", "Flexible scheduling options", "Progress reports for parents"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[var(--lm-body)]/70 dark:text-white/70 font-light">
                      <CheckCircle2 size={14} className="text-[var(--color-brand-sky)] flex-shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[var(--lm-base)] dark:bg-[#050505] p-10 md:p-12 border border-[var(--lm-ink)]/10 dark:border-white/10">
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
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-body)]/50 dark:text-white/50">Parent / Guardian Name *</label>
          <input required placeholder="Jane Doe" className="bg-transparent border-b border-[var(--lm-ink)]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[var(--lm-ink)] dark:focus:border-white transition-colors text-[var(--lm-ink)] dark:text-white uppercase font-light tracking-wide placeholder:text-[var(--lm-body)]/20 dark:placeholder:text-white/20" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-body)]/50 dark:text-white/50">Child / Teen Full Name *</label>
          <input required placeholder="John Doe Jr." className="bg-transparent border-b border-[var(--lm-ink)]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[var(--lm-ink)] dark:focus:border-white transition-colors text-[var(--lm-ink)] dark:text-white uppercase font-light tracking-wide placeholder:text-[var(--lm-body)]/20 dark:placeholder:text-white/20" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-body)]/50 dark:text-white/50">Phone Number *</label>
          <input required type="tel" placeholder="+234 XXX" className="bg-transparent border-b border-[var(--lm-ink)]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[var(--lm-ink)] dark:focus:border-white transition-colors text-[var(--lm-ink)] dark:text-white uppercase font-light tracking-wide placeholder:text-[var(--lm-body)]/20 dark:placeholder:text-white/20" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-body)]/50 dark:text-white/50">Email Address *</label>
          <input required type="email" placeholder="HELLO@DOMAIN.COM" className="bg-transparent border-b border-[var(--lm-ink)]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[var(--lm-ink)] dark:focus:border-white transition-colors text-[var(--lm-ink)] dark:text-white uppercase font-light tracking-wide placeholder:text-[var(--lm-body)]/20 dark:placeholder:text-white/20" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-body)]/50 dark:text-white/50">Age Bracket *</label>
          <select required defaultValue="" className="bg-transparent border-b border-[var(--lm-ink)]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[var(--lm-ink)] dark:focus:border-white transition-colors text-[var(--lm-ink)] dark:text-white uppercase font-light tracking-wide appearance-none cursor-pointer">
            <option value="" disabled className="bg-[var(--lm-accent)] dark:bg-[#02040a]">Age</option>
            <option value="7-9" className="bg-[var(--lm-accent)] dark:bg-[#02040a]">7 – 9</option>
            <option value="10-12" className="bg-[var(--lm-accent)] dark:bg-[#02040a]">10 – 12</option>
            <option value="13-17" className="bg-[var(--lm-accent)] dark:bg-[#02040a]">13 – 17</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-body)]/50 dark:text-white/50">Program Track *</label>
          <select required defaultValue="" className="bg-transparent border-b border-[var(--lm-ink)]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[var(--lm-ink)] dark:focus:border-white transition-colors text-[var(--lm-ink)] dark:text-white uppercase font-light tracking-wide appearance-none cursor-pointer">
            <option value="" disabled className="bg-[var(--lm-accent)] dark:bg-[#02040a]">Select</option>
            {youthPayConfig.map(p => (
              <option key={p.id} value={p.id} className="bg-[var(--lm-accent)] dark:bg-[#02040a]">{p.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--lm-body)]/50 dark:text-white/50">Preferred Format *</label>
          <select required defaultValue="" className="bg-transparent border-b border-[var(--lm-ink)]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[var(--lm-ink)] dark:focus:border-white transition-colors text-[var(--lm-ink)] dark:text-white uppercase font-light tracking-wide appearance-none cursor-pointer">
            <option value="" disabled className="bg-[var(--lm-accent)] dark:bg-[#02040a]">Format</option>
            <option value="term" className="bg-[var(--lm-accent)] dark:bg-[#02040a]">Term-Based</option>
            <option value="holiday" className="bg-[var(--lm-accent)] dark:bg-[#02040a]">Holiday Program</option>
            <option value="bootcamp" className="bg-[var(--lm-accent)] dark:bg-[#02040a]">Bootcamp Sprint</option>
          </select>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="group relative w-full h-16 bg-[var(--lm-ink)] dark:bg-white text-white dark:text-black mt-4 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50">
        <span className="relative font-black uppercase tracking-[0.2em] text-sm">
          {isSubmitting ? "Submitting..." : "Send Enquiry"}
        </span>
      </button>
    </form>
  );
}

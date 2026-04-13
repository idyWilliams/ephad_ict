"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, ShieldCheck, Gamepad2, Brain, CheckCircle2 } from "lucide-react";
import { fadeIn, staggerContainer, slideInLeft } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function KidsTeensPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Enrollment request received. We'll be in touch shortly.", {
        className: 'bg-[#1C1C18] dark:bg-white text-white dark:text-[#1C1C18] border-[#1C1C18]/20 dark:border-white/20'
      });
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="bg-[#F4F3EF] dark:bg-[#02040a] transition-colors duration-500 overflow-hidden min-h-screen pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-[10%]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear"
            }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3EF] via-[#F4F3EF]/90 dark:from-[#02040a] dark:via-[#02040a]/90 to-[#F4F3EF]/30 dark:to-[#02040a]/30" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[var(--color-brand-sky)]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1C1C18]/60 dark:text-white/60">Youth Labs</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[#1C1C18] dark:text-white leading-[0.9] mb-10">
              Securing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C1C18] to-[#1C1C18]/50 dark:from-white dark:to-white/50">Their Future.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#1C1C18]/70 dark:text-white/70 font-light leading-relaxed max-w-2xl mb-12">
              Equip your children and teenagers with world-class digital skills. A safe, inspiring, and hands-on environment designed to turn digital consumers into early tech creators.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link href="#enroll" className="inline-flex h-16 items-center justify-center bg-[#1C1C18] dark:bg-white text-[#F4F3EF] dark:text-black px-10 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                Enroll Now
              </Link>
              <Link href="#programs" className="inline-flex h-16 items-center justify-center border border-[#1C1C18]/20 dark:border-white/20 text-[#1C1C18] dark:text-white px-10 font-bold uppercase tracking-widest text-sm hover:bg-[#1C1C18]/5 dark:hover:bg-white/5 transition-colors">
                Explore Tracks
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE METHODOLOGY */}
      <section className="py-32 bg-[#E6E5E0] dark:bg-[#050505] relative z-10 transition-colors duration-500 border-t border-[#1C1C18]/5 dark:border-white/5">
        <div className="container mx-auto px-6 md:px-[10%] relative z-20">
          <div className="mb-20">
             <div className="flex items-center gap-4 mb-4">
               <div className="w-8 h-px bg-[var(--color-brand-sky)]" />
               <h2 className="text-xs font-bold tracking-[0.3em] text-[#1C1C18]/50 dark:text-white/50 uppercase">Core Philosophy</h2>
             </div>
             <h3 className="text-4xl md:text-5xl font-light text-[#1C1C18] dark:text-white tracking-tighter uppercase">The <span className="font-bold">Methodology.</span></h3>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { icon: ShieldCheck, title: "Controlled Environment", desc: "A rigorously moderated, distraction-free lab space. We prioritize emotional safety and guided encouragement so young minds can experiment fearlessly." },
              { icon: Gamepad2, title: "Applied Engineering", desc: "Theory is secondary. Students grasp complex computer science concepts forcefully by building their own video games, web interfaces, and interactive logics." },
              { icon: Brain, title: "Cognitive Architecture", desc: "Beyond syntax, our curriculum fundamentally rewires how young brains approach problems—forging deep analytical skills, spatial logic, and creative resilience." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} className="relative group mt-8 md:mt-0">
                {/* Massive Background Number */}
                <span className="absolute -top-16 -left-8 text-[10rem] font-black leading-none text-[#1C1C18]/[0.04] dark:text-white/[0.03] select-none pointer-events-none group-hover:-translate-y-2 group-hover:text-[var(--color-brand-sky)]/10 transition-all duration-700">
                  0{i + 1}
                </span>
                
                <div className="relative z-10 pt-8 border-t border-[#1C1C18]/20 dark:border-white/20 group-hover:border-[var(--color-brand-sky)] transition-colors duration-500">
                  <div className="mb-8 p-5 inline-flex bg-[#F4F3EF] dark:bg-[#02040a] rounded-sm group-hover:bg-[#1C1C18] dark:group-hover:bg-white shadow-sm transition-colors duration-500">
                    <feature.icon size={26} className="text-[#1C1C18] dark:text-white group-hover:text-[#F4F3EF] dark:group-hover:text-black transition-colors duration-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#1C1C18] dark:text-white tracking-tight leading-tight uppercase mb-6 group-hover:text-[var(--color-brand-sky)] transition-colors duration-500">{feature.title}</h4>
                  <p className="text-[#1C1C18]/70 dark:text-white/60 font-light leading-relaxed text-base md:text-lg">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PROGRAMS OVERVIEW */}
      <section id="programs" className="py-32 bg-[#F4F3EF] dark:bg-[#02040a] relative z-10 transition-colors duration-500">
        <div className="container mx-auto px-6 md:px-[10%] relative z-20">
          <div className="mb-20">
             <h2 className="text-sm font-semibold tracking-[0.3em] text-[var(--color-brand-sky)] uppercase mb-4">Dedicated Tracks</h2>
             <h3 className="text-4xl md:text-5xl font-light text-[#1C1C18] dark:text-white tracking-tighter uppercase">The <span className="font-bold">Curriculum.</span></h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Kids Program */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft} className="border border-[#1C1C18]/10 dark:border-white/10 overflow-hidden group hover:border-[#1C1C18]/30 dark:hover:border-white/30 transition-colors">
              <div className="h-64 relative bg-[#E6E5E0] dark:bg-[#050505]">
                <Image src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="African kids coding" fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply dark:mix-blend-luminosity grayscale-[20%] dark:grayscale-[40%]" />
              </div>
              <div className="p-10 bg-[#ECEBE6] dark:bg-[#050505]">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-3xl font-bold text-[#1C1C18] dark:text-white">Kids Starter</h4>
                  <span className="px-4 py-1 border border-[#1C1C18]/20 dark:border-white/20 text-xs font-bold uppercase tracking-widest text-[#1C1C18]/60 dark:text-white/60">Ages 7 - 12</span>
                </div>
                <p className="text-[#1C1C18]/60 dark:text-white/60 mb-8 font-light leading-relaxed">Introducing the fundamentals of computational thinking. Kids will learn visual block programming, basic logic, and create interactive stories and games.</p>
                <ul className="flex flex-col gap-3 mb-10">
                  {["Scratch & Block Coding", "Basic Game Design", "Digital Citizenship & Safety"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#1C1C18]/80 dark:text-white/80"><CheckCircle2 size={16} className="text-[var(--color-brand-sky)]"/> {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Teens Program */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="border border-[#1C1C18]/10 dark:border-white/10 overflow-hidden group hover:border-[#1C1C18]/30 dark:hover:border-white/30 transition-colors">
              <div className="h-64 relative bg-[#E6E5E0] dark:bg-[#050505]">
                <Image src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="African teens coding" fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply dark:mix-blend-luminosity grayscale-[20%] dark:grayscale-[40%]" />
              </div>
              <div className="p-10 bg-[#ECEBE6] dark:bg-[#050505]">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-3xl font-bold text-[#1C1C18] dark:text-white">Teen Architect</h4>
                  <span className="px-4 py-1 border border-[#1C1C18]/20 dark:border-white/20 text-xs font-bold uppercase tracking-widest text-[#1C1C18]/60 dark:text-white/60">Ages 13 - 17</span>
                </div>
                <p className="text-[#1C1C18]/60 dark:text-white/60 mb-8 font-light leading-relaxed">Transitioning from concepts to actual syntax. Teens learn how the web works, building their first responsive websites and Python scripts.</p>
                <ul className="flex flex-col gap-3 mb-10">
                  {["HTML5, CSS3 & JavaScript Basics", "Introduction to Python", "UI/UX & Web Publishing"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#1C1C18]/80 dark:text-white/80"><CheckCircle2 size={16} className="text-[var(--color-brand-sky)]"/> {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. REGISTRATION FORM */}
      <section id="enroll" className="py-32 bg-[#DFDED8] dark:bg-[#02040a] border-t border-[#1C1C18]/10 dark:border-white/10 transition-colors duration-500">
         <div className="container mx-auto px-6 md:px-[10%] relative z-20">
           <div className="grid lg:grid-cols-12 gap-16">
             <div className="lg:col-span-5">
               <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#1C1C18] dark:text-white mb-8">Secure <br/>Their Seat.</h2>
               <p className="text-[#1C1C18]/60 dark:text-white/60 font-light leading-relaxed mb-12">Spaces in our Youth Labs are highly limited to ensure strict student-to-mentor ratios. Fill out this pre-enrollment form and an admissions counselor will contact you.</p>
             </div>

             <div className="lg:col-span-7 bg-[#F4F3EF] dark:bg-[#050505] p-10 md:p-12 border border-[#1C1C18]/10 dark:border-white/10">
               <form onSubmit={onSubmit} className="flex flex-col gap-8">
                 <div className="grid md:grid-cols-2 gap-8">
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1C1C18]/50 dark:text-white/50">Parent/Guardian Name *</label>
                     <input required placeholder="Jane Doe" className="bg-transparent border-b border-[#1C1C18]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[#1C1C18] dark:focus:border-white transition-colors text-[#1C1C18] dark:text-white uppercase font-light tracking-wide placeholder:text-[#1C1C18]/20 dark:placeholder:text-white/20" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1C1C18]/50 dark:text-white/50">Student Name *</label>
                     <input required placeholder="John Doe Jr." className="bg-transparent border-b border-[#1C1C18]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[#1C1C18] dark:focus:border-white transition-colors text-[#1C1C18] dark:text-white uppercase font-light tracking-wide placeholder:text-[#1C1C18]/20 dark:placeholder:text-white/20" />
                   </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1C1C18]/50 dark:text-white/50">Phone Number *</label>
                     <input required type="tel" placeholder="+234 XXX" className="bg-transparent border-b border-[#1C1C18]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[#1C1C18] dark:focus:border-white transition-colors text-[#1C1C18] dark:text-white uppercase font-light tracking-wide placeholder:text-[#1C1C18]/20 dark:placeholder:text-white/20" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1C1C18]/50 dark:text-white/50">Email Address *</label>
                     <input required type="email" placeholder="HELLO@DOMAIN.COM" className="bg-transparent border-b border-[#1C1C18]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[#1C1C18] dark:focus:border-white transition-colors text-[#1C1C18] dark:text-white uppercase font-light tracking-wide placeholder:text-[#1C1C18]/20 dark:placeholder:text-white/20" />
                   </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1C1C18]/50 dark:text-white/50">Age Bracket *</label>
                     <select required defaultValue="" className="bg-transparent border-b border-[#1C1C18]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[#1C1C18] dark:focus:border-white transition-colors text-[#1C1C18] dark:text-white uppercase font-light tracking-wide appearance-none cursor-pointer">
                        <option value="" disabled className="bg-[#DFDED8] dark:bg-[#02040a]">Select Age</option>
                        <option value="7-9" className="bg-[#DFDED8] dark:bg-[#02040a]">7 - 9 Years</option>
                        <option value="10-12" className="bg-[#DFDED8] dark:bg-[#02040a]">10 - 12 Years</option>
                        <option value="13-17" className="bg-[#DFDED8] dark:bg-[#02040a]">13 - 17 Years</option>
                     </select>
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1C1C18]/50 dark:text-white/50">Preferred Mode *</label>
                     <select required defaultValue="" className="bg-transparent border-b border-[#1C1C18]/20 dark:border-white/20 h-12 focus:outline-none focus:border-[#1C1C18] dark:focus:border-white transition-colors text-[#1C1C18] dark:text-white uppercase font-light tracking-wide appearance-none cursor-pointer">
                        <option value="" disabled className="bg-[#DFDED8] dark:bg-[#02040a]">Select Mode</option>
                        <option value="in_person" className="bg-[#DFDED8] dark:bg-[#02040a]">In-Person (Abuja)</option>
                        <option value="online" className="bg-[#DFDED8] dark:bg-[#02040a]">Online / Hybrid</option>
                     </select>
                   </div>
                 </div>

                 <div className="flex flex-col gap-2 mt-4">
                   <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1C1C18]/50 dark:text-white/50">Message / Goals (Optional)</label>
                   <textarea rows={3} placeholder="What are your child's immediate tech interests?" className="bg-transparent border-b border-[#1C1C18]/20 dark:border-white/20 focus:outline-none focus:border-[#1C1C18] dark:focus:border-white transition-colors text-[#1C1C18] dark:text-white font-light uppercase tracking-wide placeholder:text-[#1C1C18]/20 dark:placeholder:text-white/20 resize-none py-2"></textarea>
                 </div>

                 <button type="submit" disabled={isSubmitting} className="group relative w-full h-16 bg-[#1C1C18] dark:bg-white text-white dark:text-black mt-8 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a24] to-[#1C1C18] dark:from-gray-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative font-black uppercase tracking-[0.2em] text-sm">
                      {isSubmitting ? "Processing..." : "Submit Application"}
                    </span>
                 </button>
               </form>
             </div>
           </div>
         </div>
      </section>

    </div>
  );
}

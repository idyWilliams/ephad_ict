"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    /* lm-section-strong — intentionally deeper than base/section, anchors the bottom */
    <footer className="bg-[var(--lm-section-strong)] dark:bg-[var(--dm-section)] border-t border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] pt-24 pb-8 overflow-hidden relative z-10 transition-colors duration-500">

      {/* Light mode: radial vignette from bottom-center — anchors the page visually */}
      <div className="absolute inset-0 dark:hidden pointer-events-none bg-[radial-gradient(ellipse_at_50%_110%,rgba(11,12,29,0.07)_0%,transparent_65%)]" />
      {/* Subtle top inner-shadow to mark boundary from CTA above */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--lm-text-main)]/[0.04] to-transparent dark:hidden pointer-events-none" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-20">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-20 border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] transition-colors duration-500">

          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-4 group mb-6">
                <div className="w-14 h-14 relative overflow-hidden border border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] flex items-center justify-center shadow-sm dark:shadow-none group-hover:scale-105 transition-transform duration-300">
                  <Image src="/ephad-logo.jpg" alt="EPHAD Logo" fill className="object-cover" />
                </div>
                {/* <span className="font-semibold tracking-[0.4em] uppercase text-sm text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] transition-colors duration-500">EPHAD</span> */}
              </Link>
              <p className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] font-light max-w-sm text-sm leading-relaxed mb-8 transition-colors duration-500">
                Empowering Africa&apos;s next generation of tech leaders, designers, and developers through hands-on mentorship and creative learning in Abuja.
              </p>
            </div>
            <a href="mailto:ephadict@gmail.com" className="group inline-flex items-center gap-4 text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:text-[var(--lm-accent)] dark:hover:text-[var(--dm-accent)] transition-colors w-fit">
              <span className="text-xl font-light uppercase tracking-widest border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] pb-1 group-hover:border-[var(--lm-accent)] transition-colors duration-500">
                ephadict@gmail.com
              </span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] mb-8 transition-colors duration-500">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Programs", href: "/#courses" },
                { label: "Summer Bootcamp", href: "/summer-bootcamp" },
                { label: "About", href: "/#about" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Registration", href: "/#register" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}
                    className="text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] hover:text-[var(--lm-text-main)] dark:hover:text-[var(--dm-text-main)] uppercase tracking-widest text-sm font-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] mb-8 transition-colors duration-500">Network</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/ephad_ictacademy/' },
                { name: 'Facebook', url: 'https://www.facebook.com/EphadICTAcademy' },
                { name: 'TikTok', url: 'https://tiktok.com/@ephadictacademy' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ephad-ict-academy' }
              ].map((social) => (
                <li key={social.name}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] hover:text-[var(--lm-text-main)] dark:hover:text-[var(--dm-text-main)] transition-colors">
                    <span className="uppercase tracking-widest text-sm font-light relative">
                      {social.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--lm-accent)] transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Watermark */}
        <div className="py-12 md:py-20 flex justify-center border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] mb-8 transition-colors duration-500">
          <span className="text-[15vw] md:text-[18vw] font-black uppercase leading-none tracking-tighter text-[var(--lm-text-main)]/[0.055] dark:text-[var(--dm-text-main)]/5 select-none transition-colors duration-500">
            EPHAD
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--lm-text-muted)] dark:text-[var(--dm-text-muted)] md:flex-row transition-colors duration-500">
          <p>© {new Date().getFullYear()} EPHAD ICT Academy.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[var(--lm-text-main)] dark:hover:text-[var(--dm-text-main)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--lm-text-main)] dark:hover:text-[var(--dm-text-main)] transition-colors">Terms of Service</Link>
          </div>
          <p>
            Designed & Built with <span className="text-[var(--lm-accent)]">♥</span> by{" "}
            <a href="https://isentrytechnologies.com" target="_blank" rel="noopener noreferrer"
              className="text-[var(--lm-text-main)] dark:text-[var(--dm-text-main)] hover:text-[var(--lm-accent)] transition-colors border-b border-[var(--lm-soft-line)] dark:border-[var(--dm-soft-line)] hover:border-transparent">
              Isentry Technologies
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};


"use client";

/**
 * WhatsAppRibbon
 * ──────────────────────────────────────────────────────────────────────────
 * Floating support button — bottom-right on all pages.
 *
 * Behaviour:
 * - Desktop: pill with "Need help before enrolling?" label that updates to
 *   "Questions about [Course Name]?" when user hovers a course card.
 * - Mobile: compact icon + short "Help" label.
 * - Sits at z-50 (below EnrollModal z-[100]), so it is never hidden but
 *   never blocks payment flows.
 * - Pulse ring animates on mount then slows down after 3 s.
 *
 * Configure:
 *   WA_NUMBER → replace with the real EPHAD WhatsApp number (international, no +)
 */

import { motion, AnimatePresence } from "framer-motion";
import { useWhatsAppCtx } from "@/context/WhatsAppContext";

const WA_NUMBER = "2348000000000"; // ← Replace with real EPHAD WhatsApp number

function buildLink(courseName: string | null) {
  const msg = courseName
    ? `Hi EPHAD ICT Academy, I have a question about the *${courseName}* program. Can you help?`
    : `Hi EPHAD ICT Academy, I'd like to ask about your programs before enrolling.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const WaIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      d="M22.5 9.5A8.9 8.9 0 0 0 16 6.7C11.4 6.7 7.7 10.4 7.7 15c0 1.5.4 3 1.1 4.3L7.5 25l5.8-1.5A8.9 8.9 0 0 0 16 24c4.6 0 8.3-3.7 8.3-8.3 0-2.2-.9-4.3-2.4-5.9l.6-.3ZM16 22.4c-1.3 0-2.6-.3-3.7-1l-.3-.2-3.4.9.9-3.3-.2-.3A7.2 7.2 0 0 1 8.8 15c0-4 3.2-7.2 7.2-7.2a7.2 7.2 0 0 1 5.1 2.1 7.2 7.2 0 0 1 2.1 5.1c0 4-3.2 7.2-7.2 7.2Zm4-5.4c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5.3-.4v-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3C12 12.7 11.5 13.3 11.5 14.4s.8 2.3.9 2.5c.1.2 1.6 2.4 3.8 3.4.5.2.9.4 1.2.5.5.2 1 .1 1.4.1.4-.1 1.3-.5 1.5-1s.2-1 .1-1c-.1-.1-.2-.1-.4-.3Z"
      fill="white"
    />
  </svg>
);

export function WhatsAppRibbon() {
  const { courseName } = useWhatsAppCtx();

  const desktopLabel = courseName
    ? `Questions about ${courseName}?`
    : "Need help before enrolling?";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      // Sits above WhatsApp number but below EnrollModal overlay (z-[100])
      className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2 pointer-events-none"
    >
      <motion.a
        href={buildLink(courseName)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={desktopLabel}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="pointer-events-auto relative flex items-center gap-3 rounded-full shadow-2xl overflow-hidden
          bg-[var(--lm-ink)]/95 dark:bg-[#090b18]/95 backdrop-blur-md
          border border-white/10 dark:border-white/8
          pl-3 pr-5 py-3 group"
      >
        {/* Hover glow behind the pill */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#25D366]/10 to-transparent pointer-events-none" />

        {/* WhatsApp icon */}
        <div className="w-8 h-8 flex-shrink-0 relative z-10 drop-shadow-sm">
          <WaIcon />
        </div>

        {/* Desktop label — hidden on small screens */}
        <AnimatePresence mode="wait">
          <motion.span
            key={desktopLabel}
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.25 }}
            className="hidden md:block relative z-10 text-[11px] font-bold tracking-wide text-white dark:text-white whitespace-nowrap max-w-[200px] truncate"
          >
            {desktopLabel}
          </motion.span>
        </AnimatePresence>

        {/* Mobile label — always compact */}
        <span className="md:hidden relative z-10 text-[11px] font-bold tracking-wide text-white whitespace-nowrap">
          Help
        </span>

        {/* Pulse ring — only animates once on mount */}
        <motion.span
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 1.6 }}
          transition={{ delay: 3, duration: 1.2, ease: "easeOut" }}
          className="absolute -inset-1 rounded-full border border-[#25D366]/50 pointer-events-none"
        />
      </motion.a>

      {/* Course context chip — slides in when a course is hovered (desktop only) */}
      <AnimatePresence>
        {courseName && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-1.5 bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg pointer-events-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Asking about this course
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

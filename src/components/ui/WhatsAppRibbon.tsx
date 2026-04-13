"use client";

import { motion } from "framer-motion";

const WA_NUMBER = "2348000000000"; // ← Replace with real EPHAD WhatsApp number
const WA_MESSAGE = encodeURIComponent("Hi EPHAD ICT Academy, I'd like to ask about your programs.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export const WhatsAppRibbon = () => {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EPHAD on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 pl-4 pr-5 py-3 rounded-full shadow-2xl bg-[#1C1C18] dark:bg-white border border-[#1C1C18]/10 dark:border-white/10 hover:scale-105 active:scale-95 transition-transform duration-300"
    >
      {/* WhatsApp SVG icon */}
      <div className="w-8 h-8 flex-shrink-0">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="16" cy="16" r="16" fill="#25D366"/>
          <path
            d="M22.5 9.5A8.9 8.9 0 0 0 16 6.7C11.4 6.7 7.7 10.4 7.7 15c0 1.5.4 3 1.1 4.3L7.5 25l5.8-1.5A8.9 8.9 0 0 0 16 24c4.6 0 8.3-3.7 8.3-8.3 0-2.2-.9-4.3-2.4-5.9l.6-.3ZM16 22.4c-1.3 0-2.6-.3-3.7-1l-.3-.2-3.4.9.9-3.3-.2-.3A7.2 7.2 0 0 1 8.8 15c0-4 3.2-7.2 7.2-7.2a7.2 7.2 0 0 1 5.1 2.1 7.2 7.2 0 0 1 2.1 5.1c0 4-3.2 7.2-7.2 7.2Zm4-5.4c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5.3-.4v-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3C12 12.7 11.5 13.3 11.5 14.4s.8 2.3.9 2.5c.1.2 1.6 2.4 3.8 3.4.5.2.9.4 1.2.5.5.2 1 .1 1.4.1.4-.1 1.3-.5 1.5-1s.2-1 .1-1c-.1-.1-.2-.1-.4-.3Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Label */}
      <span className="text-xs font-bold tracking-wide uppercase text-white dark:text-[#1C1C18] whitespace-nowrap">
        Chat with us
      </span>

      {/* Pulse ring */}
      <span className="absolute -inset-1 rounded-full border border-[#25D366]/30 animate-ping pointer-events-none" />
    </motion.a>
  );
};

"use client";

/**
 * WhatsAppContext
 * ──────────────────────────────────────────────────────────────────────────
 * Lets any component downstream (course rows, program cards) set a
 * courseName hint. The WhatsAppRibbon reads this to build a context-aware
 * prefilled message.
 *
 * Usage:
 *   const { setCourseName } = useWhatsAppCtx();
 *   <div onMouseEnter={() => setCourseName(course.name)}
 *        onMouseLeave={() => setCourseName(null)} />
 */

import { createContext, useContext, useState, type ReactNode } from "react";

interface WhatsAppCtxValue {
  /** Currently hovered / focused course name, or null */
  courseName: string | null;
  setCourseName: (name: string | null) => void;
}

const WhatsAppCtx = createContext<WhatsAppCtxValue>({
  courseName: null,
  setCourseName: () => {},
});

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [courseName, setCourseName] = useState<string | null>(null);

  return (
    <WhatsAppCtx.Provider value={{ courseName, setCourseName }}>
      {children}
    </WhatsAppCtx.Provider>
  );
}

export function useWhatsAppCtx() {
  return useContext(WhatsAppCtx);
}

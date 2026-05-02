"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 border border-black/10 dark:border-[var(--dm-soft-line)]" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 border border-black/10 dark:border-[var(--dm-soft-line)] text-black/50 hover:text-black dark:text-[var(--dm-text-main)]/50 dark:hover:text-white transition-all overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
      <motion.div
        animate={{ rotate: isDark ? 0 : 90, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute"
      >
        <Moon size={16} />
      </motion.div>
      <motion.div
        animate={{ rotate: isDark ? -90 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute"
      >
        <Sun size={16} />
      </motion.div>
    </button>
  );
}

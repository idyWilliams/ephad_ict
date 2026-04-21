"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const GlobalBackground = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden transition-colors duration-1000">
      {/* Base page colour — dynamically linked to theme variables */}
      <div
        className="absolute inset-0 bg-background transition-colors duration-1000"
      />
    </div>
  );
};

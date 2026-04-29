import { useScroll, useTransform, MotionValue } from "framer-motion";

/**
 * A reusable hook for cinematic scroll parallax.
 * Pass a configuration to slow down or speed up the Y movement relative to scroll.
 */
export function useScrollParallax(offset: [number, number] = [0, 200]): MotionValue<number> {
  const { scrollY } = useScroll();
  // We transform scrollY -> to a negative offset to make images scroll slower
  // or a positive offset depending on the values. By default [0, 200] means 
  // as user scrolls, the element moves an extra 200px. We often want y-translation.
  return useTransform(scrollY, [0, 1000], offset);
}

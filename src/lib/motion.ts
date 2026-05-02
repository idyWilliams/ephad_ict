export const fadeIn = {
  hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

export const slowFadeIn = {
  hidden: { opacity: 0, y: 70, filter: "blur(15px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50, rotateY: 10 },
  visible: { 
    opacity: 1, 
    x: 0,
    rotateY: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50, rotateY: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    rotateY: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      ease: "easeInOut" as const,
      repeat: Infinity,
    }
  }
};

export const floatAnimationSlow = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-15, 15, -15],
    rotate: [-1, 1, -1],
    transition: {
      duration: 8,
      ease: "easeInOut" as const,
      repeat: Infinity,
    }
  }
};

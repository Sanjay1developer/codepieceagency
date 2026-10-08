import type { Variants } from "framer-motion";

const revealEase = [0.22, 1, 0.36, 1] as const;

export const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: revealEase },
  },
};

export const scrollStaggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.065, delayChildren: 0.04 },
  },
};

export const scrollRevealViewport = { once: true, amount: 0.2 };
export const scrollRevealTallViewport = { once: true, amount: 0.12 };

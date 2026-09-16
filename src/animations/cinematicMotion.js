/**
 * Centralized cinematic motion tokens — single source of truth
 */

export const MOTION = {
  duration: {
    fast: 0.2,
    base: 0.4,
    slow: 0.55,
    reveal: 0.6,
  },
  ease: {
    out: [0.22, 1, 0.36, 1],
    inOut: [0.45, 0, 0.55, 1],
  },
  distance: {
    sm: 12,
    md: 20,
    lg: 28,
  },
  stagger: {
    children: 0.08,
    delayChildren: 0.06,
  },
  viewport: {
    once: true,
    margin: "-48px",
  },
};

export const revealVariants = {
  hidden: { opacity: 0, y: MOTION.distance.lg },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.reveal,
      ease: MOTION.ease.out,
    },
  },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION.stagger.children,
      delayChildren: MOTION.stagger.delayChildren,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: MOTION.distance.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.slow,
      ease: MOTION.ease.out,
    },
  },
};

export const hoverLift = {
  y: -4,
  transition: { duration: MOTION.duration.fast, ease: MOTION.ease.out },
};

/** Hero entrance — fade + slide-up, plays once on mount */
export const HERO_ENTER = {
  distance: 8,
  duration: 0.65,
  stagger: 0.15,
};

export function heroEnterProps(step, reduceMotion) {
  if (reduceMotion) return {};
  return {
    initial: { opacity: 0, y: HERO_ENTER.distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: HERO_ENTER.duration,
      delay: step * HERO_ENTER.stagger,
      ease: MOTION.ease.out,
    },
  };
}

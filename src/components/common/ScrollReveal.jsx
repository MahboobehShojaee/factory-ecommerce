import { motion, useReducedMotion } from "framer-motion";
import {
  revealVariants,
  staggerContainerVariants,
  staggerItemVariants,
  MOTION,
} from "../../animations/cinematicMotion.js";

/**
 * Scroll-triggered reveal — respects prefers-reduced-motion
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  once = true,
  y = MOTION.distance.lg,
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: MOTION.viewport.margin }}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: MOTION.duration.reveal,
            ease: MOTION.ease.out,
            delay,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}

/** Stagger children on scroll */
export function ScrollRevealStagger({
  children,
  className = "",
  once = true,
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: MOTION.viewport.margin }}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}

export { revealVariants, staggerContainerVariants, staggerItemVariants };

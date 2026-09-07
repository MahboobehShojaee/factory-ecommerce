/**
 * Reusable Framer Motion animation presets
 * Centralized animation patterns for consistency and performance
 */

import { motion } from 'framer-motion';

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  }
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// ============================================
// CARD HOVER ANIMATIONS
// ============================================

export const cardHover = {
  hover: {
    y: -2,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

export const cardTap = {
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// ============================================
// BUTTON ANIMATIONS
// ============================================

export const buttonHover = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const buttonTap = {
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// ============================================
// DECORATIVE ANIMATIONS
// ============================================

export const goldLinePulse = {
  animate: {
    scaleX: [1, 1.3, 1],
    transition: { 
      duration: 2, 
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const glow = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// ============================================
// SCROLL ANIMATIONS
// ============================================

export const slideInFromBottom = {
  initial: { y: 50, opacity: 0 },
  whileInView: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  viewport: { once: true, margin: '-100px' }
};

export const slideInFromTop = {
  initial: { y: -50, opacity: 0 },
  whileInView: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  viewport: { once: true, margin: '-100px' }
};

// ============================================
// TRANSITION PRESETS
// ============================================

export const smoothTransition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94]
};

export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30
};

export const bounceTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 10
};

// ============================================
// COMPONENT WRAPPERS
// ============================================

/**
 * MotionDiv with fadeInUp animation
 */
export const FadeInUp = ({ children, className = '', ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={fadeInUp}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * MotionDiv with scaleIn animation
 */
export const ScaleIn = ({ children, className = '', ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={scaleIn}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * MotionDiv with stagger children
 */
export const StaggerContainer = ({ children, className = '', ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={staggerContainer}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * MotionDiv with stagger item animation
 */
export const StaggerItem = ({ children, className = '', ...props }) => (
  <motion.div
    variants={staggerItem}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get stagger delay based on index
 */
export const getStaggerDelay = (index, baseDelay = 0.1) => index * baseDelay;

/**
 * Create custom stagger variants
 */
export const createStaggerVariants = (itemCount, baseDelay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: baseDelay,
      delayChildren: 0.1
    }
  }
});

/**
 * Get responsive animation duration
 */
export const getResponsiveDuration = (isMobile = false) => isMobile ? 0.4 : 0.6;

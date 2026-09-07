/**
 * Card primitives — uses design system tokens
 */

import React from "react";
import { motion } from "framer-motion";
import { MOTION } from "../../animations/cinematicMotion.js";

const subtleHover = {
  y: -2,
  transition: { duration: MOTION.duration.fast, ease: MOTION.ease.out },
};

const subtleTap = {
  scale: 0.99,
  transition: { duration: 0.1 },
};

export const Card = React.memo(function Card({
  children,
  className = "",
  hover = false,
  onClick,
  ...props
}) {
  const motionProps = hover
    ? { whileHover: subtleHover, whileTap: subtleTap }
    : {};

  return (
    <motion.div
      className={`ds-card ds-card-static p-0 ${className}`}
      {...motionProps}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
});

export const GlassCard = React.memo(function GlassCard({
  children,
  className = "",
  onClick,
  ...props
}) {
  return (
    <div className={`ds-card ds-card-static ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
});

export const StatCard = React.memo(function StatCard({
  children,
  className = "",
  onClick,
  ...props
}) {
  return (
    <div className={`ds-stat-card ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
});

export default Card;

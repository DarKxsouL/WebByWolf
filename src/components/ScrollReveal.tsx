'use client';

import { motion, MotionProps } from 'framer-motion';
import React from 'react';

interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'slideBottom' | 'scaleIn';
  delay?: number;
}

const variantMap = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  slideBottom: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export const ScrollReveal = React.forwardRef<
  HTMLDivElement,
  ScrollRevealProps
>(({ children, variant = 'fadeUp', delay = 0, ...props }, ref) => {
  const variantConfig = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variantConfig}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

ScrollReveal.displayName = 'ScrollReveal';

export default ScrollReveal;

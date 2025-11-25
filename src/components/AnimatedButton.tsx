'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'blue' | 'default' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className = '', variant = 'default', onClick, disabled = false, type = 'button' }, ref) => {
    const variantStyles = {
      default: 'bg-blue-600 hover:bg-blue-700 text-white',
      blue: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${variantStyles[variant]} ${className}`}
        whileHover={{ scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)' }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;

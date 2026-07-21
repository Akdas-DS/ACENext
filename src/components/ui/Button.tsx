'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
  'aria-label'?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#2D4A3E] text-[#FAFAF8] hover:bg-[#365A4A] shadow-[0_1px_2px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_16px_rgba(45,74,62,0.25)]',
  secondary:
    'bg-transparent text-[#FAFAF8] border border-[#404046] hover:border-[#A8A29E] hover:text-white',
  ghost:
    'bg-transparent text-[#A8A29E] hover:text-[#FAFAF8] hover:bg-white/[0.04]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs tracking-wide gap-1.5',
  md: 'px-6 py-2.5 text-sm tracking-wide gap-2',
  lg: 'px-8 py-3.5 text-sm tracking-wide gap-2.5',
};

const MAGNETIC_STRENGTH = 0.2;
const SPRING_CONFIG = { damping: 20, stiffness: 300, mass: 0.5 };

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  className,
  as = 'button',
  href,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current || disabled || loading) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * MAGNETIC_STRENGTH);
      y.set((e.clientY - centerY) * MAGNETIC_STRENGTH);
    },
    [disabled, loading, x, y],
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled || loading) return;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const rippleX = e.clientX - rect.left;
      const rippleY = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x: rippleX, y: rippleY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
      onClick?.(e);
    },
    [disabled, loading, onClick],
  );

  const isDisabled = disabled || loading;

  const sharedClasses = cn(
    'relative inline-flex items-center justify-center font-medium rounded-lg',
    'overflow-hidden select-none transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1FEC8] focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    variantClasses[variant],
    sizeClasses[size],
    isDisabled && 'opacity-50 pointer-events-none',
    className,
  );

  const rippleElements = ripples.map((ripple) => (
    <span
      key={ripple.id}
      className="absolute rounded-full bg-white/20 pointer-events-none animate-[ripple_600ms_ease-out_forwards]"
      style={{
        left: ripple.x - 40,
        top: ripple.y - 40,
        width: 80,
        height: 80,
      }}
    />
  ));

  const content = (
    <>
      {loading && (
        <Loader2
          className="animate-spin shrink-0"
          size={size === 'sm' ? 14 : 16}
          aria-hidden="true"
        />
      )}
      <span className={cn(loading && 'opacity-80')}>{children}</span>
      {rippleElements}
    </>
  );

  if (as === 'a' && href) {
    return (
      <motion.div
        ref={ref}
        style={{ x: springX, y: springY, display: 'inline-block' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={href}
          className={sharedClasses}
          onClick={handleClick as React.MouseEventHandler<HTMLAnchorElement>}
          aria-disabled={isDisabled || undefined}
          aria-label={ariaLabel}
          tabIndex={isDisabled ? -1 : undefined}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type={type}
        className={sharedClasses}
        onClick={handleClick as React.MouseEventHandler<HTMLButtonElement>}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    </motion.div>
  );
}

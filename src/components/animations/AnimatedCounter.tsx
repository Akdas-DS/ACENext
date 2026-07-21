'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  once?: boolean;
  formatNumber?: boolean;
}

export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  decimals = 0,
  className,
  once = true,
  formatNumber = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-40px' });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    } else if (!once) {
      motionValue.set(0);
    }
  }, [isInView, target, motionValue, once]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (!ref.current) return;
      const value = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
      const formattedValue =
        formatNumber && decimals === 0
          ? Number(value).toLocaleString('en-US')
          : String(value);
      ref.current.textContent = `${prefix}${formattedValue}${suffix}`;
    });

    return unsubscribe;
  }, [springValue, suffix, prefix, decimals, formatNumber]);

  return (
    <motion.span
      ref={ref}
      className={cn('tabular-nums', className)}
      aria-label={`${prefix}${target}${suffix}`}
    >
      {prefix}0{suffix}
    </motion.span>
  );
}

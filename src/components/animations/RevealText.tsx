'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type RevealMode = 'word' | 'line';

interface RevealTextProps {
  children: string;
  mode?: RevealMode;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  as?: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'span';
  once?: boolean;
}

export default function RevealText({
  children,
  mode = 'word',
  delay = 0,
  duration = 0.5,
  stagger = 0.05,
  className,
  as: Tag = 'div',
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-60px' });

  const segments = mode === 'word' ? children.split(' ') : children.split('\n');

  return (
    <Tag ref={ref as never} className={cn('overflow-hidden', className)}>
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 20, filter: 'blur(4px)' }
          }
          transition={{
            duration,
            delay: delay + index * stagger,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={cn(
            'inline-block',
            mode === 'word' && index < segments.length - 1 && 'mr-[0.25em]',
          )}
        >
          {segment}
        </motion.span>
      ))}
    </Tag>
  );
}

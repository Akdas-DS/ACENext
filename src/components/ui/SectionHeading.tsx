'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type Alignment = 'left' | 'center';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: Alignment;
  className?: string;
  headingClassName?: string;
  as?: 'h1' | 'h2' | 'h3';
}

const alignmentClasses: Record<Alignment, string> = {
  left: 'text-left',
  center: 'text-center mx-auto',
};

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  className,
  headingClassName,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div
      ref={ref}
      className={cn('max-w-3xl', alignmentClasses[align], className)}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#F1FEC8] mb-4"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Tag
          className={cn(
            'font-heading font-semibold tracking-tight text-[#FAFAF8]',
            'text-3xl sm:text-4xl lg:text-5xl leading-[1.1]',
            headingClassName,
          )}
        >
          {heading}
        </Tag>
      </motion.div>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 text-base sm:text-lg leading-relaxed text-[#A8A29E] max-w-2xl"
          style={align === 'center' ? { marginInline: 'auto' } : undefined}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

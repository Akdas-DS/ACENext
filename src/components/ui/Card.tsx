'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type CardVariant = 'default' | 'featured' | 'glass';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  as?: 'div' | 'article' | 'section';
}

const variantClasses: Record<CardVariant, string> = {
  default: cn(
    'bg-[#1a1a1e] border border-white/10',
    'hover:border-[#404046] hover:bg-[#1e1e23]',
  ),
  featured: cn(
    'bg-gradient-to-b from-[#1e1e23] to-[#16161a] border border-[#F1FEC8]/20',
    'hover:border-[#F1FEC8]/40',
    'shadow-[0_0_0_1px_rgba(139,115,85,0.05)]',
  ),
  glass: cn(
    'bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]',
    'hover:bg-white/[0.06] hover:border-white/[0.1]',
  ),
};

const MotionComponents = {
  div: motion.create('div'),
  article: motion.create('article'),
  section: motion.create('section'),
};

export function Card({
  variant = 'default',
  children,
  className,
  noPadding = false,
  as: Tag = 'div',
  ...motionProps
}: CardProps) {
  const MotionTag = MotionComponents[Tag];

  return (
    <MotionTag
      className={cn(
        'rounded-xl transition-colors duration-300',
        !noPadding && 'p-6 sm:p-8',
        variantClasses[variant],
        className,
      )}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h2' | 'h3' | 'h4';
}

export function CardTitle({ children, className, as: Tag = 'h3' }: CardTitleProps) {
  return (
    <Tag className={cn('font-semibold text-[#FAFAF8] text-lg tracking-tight', className)}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-[#A8A29E] leading-relaxed mt-2', className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-6 flex items-center gap-3', className)}>
      {children}
    </div>
  );
}

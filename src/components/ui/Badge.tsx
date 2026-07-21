import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'outline' | 'bronze' | 'success' | 'muted';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    'bg-white/[0.06] text-[#FAFAF8] border border-white/[0.08]',
  outline:
    'bg-transparent text-[#A8A29E] border border-[#404046]',
  bronze:
    'bg-[#F1FEC8]/10 text-[#D4C5B2] border border-[#F1FEC8]/20',
  success:
    'bg-[#2D4A3E]/20 text-[#5A9A7E] border border-[#2D4A3E]/30',
  muted:
    'bg-[#2D2D32] text-[#A8A29E] border border-transparent',
};

export function Badge({ variant = 'default', children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1',
        'text-[11px] font-medium uppercase tracking-wider leading-none',
        'select-none whitespace-nowrap',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

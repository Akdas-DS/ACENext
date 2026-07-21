import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  gradient?: boolean;
  className?: string;
}

export function Divider({
  orientation = 'horizontal',
  label,
  gradient = false,
  className,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          'inline-block w-px self-stretch',
          gradient
            ? 'bg-gradient-to-b from-transparent via-[#2D2D32] to-transparent'
            : 'bg-[#2D2D32]',
          className,
        )}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn('flex items-center gap-4', className)}
        {...props}
      >
        <span
          className={cn(
            'h-px flex-1',
            gradient
              ? 'bg-gradient-to-r from-transparent to-[#2D2D32]'
              : 'bg-[#2D2D32]',
          )}
        />
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#A8A29E] font-medium shrink-0">
          {label}
        </span>
        <span
          className={cn(
            'h-px flex-1',
            gradient
              ? 'bg-gradient-to-l from-transparent to-[#2D2D32]'
              : 'bg-[#2D2D32]',
          )}
        />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        'h-px w-full',
        gradient
          ? 'bg-gradient-to-r from-transparent via-[#2D2D32] to-transparent'
          : 'bg-[#2D2D32]',
        className,
      )}
      {...props}
    />
  );
}

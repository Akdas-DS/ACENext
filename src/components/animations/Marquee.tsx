'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type MarqueeDirection = 'left' | 'right';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: MarqueeDirection;
  pauseOnHover?: boolean;
  className?: string;
  fade?: boolean;
  repeat?: number;
}

export function Marquee({
  children,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  className,
  fade = true,
  repeat = 4,
}: MarqueeProps) {
  const animationDirection = direction === 'left' ? 'normal' : 'reverse';
  const durationSeconds = 100 / speed;

  return (
    <div
      className={cn(
        'group relative flex overflow-hidden',
        className,
      )}
      role="marquee"
      aria-label="Scrolling content"
    >
      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent" />
        </>
      )}

      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0 items-center gap-8',
            'animate-[marquee_var(--marquee-duration)_linear_infinite]',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
          )}
          style={
            {
              '--marquee-duration': `${durationSeconds}s`,
              animationDirection,
            } as React.CSSProperties
          }
          aria-hidden={i > 0 || undefined}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

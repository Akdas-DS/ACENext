import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer' | 'nav';
  size?: 'default' | 'narrow' | 'wide';
}

const sizeClasses: Record<NonNullable<ContainerProps['size']>, string> = {
  narrow: 'max-w-5xl',
  default: 'max-w-7xl',
  wide: 'max-w-[1440px]',
};

export function Container({
  children,
  className,
  as: Tag = 'div',
  size = 'default',
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-5 sm:px-8 lg:px-12',
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        }}
        exit={{
          opacity: 0,
          y: -8,
          transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

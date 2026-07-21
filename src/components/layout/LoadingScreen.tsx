'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if we've already shown the loading screen this session
    const hasVisited = sessionStorage.getItem('acenext-loaded');
    if (hasVisited) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false);
      return;
    }

    // Simulate loading progress
    const duration = 2500; // 2.5 seconds total
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('acenext-loaded', 'true');
        }, 400); // Slight delay at 100% before fading out
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: '-10%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          {/* Logo animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12 flex flex-col items-center"
          >
            <div className="text-3xl font-bold tracking-tighter text-[#FAFAF8] lg:text-5xl">
              ACENEXT
            </div>
            <div className="mt-2 text-sm font-medium tracking-[0.3em] text-[#F1FEC8] uppercase">
              Solutions
            </div>
          </motion.div>

          {/* Progress bar container */}
          <div className="w-64 max-w-[80vw]">
            <div className="flex justify-between mb-3">
              <span className="text-xs font-medium tracking-widest text-[#A8A29E] uppercase">Loading</span>
              <span className="text-xs font-bold text-[#F1FEC8] tabular-nums">{progress}%</span>
            </div>
            <div className="h-0.5 w-full overflow-hidden rounded-full bg-[#2D2D32]">
              <motion.div
                className="h-full bg-[#F1FEC8]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.05 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

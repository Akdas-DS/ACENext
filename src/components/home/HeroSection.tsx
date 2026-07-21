'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 lg:px-10 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="mb-4 inline-block text-sm font-semibold tracking-[0.2em] text-[#F1FEC8] uppercase">
              ACENEXT Solutions
            </span>
            <h1 className="mb-6 font-heading text-5xl font-bold leading-[1.1] tracking-tight text-[#FAFAF8] md:text-7xl lg:text-8xl text-balance">
              Precision Automation. <br className="hidden md:block" />
              <span className="text-[#A8A29E]">Measurable Results.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-10 max-w-2xl text-lg text-[#A8A29E] md:text-xl text-balance"
          >
            Designing intelligent systems, deploying enterprise-grade workflows, and engineering data architecture for modern organizations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button as="a" href="/contact" variant="primary" size="lg">
              Initiate Transformation
            </Button>
            <Button as="a" href="/services" variant="secondary" size="lg">
              Explore Architecture
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A8A29E]">Scroll to explore</span>
        <div className="h-16 w-px overflow-hidden bg-[#2D2D32]">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="h-full w-full bg-[#F1FEC8]"
          />
        </div>
      </motion.div>
    </section>
  );
}

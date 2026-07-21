'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { TECH_STACK } from '@/lib/constants';

const categoryLabels: Record<string, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  database: 'Database',
  devops: 'DevOps',
  cloud: 'Cloud',
  analytics: 'Analytics',
  ai: 'AI & ML',
  automation: 'Automation',
};

const categoryColors: Record<string, string> = {
  language: 'border-[#2D4A3E]/40 hover:border-[#2D4A3E]',
  framework: 'border-[#1B2838]/40 hover:border-[#1B2838]',
  database: 'border-[#F1FEC8]/40 hover:border-[#F1FEC8]',
  devops: 'border-[#404046]/40 hover:border-[#404046]',
  cloud: 'border-[#1B2838]/40 hover:border-[#1B2838]',
  analytics: 'border-[#F1FEC8]/40 hover:border-[#F1FEC8]',
  ai: 'border-[#2D4A3E]/40 hover:border-[#2D4A3E]',
  automation: 'border-[#404046]/40 hover:border-[#404046]',
};

export default function TechSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const categories = Array.from(new Set(TECH_STACK.map((t) => t.category)));

  return (
    <section className="relative py-32 bg-background" ref={ref}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Technology Stack"
          heading="Modern Tools. Proven Architecture."
          description="We choose technologies for their reliability, performance, and long-term maintainability — not trends."
          align="center"
        />

        <div className="mt-20 space-y-12">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#F1FEC8] uppercase">
                {categoryLabels[cat] || cat}
              </h3>
              <div className="flex flex-wrap gap-3">
                {TECH_STACK.filter((t) => t.category === cat).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                    }}
                    className={`group rounded-lg border bg-[#2D2D32]/30 px-5 py-3 transition-all duration-300 hover:bg-[#2D2D32]/60 ${categoryColors[cat]}`}
                  >
                    <span className="text-sm font-medium text-[#FAFAF8]">{tech.name}</span>
                    <p className="mt-1 text-xs text-[#6B6B70] max-w-[200px]">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

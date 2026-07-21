'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { INDUSTRIES } from '@/lib/constants';

export default function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 bg-[#FAFAF8] section-light" ref={ref}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Industries We Serve"
          heading="Deep Domain Expertise Across Sectors"
          description="Every industry has unique operational challenges. We bring both technology fluency and sector-specific understanding to each engagement."
          align="center"
          headingClassName="!text-[#1A1A1E]"
          className="[&_span]:!text-[#F1FEC8] [&_p]:!text-[#6B6B70]"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
            >
              <Link
                href={`/industries#${industry.slug}`}
                className="group relative block rounded-xl border border-[#E8E4E0] bg-white p-6 transition-all duration-300 hover:border-[#F1FEC8]/30 hover:shadow-lg hover:shadow-[#F1FEC8]/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-semibold text-[#1A1A1E]">
                    {industry.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-[#A8A29E] transition-all group-hover:text-[#F1FEC8] group-hover:translate-x-0.5" />
                </div>
                <p className="text-sm text-[#6B6B70] leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

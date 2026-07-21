'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/lib/constants';

const serviceColors: Record<string, string> = {
  green: 'from-[#2D4A3E]/20 to-transparent border-[#2D4A3E]/30',
  navy: 'from-[#1B2838]/20 to-transparent border-[#1B2838]/30',
  bronze: 'from-[#F1FEC8]/20 to-transparent border-[#F1FEC8]/30',
  charcoal: 'from-[#404046]/20 to-transparent border-[#404046]/30',
};

const accentDots: Record<string, string> = {
  green: 'bg-[#2D4A3E]',
  navy: 'bg-[#1B2838]',
  bronze: 'bg-[#F1FEC8]',
  charcoal: 'bg-[#404046]',
};

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 bg-background" ref={ref}>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-gradient-radial-green opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Expertise"
          heading="Enterprise Solutions Engineered for Impact"
          description="We deliver four interconnected service pillars that address the full spectrum of digital transformation — from strategic consulting through technical implementation."
          align="center"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
            >
              <Link
                href={`/services#${service.slug}`}
                className={`group relative block rounded-2xl border bg-gradient-to-br p-8 lg:p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 ${serviceColors[service.color]}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`h-3 w-3 rounded-full ${accentDots[service.color]}`} />
                  <span className="text-xs font-medium tracking-[0.15em] text-[#A8A29E] uppercase">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#FAFAF8] mb-3 lg:text-2xl">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-[#A8A29E] leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#6B6B70]">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${accentDots[service.color]}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm font-medium text-[#D4C5B2] transition-colors group-hover:text-[#FAFAF8]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

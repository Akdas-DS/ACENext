'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PRICING } from '@/lib/constants';

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-32 bg-[#FAFAF8] section-light" ref={ref}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Investment"
          heading="Transparent Engagement Tiers"
          description="Clear pricing structures for every business stage. No hidden fees. No surprise invoices."
          align="center"
          headingClassName="!text-[#1A1A1E]"
          className="[&_span]:!text-[#F1FEC8] [&_p]:!text-[#6B6B70]"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
              className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${
                tier.highlighted
                  ? 'border-[#F1FEC8] bg-white shadow-lg shadow-[#F1FEC8]/10'
                  : 'border-[#E8E4E0] bg-white hover:border-[#A8A29E]'
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-[#F1FEC8] px-3 py-1 text-xs font-medium text-white">
                  {tier.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold text-[#1A1A1E]">{tier.name}</h3>
              <p className="mt-1 text-xl font-bold text-[#1A1A1E]">{tier.priceRange}</p>
              <p className="mt-3 text-sm text-[#6B6B70] leading-relaxed">{tier.description}</p>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[#404046]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2D4A3E]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-[#2D4A3E] text-white hover:bg-[#365A4A]'
                    : 'border border-white/10 text-[#1A1A1E] hover:bg-[#1A1A1E] hover:text-white'
                }`}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

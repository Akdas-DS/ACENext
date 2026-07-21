'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative py-32 bg-background" ref={ref}>
      <div className="mx-auto max-w-[900px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="FAQ"
          heading="Frequently Asked Questions"
          description="Answers to the most common questions about our consulting process, pricing, and capabilities."
          align="center"
        />

        <div className="mt-16 space-y-3">
          {FAQ_ITEMS.slice(0, 8).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
              className="rounded-xl border border-white/10 bg-[#2D2D32]/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                aria-expanded={openId === item.id}
              >
                <span className="text-sm font-medium text-[#FAFAF8] pr-4">{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[#A8A29E] transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-[#A8A29E] leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

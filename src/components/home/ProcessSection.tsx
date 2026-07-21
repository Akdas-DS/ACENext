'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !trackRef.current) return;

    const track = trackRef.current;

    const getScrollAmount = () => {
      return track.scrollWidth - window.innerWidth;
    };

    gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: containerRef });

  return (
    <section
      className="relative h-screen bg-background overflow-hidden flex items-center"
      ref={containerRef}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial-navy opacity-20 pointer-events-none" />

      <div className="absolute top-24 left-0 w-full px-6 lg:px-10 z-10 pointer-events-none">
        <SectionHeading
          eyebrow="Our Process"
          heading="A Proven Methodology"
          description="Every engagement follows our 8-step framework for predictable execution."
        />
      </div>

      {/* Track — w-max ensures it never wraps */}
      <div className="flex flex-nowrap w-max shrink-0 pl-6 lg:pl-10 mt-32" ref={trackRef}>
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.step}
            className="w-[300px] md:w-[400px] lg:w-[450px] shrink-0 mr-8 lg:mr-12"
          >
            <div className="relative pt-8 border-t border-white/10">
              {/* Step number dot */}
              <div className="absolute -top-4 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-bronze bg-background text-xs font-bold text-bronze">
                {step.step}
              </div>

              <div className="rounded-xl border border-white/10 bg-[#1A1A1E] p-6 lg:p-8 mt-6">
                <span className="text-xs font-medium tracking-[0.1em] text-bronze uppercase">
                  {step.duration}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-ivory leading-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm text-stone leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-6">
                  <h4 className="text-xs font-bold tracking-wider text-ivory uppercase mb-3">
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {step.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-xs text-warm-grey"
                      >
                        <div className="mt-1 h-1 w-1 rounded-full bg-bronze shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';

import FadeIn from '@/components/animations/FadeIn';
import SectionHeading from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { Target, Zap, Shield, LineChart } from 'lucide-react';

const values = [
  { title: "Precision", description: "Zero tolerance for inefficiency.", icon: Target },
  { title: "Velocity", description: "Rapid deployment and scaling.", icon: Zap },
  { title: "Security", description: "Enterprise-grade data protection.", icon: Shield },
  { title: "Outcomes", description: "Focus on measurable ROI.", icon: LineChart },
];

const stats = [
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 9, suffix: '+', label: 'Open to Industries' },
  { value: 95, suffix: '%', label: 'Client Retention' },
  { value: 100, suffix: '%', label: 'System Uptime' },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-32 bg-background overflow-hidden" ref={ref}>
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial-bronze opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeading
              eyebrow="About ACENEXT"
              heading="Transforming Complex Operations Into Measurable Outcomes"
              description="We are an enterprise technology consulting firm specializing in intelligent automation, process optimization, and custom software development. We don't just build technology — we architect business transformation."
            />

            <FadeIn delay={0.3} className="mt-8">
              <p className="text-[#A8A29E] leading-relaxed">
                Our approach combines deep industry expertise with cutting-edge technology to deliver solutions that reduce operational costs, increase efficiency, and create sustainable competitive advantages. Every engagement begins with understanding your business — not selling a product.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-6">
              <p className="text-[#A8A29E] leading-relaxed">
                From Fortune 500 enterprises to growth-stage companies, we partner with organizations ready to move beyond manual processes and legacy systems toward intelligent, automated workflows that scale.
              </p>
            </FadeIn>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12 mt-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-bronze/30 transition-colors">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background-light text-bronze">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                    <p className="text-sm text-stone">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Leadership */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-bronze relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4 className="text-xs uppercase tracking-widest text-bronze mb-4 font-semibold">Leadership</h4>
              <p className="text-stone italic text-sm mb-4">
                &quot;We founded ACENEXT Solutions with a singular vision: to bring enterprise-grade data architecture and precision automation to ambitious organizations ready to scale without compromise.&quot;
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <p className="font-bold text-white text-base">Mohammed Akdas Ansari</p>
                  <p className="text-xs text-stone tracking-wide">Co-Founder & Principal Architect</p>
                </div>
                <div>
                  <p className="font-bold text-white text-base">Mohammed Adil Shaikh</p>
                  <p className="text-xs text-stone tracking-wide">Co-Founder & Head of Operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={0.2 + index * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-[#2D2D32]/30 p-8 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-[#FAFAF8] lg:text-5xl">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <p className="mt-2 text-sm text-[#A8A29E]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

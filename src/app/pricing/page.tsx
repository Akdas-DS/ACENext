import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import { PRICING } from '@/lib/constants';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Pricing | ACENEXT Solutions',
  description: 'Transparent engagement tiers for enterprise digital transformation and automation.',
});

export default function PricingPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-background min-h-screen">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Investment"
            heading="Transparent Engagement Models"
            description="Clear pricing structures designed to deliver measurable ROI. No hidden fees. No surprise invoices."
          />

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(450px,_auto)]">
            {PRICING.map((tier, index) => {
              // Bento layout
              let spanClasses = "";
              if (index === 0) spanClasses = "md:col-span-1 lg:col-span-1 md:row-span-1";
              else if (index === 1) spanClasses = "md:col-span-1 lg:col-span-1 md:row-span-1";
              else if (index === 2) spanClasses = "md:col-span-2 lg:col-span-2 md:row-span-1"; // Highlighted tier spans 2 cols
              else if (index === 3) spanClasses = "md:col-span-1 lg:col-span-1 md:row-span-1";

              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col h-full rounded-[2rem] border transition-all duration-500 overflow-hidden group ${
                    tier.highlighted
                      ? 'border-[#F1FEC8]/40 bg-[#1A1A1E]/80 backdrop-blur-xl shadow-2xl shadow-[#F1FEC8]/10 z-10'
                      : 'border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-white/10 hover:bg-white/[0.04]'
                  } p-8 lg:p-10 ${spanClasses}`}
                >
                  {tier.highlighted && (
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial-bronze opacity-10 pointer-events-none rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                  )}

                  {tier.badge && (
                    <span className="inline-flex w-fit rounded-full bg-[#F1FEC8] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white mb-6">
                      {tier.badge}
                    </span>
                  )}

                  <h3 className="text-xl lg:text-2xl font-bold text-[#FAFAF8] mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#FAFAF8]">{tier.priceRange}</span>
                  </div>
                  <p className="text-sm text-[#A8A29E] leading-relaxed mb-8 flex-1">
                    {tier.description}
                  </p>

                  <div className="border-t border-white/5 pt-8 mb-8">
                    <ul className={`grid gap-4 ${tier.highlighted ? 'sm:grid-cols-2' : ''}`}>
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-[#D4C5B2]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F1FEC8]" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-[#F1FEC8] text-white hover:bg-[#6A5740]'
                        : 'border border-white/10 text-[#FAFAF8] hover:bg-[#1A1A1E]'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-20 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-10 text-center flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#FAFAF8] mb-4">Need a Custom Project Scope?</h3>
              <p className="text-[#A8A29E] max-w-2xl mx-auto mb-8">
                We also offer fixed-bid project pricing for clearly defined scopes. Book a discovery call to discuss your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D2D32] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#404046]"
              >
                Book Discovery Call
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}

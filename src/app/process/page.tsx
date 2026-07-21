import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import { PROCESS_STEPS } from '@/lib/constants';

export const metadata = generateMetadata({
  title: 'Our Process | ACENEXT Solutions',
  description: 'Our proven 8-step methodology for predictable, measurable business transformation.',
});

export default function ProcessPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-background min-h-screen">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial-navy opacity-20 pointer-events-none" />
        
        <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Methodology"
            heading="Predictable Execution. Measurable Results."
            description="Transformation shouldn't be chaotic. We use a rigorous 8-step framework to ensure every engagement is delivered on time, on budget, and on target."
            align="center"
          />

          <div className="mt-24 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#2D2D32] before:to-transparent">
            {PROCESS_STEPS.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Icon Marker */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0C0C0E] bg-[#F1FEC8] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="text-sm font-bold">{step.step}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-[#1A1A1E] shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg text-[#FAFAF8]">{step.title}</h3>
                      <span className="text-xs font-bold text-[#F1FEC8] uppercase tracking-wider bg-[#F1FEC8]/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-[#A8A29E] text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div>
                      <h4 className="text-xs font-semibold text-[#FAFAF8] uppercase tracking-wider mb-3">Deliverables:</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-xs text-[#6B6B70]">
                            <div className="mt-1 h-1 w-1 rounded-full bg-[#F1FEC8] shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

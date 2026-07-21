import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import { INDUSTRIES } from '@/lib/constants';

export const metadata = generateMetadata({
  title: 'Industries | ACENEXT Solutions',
  description: 'Specialized technology solutions for healthcare, finance, real estate, manufacturing, and more.',
});

export default function IndustriesPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#FAFAF8] min-h-screen">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Industries"
            heading="Sector-Specific Solutions"
            description="We combine deep technical expertise with nuanced understanding of industry-specific compliance, workflows, and market pressures."
            headingClassName="!text-[#1A1A1E]"
            className="[&_span]:!text-[#F1FEC8] [&_p]:!text-[#6B6B70]"
          />

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            {INDUSTRIES.map((industry, index) => (
              <FadeIn key={industry.id} delay={index * 0.1}>
                <div id={industry.slug} className="scroll-mt-32 rounded-2xl border border-[#E8E4E0] bg-white p-8 lg:p-10 shadow-sm transition-shadow hover:shadow-md">
                  <h2 className="text-2xl font-bold text-[#1A1A1E] mb-4">
                    {industry.name}
                  </h2>
                  <p className="text-[#6B6B70] leading-relaxed mb-8">
                    {industry.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xs font-semibold tracking-wider text-[#F1FEC8] uppercase mb-4">Key Challenges</h3>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#404046]">
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-[#A8A29E] shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-wider text-[#F1FEC8] uppercase mb-4">Our Solutions</h3>
                      <ul className="space-y-3">
                        {industry.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#404046]">
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-[#2D4A3E] shrink-0" />
                            {solution}
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

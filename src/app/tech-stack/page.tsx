import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import { TECH_STACK } from '@/lib/constants';

export const metadata = generateMetadata({
  title: 'Technology Stack | ACENEXT Solutions',
  description: 'The modern, enterprise-grade technologies we use to build scalable solutions.',
});

const categoryLabels: Record<string, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  database: 'Databases',
  devops: 'DevOps & Infrastructure',
  cloud: 'Cloud Platforms',
  analytics: 'Analytics & BI',
  ai: 'AI & Machine Learning',
  automation: 'Automation & Integration',
};

export default function TechStackPage() {
  const categories = Array.from(new Set(TECH_STACK.map((t) => t.category)));

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-background min-h-screen">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Technology Ecosystem"
            heading="Built on Solid Foundations"
            description="We don't chase trends. We build on battle-tested, enterprise-grade technologies that ensure security, scalability, and long-term maintainability."
          />

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            {categories.map((cat, index) => (
              <FadeIn key={cat} delay={index * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-[#1A1A1E] p-8 lg:p-10 h-full">
                  <h2 className="text-sm font-bold tracking-[0.2em] text-[#F1FEC8] uppercase mb-8">
                    {categoryLabels[cat] || cat}
                  </h2>
                  <div className="space-y-6">
                    {TECH_STACK.filter((t) => t.category === cat).map((tech) => (
                      <div key={tech.name} className="group">
                        <h3 className="text-lg font-semibold text-[#FAFAF8] group-hover:text-[#F1FEC8] transition-colors mb-2">
                          {tech.name}
                        </h3>
                        <p className="text-sm text-[#A8A29E] leading-relaxed">
                          {tech.description}
                        </p>
                      </div>
                    ))}
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

import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { CASE_STUDIES } from '@/lib/constants';

export const metadata = generateMetadata({
  title: 'Case Studies | ACENEXT Solutions',
  description: 'Real results from real client engagements. Explore how we engineer measurable business outcomes.',
});

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-background min-h-screen">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Case Studies"
            heading="Measurable Impact"
            description="We don't measure success by deliverables. We measure it by hours saved, errors eliminated, and revenue generated."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(400px,_auto)]">
            {CASE_STUDIES.map((study, index) => {
              // Bento layout logic
              let spanClasses = "";
              if (index === 0) spanClasses = "md:col-span-2 lg:col-span-2 md:row-span-2"; // Featured
              else if (index === 1) spanClasses = "md:col-span-1 lg:col-span-1 md:row-span-1";
              else if (index === 2) spanClasses = "md:col-span-1 lg:col-span-1 md:row-span-1";
              else if (index === 3) spanClasses = "md:col-span-2 lg:col-span-3 md:row-span-1"; // Wide

              return (
                <div key={study.id} id={study.slug} className={`scroll-mt-32 rounded-[2rem] border border-white/5 bg-[#1A1A1E]/40 backdrop-blur-md overflow-hidden group hover:border-[#F1FEC8]/30 hover:bg-[#1A1A1E]/60 transition-all duration-500 flex flex-col ${spanClasses}`}>
                  <div className="p-8 lg:p-10 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[#FAFAF8] uppercase tracking-wider">
                        {study.industry}
                      </span>
                      <span className="text-sm font-medium text-[#F1FEC8]">
                        {study.client}
                      </span>
                    </div>
                    
                    <h2 className={`font-bold text-[#FAFAF8] mb-6 ${index === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'}`}>
                      {study.title}
                    </h2>
                    
                    <div className="space-y-6 mb-8 flex-1">
                      <div>
                        <h3 className="text-xs font-semibold tracking-[0.2em] text-[#F1FEC8] uppercase mb-3">The Challenge</h3>
                        <p className="text-[#A8A29E] leading-relaxed text-sm line-clamp-3 group-hover:line-clamp-none transition-all">{study.challenge}</p>
                      </div>
                      <div className="hidden md:block">
                        <h3 className="text-xs font-semibold tracking-[0.2em] text-[#F1FEC8] uppercase mb-3">The Solution</h3>
                        <p className="text-[#A8A29E] leading-relaxed text-sm line-clamp-3 group-hover:line-clamp-none transition-all">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mt-auto pt-8 border-t border-white/5">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {study.results.slice(0, index === 0 ? 3 : 2).map((result, i) => (
                          <div key={i}>
                            <div className="text-2xl lg:text-3xl font-bold text-[#FAFAF8] mb-1">{result.value}</div>
                            <div className="text-xs font-medium text-[#A8A29E]">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

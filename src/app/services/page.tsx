import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/lib/constants';

export const metadata = generateMetadata({
  title: 'Services | ACENEXT Solutions',
  description: 'Intelligent automation, AI solutions, data infrastructure, and custom software development.',
});

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-background min-h-screen">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our Services"
            heading="End-to-End Digital Transformation"
            description="We deliver comprehensive technology solutions that bridge the gap between strategic vision and operational execution."
          />

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,_auto)]">
            {SERVICES.map((service, index) => {
              // Bento Grid layout logic:
              // 0: Large (2x2)
              // 1: Medium (1x2)
              // 2: Wide (2x1)
              // 3: Normal (1x1)
              let spanClasses = "";
              if (index === 0) spanClasses = "md:col-span-2 md:row-span-2";
              else if (index === 1) spanClasses = "md:col-span-1 md:row-span-2";
              else if (index === 2) spanClasses = "md:col-span-2 lg:col-span-2 md:row-span-1";
              else if (index === 3) spanClasses = "md:col-span-1 lg:col-span-1 md:row-span-1";

              return (
                <div key={service.id} id={service.slug} className={`scroll-mt-32 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 lg:p-10 relative overflow-hidden group hover:border-[#F1FEC8]/30 transition-colors duration-500 flex flex-col justify-between ${spanClasses}`}>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial-bronze opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                  
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-bold tracking-[0.2em] text-[#F1FEC8] uppercase">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#FAFAF8] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[#A8A29E] leading-relaxed text-base lg:text-lg mb-8">
                      {service.description}
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.slice(0, index === 0 ? 6 : 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F1FEC8] shrink-0" />
                          <span className="text-sm text-[#A8A29E] leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, index === 0 ? 6 : 3).map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-[#D4C5B2]">
                          {tech}
                        </span>
                      ))}
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

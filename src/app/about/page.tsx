import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';

export const metadata = generateMetadata({
  title: 'About Us | ACENEXT Solutions',
  description: 'Our mission is to engineer measurable business outcomes through intelligent automation and custom software.',
});

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-background min-h-screen relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial-bronze opacity-30 pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
          <SectionHeading
            eyebrow="Our Story"
            heading="Engineering Operational Excellence"
            description="We are a collective of enterprise architects, data engineers, and process optimization specialists dedicated to transforming how modern businesses operate."
          />

          <div className="mt-20 grid lg:grid-cols-2 gap-16">
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-bold text-[#FAFAF8] mb-6">The Problem We Solve</h3>
              <p className="text-[#A8A29E] leading-relaxed mb-6">
                Most organizations today operate with a patchwork of fragmented systems and manual processes. They invest heavily in software, yet their teams spend hours on data entry, reconciliation, and repetitive tasks. The result is operational bloat, scaled inefficiencies, and a ceiling on growth.
              </p>
              <p className="text-[#A8A29E] leading-relaxed">
                We observed that traditional consulting firms focus on high-level strategy without execution, while development shops build software without understanding the underlying business process. We built ACENEXT to bridge this exact gap.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="rounded-2xl border border-white/10 bg-[#2D2D32]/20 p-8 lg:p-10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-[#FAFAF8] mb-6">Our Core Philosophy</h3>
                <ul className="space-y-6">
                  {[
                    { title: 'Outcomes over Output', desc: 'We don’t measure success by lines of code written, but by hours saved and revenue generated.' },
                    { title: 'Process Before Technology', desc: 'Automating a broken process just creates broken results faster. We fix the architecture first.' },
                    { title: 'Enterprise Rigor, Startup Agility', desc: 'We bring Fortune 500 engineering standards delivered with the speed of a startup.' },
                  ].map((item, i) => (
                    <li key={i}>
                      <h4 className="text-sm font-semibold tracking-wider text-[#F1FEC8] uppercase mb-2">{item.title}</h4>
                      <p className="text-sm text-[#A8A29E] leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

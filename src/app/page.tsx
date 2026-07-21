import { generateMetadata as genMeta } from '@/lib/metadata';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import ProcessSection from '@/components/home/ProcessSection';
import TechSection from '@/components/home/TechSection';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';
import { getReviews } from './actions/reviews';

export const metadata = genMeta({
  title: 'ACENEXT Solutions',
  description: 'Premium enterprise consulting delivering intelligent automation, AI solutions, process optimization, and custom software development.',
});

export default async function HomePage() {
  const reviews = await getReviews();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <TechSection />
      <PricingSection />
      <TestimonialsSection dbReviews={reviews} />
      <FAQSection />
      <ContactSection />
    </>
  );
}

import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import FAQSection from '@/components/home/FAQSection';

export const metadata = generateMetadata({
  title: 'Frequently Asked Questions | ACENEXT Solutions',
  description: 'Answers to common questions about our services, pricing, and process.',
});

export default function FAQPage() {
  return (
    <PageWrapper>
      <div className="pt-20">
        <FAQSection />
      </div>
    </PageWrapper>
  );
}

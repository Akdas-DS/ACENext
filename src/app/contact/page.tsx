import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import ContactSection from '@/components/home/ContactSection';

export const metadata = generateMetadata({
  title: 'Contact Us | ACENEXT Solutions',
  description: 'Start a conversation about your digital transformation goals.',
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="pt-20">
        <ContactSection />
      </div>
    </PageWrapper>
  );
}

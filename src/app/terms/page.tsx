import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = generateMetadata({
  title: 'Terms of Service | ACENEXT Solutions',
  description: 'Terms and conditions for using our website and services.',
});

export default function TermsPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#FAFAF8] min-h-screen">
        <div className="mx-auto max-w-[800px] px-6 lg:px-10">
          <h1 className="text-4xl font-bold text-[#1A1A1E] mb-8">Terms of Service</h1>
          <div className="prose prose-stone max-w-none text-[#404046]">
            <p className="mb-6 text-sm text-[#A8A29E]">Last Updated: January 1, 2026</p>
            
            <p className="mb-6">
              Welcome to {SITE_CONFIG.name}. These terms and conditions outline the rules and regulations for the use of {SITE_CONFIG.name}&apos;s Website, located at {SITE_CONFIG.url}.
            </p>
            <p className="mb-6">
              By accessing this website we assume you accept these terms and conditions. Do not continue to use {SITE_CONFIG.name} if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A1E] mt-10 mb-4">Cookies</h2>
            <p className="mb-6">
              We employ the use of cookies. By accessing {SITE_CONFIG.name}, you agreed to use cookies in agreement with the {SITE_CONFIG.name}&apos;s Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A1E] mt-10 mb-4">License</h2>
            <p className="mb-4">
              Unless otherwise stated, {SITE_CONFIG.name} and/or its licensors own the intellectual property rights for all material on {SITE_CONFIG.name}. All intellectual property rights are reserved. You may access this from {SITE_CONFIG.name} for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="mb-4">You must not:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Republish material from {SITE_CONFIG.name}</li>
              <li>Sell, rent or sub-license material from {SITE_CONFIG.name}</li>
              <li>Reproduce, duplicate or copy material from {SITE_CONFIG.name}</li>
              <li>Redistribute content from {SITE_CONFIG.name}</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1E] mt-10 mb-4">Hyperlinking to our Content</h2>
            <p className="mb-6">
              The following organizations may link to our Website without prior written approval:
              Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

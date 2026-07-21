import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = generateMetadata({
  title: 'Privacy Policy | ACENEXT Solutions',
  description: 'Our privacy practices and policies.',
});

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#FAFAF8] min-h-screen">
        <div className="mx-auto max-w-[800px] px-6 lg:px-10">
          <h1 className="text-4xl font-bold text-[#1A1A1E] mb-8">Privacy Policy</h1>
          <div className="prose prose-stone max-w-none text-[#404046]">
            <p className="mb-6 text-sm text-[#A8A29E]">Last Updated: January 1, 2026</p>
            
            <p className="mb-6">
              At {SITE_CONFIG.name}, accessible from {SITE_CONFIG.url}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {SITE_CONFIG.name} and how we use it.
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A1E] mt-10 mb-4">Information We Collect</h2>
            <p className="mb-6">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p className="mb-6">
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A1E] mt-10 mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A1E] mt-10 mb-4">Log Files</h2>
            <p className="mb-6">
              {SITE_CONFIG.name} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

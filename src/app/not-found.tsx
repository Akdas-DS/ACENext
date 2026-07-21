import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial-bronze opacity-20 pointer-events-none" />
        
        <div className="relative z-10">
          <h1 className="text-[120px] font-bold leading-none tracking-tighter text-[#FAFAF8] lg:text-[180px]">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#FAFAF8] sm:text-4xl">
            Page Not Found
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[#A8A29E] leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </p>
          
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#2D4A3E] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#365A4A] hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}

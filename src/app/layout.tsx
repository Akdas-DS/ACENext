import { fontVariables } from "@/lib/fonts";
import { generateMetadata } from "@/lib/metadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";

import "./globals.css";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-background text-ivory selection:bg-bronze selection:text-ivory antialiased">
        <LoadingScreen />
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <PageWrapper>
            <main className="flex-grow flex flex-col pt-20">
              {children}
            </main>
          </PageWrapper>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

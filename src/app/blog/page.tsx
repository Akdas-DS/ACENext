import { generateMetadata } from '@/lib/metadata';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import { BLOG_POSTS } from '@/lib/constants';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Insights & Blog | ACENEXT Solutions',
  description: 'Expert insights on intelligent automation, AI, and enterprise digital transformation.',
});

export default function BlogPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#FAFAF8] min-h-screen">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Insights"
            heading="Strategic Perspectives"
            description="Our latest thinking on enterprise technology, operational efficiency, and digital transformation."
            headingClassName="!text-[#1A1A1E]"
            className="[&_span]:!text-[#F1FEC8] [&_p]:!text-[#6B6B70]"
          />

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="flex flex-col h-full rounded-2xl border border-[#E8E4E0] bg-white p-8 transition-all hover:border-[#F1FEC8]/30 hover:shadow-xl hover:shadow-[#F1FEC8]/5">
                    <div className="flex items-center gap-4 mb-6 text-xs font-medium uppercase tracking-wider text-[#A8A29E]">
                      <span className="text-[#F1FEC8]">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-[#1A1A1E] mb-4 group-hover:text-[#F1FEC8] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-sm text-[#6B6B70] leading-relaxed mb-8 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#E8E4E0]">
                      <div className="h-10 w-10 rounded-full bg-[#1A1A1E] flex items-center justify-center text-white font-bold text-sm">
                        AO
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1A1A1E]">{post.author.name}</p>
                        <p className="text-xs text-[#A8A29E]">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
